require('dotenv').config()
const eleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
    let baseUrl = "https://developer.nps.gov/api/v1/parks?";
    let apiKey = process.env.NPS_API_KEY;
    
    let requestParams = {
        limit: 600
    }
    let params = new URLSearchParams(requestParams)
    let queryString = params.toString();
    
    let requestUrl = baseUrl + queryString + "&api_key=" + apiKey;
    console.log(requestUrl)
    
    try {
        let parksData = await eleventyFetch(requestUrl, {
            duration: "1d",
            type: "json",
            fetchOptions: {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
                }
            }
        });
        return(parksData);
    } catch (err) {
        console.error("=============Wrong==============");
        console.log(err);
    }
}

