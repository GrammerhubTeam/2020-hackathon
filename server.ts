const express = require('express')
// const fs = require('fs')
// const atob = require('atob')
const download = require('image-downloader')
const next = require('next')
const bodyParser = require('body-parser')
const multer = require('multer')
const storage = require('./storage')
import axios from 'axios'
import api from './api'

interface INeighborhood {
  neighborhoodId: string,
  Name: string,
  City: string,
  State: string,
  QRLink: string | null,
  OrgName: string | null,
  published_at: string | null,
  created_at: string,
  updated_at: string,
  houses: string[]
}

export interface IAxRegisterTreaterReqBody {
  treaterId: string
  neighborhoodId: string
  username: string,
  email: string,
  password: string
  provider: string,
  confirmed: boolean,
  blocked: boolean,
  role: {
    id: number,
    name: string,
    description: string,
    type: string
  },
  created_at: string,
  updated_at: string,
  Phone: string | null,
  photoLink: string | null,
  age: number | null,
  visitedStories: string[],
  neighborhoods: INeighborhood[]
}

interface IGenerateQRData {
  id: string
  for?: 'neighborhood' | 'house' | 'treater'
}

export interface IAxGenerateQRReqBody {
  type: 'neighborhood' | 'house' | 'treater'
  data: IGenerateQRData
}

const BUCKET_NAME = 'goats-hackathon-2020'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const multerMid = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
})

// const dataURItoBlob = (dataURI: string) => {
//   // convert base64 to raw binary data held in a string
//   // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
//   var byteString = atob(dataURI.split(',')[1])

//   // separate out the mime component
//   var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

//   // write the bytes of the string to an ArrayBuffer
//   var ab = new ArrayBuffer(byteString.length)

//   // create a view into the buffer
//   var ia = new Uint8Array(ab)

//   // set the bytes of the buffer to the correct values
//   for (var i = 0; i < byteString.length; i++) {
//     ia[i] = byteString.charCodeAt(i)
//   }

//   // write the ArrayBuffer to a blob, and you're done
//   var blob = new Blob([ab], { type: mimeString.toLowerCase() })
//   return blob
// }

app.prepare()
.then(() => {
  const server = express()
  server.use(multerMid.single('file'))
  server.use(bodyParser.urlencoded({ extended: false }))
  server.use(bodyParser.json())
  server.use('/api', api)

  server.get('/p/:id', (req, res) => { 
    const actualPage = '/post'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  server.get('/', (req, res) => { 
    const actualPage = '/home'
    const queryParams = { id: req.params.id }
    app.render(req, res, actualPage, queryParams)
  })

  server.post('/wines', async (req, res) => {
    try {
      const resp = await axios.get(`https://sampleapis.com/wines/api/${req.body.wineType}`)
      res.send({ error: false, datum: resp.data })
    } catch (err) {
      res.send({ error: true, datum: err })
    }
  })

  server.post('/register-treater', async (req, res) => {
    const body = req.body as IAxRegisterTreaterReqBody
    try {
      const resp = await axios.post(`http://localhost:1337/auth/local/register`, body)
      res.send({ error: false, datum: resp.data, id: body.treaterId })
    } catch (err) {
      console.log(err)
      res.send({ error: true, datum: err })
    }
  })

  server.post('/generate-qr', async (req, res) => {
    const body = req.body as IAxGenerateQRReqBody
    try {
      // let resp: AxiosResponse<any>
      let localFile: string = 'to-be-uploaded/'
      switch(body.type) {
        case 'neighborhood':
          const qrImage = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${JSON.stringify(body)}`
          // resp = await axios.get(qrImage)

          console.log(qrImage)
          localFile = `to-be-uploaded/${body.type}/${body.data.id}.png`
          // fs.createWriteStream(localFile).write(resp.data);
          const opts = {
            url: qrImage,
            dest: localFile                // will be saved to /path/to/dest/image.jpg
          } 
          const downloaded = await download.image(opts)         
          console.log('DOWNLOADED============', downloaded.filename)

          const options = {
            destination: storage.bucket(BUCKET_NAME).file(`${body.type}/${body.data.id}.png`),
            resumable: false
          }
          const storageResp = await storage.bucket(BUCKET_NAME).upload(localFile, options)
          console.log(storageResp)
          // https://storage.googleapis.com/goats-hackathon-2020//neighborhood/1.png

          const qr = `https://storage.googleapis.com/${BUCKET_NAME}/${body.type}/${body.data.id}.png`
          const updateQRResp = await axios.put(`http://localhost:1337/${body.type}s/${body.data.id}`, { QRLink: qr })
          console.log('UPDATED', updateQRResp)
          res.send({ error: false, datum: updateQRResp.data, id: body.data.id, qr })
          return
        case 'house':
          // resp = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${JSON.stringify(body)}`, body)

          // console.log(resp.data)
          // localFile = `to-be-uploaded/${body.type}/${body.data.id}.png`
          // fs.createWriteStream(localFile).write(resp.data);
          // console.log('DOWNLOADED============')
          // res.send({ error: false, datum: resp.data, id: body.data.id })
          return
        case 'treater':
          // resp = await axios.get(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${JSON.stringify(body)}`, body)

          // console.log(resp.data)
          // localFile = `to-be-uploaded/${body.type}/${body.data.id}.png`
          // fs.createWriteStream(localFile).write(resp.data);
          // console.log('DOWNLOADED============')
          // res.send({ error: false, datum: resp.data, id: body.data.id })
          return
        default:
          res.send({ error: true, datum: 'Unkown qr type' })
          return
      }
    } catch (err) {
      console.log(err)
      res.send({ error: true, datum: err })
      return
    }
  })

  // This is here to catch all other routes
  server.get('*', (req, res) => {
    return handle(req, res)
  })

  // This starts the server
  server.listen(process.env.PORT || 3000, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${process.env.PORT || 3000}`)
  })
})
.catch((ex:any) => {
  console.error(ex.stack)
  process.exit(1)
})