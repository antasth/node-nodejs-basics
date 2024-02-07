import fsPromises from 'node:fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const fileToRead = path.join(__dirname, 'files/fileToRead.txt')
const errorMessage = 'FS operation failed'

const read = async () => {
  try {
    await fsPromises.access(fileToRead)
    const fileToReadContent = await fsPromises.readFile(fileToRead, 'utf-8')
    console.log(fileToReadContent)
  } catch (error) {
    throw new Error(errorMessage)
  }
}

await read()
