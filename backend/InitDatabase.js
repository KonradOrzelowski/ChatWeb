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
        index++;
    }
    return { list_of_titles, list_of_convs };
}

// const jsonFiles = findJsonFiles('conversations');


const { MongoClient } = require('mongodb');


async function createCollectionAndInsert(db, collectionName, data) {
    const collection = db.collection(collectionName);
  
    // Create the collection if it doesn't exist
    await db.createCollection(collectionName);
  
    // Insert one item into the collection
    const result = await collection.insertOne(data);
    console.log(`Inserted ${result.insertedCount} document into the collection`);
  }


async function checkDatabases(url) {
    const client = new MongoClient(url);
    try {
      await client.connect();
      return true
    }catch (err) {
      return false
    }
    finally {
      await client.close();
    }
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
    const connection2admin = client.db('admin');
    const list_of_databases = await connection2admin.admin().listDatabases();

    var name_db = 'ChatWebDB'
    var db_exist = false;

    list_of_databases.databases.forEach(
        db => {
            if(db.name == name_db) db_exist = true;
        }
    );
    console.log(db_exist);
    if (!db_exist) {
      client.db('ChatWebDB').createCollection("conversations");
    }

    const conversations = await client.db('ChatWebDB').collection('conversations');
    const array_of_convs = await conversations.find({}).toArray();
    const len_convs = array_of_convs.length;
    console.log(len_convs);

    if ( len_convs == 0) {
        console.log("There is no collections in database");
        var list_of_convs = [];

        // find all files in folder conversations
        const dir_conversations = findJsonFiles('conversations');
        dir_conversations.forEach(conv => {
            const rawFile = fs.readFileSync(conv);
            const jsonFile = JSON.parse(rawFile);
            list_of_convs.push(jsonFile);
        })
       

        await client.db('ChatWebDB').collection('conversations').insertMany(list_of_convs, function(err, result) {
          if (err) throw err;
        });        

    }
    await client.close()
}

main()