<?php
$_POST = json_decode(file_get_contents("php://input"), true); //decode JSON for php-script
echo var_dump($_POST);