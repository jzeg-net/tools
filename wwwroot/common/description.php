<?php
if (defined('descriptionContent') && !empty(descriptionContent)) {
  $description = '<meta name="description" content="' . descriptionContent . '">';
  echo $description;
}
