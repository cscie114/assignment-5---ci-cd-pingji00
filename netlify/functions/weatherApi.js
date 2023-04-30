const fetch = require('node-fetch')

exports.handler = async function (event, context) {

    const key = process.env.FORCAST_API_KEY;
    const { cityId } = event.queryStringParameters;
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=Boston`;

    const options = {
        // method: 'GET',
        headers: {
            // 'X-RapidAPI-Key': key,
            // 'X-RapidAPI-Host': 'forecast9.p.rapidapi.com',
            Accept: 'application/json',
        }
    };

    try {
        console.log(url);
        const response = await fetch(url, options);

        if (!response.ok) {
            // response fail
            return {
                statusCode: response.status,
                body: response.statusText
            }
        }
        
        const data = await response.json()
        console.log(data);

        return {
            statusCode: 200,
            body: JSON.stringify({ data })
        }

    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            //  could be a custom message or JSON.stringify(err)
            body: JSON.stringify({ msg: error.message })
        }
    }

}