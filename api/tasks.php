<?php
$tasks = ["leggere il libro", "pulire casa", "mangiare un gelato"];

header ('Content-Type: application/json');

echo json_encode($tasks;)