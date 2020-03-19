/*
 Navicat Premium Data Transfer

 Source Server         : 本地数据库8.0
 Source Server Type    : MySQL
 Source Server Version : 80019
 Source Host           : localhost:3306
 Source Schema         : jzeg_tools

 Target Server Type    : MySQL
 Target Server Version : 80019
 File Encoding         : 65001

 Date: 01/03/2020 00:00:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for aliyun_openapi_sms
-- ----------------------------
DROP TABLE IF EXISTS `aliyun_openapi_sms`;
CREATE TABLE `aliyun_openapi_sms`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT '自动递增编号',
  `SignName_list` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '签名列表',
  `Version_list` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '版本列表',
  `Action_list` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '系统规定列表',
  `Message_list` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL COMMENT '信息列表',
  `Code_list` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '状态码列表',
  `Host_list` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '服务地址',
  `TemplateName` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '自定义短信模板英文名称列表',
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `Version_list`(`Version_list`) USING BTREE,
  INDEX `Host_list`(`Host_list`) USING BTREE,
  INDEX `TemplateName`(`TemplateName`) USING BTREE,
  INDEX `Action_list`(`Action_list`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of aliyun_openapi_sms
-- ----------------------------
INSERT INTO `aliyun_openapi_sms` VALUES (1, NULL, '2017-05-25', 'SendSms', NULL, NULL, 'dysmsapi.aliyuncs.com', 'notice');
INSERT INTO `aliyun_openapi_sms` VALUES (2, NULL, NULL, 'SendBatchSms', NULL, NULL, 'dybaseapi.aliyuncs.com', 'forget_user_info');
INSERT INTO `aliyun_openapi_sms` VALUES (3, NULL, NULL, 'QuerySendDetails', NULL, NULL, '1943695596114318.mns.cn-hangzhou.aliyuncs.com', 'forget_user_name');
INSERT INTO `aliyun_openapi_sms` VALUES (4, NULL, NULL, 'AddSmsSign', NULL, NULL, NULL, 'forget_user_password');
INSERT INTO `aliyun_openapi_sms` VALUES (5, NULL, NULL, 'DeleteSmsSign', NULL, NULL, NULL, 'user_register');
INSERT INTO `aliyun_openapi_sms` VALUES (6, NULL, NULL, 'QuerySmsSign', NULL, NULL, NULL, 'user_login');
INSERT INTO `aliyun_openapi_sms` VALUES (7, NULL, NULL, 'ModifySmsSign', NULL, NULL, NULL, 'change_user_password');
INSERT INTO `aliyun_openapi_sms` VALUES (8, NULL, NULL, 'ModifySmsTemplate', NULL, NULL, NULL, 'Sensitive_operation_notification');
INSERT INTO `aliyun_openapi_sms` VALUES (9, NULL, NULL, 'QuerySmsTemplate', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (10, NULL, NULL, 'AddSmsTemplate', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (11, NULL, NULL, 'DeleteSmsTemplate', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (12, NULL, NULL, 'SmsReport', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (13, NULL, NULL, 'SmsUp', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (14, NULL, NULL, 'SignSmsReport', NULL, NULL, NULL, NULL);
INSERT INTO `aliyun_openapi_sms` VALUES (15, NULL, NULL, 'TemplateSmsReport', NULL, NULL, NULL, NULL);

SET FOREIGN_KEY_CHECKS = 1;
