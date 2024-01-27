import { createReadStream } from 'node:fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const filePath = path.join(__dirname, 'files/fileToRead.txt')

const read = async () => {
  const fileReadStream = createReadStream(filePath)
  fileReadStream.on('data', (chunk) => process.stdout.write(chunk + '\n'))
}

await read()
