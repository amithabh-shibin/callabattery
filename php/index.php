<?php
error_reporting(0);
if(isset($_POST['submit']))
{
	$date = date('d/m/Y');
	$time = date('H:i:s');
	
	//form data
	$name = $_POST['name'];	
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];
				$to ='help@callabattery.ae,info@macherintl.com';
				$MESSAGE="<p>You have recieved a new message from the enquiries form on your website.<br>index.php</p>
					  <p><strong>Name: </strong> $name </p>
					  <p><strong>Email Address: </strong> $email </p>
					  <p><strong>Subject: </strong> $subject </p>
					  <p><strong>Message: </strong> $message </p>
					  <p>This message was sent from the IP Address: $ipaddress on $date at $time</p>";
				$subject="New Enquiryfrom $name ";

	
		$headers = "From: Callabattery.ae <help@callabattery.ae> \r\nReply-To: help@callabattery.ae\r\n";
		$headers.= "MIME-Version: 1.0\r\n";
		$headers.= "Content-type: text/html; charset=iso-8859-1\r\n";

		if(mail($to, $subject, $MESSAGE, $headers))
			{
				$status="Message Send Succesfully !!";
			}
		else
			{
				$status="Message Sending Failed. Pease Retry.";
				
			}
}
?>