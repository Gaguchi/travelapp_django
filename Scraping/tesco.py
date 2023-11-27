import csv
import time
from playwright.sync_api import sync_playwright


def scrape_wines():
    wines_data = []  # List to store wine data

    with sync_playwright() as playwright:
        browser = playwright.chromium.launch()
        context = browser.new_context()
        page = context.new_page()

        # Navigate to the starting page
        page.goto("https://www.tesco.com/groceries/en-GB/shop/drinks/wine/all?page=1&count=24")
        page.wait_for_selector('a[data-auto-id="load-more-products"]')

        while True:
            # Scrape wines on the current page
            wines = page.query_selector_all('.product-list--list-item')
            for wine in wines:
                wine_name = wine.query_selector('.product-details-tile--title-link').text_content()
                wines_data.append([wine_name])

            # Check if there is a next page
            next_page = page.query_selector('a[data-auto-id="load-more-products"]')
            if not next_page:
                break

            # Click the "Load More" button to navigate to the next page
            next_page.click()
            page.wait_for_selector('.product-list--list-item', state="hidden")
            time.sleep(2)  # Wait for the new wines to load

        # Close the browser
        context.close()
        browser.close()

    # Save data to CSV file
    with open('wines.csv', 'w', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        writer.writerow(['Wine Name'])  # Write header
        writer.writerows(wines_data)  # Write wine data


if __name__ == "__main__":
    scrape_wines()
