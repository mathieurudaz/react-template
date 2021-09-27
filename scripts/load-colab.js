const request = require('request')
const fs = require('fs')
const process = require('process')

const notebookId = process.argv[2]
const url = `https://drive.google.com/uc?id=${notebookId}&authuser=0&export=download`
const outDir = process.argv[3]

function processMarkdownCell(cell) {
  const text = cell.source.join('').trim()
  console.log(`${cell.metadata.id} ← ${text.slice(0, 80).replace(/\n/gi, ' ')}`)
  fs.writeFileSync(`./${outDir}/${cell.metadata.id}.mdx`, text)
}

request(
  {
    followAllRedirects: true,
    url: url
  },
  (error, response, body) => {
    if (error) {
      throw new Error(error)
    }

    const notebook = JSON.parse(body)
    const nbPath = `./${outDir}/colab_notebook_export.ipynb.json`
    console.log(`Exporting notebook ${notebookId} → ${nbPath}`)
    fs.writeFileSync(nbPath, JSON.stringify(notebook, undefined, 2))

    console.log(`Exporting markdown cells to ${outDir}/`)
    notebook.cells
      .filter(c => c.cell_type === 'markdown')
      .forEach(cell => {
        processMarkdownCell(cell)
      })
    console.log(`Done.`)
  }
)
