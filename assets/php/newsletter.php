<?php
$to = "wallcommunication@gmail.com";
$email = $_REQUEST['email'] ;
$subject = "Message from: $email";
$headers = "wallcommunication@gmail.com";
$body = "\n\n Email: $email \n\n  "
$sent = mail($to, $subject, $body) ;
if($sent)
{echo "<script language=javascript>window.location = '../../index.html;</script>";}
else
{echo "<script language=javascript>window.location = '../../index.html;</script>";}

 $retrieval = mail ($to,$subject,$header);
 if( $retrieval == true ) {
            echo "Message sent successfully...";
    }else {
        echo "Message could not be sent...";
         }

?>
