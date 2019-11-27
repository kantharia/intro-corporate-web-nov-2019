<?php

header('content-type: application/json');

	$o = new stdClass();
	$o->status = 'success';
	echo json_encode($o);

	$email_to = "myemail@email.com"; // Write your email here to receive the email addresses submitted
    $subject = 'New subscriber from PHLY'; // Write the subject you'll see in your inbox

	$email = $_POST["email"];
	$text = "Congratulations ! A new person wants to be alerted when your site will be online: $email";

	$headers = "MIME-Version: 1.0" . "\r\n"; 
	$headers .= "Content-type:text/html; charset=utf-8" . "\r\n";
    $headers .= 'From: PHLY Template <noreply@yourdomain.com>' . "\r\n"; // As an example, the 'From' address should be set to something like 'noreply@yourdomain.com' in order to be based on the same domain as the form.

	mail($email_to, $subject, $text, $headers);

?>
