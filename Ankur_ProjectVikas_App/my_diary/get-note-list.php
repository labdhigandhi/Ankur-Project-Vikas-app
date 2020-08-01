<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
require("note-dao.php");


$customer="Raja";
$result=NoteDao::get_note_list($customer);
echo json_encode($result);
?>