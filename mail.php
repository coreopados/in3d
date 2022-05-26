<?php

// $mail_to = $_POST['send_to'];
$mail_to = "webcodtest@gmail.com";

if($name = trim(htmlspecialchars($_POST['name']))){
$message .= 
'От '.$name;}

if($email = trim(htmlspecialchars($_POST['email']))){
$message .=
'
E-mail: ' .$email;}

if($company = trim(htmlspecialchars($_POST['company']))){
$message .=
'
Company: ' .$company;}

if($text_message = trim(htmlspecialchars($_POST['message']))){
$message .=
'
Text: ' .$text_message;}

$message = wordwrap($message, 70, "\r\n");

if (mail($mail_to, 'Сообщение от in3d', $message)){
    echo json_encode('ok');
}else{
    echo json_encode('err');
}

?>