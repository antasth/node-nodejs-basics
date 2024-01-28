import os from 'os'
import { Worker } from 'worker_threads'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const workerPath = path.join(__dirname, 'worker.js')
const workersStartValue = 10

const performCalculations = async () => {
  const coresCount = os.cpus().length

  const workers = new Array(coresCount).fill(null).map((_, i) => {
    const worker = new Worker(workerPath)

    return new Promise((resolve, reject) => {
      worker.postMessage(workersStartValue + i)

      worker.on('message', (message) =>
        resolve({ status: 'resolved', data: message })
      )

      worker.on('error', () => reject({ status: 'error', data: null }))
    })
  })

  Promise.allSettled(workers).then((data) => {
    const results = data.map((result) =>
      result.status === 'fulfilled' ? result.value : result.reason
    )
    console.log(results)
  })
}

await performCalculations()
