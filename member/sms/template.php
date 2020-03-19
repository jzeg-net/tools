<?php
$template_json = array(
  //友情提示
  'notice' => array(
    'templateCode' => 'SMS_185811365',
    'templateParam' => array(
      'name' => '',
      'content' => '',
    ),
    'template' => '${name}您好，友情提示您，${content}',
  ),
  //找回用户信息
  'forget_user_info' => array(
    'templateCode' => 'SMS_185845664',
    'templateParam' => array(
      'name' => '',
      'user_name' => '',
      'user_password' => '',
    ),
    'template' => '尊敬的${name},您当前的用户名是${user_name}，密码是${user_password}',
  ),
  //找回用户名
  'forget_user_name' => array(
    'templateCode' => 'SMS_185820674',
    'templateParam' => array(
      'user_name' => '',
    ),
    'template' => '您的用户名是${user_name}',
  ),
  //重置密码
  'forget_user_password' => array(
    'templateCode' => 'SMS_185820662',
    'templateParam' => array(
      'user_password' => '',
    ),
    'template' => '您的密码已经被重置，新的密码是${user_password}',
  ),
  //验证码-注册
  'user_register' => array(
    'templateCode' => 'SMS_185810637',
    'templateParam' => array(
      'code' => '',
    ),
    'template' => '您的验证码：${code}，正在注册新账号，本条验证码5分钟后失效，如不是号码本人操作，请忽略即可，可不敢告诉别人呐！',
  ),
  //验证码-登录
  'user_login' => array(
    'templateCode' => 'SMS_185845933',
    'templateParam' => array(
      'code' => '',
    ),
    'template' => '您的验证码：${code}，正在登录账号，本条验证码5分钟后失效，如不是号码本人操作，请忽略即可，可不敢告诉别人呐！',
  ),
  //验证码-修改密码
  'change_user_password' => array(
    'templateCode' => 'SMS_185820906',
    'templateParam' => array(
      'code' => '',
    ),
    'template' => '您的验证码：${code}，正在修改密码，本条验证码5分钟后失效，如不是号码本人操作，请忽略即可，可不敢告诉别人呐！',
  ),
  //敏感操作通知
  'Sensitive_operation_notification' => array(
    'templateCode' => 'SMS_185810646',
    'templateParam' => array(
      'user_name' => '',
      'action' => '',
    ),
    'template' => '您的账号${user_name}当前正在进行${action}，属于敏感操作，短信提示您，如是您本人操作，请忽略本条信息。',
  ),
);
