import path from 'path'
import { fileURLToPath } from 'url'
import { spawn } from 'node:child_process'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const childProcessPath = path.join(__dirname, 'files/script.js')

const spawnChildProcess = async (args) => {
  const childProcess = spawn('node', [childProcessPath, ...args])

  childProcess.stdout.on('data', (data) => {
    process.stdout.write(data)
  })

  process.stdin.on('data', (data) => {
    childProcess.stdin.write(data)
  })
}

spawnChildProcess(['someArgument1', 'someArgument2'])
