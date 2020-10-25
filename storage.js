const Cloud = require('@google-cloud/storage')
const path = require('path')
const serviceKey = path.join(__dirname, './temp-vals-y-llaves-7834gb84brnf9b4n9.json')

const { Storage } = Cloud
const storage = new Storage({
  keyFilename: serviceKey,
  projectId: 'inlaid-water-273807',
})

module.exports = storage