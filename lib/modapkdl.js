const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://happymod.com';

async function searchModAPKs(query) {
  try {
    // Search for the query
    const searchUrl = `${baseUrl}/search.html?q=${encodeURIComponent(query)}`;
    const searchResponse = await axios.get(searchUrl);
    const $ = cheerio.load(searchResponse.data);

    // Find all search results
    const results = [];
    $('.search-result-list .media').each((i, el) => {
      const appUrl = `${baseUrl}${$(el).find('a').attr('href')}`;
      const appName = $(el).find('.media-body h4').text().trim();
      const modDownloadLink = $(el).find('.download-box a[href*="/data/file/"]').attr('href');

      if (modDownloadLink) {
        const downloadUrl = `${baseUrl}${modDownloadLink}`;
        results.push({ appUrl, appName, downloadUrl });
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }
}

//===============================================================================================

async function downloadModAPK(url) {
  try {
    // Navigate to the app page
    const appResponse = await axios.get(url);
    const $ = cheerio.load(appResponse.data);

    // Find the mod APK download link
    const modDownloadLink = $('.download-box a[href*="/data/file/"]').attr('href');

    if (!modDownloadLink) {
      console.log('Mod APK download link not found.');
      return;
    }
    const downloadUrl = `${baseUrl}${modDownloadLink}`;

  } catch (error) {
    console.error('Error:', error);
  }
}
