const fs = require('fs')

const path = require('path')
const reqPath = path.join(__dirname, 'CURD')

const filePath = `${reqPath}/newfile.txt`

// 1. File Creation.
fs.writeFileSync(filePath, 'this File is created in folder Curd')

// 2. File Read.

// This will Not give the reqired output.

fs.readFile(filePath, (err, item) => {
    console.log(item)
})

// This will give you correct required output.

fs.readFile(filePath, 'utf8', (err, item) => {
    console.log(item)
})

// 3.File update.