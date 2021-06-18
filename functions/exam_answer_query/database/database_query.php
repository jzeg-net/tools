<?php
require_once dirname(dirname(dirname(__DIR__))) . '/mysqli/mysqli_exam.php';
global $db_exam_answer_query, $database_data;

try {
  $db_exam_answer_query->connection('query');
} catch (Exception $e) {
  die($e->getMessage());
}

$query_key = $database_data['query_key'];
$result_columns = $database_data['result_columns'];

$db_exam_answer_query->Where("category", $database_data['where']['category']);

$db_exam_answer_query->orHaving("text", "%$query_key%", 'LIKE');

try {
  $query_result = $db_exam_answer_query->get($database_data['table_name'], null, $result_columns);
} catch (Exception $e) {
  die($e->getMessage());
}
