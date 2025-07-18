const client = require('./client');

async function init() {
    try {
        // await client.lpush("number", "one")
        // await client.lpush("number", "two")
        // await client.lpush("number", "three")
        // const result = await client.rpop("number")
        const result = await client.blpop("number", 80)

        console.log(result)
        return result
    } catch (error) {
        console.error('Error getting list:', error);
        throw error;
    }
}

init();

