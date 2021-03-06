/*
 Navicat Premium Data Transfer

 Source Server         : 本地数据库8.0
 Source Server Type    : MySQL
 Source Server Version : 80020
 Source Host           : localhost:3306
 Source Schema         : jzeg_tools

 Target Server Type    : MySQL
 Target Server Version : 80020
 File Encoding         : 65001

 Date: 10/12/2019 00:00:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for google_recaptcha_data
-- ----------------------------
DROP TABLE IF EXISTS `google_recaptcha_data`;
CREATE TABLE `google_recaptcha_data`  (
  `id` int(15) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `success` int(1) NOT NULL COMMENT '评分通过状态',
  `action` varchar(25) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '动作',
  `hostname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '主机名',
  `score` decimal(2, 1) NOT NULL COMMENT '评分值',
  `threshold` decimal(2, 1) NOT NULL COMMENT '预设threshold值',
  `remote_ip` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'IP值',
  `error_codes` json NOT NULL COMMENT '错误代码',
  `timeout_seconds` int(4) NOT NULL COMMENT '超时时间值',
  `challenge_ts` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '时间',
  `challenge_ts_time` datetime(6) NOT NULL COMMENT '本地化 challenge_ts',
  `created_time` datetime(6) NOT NULL COMMENT '创建记录时间',
  `category` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '分类',
  `apk_package_name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL COMMENT '安卓包名',
  `user_agent` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT '用户UA',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci COMMENT = 'Google ReCAPTCHA 触发失败时记录值' ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
