<?php
require_once dirname(__DIR__) . "/vendor/autoload.php";

use Gregwar\Captcha\CaptchaBuilder;
use Gregwar\Captcha\PhraseBuilder;

$phraseBuilder = new PhraseBuilder(4, 'abcdefghijklmnpqrstuvwxyz123456789');
$captcha = new CaptchaBuilder(null, $phraseBuilder);
