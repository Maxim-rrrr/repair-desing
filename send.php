<?php


$userName = $_POST['userName'];
$userEmail = $_POST['userEmail'];
$userPhone = $_POST['userPhone'];
$userQuestion = $_POST['userQuestion'];

// Load Composer's autoloader
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  //Server settings
  $mail->SMTPDebug = 0;                                       // Enable verbose debug output
  $mail->isSMTP();                                            // Send using SMTP
  $mail->Host       = "smtp.gmail.com";                        // Set the SMTP server to send through
  $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
  $mail->Username   = 'aspirine20017270@gmail.com';           // SMTP username
  $mail->Password   = 'maxi7270';                             // SMTP password
  $mail->SMTPSecure = 'PHPMailer::ENCRYPTION_STARTTLS';                                  // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
  $mail->Port       = 465;                                    // TCP port to connect to

  //Recipients
  $mail->setFrom('aspirine20017270@gmail.com', 'repair-desing');
  $mail->addAddress('kewin.rrrr@gmail.com');                  // Add a recipient

  // Content
  $mail->CharSet = "UTF-8";
  $mail->isHTML(true);                                        // Set email format to HTML
  $mail->Subject = "Новое сообщение repair-dasing";
  $mail->Body    = "Имя пользователя: ${userName}<br>
                    Телефон: ${userPhone}<br>
                    Почта: ${userEmail}<br>
                    Вопрос: ${userQuestion}";

  if ($mail->send()) {
    echo "Ok";
  } else {
    echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
  }
} catch (Exception $e) {
  echo "Письмо не отправлено, есть ошибка. Код ошибки: {$mail->ErrorInfo}";
}
