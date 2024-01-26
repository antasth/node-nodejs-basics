import fsPromises from 'node:fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const fileToRemove = path.join(__dirname, 'files/fileToRemove.txt')
const errorMessage = 'FS operation failed'

const remove = async () => {
  try {
    await fsPromises.access(fileToRemove)
    fsPromises.unlink(fileToRemove)
  } catch (error) {
    throw new Error(errorMessage)
  }
}

await remove()
