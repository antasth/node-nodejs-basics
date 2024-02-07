import fsPromises from 'node:fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const filesPath = path.join(__dirname, 'files')
const filesCopyPath = path.join(__dirname, 'files_copy')
const errorMessage = 'FS operation failed'

const copy = async () => {
  try {
    await fsPromises.access(filesPath)
  } catch (error) {
    throw new Error(errorMessage)
  }

  try {
    await fsPromises.access(filesCopyPath)
    throw new Error(errorMessage)
  } catch (error) {
    if (error.message === errorMessage) {
      throw error
    }

    await fsPromises.mkdir(filesCopyPath)
    const files = await fsPromises.readdir(filesPath)

    files.forEach((file) => {
      let pathFrom = path.join(filesPath, file)
      let pathTo = path.join(filesCopyPath, file)
      fsPromises.copyFile(pathFrom, pathTo)
    })
  }
}

await copy()
