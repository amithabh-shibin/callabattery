<?
require("class.phpmailer.php");


	//form validation vars
	$formok = true;
	$errors = array();
	
	//sumbission data
	$ipaddress = $_SERVER['REMOTE_ADDR'];
	$date = date('d/m/Y');
	$time = date('H:i:s');
	
	//form data
	$name = $_POST['name'];	
	$email = $_POST['email'];
	$phone = $_POST['phno'];
	$message = $_POST['message'];


$mail = new PHPMailer();

$mail->IsSMTP();                                 				 // send via SMTP - mail or smtp.domain.com
$mail->Host     = "mail.domain.com"; 							 // SMTP servers
$mail->SMTPAuth = true;    										 // turn on SMTP authentication
$mail->Username = "noreply@domain.com"; 						 // SMTP username
$mail->Password = "passowrd";									 // SMTP password

$mail->From     = "noreply@domain.com";							 // SMTP username
$mail->AddAddress("your@domain.com");					  		 // Your Adress
$mail->IsHTML(true);  
$mail->CharSet = 'UTF-8';
$date = date('d/m/Y');
$time = date('H:i:s');

//form data
$name = $_POST['name'];	
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$to ='help@callabattery.ae,info@macherintl.com';
$MESSAGE="<p>You have recieved a new message from the enquiries form on your website.</p>
	  <p><strong>Name: </strong> $name </p>
	  <p><strong>Email Address: </strong> $email </p>
	  <p><strong>Phone number: </strong> $phone  </p>
	  <p><strong>Message: </strong> $message </p>
	  <p>This message was sent from the IP Address: $ipaddress on $date at $time</p>";
$subject="New Enquiry";


$headers = "From: Callabattery.ae <help@callabattery.ae> \r\nReply-To: help@callabattery.ae\r\n";
$headers.= "MIME-Version: 1.0\r\n";
$headers.= "Content-type: text/html; charset=iso-8859-1\r\n";
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
if(!$mail->Send())
{
	echo "Mail Not Sent <p>". $mail->Body;
   echo "Mailer Error: " . $mail->ErrorInfo;
   exit;
}

echo "Mail Sent";


?>
