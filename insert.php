<?php 

	$con = mysqli_connect('localhost','wiitracm','os5sP.A]p20Y9H');

	if (!$con) {
	echo 'Not Connected to Server' ;
	}

	if (!mysqli_select_db($con, 'wiitracm_contact')) {
		echo "Database Not Selected ";
	}

	$enquiry = $_POST['enquiry'];
	$name = $_POST['name'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $message = $_POST['message'];

    $sql ="INSERT INTO contact (enquiry,name,email,tel,message) VALUES('$enquiry','$name','$email','$tel','$message')";

    if (!mysqli_query($con,$sql))
     {
    	echo 'Your message is not sent :(';
    }
    else{
    	header("refresh:2; url=loading.php");
    }

    
 ?>