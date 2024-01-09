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

  const list_of_convs = get_list_of_convs(dir);

  await client.db('ChatWebDB').collection(collection)
      .insertMany(list_of_convs, function(err) {
      if (err) throw err;
  });
}

async function checkDatabases(url) {
  const client = new MongoClient(url);
  try {
      await client.connect();
      return true;
  } catch (error) {
      return false;
  } finally {
      await client.close();
  }
}

async function checkIfDatabaseExists(client, db_name) {
  const listDatabases = await client.db('admin').admin().listDatabases();
  return listDatabases.databases.some(db => db.name === db_name);
}

async function createDatabase(client, db_name, collectionName) {
  await client.db(db_name).createCollection(collectionName);
}

async function insertCollectionIntoDB(client, collectionName, data) {
  await client.db('ChatWebDB').collection(collectionName).insertOne(data);
}

const { readFileSync } = require('fs');
const { MongoClient } = require('mongodb');

async function main() {
    try {
        const raw_config = readFileSync('config.json', 'utf-8');
        const config = JSON.parse(raw_config);

        const url = config.url;

        const is_connected = await checkDatabases(url);
        if (!is_connected) {
            console.log("Database is not connected");
            return false;
        }

        const client = new MongoClient(url);
        await client.connect();

        const db_name = 'ChatWebDB';
        const dbExists = await checkIfDatabaseExists(client, db_name);

        if (!dbExists) {
            await createDatabase(client, 'ChatWebDB', 'conversations');
        }

        const conversations = client.db('ChatWebDB').collection('conversations');
        const num_of_conversations = await conversations.countDocuments();

        console.log(`There are ${num_of_conversations} collections in the database`);

        if (num_of_conversations === 0) {
            await insertCollectionIntoDB(client, 'conversations', 'conversations');
        }
    } finally {
        await client.close();
    }
}



main();
