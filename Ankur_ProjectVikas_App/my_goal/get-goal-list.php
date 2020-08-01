<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
require("goal-dao.php");


$customer="Raja";
$result=GoalDao::get_goal_list($customer);
echo json_encode($result);
?>