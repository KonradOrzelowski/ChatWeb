const getConfig = require("./get_config");

const config = getConfig();
const url = config.url;

const { MongoClient } = require("mongodb");

async function get_all_from_collection(db_name, collection_name){
    const client = new MongoClient(url);
    await client.connect();
    const conversations = await client.db(db_name).collection(collection_name);
    const array_of_convs = await conversations.find({}).toArray();
    await client.close();

    var dict_of_convs = {};

    array_of_convs.forEach((element) => {
  
        dict_of_convs[element._id.toString()] = element;
  
    });

    return(dict_of_convs);

    
}

function get_list_of_titles(list_of_convs){
    var list_of_titles = [];
    for (var [, value] of Object.entries(list_of_convs)) {
    
        list_of_titles.push({"title": value.title, "_id": value._id});

    }
    return list_of_titles;
}

module.exports.url = url;
module.exports.get_all_from_collection = get_all_from_collection;
module.exports.get_list_of_titles = get_list_of_titles;