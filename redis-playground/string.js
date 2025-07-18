const client = require('./client');

async function init() {
    try {
        const value = await client.get('msg:3');
        console.log('Retrieved value:', value);
        await client.set("university", "Fisk University")
        const value2 = await client.get('university');
        // await client.expire("university", 10) # remove it from redis memoery after 10 second
        console.log('University value:', value2);
        return value, value2;
    } catch (error) {
        console.error('Error getting string:', error);
        throw error;
    }
}

init();

