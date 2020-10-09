<?php
#Receive user input
$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$feedback = $_POST['feedback'];

#Filter user input
function filter_email_header($form_field) {  
    return preg_replace('/[nr|!/<>^$%*&]+/','',$form_field);
}

$email  = filter_email_header($email);

#Send email
$headers = "From: $email";
$sent = mail('piconap747@deselling.com', 'Feedback Form Alcostock', $feedback, $headers);

#Thank user or notify them of a problem
if ($sent) {

?><html>

<head>
    <title>Thank You</title>
</head>

<body>
    <h1>Thank You</h1>
    <p>Thank you for your feedback.</p>
</body>

</html>

<?php
    
    } else {
?><html>

<head>
    <title>Something went wrong</title>
</head>

<body>
    <h1>Something went wrong</h1>
    <p>We could not send your feedback. Please try again.</p>
</body>

</html>
<?php
    }
?>