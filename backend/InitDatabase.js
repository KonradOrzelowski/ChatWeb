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
    const adminDb = client.db('admin');
    const databases = await adminDb.admin().listDatabases();

    var name_db = 'ChatBotDB'
    var db_exist = false;
    databases.databases.forEach(
        db => {
            if(db.name == name_db) db_exist = true;
        }
    );
    
    const db = client.db(name_db);

    // chekc if collection exist
    const collections = await db.collections();
    var collection_exist = false;
    collections.forEach(
        collection => {
            if(collection.name == 'conversations') collection_exist = true;
        }
    );
    console.log(db_exist, collection_exist);
    if(db_exist && !collection_exist){
        // Create a collection
        await adminDb.createCollection(name_db);
        const db = client.db(name_db);
        const conversations = findJsonFiles('conversations');
        //create collection empty
        // await createCollectionAndInsert(db, 'conversations', {});
        //insert data
        var list_of_convs = [];
        conversations.forEach(conv =>{
            // console.log(conv);

            const rawFile = fs.readFileSync(conv);
            const jsonFile = JSON.parse(rawFile);
            list_of_convs.push(jsonFile);
        })
        console.log(list_of_convs); 
        // add data to collection
        await createCollectionAndInsert(db, 'conversations', list_of_convs);
        // await createCollectionAndInsert(db, 'conversations', conversations);
    }

    await client.close()
}

main()


// const conversations = findJsonFiles('conversations');

// var list_of_convs = [];
// conversations.forEach(conv =>{
//     const rawFile = fs.readFileSync(conv);
//     const jsonFile = JSON.parse(rawFile);
//     // console.log(jsonFile.conversation);
//     list_of_convs.push(jsonFile);
// })

// console.log(list_of_convs);