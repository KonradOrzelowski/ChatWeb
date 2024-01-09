const fs = require('fs');
const path = require('path');

/**
 * Recursively finds all JSON files in a directory.
 * 
 * @param {string} dir - The directory path to search in.
 * @returns {string[]} - An array of file paths to JSON files.
 */
function find_all_json_in_dir(dir) {
    const files = fs.readdirSync(dir);
    const jsonFiles = [];

    for (const file of files) {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);

        if (stats.isDirectory()) {
            jsonFiles.push(...find_all_json_in_dir(filePath));
        } else if (path.extname(file).toLowerCase() === '.json') {
            jsonFiles.push(filePath);
        }
    }

    return jsonFiles;
}

const { MongoClient } = require('mongodb');

async function checkDatabases(url) {

    const client = new MongoClient(url);
    try {
        await client.connect();
        return true;
    } catch (err) {
        return false;
    } finally {
        await client.close();
    }
}
function get_list_of_convs(dir) {

  var list_of_convs = [];
  const dir_conversations = find_all_json_in_dir(dir);

  dir_conversations.forEach(conv => {
    
    const rawFile = fs.readFileSync(conv);
    const jsonFile = JSON.parse(rawFile);
    list_of_convs.push(jsonFile);
  });
  return list_of_convs;

}

async function insert_collection_into_db(client, dir, collection) {
  // find all files in dir conversations
  const list_of_convs = get_list_of_convs(dir);

  await client.db('ChatWebDB').collection(collection)
      .insertMany(list_of_convs, function(err) {
  });
}


const { readFileSync } = require('fs');

async function main(){
  const rawConfig = readFileSync('config.json');
  const config = JSON.parse(rawConfig);

  const url = config.url;

  const reuslt = await checkDatabases(url);
  if (!reuslt) {
      console.log("Database is not connected");
      return false;
  }

  const client = new MongoClient(url);
  await client.connect();

  var name_db = 'ChatWebDB'
  var db_exist = false;

  const list_of_databases = await client.db('admin').admin().listDatabases();
  list_of_databases.databases.forEach(
      db => {
          if(db.name == name_db) db_exist = true;
      }
  );
  if (!db_exist) {
    client.db('ChatWebDB').createCollection("conversations");
  }

  const conversations = await client.db('ChatWebDB').collection('conversations');
  const array_of_convs = await conversations.find({}).toArray();
  const len_convs = array_of_convs.length;
  console.log(`There are ${len_convs} collection in database`);

  if ( len_convs == 0) {
      await insert_collection_into_db(client, 'conversations', 'conversations');  
  }
  await client.close()
}

main()