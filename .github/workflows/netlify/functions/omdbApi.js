const fetch = require('node-fetch')
const handler = async function (event, context) {
    const key = process.env.MOVIE_API_KEY;
    const { movieId } = event.queryStringParameters;

    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=${key}&i=${movieId}`, {
            headers: {
                Accept: 'application/json',
            },
        })
        if (!response.ok) {
            // response fail
            return {
                statusCode: response.status,
                body: response.statusText
            }
        }
        
        const data = await response.json()

        return {
            statusCode: 200,
            body: JSON.stringify({ data })
        }

    } catch(error) {
        // output to netlify function log
        console.log(err)
        return {
            statusCode: 500,
            //  could be a custom message or JSON.stringify(err)
            body: JSON.stringify({ msg: error.message })
        }
    }

}
module.exports = {handler}