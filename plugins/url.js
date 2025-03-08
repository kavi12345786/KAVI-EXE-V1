const axios = require('axios'),
  FormData = require('form-data'),
  fs = require('fs'),
  os = require('os'),
  path = require('path'),
  { cmd } = require('../command')
cmd(
  {
    pattern: 'url',
    alias: ['imgtourl', 'img2url', 'url'],
    react: '\uD83D\uDD87',
    desc: 'Convert an image to a URL using imgbb.',
    category: 'convert',
    use: '.tourl',
    filename: __filename,
  },
  async (_0x4b7b0e, _0xd5e62b, _0x476a0c, _0xe3aeb6) => {
    const {
      from: _0x4ab54b,
      quoted: _0x3ea4c4,
      reply: _0x5c7253,
      sender: _0xaa2281,
    } = _0xe3aeb6
    try {
      const _0xd29337 = _0xd5e62b.quoted ? _0xd5e62b.quoted : _0xd5e62b,
        _0x1e02f0 = (_0xd29337.msg || _0xd29337).mimetype || ''
      if (!_0x1e02f0 || !_0x1e02f0.startsWith('image')) {
        throw '\uD83C\uDF3B Please reply to an image.'
      }
      const _0x5ee088 = await _0xd29337.download(),
        _0x2912d9 = path.join(os.tmpdir(), 'temp_image')
      fs.writeFileSync(_0x2912d9, _0x5ee088)
      const _0x5a8c98 = new FormData()
      _0x5a8c98.append('image', fs.createReadStream(_0x2912d9))
      const _0x560c20 = await axios.post(
        'https://api.imgbb.com/1/upload?key=e909ac2cc8d50250c08f176afef0e333',
        _0x5a8c98,
        { headers: { ..._0x5a8c98.getHeaders() } }
      )
      if (!_0x560c20.data || !_0x560c20.data.data || !_0x560c20.data.data.url) {
        throw '\u274C Failed to upload the file.'
      }
      const _0x4a7500 = _0x560c20.data.data.url
      fs.unlinkSync(_0x2912d9)
      const _0x5d037e = {
        mentionedJid: [_0xaa2281],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363366147331561@newsletter',
          newsletterName: '𝐊𝐀𝐕𝐈 𝐄𝐗𝐄',
          serverMessageId: 143,
        },
      }
      await _0x4b7b0e.sendMessage(_0x4ab54b, {
        text:
          '*Image Uploaded Successfully \uD83D\uDCF8*\nSize: ' +
          _0x5ee088.length +
          ' Byte(s)\n*URL:* ' +
          _0x4a7500 +
          '\n\n> \u2696️ Uploaded via 𝗞𝗔𝗩𝗜 𝗘𝗫𝗘',
        contextInfo: _0x5d037e,
      })
    } catch (_0x17acdf) {
      _0x5c7253('Error: ' + _0x17acdf)
      console.error(_0x17acdf)
    }
  }
)
