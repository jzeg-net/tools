<?php
if (!defined('JZEG_NET_SMS')) define('JZEG_NET_SMS', 0);
if ($_GET) die();

if (isset($_POST['_token'])) {
  ('' === $_POST['_token']) ?: die();
} elseif (!isset($_POST['_token'])) {
  die();
}

//if (!($_POST['jt_sms_query_accessKeyId']) || !($_POST['jt_sms_query_accessSecret']) || !($_POST['jt_sms_query_PhoneNumber']) || !($_POST['jt_sms_query_SendDate']) || !($_POST['jt_sms_query_PageSize_number']) || !($_POST['jt_sms_query_CurrentPage_number']) || !($_POST['jt_sms_query_BizId'])) {
if (!($_POST['jt_sms_query_accessKeyId']) || !($_POST['jt_sms_query_accessSecret']) || !($_POST['jt_sms_query_PhoneNumber']) || !($_POST['jt_sms_query_SendDate']) || !($_POST['jt_sms_query_PageSize_number']) || !($_POST['jt_sms_query_CurrentPage_number'])) {
  die();
}


/**
 * 查询短信请求操作
 */
$accessKeyId = $_POST['jt_sms_query_accessKeyId'];

$accessSecret = $_POST['jt_sms_query_accessSecret'];
//发送回执ID，即发送流水号。调用发送接口SendSms或SendBatchSms发送短信时，返回值中的BizId字段。
$BizId = $_POST['jt_sms_query_BizId'];

//接收短信的手机号码,手机号码之间以英文逗号（,）分隔。上限为1000个手机号码。
$PhoneNumber = $_POST['jt_sms_query_PhoneNumber'];
//短信发送日期，支持查询最近30天的记录。格式为yyyyMMdd，例如20181225。
$SendDate = $_POST['jt_sms_query_SendDate'];
//分页查看发送记录，指定每页显示的短信记录数量。取值范围为1~50。
$PageSize = $_POST['jt_sms_query_PageSize_number'];
//分页查看发送记录，指定发送记录的的当前页码。
$CurrentPage = $_POST['jt_sms_query_CurrentPage_number'];

$request_action_value = 'QuerySendDetails';
$request_json = array(
  "product" => "Dysmsapi",
  "scheme" => "https",//生产模式的时候使用https
  "version" => "2017-05-25",
  "action" => $request_action_value,
  "method" => "POST",
  "host" => "dysmsapi.aliyuncs.com",
);

$RegionId = 'cn-hangzhou';
//短信签名名称
$SignName = '杰格网';

require_once dirname(__FILE__) . '/QuerySendDetails.php';

/**
 * 数据库操作
 */
//$sql_add_data['PhoneNumbers'] = $PhoneNumbers;
//$sql_add_data['SignName'] = $SignName;
//$sql_add_data['AccessKeyId'] = $accessKeyId;
//$sql_add_data['RegionId'] = $RegionId;
//$sql_add_data['Action'] = $request_json['action'];
//$sql_add_data['OutId'] = $OutId;
//$sql_add_data['SmsUpExtendCode'] = $SmsUpExtendCode;
//$sql_add_data['TemplateName'] = $TemplateName;
//$sql_add_data['TemplateCode'] = $TemplateCode;
//$sql_add_data['TemplateParam'] = $TemplateParam;
//$sql_add_data['SmsContent'] = $SmsContent;
//$sql_add_data['Host'] = $request_json['host'];
//$sql_add_data['Scheme'] = $request_json['scheme'];
//$sql_add_data['Method'] = $request_json['method'];
//$sql_add_data['Version'] = $request_json['version'];
//$sql_add_data['Product'] = $request_json['product'];
//$sql_add_data['RequestId'] = (isset($request_result['RequestId'])) ? $request_result['RequestId'] : null;
//$sql_add_data['Code'] = (isset($request_result['Code'])) ? $request_result['Code'] : null;
//$sql_add_data['BizId'] = (isset($request_result['BizId'])) ? $request_result['BizId'] : null;
//$sql_add_data['Message'] = (isset($request_result['Message'])) ? $request_result['Message'] : null;
//
$sql_add_data = [];
$sms_data = $sql_add_data;
//require_once dirname(__FILE__) . "/database_add_sms.php";


/**
 * 返回值处理
 */
global $sms_request_result,
       $database_result;
$result['sms_request'] = $sms_request_result;
$result['database'] = $database_result;

//if (!isset($result['database']['error']) && ('OK' === $result['sms_request']['Code'] && 'OK' === $result['sms_request']['Message'])) {

if ('OK' === $result['sms_request']['Code'] && 'OK' === $result['sms_request']['Message']) {
  $result['status'] = true;
} else {
//  if (isset($result['database']['error'])) {
//    $result['status'] = false;
//    $result['error']['type'][] = 'database';
//  }
  if ('OK' !== $result['sms_request']['Code'] || 'OK' !== $result['sms_request']['Message']) {
    $result['status'] = false;
    $result['error']['type'][] = 'sms_request';
  }
}

echo json_encode($result);
