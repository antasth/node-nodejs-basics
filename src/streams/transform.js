import { Transform } from 'node:stream'

const transform = async () => {
  const reverseString = new Transform({
    transform(chunk, _, callback) {
      this.push(chunk.toString().trim().split('').reverse().join(''))
      callback()
    },
  })
  reverseString.on('data', (chunk) => {
    process.stdout.write(chunk + '\n')
  })

  process.stdin.pipe(reverseString)
}

await transform()
