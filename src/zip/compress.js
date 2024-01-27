import { createReadStream, createWriteStream } from 'node:fs'
import path from 'path'
import { fileURLToPath } from 'url'
import zlib from 'zlib'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const fileToReadPath = path.join(__dirname, 'files/fileToCompress.txt')
const fileToWritePath = path.join(__dirname, 'files/archive.gz')

const compress = async () => {
  const readStream = createReadStream(fileToReadPath)
  const writeStream = createWriteStream(fileToWritePath)

  const gzip = zlib.createGzip()

  readStream.pipe(gzip).pipe(writeStream)
}

await compress()
