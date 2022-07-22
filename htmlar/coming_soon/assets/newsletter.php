<?php

if(!$_POST) exit;

// Email verification, do not edit.
function isEmail($email_newsletter ) {
	return(preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/",$email_newsletter ));
}

if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$email_newsletter    = $_POST['email_newsletter'];

if(trim($email_newsletter) == '') {
	echo '<div class="error_message"><i class="icon-warning-sign"></i>Please enter a valid email address.</div>';
	exit();
}
//$address = "your email address";
$address = "test@domain.com";

// Below the subject of the email
$e_subject = 'New subscription request';

// You can change this if you feel that you need to.
$e_body = " $email_newsletter wont to subscribe to the newsletter" . PHP_EOL . PHP_EOL;
$e_content = "\"$email_newsletter\"" . PHP_EOL . PHP_EOL;

$msg = wordwrap( $e_body . $e_content, 70 );

$headers = "From" . PHP_EOL;
$headers = "Reply-To" . PHP_EOL;
$headers = "MIME-Version: 1.0" . PHP_EOL;
$headers = "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$headers = "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

if(mail($address, $e_subject, $msg, $headers)) {

	// Success message
	echo "<div id='success_page'>";
	echo "Thank you <strong>$email_newsletter</strong>, your subscription submitted.";
	echo "</div>";

} else {

	echo 'ERROR!';

}