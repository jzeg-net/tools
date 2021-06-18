<?php
if (defined('keywordsContent') && !empty(keywordsContent)) {
  $keywords = '<meta name="keywords" content="' . keywordsContent . '">';
  echo $keywords;
}
