import scrapy
from scrapy.http import Request
import json
import time
from urllib.parse import urljoin

class HomesSpider(scrapy.Spider):
    name = 'homes'
    allowed_domains = ['redfin.com']
    
    def __init__(self, start_url=None, *args, **kwargs):
        super(HomesSpider, self).__init__(*args, **kwargs)
        self.start_urls = [start_url] if start_url else ['https://www.redfin.com']
    
    def start_requests(self):
        for url in self.start_urls:
            yield Request(
                url=url,
                callback=self.parse,
                headers={
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                    'Accept-Language': 'en-US,en;q=0.5',
                    'Connection': 'keep-alive',
                },
                meta={'dont_redirect': True, 'handle_httpstatus_list': [302]}
            )
    
    def parse(self, response):
        # Extract rental listings
        listings = response.css('div.HomeCardContainer, div.RentalHomeCardContainer')
        
        for listing in listings:
            item = {
                'title': listing.css('span.homecardV2Price::text').get(),
                'address': listing.css('div.homeAddressV2::text').get(),
                'price': listing.css('span.homecardV2Price::text').get(),
                'beds': listing.css('span.HomeMainStats::text').get(),
                'baths': listing.css('span.HomeMainStats::text').get(),
                'sqft': listing.css('span.HomeMainStats::text').get(),
                'url': urljoin(response.url, listing.css('a::attr(href)').get()),
                'image_url': listing.css('img::attr(src)').get(),
                'description': listing.css('div.HomeDescription::text').get(),
                'timestamp': time.strftime('%Y-%m-%d %H:%M:%S')
            }
            yield item
        
        # Handle pagination
        next_page = response.css('a[rel="next"]::attr(href)').get()
        if next_page:
            yield Request(
                url=urljoin(response.url, next_page),
                callback=self.parse,
                headers={
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                    'Accept-Language': 'en-US,en;q=0.5',
                    'Connection': 'keep-alive',
                },
                meta={'dont_redirect': True, 'handle_httpstatus_list': [302]}
            ) 