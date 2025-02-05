// import playwright module
import { test, expect } from '@playwright/test'

// wtite a test
test('Search in browser', async( {page} ) =>{

// go to website
    await page.goto('https://makeup.com.ua/');

// search with keywoards
    await page.locator('.search-button').first().click();
    await page.getByRole('searchbox', { name: 'Более 249 000 товаров' }).fill('the scent for her');
    await page.getByRole('searchbox', { name: 'Более 249 000 товаров' }).press('Enter');
    
// click on search result link
    await page.getByRole('listitem').filter({ hasText: 'boss the scent for her' }).first().click();

// validate webpage title
    await expect(page).toHaveTitle('BOSS The Scent For Her - Парфюмированная вода: купить по лучшей цене в Украине | Makeup.ua');
    await expect(page.getByText('Характеристики')).toContainText('Характеристики');
})