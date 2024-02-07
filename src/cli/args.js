const parseArgs = () => {
  const regexp = /^--/

  process.argv.forEach((prop, i, args) => {
    if (regexp.test(prop)) {
      console.log(`${prop.replace(regexp, '')} is ${args[i + 1]}`)
    }
  })
}

parseArgs()
