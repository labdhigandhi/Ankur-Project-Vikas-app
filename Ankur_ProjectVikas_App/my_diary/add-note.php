<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
require("note-dao.php");


$p=new stdClass();
$p->title=$_GET["title"];
$p->note=$_GET["note"];
$p->customer="Raja";

$result=NoteDao::add_note($p);
echo json_encode($result);
?>