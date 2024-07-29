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
	$email = $_POST['email'];


$mail = new PHPMailer();

$mail->IsSMTP();                                 				 // send via SMTP - mail or smtp.domain.com
$mail->Host     = "mail.domain.com"; 							 // SMTP servers
$mail->SMTPAuth = true;    										 // turn on SMTP authentication
$mail->Username = "noreply@domain.com"; 						 // SMTP username
$mail->Password = "last12STOP:";								 // SMTP password

$mail->From     = "noreply@domain.com";							 // SMTP username
$mail->AddAddress("your@domain.com");			  				 // Your Adress
$mail->Subject  =  "Newsletter mail from Wisten !";
$mail->IsHTML(true);  
$mail->CharSet = 'UTF-8';
$mail->Body     =  "<p>You have recieved a new Newsletter from the enquiries form on your website.</p>
					  <p><strong>Email Address: </strong> {$email} </p>
					  <p>This message was sent from the IP Address: {$ipaddress} on {$date} at {$time}</p>";

if(!$mail->Send())
{
   echo "Mail Not Sent <p>";
   echo "Mailer Error: " . $mail->ErrorInfo;
   exit;
}

echo "Mail Sent";


?>
