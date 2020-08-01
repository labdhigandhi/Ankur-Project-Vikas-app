<?php
header("Access-Control-Allow-Origin: *");
require("dbconn.php");

class NoteDao

{


public static function delete_note($id)
{
$data=array();
try
{
$db = Factory::getConnection();

$statement = $db->prepare("DELETE from diary where id=:id");
$statement->execute(array(
':id'=>$id));

if ($statement->rowCount()){
    $data["status"]=1;
  } else{
    $data["status"]=0;
  }

$statement=null;
  }
  catch (PDOException $e) {
    print $e->getMessage();
  }
  
  return $data;
}


public static function update_note($p)
{
$data=array();
try
{
$db = Factory::getConnection();

$statement = $db->prepare("UPDATE diary set 
title=:title,note=:note where id=:id");
$statement->execute(array(
':title'=>$p->title,
':note'=>$p->note,
':id'=>$p->id));

if ($statement->rowCount()){
    $data["status"]=1;
  } else{
    $data["status"]=0;
  }

$statement=null;
  }
  catch (PDOException $e) {
    print $e->getMessage();
  }
  
  return $data;
}

public static function add_note($p)
{
$data=array();
try
{
$db = Factory::getConnection();

$statement = $db->prepare("INSERT into diary(
title,note,created_date,customer) 
values(:title,:note,now(),:customer)");
$statement->execute(array(
':title'=>$p->title,
':note'=>$p->note,
':customer'=>$p->customer
));

if ($statement->rowCount()){
    $data["status"]=1;
  } else{
    $data["status"]=0;
  }

$statement=null;
  }
  catch (PDOException $e) {
    print $e->getMessage();
  }
  
  return $data;
}


//get goal data list

public static function get_note_list($customer)
{
$data=array();
try
{
$db = Factory::getConnection();

$statement = $db->prepare("SELECT id,title,note,
	created_date,customer FROM diary
	where customer=:customer order by id desc ");
$statement->execute(array(
':customer'=>$customer));
$data=$statement->fetchAll(PDO::FETCH_ASSOC);

$statement=null;
  }
  catch (PDOException $e) {
    print $e->getMessage();
  }
  
  return $data;
}

}
?>