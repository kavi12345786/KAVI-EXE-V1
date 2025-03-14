const axios = require('axios');
const cheerio = require('cheerio');

async function ytmp3(ytUrl) {
  try {
    if (!ytUrl) {
      throw new Error('URL parameter is required');
    }

    const infoResponse = await axios.get(`https://cdn58.savetube.su/info?url=${encodeURIComponent(ytUrl)}`, {
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'Origin': 'https://ytshorts.savetube.me',
        'Referer': 'https://ytshorts.savetube.me/',
      }
    });

    const key = infoResponse.data.data.key;
    const title = infoResponse.data.data.title;

    const downloadResponse = await axios.get(`https://cdn61.savetube.su/download/audio/128/${key}`, {
      headers: {
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
        'Origin': 'https://ytshorts.savetube.me',
        'Referer': 'https://ytshorts.savetube.me',
      }
    });

    return {
      status: true,
      Created_by: 'Vajira Rathnayaka',
      title: title,
      dl_link: downloadResponse.data.data.downloadUrl
    };
  } catch (error) {
    return
    //console.error('Error:', error);
   // return { error: 'An error occurred while processing the request.' };
  }
}


async function ytmp4(url, format) {
  try {
    if (!url || !format) {
      throw new Error('url and format parameters are required.');
    }

    const quality = parseInt(format.replace('p', ''), 10);
    const firstUrl = 'https://ab.cococococ.com/ajax/download.php';
    const firstParams = {
      button: 1,
      start: 1,
      end: 1,
      format: quality,
      url
    };

    const headers = {
      Accept: '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
      Origin: 'https://loader.to',
      Referer: 'https://loader.to',
      'Sec-Ch-Ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
      'Sec-Ch-Ua-Mobile': '?1',
      'Sec-Ch-Ua-Platform': '"Android"',
      'Sec-Fetch-Dest': 'empty',
      'Sec-Fetch-Mode': 'cors',
      'Sec-Fetch-Site': 'cross-site',
      'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36',
    };

    const firstResponse = await axios.get(firstUrl, { params: firstParams, headers });
    const id = firstResponse.data.id;

    const checkProgress = async () => {
      const secondUrl = 'https://p.oceansaver.in/ajax/progress.php';
      const secondParams = { id };

      try {
        const secondResponse = await axios.get(secondUrl, { params: secondParams, headers });
        const { progress, download_url, text } = secondResponse.data;

        if (text === "Finished") {
          return download_url;
        } else {
          await new Promise(resolve => setTimeout(resolve, 1000));
          return checkProgress();
        }
      } catch (error) {
        throw new Error(`Error in progress check: ${error.message}`);
      }
    };

    return await checkProgress();
  } catch (error) {
   // console.error('Error:', error);
  //  return { error: error.message };
  }
}

module.exports = {ytmp3,ytmp4}