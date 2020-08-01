<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
require("goal-dao.php");


$p=new stdClass();
$p->orphanage_name=$_GET["orphanage_name"];
$p->goal=$_GET["goal"];
$p->duration=$_GET["duration"];
$p->customer="Raja";

$result=GoalDao::add_goal($p);
echo json_encode($result);
?>