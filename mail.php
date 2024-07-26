<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];

      
      
      if(empty($name) ||empty($visitor_email)) {
          echo "Name and mail are mandatory";
          exit;
      }
    $email_from = 'callabattery@gmail.com';
	$email_subject = "New Form submission";

	$email_body = "You have received a new message from the user $name.\n".
                            "Here is the message:\n $message".

    echo($email_body);
    $to = "callabattery@gmail.com";

    $headers = "From: $email_from \r\n";
    
    $headers = "Reply-To: $visitor_email \r\n";
    
    mail($to,$email_subject,$email_body,$headers);
?>