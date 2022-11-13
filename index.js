const yaml = require('js-yaml')
const fs = require('fs')

try {
  const doc = yaml.load(fs.readFileSync('./index.yaml', 'utf8'))

  const nn = {
    ...doc
  }
  Object.keys(doc.entries).forEach((key) => {
      const v = doc.entries[key][0].appVersion
      const lv = doc.entries[key][0]
      nn.entries[key] = [lv]
      fs.readdir('./', (err, filename) => {
        if (err) {
          console.log(err)
        } else {
          filename.forEach((f) => {
            if (f.includes(key)) {
              if (f !== `${key}-${v}.tgz`) {
                fs.rmSync(f)
              }
            }
          })
        }
      })
  })
  fs.writeFileSync('./index.yaml', yaml.dump(nn))
} catch (e) {
  console.log(e)
}
