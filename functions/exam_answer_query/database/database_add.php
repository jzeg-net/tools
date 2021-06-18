<?php

require_once dirname(dirname(dirname(__DIR__))) . '/mysqli/mysqli_exam.php';
global $db_exam_answer_query;

try {
  $db_exam_answer_query->connection('add');
} catch (Exception $e) {
  $database_result['error']['getMessage'][] = $e->getMessage();
}
$id = false;
try {
  global $database_data;
  $id = $db_exam_answer_query->insertMulti($database_data['table_name'], $database_data['new_data']);
  $database_result['success'] = 'yes';
} catch (Exception $e) {
  $database_result['error']['getMessage'][] = $e->getMessage();
}

if (!$id) {
  $database_result['success'] = 'no';
  $database_result['data'] = $database_data['new_data'];
  $database_result['error']['errno'] = $db_exam_answer_query->getLastErrno();
  try {
    $database_result['error']['error'] = $db_exam_answer_query->getLastError();
  } catch (Exception $e) {
    $database_result['error']['getMessage'][] = $e->getMessage();
  }
} else {
  $database_result['success'] = 'yes';
}
