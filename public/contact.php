<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// contact-config.php is NOT committed to git — upload it once directly to
// your host alongside this file. See contact-config.example.php for the
// format. Falls back to real server environment variables if present.
$configPath = __DIR__ . '/contact-config.php';
if (file_exists($configPath)) {
    require $configPath;
}
$apiKey = defined('RESEND_API_KEY') ? RESEND_API_KEY : getenv('RESEND_API_KEY');
$toEmailsRaw = defined('CONTACT_TO_EMAILS') ? CONTACT_TO_EMAILS : getenv('CONTACT_TO_EMAILS');

if (!$apiKey || !$toEmailsRaw) {
    error_log('contact.php is missing RESEND_API_KEY or CONTACT_TO_EMAILS configuration.');
    http_response_code(500);
    echo json_encode(['error' => 'Server is not configured to send email.']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
if (!is_array($input)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid request body.']);
    exit;
}

$name = trim((string) ($input['name'] ?? ''));
$phone = trim((string) ($input['phone'] ?? ''));
$email = trim((string) ($input['email'] ?? ''));
$serviceArea = trim((string) ($input['serviceArea'] ?? ''));
$message = trim((string) ($input['message'] ?? ''));

if (!$name || !$phone || !$email || !$serviceArea || !$message) {
    http_response_code(400);
    echo json_encode(['error' => 'All fields are required.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Please provide a valid email address.']);
    exit;
}

function esc(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

$toList = array_values(array_filter(array_map('trim', explode(',', $toEmailsRaw))));

$payload = json_encode([
    'from' => '360 Exterior Group Website <quotes@360exterior.ca>',
    'to' => $toList,
    'reply_to' => $email,
    'subject' => 'New Quote Request from ' . $name,
    'html' => '<h2>New Free Quote Request</h2>'
        . '<p><strong>Name:</strong> ' . esc($name) . '</p>'
        . '<p><strong>Phone:</strong> ' . esc($phone) . '</p>'
        . '<p><strong>Email:</strong> ' . esc($email) . '</p>'
        . '<p><strong>Service Area:</strong> ' . esc($serviceArea) . '</p>'
        . '<p><strong>Message:</strong></p><p>' . nl2br(esc($message)) . '</p>',
]);

$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
    CURLOPT_POST => true,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_HTTPHEADER => [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json',
    ],
    CURLOPT_POSTFIELDS => $payload,
    CURLOPT_TIMEOUT => 15,
]);
$response = curl_exec($ch);
$statusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
$curlError = curl_error($ch);
curl_close($ch);

if ($curlError || $statusCode >= 400) {
    error_log('Resend error (' . $statusCode . '): ' . $curlError . ' | ' . $response);
    http_response_code(502);
    echo json_encode(['error' => 'Failed to send email.']);
    exit;
}

echo json_encode(['success' => true]);
