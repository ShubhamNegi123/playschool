<?php
$to = "wallcommunication@gmail.com";
$name = $_REQUEST['name'] ;
$phone = $_REQUEST['phone'] ;
$email = $_REQUEST['email'] ;
$message = $_REQUEST['message'] ;
$subject = "Message from: $name";
$headers = "wallcommunication@gmail.com";
$body = "From: $name \n\n Email: $email \n\n Phone: $phone \n\n  
message: $message \n\n ";
$sent = mail($to, $subject, $body) ;
if($sent)
{echo "<script language=javascript>window.location = '../../index.html;</script>";}
else
{echo "<script language=javascript>window.location = '../../index.html;</script>";}

 $retrieval = mail ($to,$subject,$message,$header);
 if( $retrieval == true ) {
            echo "Message sent successfully...";
    }else {
        echo "Message could not be sent...";
         }

?>
