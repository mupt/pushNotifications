<?php
	$decoded = base64_decode($_POST['json']);
	$jsonFile = fopen('data.json','w+');
	fwrite($jsonFile,$decoded);
	fclose($jsonFile);
?>