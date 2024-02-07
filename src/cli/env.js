const parseEnv = () => {
  for (let key in process.env) {
    if (/^RSS_/.test(key)) {
      console.log(`${key}=${process.env[key]}`)
    }
  }
}

parseEnv()
