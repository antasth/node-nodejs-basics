import fsPromises from 'node:fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const filesPath = path.join(__dirname, 'files')
const errorMessage = 'FS operation failed'

const list = async () => {
  try {
    await fsPromises.access(filesPath)
    const files = await fsPromises.readdir(filesPath)
    console.log(files)
  } catch (error) {
    throw new Error(errorMessage)
  }
}

await list()
