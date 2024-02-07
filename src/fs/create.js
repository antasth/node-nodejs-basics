import fsPromises from 'node:fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const filePath = path.join(__dirname, 'files/fresh.txt')
const content = 'I am fresh and young'
const errorMessage = 'FS operation failed'

const create = async () => {
  try {
    await fsPromises.access(filePath)
    throw new Error(errorMessage)
  } catch (error) {
    if (error.message === errorMessage) {
      throw error
    }
    fsPromises.writeFile(filePath, content)
  }
}

await create()
