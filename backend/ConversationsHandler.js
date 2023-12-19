const fs = require('fs');
const path = require('path');

function findJsonFiles(folder) {
    const files = fs.readdirSync(folder);
    const jsonFiles = [];
  
    for (const file of files) {
      const filePath = path.join(folder, file);
      const stats = fs.statSync(filePath);
  
      if (stats.isDirectory()) {
        jsonFiles.push(...findJsonFiles(filePath));
      } else if (path.extname(file).toLowerCase() === '.json') {
        jsonFiles.push(filePath);
      }
    }
  
    return jsonFiles;
  }

function processJsonFiles(jsonFiles) {
    var index = 0;
    const list_of_titles = [];
    const list_of_convs = {};
    for (const file of jsonFiles) {
        const rawFile = fs.readFileSync(file);
        const jsonFile = JSON.parse(rawFile);

        list_of_titles.push({'title': jsonFile.title, 'index': index});
        
        list_of_convs[index] = {'title': jsonFile.title, 'conversation': jsonFile.conversation};
    }
    return { list_of_titles, list_of_convs };
}

const jsonFiles = findJsonFiles('conversations');
const { list_of_titles, list_of_convs } = processJsonFiles(jsonFiles);

module.exports.list_of_titles = list_of_titles;
module.exports.list_of_convs = list_of_convs;
