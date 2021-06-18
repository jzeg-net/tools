<?php

function custom_header_404($Context = 'No input file specified.')
{
  header('HTTP/1.1 404 Not Found');
  exit($Context);
}

/**
 * 获取服务器的站点域名
 * @return string
 *
 * @throws InvalidArgumentException
 */
function getWebsiteURL()
{
  $REQUEST_SCHEME = $_SERVER['REQUEST_SCHEME'];
  $SERVER_NAME = $_SERVER['SERVER_NAME'];
  $HTTP_HOST = $_SERVER['HTTP_HOST'];

  if ($SERVER_NAME !== $HTTP_HOST) throw new InvalidArgumentException("获取服务器的站点域名出错");

  $domain = $HTTP_HOST;

  return $REQUEST_SCHEME . '://' . $domain . '/';
}
