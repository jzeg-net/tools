<?php
require_once dirname(__DIR__) . "/config/env_exam.php";

$db_exam_answer_query = new MysqliDb();
$db_exam_answer_query_addConnection_params = array(
  'host' => $_ENV['EXAM_ANSWER_QUERY_DB_HOST'],
  'username' => $_ENV['EXAM_ANSWER_QUERY_DB_USERNAME'],
  'password' => $_ENV['EXAM_ANSWER_QUERY_DB_PASSWORD'],
  'db' => $_ENV['EXAM_ANSWER_QUERY_DB_DATABASE_NAME'],
//        'port' => 3306,
//        'prefix' => '',
//        'charset' => 'utf8'
);
$db_exam_answer_query->addConnection("add", $db_exam_answer_query_addConnection_params);
$db_exam_answer_query->addConnection("delete", $db_exam_answer_query_addConnection_params);
$db_exam_answer_query->addConnection("update", $db_exam_answer_query_addConnection_params);
$db_exam_answer_query->addConnection("query", $db_exam_answer_query_addConnection_params);
