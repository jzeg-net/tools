<?php
require_once dirname(dirname(dirname(__DIR__))) . '/vendor/autoload.php';
require_once dirname(dirname(dirname(__DIR__))) . '/config/init_functions.php';

use samdark\sitemap\Sitemap;
use samdark\sitemap\Index;

$SubDomainDir = 'tools';

$WebsiteURL = getWebsiteURL();

// ---------------------------------------------------------------------------------------------------------------------

$sitemap = new Sitemap(dirname(dirname(__DIR__)) . '/' . $SubDomainDir . '/sitemap.xml');

$sitemap->addItem($WebsiteURL, time(), Sitemap::DAILY, 1.0);

$sitemap->write();

$sitemapFileUrls = $sitemap->getSitemapUrls($WebsiteURL);

// ---------------------------------------------------------------------------------------------------------------------

$staticSitemap = new Sitemap(dirname(dirname(__DIR__)) . '/' . $SubDomainDir . '/sitemap.static.xml');

$staticSitemap->addItem($WebsiteURL . 'login.php');
$staticSitemap->addItem($WebsiteURL . 'join.php');
$staticSitemap->addItem($WebsiteURL . 'password_reset.php');

$staticSitemap->write();

$staticSitemapUrls = $staticSitemap->getSitemapUrls($WebsiteURL);

// ---------------------------------------------------------------------------------------------------------------------

$categorySitemap = new Sitemap(dirname(dirname(__DIR__)) . '/' . $SubDomainDir . '/sitemap.category.xml');

$categorySitemap->addItem($WebsiteURL . 'phone_number/', null, Sitemap::WEEKLY, 0.8);
$categorySitemap->addItem($WebsiteURL . 'yjt/', null, Sitemap::WEEKLY, 0.8);
$categorySitemap->addItem($WebsiteURL . 'flexible_code/', null, Sitemap::WEEKLY, 0.8);
$categorySitemap->addItem($WebsiteURL . 'exam_answer_query/', null, Sitemap::WEEKLY, 0.8);

$categorySitemap->write();

$categorySitemapUrls = $categorySitemap->getSitemapUrls($WebsiteURL);

// ---------------------------------------------------------------------------------------------------------------------

$index = new Index(dirname(dirname(__DIR__)) . '/' . $SubDomainDir . '/sitemap.index.xml');

foreach ($sitemapFileUrls as $sitemapUrl) {
  $index->addSitemap($sitemapUrl);
}

foreach ($staticSitemapUrls as $sitemapUrl) {
  $index->addSitemap($sitemapUrl);
}

foreach ($categorySitemapUrls as $sitemapUrl) {
  $index->addSitemap($sitemapUrl);
}

$index->write();

