<?php
require_once dirname(dirname(__DIR__)) . '/config/env.php';

$site_name = $_ENV['SITE_NAME'];
$titleText = '';

if (defined('title')) {
  if (!empty(title)) $titleText = title . ' - ';
  if (empty(title)) $titleText = '';
}

echo $titleText . $site_name;
