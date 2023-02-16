const yaml = require('js-yaml')
const semverSort = require('semver-sort')
const fs = require('fs')

const saveLast = 3

try {
  const doc = yaml.load(fs.readFileSync('./index.yaml', 'utf8'))
  const catalog = {
    ...doc
  }
  Object.keys(catalog.entries).forEach((key) => {
    // Sort the versions
    catalog.entries[key] = semverSort
      .asc(catalog.entries[key].map((x) => x.version))
      .map((x) => {
        return catalog.entries[key].find((y) => y.version === x)
      })

    catalog.entries[key] = catalog.entries[key].slice(-1 * saveLast)
  })
  fs.writeFileSync('./index.yaml', yaml.dump(catalog))
  // Clear the charts folder
  fs.readdir('./', (err, filename) => {
    if (err) {
      console.log(err)
    } else {
      filename.forEach((f) => {
        if (f.endsWith('.tgz')) {
          const li = f.lastIndexOf('-')
          const name = f.substring(0, li)
          const version = f.substring(li + 1, f.length - 4)
          if (!catalog.entries[name]?.find((x) => x.version === version)) {
            try {
              fs.rmSync(f)
            } catch {}
          }
        }
      })
    }
  })
} catch (e) {
  console.log(e)
}
