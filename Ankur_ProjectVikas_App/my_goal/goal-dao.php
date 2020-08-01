<?php
header("Access-Control-Allow-Origin: *");
require("dbconn.php");

class GoalDao

{


public static function delete_goal($id)
{
$data=array();
try
{
$db = Factory::getConnection();

$statement = $db->prepare("DELETE from goal where id=:id");
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


public static function update_goal($p)
{
$data=array();
try
{
$db = Factory::getConnection();

$statement = $db->prepare("UPDATE goal set 
orphanage_name=:orphanage_name,goal=:goal,duration=:duration where id=:id");
$statement->execute(array(':orphanage_name'=>$p->orphanage_name,
':goal'=>$p->goal,
':duration'=>$p->duration,
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

public static function add_goal($p)
{
$data=array();
try
{
$db = Factory::getConnection();

$statement = $db->prepare("INSERT into goal(
orphanage_name,goal,duration,created_date,customer) 
values(:orphanage_name,:goal,:duration,now(),:customer)");
$statement->execute(array(':orphanage_name'=>$p->orphanage_name,
':goal'=>$p->goal,
':duration'=>$p->duration,
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

public static function get_goal_list($customer)
{
$data=array();
try
{
$db = Factory::getConnection();

$statement = $db->prepare("SELECT id,orphanage_name,goal,duration,
	created_date,customer FROM goal
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