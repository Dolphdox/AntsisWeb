<?php
	if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['broad'])){
		$name = $_POST['name'];
		$email = $_POST['email'];
		$broad = $_POST['broad'];
		$dataArray = array("name"=>$name,"email"=>$email,"broad"=>$broad);
		$jsonStr = json_encode($dataArray);
		echo $jsonStr;
	}else {
		echo '错误';
	}
?>