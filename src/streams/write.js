import { createWriteStream } from 'node:fs'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const filePath = path.join(__dirname, 'files/fileToWrite.txt')

const write = async () => {
  console.log('Hello, enter your data(for exit press CTRL + C):')
  const fileWriteStream = createWriteStream(filePath)
  process.stdin.on('data', (chunk) => {
    fileWriteStream.write(chunk)
  })
}
await write()
