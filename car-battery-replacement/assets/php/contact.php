<?php
// Check for empty fields
if (
	empty($_POST['fullname'])        ||
	empty($_POST['phone'])       ||
	empty($_POST['service'])
) {
	echo '<div class="alert alert-danger" role="alert">Error: Invalid Arguments</div>';
	return false;
}

// ADD your Email and Name
$recipientEmail = 'help@callabattery.ae';

$senderName = $_POST['fullname'];
$senderPhone = $_POST['phone'];
$service = $_POST['service'];
$senderSubject = 'Appointment request from' . $senderName;

$email_body = "You have received a new message from your website appointment request form.\n\n" . "Here are the details:\n\nName: $senderName\n\nPhone: $senderPhone\n\nService Requested:\n$service";
$headers = "From: formsubmit@callabattery.ae\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $recipientEmail";
mail($recipientEmail, $senderSubject, $email_body, $headers);
echo '<div class="alert alert-success" role="alert">Thank you. We will contact you shortly.</div>';
return true;
