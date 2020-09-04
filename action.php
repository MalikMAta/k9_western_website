<?php
if(
isset($_POST['name']) && 
isset($_POST['email']) && 
isset($_POST['phone']) && 
isset($_POST['message']) ){

    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $phone = $_POST['phone'];

    $to ="malikmission@gmail.com";
    $from = $email;
    $subject = 'Western K9';
    $message = '<br>Name'.$name.'<br>Phone'.$phone.'<br><br>Email:<br>'.$email.'<p>'.$message.'</p>';
    $headers = "From: $from\n";
    $headers .= "MIMI-Version 1.0 \n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\n";

    if (mail($to, $subject, $message, $headers )){
        echo"success";
    }else{
            echo "The server failed to send the message. Please send email to  malikmission@gmail.com. ";
        }
    
}



?>