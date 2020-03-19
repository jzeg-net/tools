<?php

$PREG_rules = array(
  'phone_name' => '/^([\u4e00-\u9fa5]{2,16})$/',
  'a_zA_Z4' => '/[a-zA-Z]{1,4}/',
  'imei' => '/^\d{15,17}$/',
  'tel_number' => '/^0319-2(06|08|11)(\d{4})$/',
  'mobile_number' => '/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8-9]))\d{8}$/',
);

//矿区
$regional_array = array(
  'un' => 'unset',
  'dp' => 'dongpang',
  'gq' => 'gequan',
  'xdw' => 'xiandewang',
  'xm' => 'xingmei',
  'xd' => 'xingdong',
  'zc' => 'zhangcun',
);

function filter_validate_options_regexp($regexp_rule_string)
{
  return array(
    'options' => array(
      'regexp' => $regexp_rule_string
    )
  );
}

function table_num_rows($database_table)
{
  global $db;
  $db->connection("number_stored");
  $db->where("NAME", $database_table);
  $query = $db->get("INNODB_TABLESTATS", null, "NUM_ROWS");
//    return $query[0]["NUM_ROWS"] === 0 ? "数据获取失败" : $query[0]["NUM_ROWS"];
  return (!$query[0]["NUM_ROWS"]) ? "数据获取失败" : $query[0]["NUM_ROWS"];
}
