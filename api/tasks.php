<?php
$data_path = __DIR__'/../database/tasks.json';
$data = file_get_contents($data_path);
$tasks = json_decode($data, true);
header ('Content-Type: application/json');

echo json_encode($tasks);
?>