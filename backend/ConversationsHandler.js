const fs = require('fs');
const path = require('path');

// function findJsonFiles(folder) {
//     const files = fs.readdirSync(folder);
//     const jsonFiles = [];
  
//     for (const file of files) {
//       const filePath = path.join(folder, file);
//       const stats = fs.statSync(filePath);
  
//       if (stats.isDirectory()) {
//         jsonFiles.push(...findJsonFiles(filePath));
//       } else if (path.extname(file).toLowerCase() === '.json') {
//         jsonFiles.push(filePath);
//       }
//     }
  
//     return jsonFiles;
//   }

// function processJsonFiles(jsonFiles) {
//     var index = 0;
//     const list_of_titles = [];
//     const list_of_convs = {};
//     for (const file of jsonFiles) {
//         const rawFile = fs.readFileSync(file);
//         const jsonFile = JSON.parse(rawFile);

//         list_of_titles.push({'title': jsonFile.title, 'index': index});
        
//         list_of_convs[index] = {'title': jsonFile.title, 'conversation': jsonFile.conversation};
//         index++;
//     }
//     return { list_of_titles, list_of_convs };
// }

// const jsonFiles = findJsonFiles('conversations');
// const { list_of_titles, list_of_convs } = processJsonFiles(jsonFiles);
const rawConfig = fs.readFileSync('config.json');
const config = JSON.parse(rawConfig);

const url = config.url;

const { MongoClient } = require('mongodb');

async function get_all_from_collection(db_name, collection_name){
    const client = new MongoClient(url);
    await client.connect();
    const conversations = await client.db(db_name).collection(collection_name);
    const array_of_convs = await conversations.find({}).toArray();
    await client.close()


    return(array_of_convs);

    
}

function get_list_of_titles(list_of_convs){
  var list_of_titles = [];
  var index = 0;
  for (const conv of list_of_convs) {

      list_of_titles.push({'title': conv.title, '_id': conv._id});
      index++;
  }
  return list_of_titles;
};

module.exports.url = url;
module.exports.get_all_from_collection = get_all_from_collection;
module.exports.get_list_of_titles = get_list_of_titles;