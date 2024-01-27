import { createReadStream } from 'node:fs'
import crypto from 'crypto'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const filePath = path.join(__dirname, 'files/fileToCalculateHashFor.txt')

const calculateHash = async () => {
  const fileReadStream = createReadStream(filePath)
  const hash = crypto.createHash('sha256')

  fileReadStream.on('data', (data) => {
    hash.update(data)
  })

  fileReadStream.on('end', () => {
    console.log(hash.digest('hex'))
  })
}

await calculateHash()
