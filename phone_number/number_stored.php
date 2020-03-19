<?php
if (filter_input(INPUT_POST, "number_stored")) {
  require_once dirname(__DIR__) . "/mysqli/mysqli.php";
  require_once dirname(__FILE__) . "/phone_number_common.php";
  $result = table_num_rows("jzeg_tools/phone_number");
  echo $result;
}
