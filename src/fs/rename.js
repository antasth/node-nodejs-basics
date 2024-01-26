import fsPromises from 'node:fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const wrongFilename = path.join(__dirname, 'files/wrongFilename.txt')
const properFilename = path.join(__dirname, 'files/properFilename.md')
const errorMessage = 'FS operation failed'

const rename = async () => {
  try {
    await fsPromises.access(wrongFilename)
  } catch (error) {
    throw new Error(errorMessage)
  }

  try {
    await fsPromises.access(properFilename)
    throw new Error(errorMessage)
  } catch (error) {
    if (error.message === errorMessage) {
      throw error
    }
    fsPromises.rename(wrongFilename, properFilename)
  }
}

await rename()
