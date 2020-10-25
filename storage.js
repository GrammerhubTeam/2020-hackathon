const Cloud = require('@google-cloud/storage')
require('dotenv').config()

const { Storage } = Cloud
const storage = new Storage({
//   keyFilename: serviceKey,
  projectId: 'inlaid-water-273807',
  credentials: {
      client_email: process.env.CLIENT_EMAIL,
      private_key: process.env.PRIVATE_KEY
  }
})

module.exports = storage