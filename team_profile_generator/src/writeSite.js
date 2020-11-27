const fs = require('fs')

const writeSite = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      if (err) {
        reject(err);
        return
      }
      resolve ({
        ok: true,
        message: 'File created!'
      })
    })
  })
}

module.exports = writeSite