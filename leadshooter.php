<?php
        require_once '../../payment/config.php'; 
        use PHPMailer\PHPMailer\PHPMailer;
        use PHPMailer\PHPMailer\SMTP;
        use PHPMailer\PHPMailer\Exception;
        use PHPMailer\PHPMailer\OAuth;
        use PHPMailer\PHPMailer\POP3;

        require '../../payment/PHPMailer/src/Exception.php';
        require '../../payment/PHPMailer/src/PHPMailer.php';
        require '../../payment/PHPMailer/src/SMTP.php';
        require '../../payment/PHPMailer/src/OAuth.php';
        require '../../payment/PHPMailer/src/POP3.php';
        
        $mail = new PHPMailer();
        $to = 'sales@thebookpublisherllc.com';
        $sale_mail= "sales@thebookpublisherllc.com";
        $from = ('The Book Publisher LLC');
        $mail->IsSMTP($from, $to);
        $mail->CharSet="UTF-8";
        $mail->SMTPSecure = 'tls';
        $mail->Host = 'thebookpublisherllc.com';
        $mail->Port = 587;
        $mail->Username = 'sales@thebookpublisherllc.com';
        $mail->Password = 'sherllc@336';
        $mail->SMTPAuth = true;
        $mail->IsHTML(true);
        $mail->setFrom ($sale_mail, $from, $to);
        $mail->AddAddress($to);
        $mail->addcc($sale_mail); 
        $mail->Subject = "Lead From info@thebookpublisherllc.com";
        
        if(empty($_POST))
        {
            header("Location: https://thebookpublisherllc.com/");
            die();
        }
        
        if(!empty($_POST['email_new']) || !empty($_POST['email']))
        {
            $email = !empty($_POST["email"])?$_POST["email"]:$_POST["email_new"];
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
              echo 1;die;
            }
        } else { echo 1;die; }
        // if(!empty($_POST['example1']) || !empty($_POST['example1'])) { } else { echo 4;die; }
        if(!empty($_POST['phone']) || !empty($_POST['phone_new'])) { } else { echo 2;die; }
        if(!empty($_POST['name']) || !empty($_POST['name_new'])) { } else { echo 3;die; }
        
        
        
        $msg = "";
            $mail->Body = '<html><style>table, th, td {
			  border: 1px solid black;
			  border-collapse: collapse;
			}
			th {
			    font-size: 14px;
			    padding:5px 10px 5px 2px;
			}
			td{
			    padding:5px 10px 5px 2px;
			}
			</style><body><div></div><h2>Lead Details:</h2>';
            $mail->Body .= '<table style="text-align:left; border: 1px solid black; border-collapse: collapse;">';
            $mail->Body .= '<tbody>';
            foreach($_POST as $key => $value)
            {
                $mail->Body .= '<tr><th style="font-size: 14px; padding:5px 10px 5px 2px; border: 1px solid black; border-collapse: collapse;">'.ucwords(str_replace("_"," ",$key)).':</th><td style="padding:5px 10px 5px 2px; border: 1px solid black; border-collapse: collapse;">'.$value.'</td></tr>';
            }
            
            $mail->Body .= '</tbody></table><br>';
            
         if($mail->Send()){
             $mail->Body .= '</body></html>';
                echo "https://thebookpublisherllc.com/lp/publishing-author/thankyou.php";
        }

?>