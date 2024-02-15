<?php
header('Access-Control-Allow-Origin: *');


function RemoveSpecialChar($str) {
    $res = str_replace( array( '\'', '"',
      ',' , ';', '<', '>', '`', '$', '&', 'alert', 'function', 'header' ), ' ', $str);
    return $res;
}

if($_POST['agree'] && $_POST['useremail'] && $_POST['username'] && $_POST['usertext']) {
    $agree = RemoveSpecialChar(trim($_POST['agree']));
    $useremail = RemoveSpecialChar(trim($_POST['useremail']));
    $username = RemoveSpecialChar(trim($_POST['username']));
    $usertext = RemoveSpecialChar(trim($_POST['usertext']));
    
    
    if($agree === 'true') {
        $message = "Имя: ".$username."<br>
                    Email: ".$useremail."<br>
                    Сообщение: ".$usertext."<br>";
    
    
        $to = 'makarov.t.t@yandex.ru';
        $from = 'info@меценат-н.ru';
        // тема письма
        $subject = 'Обратная связь с сайта благотворительного фонда';
        // Для отправки HTML-письма должен быть установлен заголовок Content-type
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=utf-8' . "";
        $headers .= 'From: Благотворительный фонд «Меценат-Н» <info@меценат-н.ru>' . "\r\n";
        
        
        $sendEmail = mail($to, $subject, $message, $headers);
        if($sendEmail) {
            echo 3;
        } else {
            echo 2;
        }
    } else {
        echo 1;
    }
} else {
    echo 0;
}
?>