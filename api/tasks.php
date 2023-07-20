<?php
$data_path = __DIR__ . '/../database/tasks.json';
$data = file_get_contents($data_path);
$tasks = json_decode($data, true);

$new_task = $_POST['task'] ?? null;
if($new_task){
  $tasks [] = $new_task;
 $json_task = json_encode($tasks);
 file_put_content($data_path,$json_task);
 header ('Content-Type: application/json');
 echo $new_task;
};
header ('Content-Type: application/json');

echo json_encode($tasks);
?>