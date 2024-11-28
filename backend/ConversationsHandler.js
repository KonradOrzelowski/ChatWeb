const { MongoClient } = require("mongodb");

async function get_all_from_collection(db_name, collection_name){
    console.log("get_all_from_collection");
    
    try {
        const client = new MongoClient(process.env.MONGODB_URL);
        await client.connect();
        const conversations = await client.db(db_name).collection(collection_name);
        const array_of_convs = await conversations.find({}).toArray();
        await client.close();

        var dict_of_convs = {};

        array_of_convs.forEach((element) => {
            dict_of_convs[element._id.toString()] = element;
        });
    } catch (error) {
        console.error("Error retrieving conversations:", error);
    }

    return(dict_of_convs);
    
}

function get_list_of_titles(list_of_convs){
    var list_of_titles = [];
    try {
        for (var [, value] of Object.entries(list_of_convs)) {
            list_of_titles.push({"title": value.title, "_id": value._id, "lastChangeDate": value.lastChangeDate});
        }
    } catch (error) {
        console.error('get_list_of_titles An error occurred:', error);
    }
    return list_of_titles;
}

module.exports.get_all_from_collection = get_all_from_collection;
module.exports.get_list_of_titles = get_list_of_titles;