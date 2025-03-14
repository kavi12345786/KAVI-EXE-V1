const axios = require('axios');
const { CookieJar } = require('tough-cookie');
const { wrapper } = require('axios-cookiejar-support');
const cheerio = require('cheerio');

const jar = new CookieJar();
const client = wrapper(axios.create({ jar }));

const y2save = {
  baseURL: 'https://y2save.com',
  
  headers: {
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'origin': 'https://y2save.com',
    'referer': 'https://y2save.com/id',
    'user-agent': 'Postify/1.0.0',
    'x-requested-with': 'XMLHttpRequest'
  },
  
  fmt: ['mp4', 'mp3'],
  qualities: {
    mp4: ['360P', '480P', '720p', '1080P'],
    mp3: ['128kbps']
  },
  
  geToken: async function() {
    try {
      const response = await client.get(`${this.baseURL}/id`, { headers: this.headers });
      const $ = cheerio.load(response.data);
      return $('meta[name="csrf-token"]').attr('content');
    } catch (error) {
      console.error('Failed to fetch CSRF Token!');
      throw error;
    }
  },
  search: async function(link) {
    try {
      const token = await this.geToken();
      const response = await client.post(`${this.baseURL}/search`, 
        `_token=${token}&query=${encodeURIComponent(link)}`,
        { headers: this.headers }
      );
      return response.data;
    } catch (error) {
      console.error('No response!');
      throw error;
    }
  },
  
  convert: async function(vid, key) {
    try {
      const token = await this.geToken();
      const response = await client.post(`${this.baseURL}/searchConvert`, 
        `_token=${token}&vid=${vid}&key=${encodeURIComponent(key)}`,
        { headers: this.headers }
      );
      return response.data;
    } catch (error) {
      console.error('No response!');
      throw error;
    }
  },
  
  getfmt: function(resultx) {
    const formats = {
      mp4: resultx.data.convert_links.video.map(v => v.quality),
      mp3: resultx.data.convert_links.audio.map(a => a.quality)
    };
    return formats;
  },
  
  main: async function(link, format = 'mp4', quality = '480P') {
    try {
      if (!this.fmt.includes(format)) {
        throw new Error(`Invalid format! Choose one of: ${this.fmt.join(', ')}`);
      }
      const resultx = await this.search(link);
      if (resultx.status !== 'ok') {
        throw new Error('No response!');
      }
      const fmt = this.getfmt(resultx);
      let converts = format === 'mp4' ? resultx.data.convert_links.video : resultx.data.convert_links.audio;
      const vo = converts.find(v => v.quality === quality);
      
      if (!vo) {
        throw new Error(`Format ${format} does not match quality ${quality}. Choose one of: ${fmt[format].join(', ')}`);
      }
      const vr = await this.convert(resultx.data.vid, vo.key);
      if (vr.status !== 'ok') {
        throw new Error('Conversion failed!');
      }

      // Add headers and cookies to the download request
      const downloadResponse = await client.get(vr.dlink, {
        headers: this.headers,
        jar: jar,
        withCredentials: true,
        maxRedirects: 5
      });
      
      return vr.dlink; // returning the download link directly

    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};

module.exports = { y2save };