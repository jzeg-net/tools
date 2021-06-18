<?php
require_once dirname(__FILE__) . "/captcha.php";
global $captcha;

$captcha
  ->setBackgroundImages(array())
  ->setBackgroundColor(233, 236, 239)
  ->setIgnoreAllEffects(true)
  ->build(110, 36);
