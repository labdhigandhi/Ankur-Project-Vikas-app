<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
require("note-dao.php");


$id=$_GET["id"];
$result=NoteDao::delete_note($id);
echo json_encode($result);
?>