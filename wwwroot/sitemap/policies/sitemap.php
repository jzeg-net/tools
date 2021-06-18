<?php
require_once dirname(dirname(dirname(__DIR__))) . '/vendor/autoload.php';
require_once dirname(dirname(dirname(__DIR__))) . '/config/init_functions.php';

use samdark\sitemap\Sitemap;
use samdark\sitemap\Index;

$SubDomainDir = 'policies';

$WebsiteURL = getWebsiteURL();

// ---------------------------------------------------------------------------------------------------------------------

$sitemap = new Sitemap(dirname(dirname(__DIR__)) . '/' . $SubDomainDir . '/sitemap.xml');

$sitemap->addItem($WebsiteURL, time(), Sitemap::DAILY, 1.0);

$sitemap->write();

$sitemapFileUrls = $sitemap->getSitemapUrls($WebsiteURL);

// ---------------------------------------------------------------------------------------------------------------------

$staticSitemap = new Sitemap(dirname(dirname(__DIR__)) . '/' . $SubDomainDir . '/sitemap.static.xml');

//$staticSitemap->addItem($WebsiteURL . '');

$staticSitemap->write();

$staticSitemapUrls = $staticSitemap->getSitemapUrls($WebsiteURL);

// ---------------------------------------------------------------------------------------------------------------------

$index = new Index(dirname(dirname(__DIR__)) . '/' . $SubDomainDir . '/sitemap.index.xml');

foreach ($sitemapFileUrls as $sitemapUrl) {
  $index->addSitemap($sitemapUrl);
}

foreach ($staticSitemapUrls as $sitemapUrl) {
  $index->addSitemap($sitemapUrl);
}

$index->write();

