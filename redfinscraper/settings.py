BOT_NAME = "redfinscraper"

SPIDER_MODULES = ["redfinscraper.spiders"]
NEWSPIDER_MODULE = "redfinscraper.spiders"

ROBOTSTXT_OBEY = False

CONCURRENT_REQUESTS = 1
DOWNLOAD_DELAY = 3

COOKIES_ENABLED = False

ITEM_PIPELINES = {
    "redfinscraper.pipelines.RedfinscraperPipeline": 300,
}

FEED_EXPORT_ENCODING = "utf-8"
