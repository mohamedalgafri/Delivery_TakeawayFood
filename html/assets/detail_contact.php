<?php

if(!$_POST) exit;

// Email verification, do not edit.
function isEmail($email_detail_contact ) {
	return(preg_match("/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/",$email_detail_contact ));
}

if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");
$restaurant_name    = $_POST['restaurant_name'];
$name_detail_contact     = $_POST['name_detail_contact'];
$email_detail_contact    = $_POST['email_detail_contact'];
$telephone_detail_contact = $_POST['telephone_detail_contact'];
$message_detail   = $_POST['message_detail'];

if(trim($name_detail_contact) == '') {
	echo '<div class="error_message">You must enter your Name.</div>';
	exit();
} else if(trim($email_detail_contact) == '') {
	echo '<div class="error_message">Please enter a valid email address.</div>';
	exit();
} else if(!isEmail($email_detail_contact)) {
	echo '<div class="error_message">You have enter an invalid e-mail address, try again.</div>';
	exit();
} else if(trim($telephone_detail_contact) == '') {
	echo '<div class="error_message">Please enter a valid phone number.</div>';
	exit();
} else if(!is_numeric($telephone_detail_contact)) {
	echo '<div class="error_message">Phone number can only contain numbers.</div>';
	exit();
} else if(trim($message_detail) == '') {
	echo '<div class="error_message">Please enter your message.</div>';
	exit();
}

//$address = "HERE your email address";
$address = "info@domain.com";


// Below the subject of the email
$e_subject = 'You\'ve been contacted by ' . $name_detail_contact . '.';

// You can change this if you feel that you need to.
$e_body = "You have been contacted by $name_detail_contact with additional message is as follows for the Restaurant $restaurant_name." . PHP_EOL . PHP_EOL;
$e_content = "\"$message_detail\"" . PHP_EOL . PHP_EOL;
$e_reply = "You can contact $name_detail_contact via email at $email_detail_contact or telephone $telephone_detail_contact";

$msg = wordwrap( $e_body . $e_content . $e_reply, 70 );

$headers = "From: $email_detail_contact" . PHP_EOL;
$headers .= "Reply-To: $email_detail_contact" . PHP_EOL;
$headers .= "MIME-Version: 1.0" . PHP_EOL;
$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

$user = "$email_detail_contact";
$usersubject = "Thank You";
$userheaders = "From: info@fooyes.com\n";
$usermessage = "Thank you for contact Restaurant $restaurant_name. We will reply shortly!";
mail($user,$usersubject,$usermessage,$userheaders);

if(mail($address, $e_subject, $msg, $headers)) {

	// Success message
	echo "<div id='success_page' style='padding:25px 0; text-align:center;'>";
	echo "<h4>Email Sent!</h4>";
	echo "Thank you <strong>$name_detail_contact</strong>,<br> your message has been submitted. We will contact you shortly.";
	echo "</div>";

} else {

	echo 'ERROR!';

}
