<?php

if (isset($_POST["name"]) && isset($_POST["phone"]) ) { 

	// Формируем массив для JSON ответа
    $result = array(
    	'name' => $_POST["name"],
    	'phonenumber' => $_POST["phone"]
    ); 
	$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
    $headers .= "From: Отправитель <alesandr@a0254072.xsph.ru>\r\n"; 
    $message="Hello";
	$to='graviella@mail.ru';
	$subject='Blanchard';
    mail($to, $subject, $message, $headers);
    // Переводим массив в JSON
    echo json_encode($result); 
}

?>