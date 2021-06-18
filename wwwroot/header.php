<?php
require_once dirname(__FILE__) . '/_head.php';
require_once dirname(__DIR__) . '/class/session/session_tmp.php';
session_init();
set_session();
set_session_cookie('_token', $_SESSION['_token']);
set_session_cookie('logged_in', $_SESSION['logged_in']);
?>
<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport"
        content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <meta name="applicable-device" content="pc,mobile">
  <meta name="renderer" content="webkit">
  <meta name="referrer" content="always">
  <meta http-equiv="Cache-Control" content="no-siteapp">
  <meta http-equiv="Cache-Control" content="no-transform">
  <?php require_once dirname(__FILE__) . '/common/description.php'; ?>
  <?php require_once dirname(__FILE__) . '/common/keywords.php'; ?>
  <title><?php require_once dirname(__FILE__) . '/common/title.php'; ?></title>

  <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon">
  <link rel="stylesheet" href="/static/css/animate.min.css">
  <link rel="stylesheet" href="/static/css/hover.min.css">
  <link rel="stylesheet" href="/static/css/hamburgers.min.css">
  <link rel="stylesheet" href="/static/css/bootstrap.min.css">
  <link rel="stylesheet" href="/static/css/bootstrap-table.min.css">
  <link rel="stylesheet" href="/static/font/css/all.min.css">
  <link rel="stylesheet" href="/static/css/tools.min.css">
  <link rel="stylesheet" href="/static/css/account_form.min.css">
  <link rel="stylesheet" href="/static/css/debug.min.css">

  <noscript>
    <div class="container mx-auto" style="cursor: pointer;">
      <div class="alert alert-danger shadow btn-outline-danger text-center font-weight-bold h4">
        <p></p>
        <p>您当前的浏览器没有开启 JavaScript 功能</p>
        <p>将会影响您正常使用本网站提供的工具</p>
        <p>如您需要正常访问本站，请开启 JavaScript 功能</p>
      </div>
    </div>
  </noscript>

  <?php require_once dirname(__DIR__) . '/googleAnalytics/gtag_js.php'; ?>
  <script src="/static/js/fundebug.min.js"></script>
</head>
<body>
<div id="body" class="user-select-none" hidden>
  <?php require_once dirname(__FILE__) . '/member/account_form/modal_sign.php'; ?>
  <div class="bg-white transition_property-transform transition_timing-ease_in transition_duration-05s" id="jt_header">
    <?php include_once dirname(__FILE__) . '/header_nav.php'; ?>
    <div class="border-bottom"></div>
  </div>
  <div id="jt_content">
