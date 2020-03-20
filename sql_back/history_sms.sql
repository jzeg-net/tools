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
-- Table structure for history_sms
-- ----------------------------
DROP TABLE IF EXISTS `history_sms`;
CREATE TABLE `history_sms`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT '自动递增编号',
  `RequestId` varchar(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '请求ID',
  `Code` varchar(35) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '请求状态码，其他错误码详见',
  `BizId` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '发送回执ID，可根据该ID在接口QuerySendDetails中查询具体的发送状态',
  `Message` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL COMMENT '状态码的描述',
  `PhoneNumbers` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '接收短信的手机号码',
  `SmsContent` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL COMMENT '短信发送的内容',
  `Action` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '系统规定参数',
  `SignName` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '短信签名名称',
  `AccessKeyId` varchar(24) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '主账号AccessKey的ID',
  `RegionId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '区域',
  `OutId` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '外部流水扩展字段',
  `SmsUpExtendCode` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '上行短信扩展码，无特殊需要此字段的用户请忽略此字段',
  `TemplateName` varchar(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '自定义短信模板英文名称',
  `TemplateCode` varchar(13) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '短信模板ID',
  `TemplateParam` json NULL COMMENT '短信模板变量对应的实际值，JSON格式。\r\n\r\n说明 如果JSON中需要带换行符，请参照标准的JSON协议处理',
  `Host` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '发送地址，默认dysmsapi.aliyuncs.com',
  `Scheme` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '通信协议，生产使用https',
  `Method` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '发送方式，默认POST',
  `Version` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT 'SDK版本，初始2017-05-25',
  `Product` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `version`(`Version`) USING BTREE,
  INDEX `host`(`Host`) USING BTREE,
  INDEX `template_name`(`TemplateName`) USING BTREE,
  INDEX `action`(`Action`) USING BTREE,
  CONSTRAINT `action` FOREIGN KEY (`Action`) REFERENCES `aliyun_openapi_sms` (`Action_list`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `host` FOREIGN KEY (`Host`) REFERENCES `aliyun_openapi_sms` (`Host_list`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `template_name` FOREIGN KEY (`TemplateName`) REFERENCES `aliyun_openapi_sms` (`TemplateName`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `version` FOREIGN KEY (`Version`) REFERENCES `aliyun_openapi_sms` (`Version_list`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 0 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = '历史短信' ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
