const axios = require('axios');
const cheerio = require('cheerio');

async function tikstalk(user) {
  let res = await axios.get(`https://urlebird.com/user/${user}/`)
  let $ = cheerio.load(res.data)
  const pp_user = $('div[class="col-md-auto justify-content-center text-center"] > img').attr('src')
  const name = $('h1.user').text().trim()
  const username = $('div.content > h5').text().trim()
  const followers = $('div[class="col-7 col-md-auto text-truncate"]').text().trim().split(' ')[1]
  const following = $('div[class="col-auto d-none d-sm-block text-truncate"]').text().trim().split(' ')[1]
  const description = $('div.content > p').text().trim()
  return {
      profile: pp_user,
      name: username, 
      username: name, 
      followers, 
      following, 
      desc: description,
      bio: $('body > div.main > div.container-fluid.mt-4.mt-md-2 > div > div.col-md-auto.text-center.text-md-left.pl-0 > div > p').text().trim(),
      likes: $('body > div.main > div.container-fluid.mt-4.mt-md-2 > div > div.col-md-auto.text-center.text-md-left.pl-0 > div > div > div > div:nth-child(1)').text().trim().split('🧡 ')[1]
   } 
}

function igstalker(Username) {
  return new Promise((resolve, reject) => {
    axios.get('https://dumpor.com/v/'+encodeURIComponent(Username), {
      headers: {
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(res => {
      const $ = cheerio.load(res.data)
      const result = {
        profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
        fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
        username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
        post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
        followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
        following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
        bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text().trim()
      }
      resolve(result)
    })
  })
}



module.exports = { 
  igstalker,
  tikstalk
}