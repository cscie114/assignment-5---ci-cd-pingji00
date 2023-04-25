require("dotenv").config();
const EleventyFetch = require("@11ty/eleventy-fetch");


// starter code to create graphql objects from an array of JSON assets

exports.sourceNodes = async ({
    actions,
    createContentDigest,
    createNodeId,
  }) => {
    
    const { createNode } = actions
    
    // Fetch the data from national parks API
    const parksData = await getParks();
    
    // loop through data and create Gatsby nodes
    parksData.data.forEach(park =>
        createNode({
            ...park,
            id: createNodeId(park.parkCode), 
            parent: null,
            children: [],
            internal: {
                type: 'Park',   // name of collection in graphql schema
                contentDigest: createContentDigest(park),
            },
        })
    )
    return
}

async function getParks() {
    const baseUrl = "https://developer.nps.gov/api/v1/parks";
    const UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3";
    const apiKey = process.env.NPS_API_KEY;

    // Deal with 1000 request/hour limits
    const limit = 100;
    const cacheDuration = "1d";

    // get limit time at a time, start at 0
    let start = 0;
    
    let params = {
        start: start,
        limit: limit
    };

    // let reqHeaders = getNpsHeaders();

    let totalParks;
    let nextStart;
    let allParksData = {data:[]};
    let requestUrl;

    do {
        try {
            let paramsObj = new URLSearchParams(params);
            let requestUrl = `${baseUrl}?${paramsObj.toString()}`;
            let parksData = await EleventyFetch(requestUrl, {
                duration: cacheDuration,
                type: "json",
                fetchOptions: {
                    headers: {
                        'User-Agent': UserAgent,
                        'X-Api-Key': apiKey
                    }
                },
                directory: ".11tycache"
            });
            
            // add it to array
            allParksData.data.push(...parksData.data);
            allParksData.total = parksData.total;

            // update until it's done
            totalParks = parksData.total;
            lastStart = params.start;
            nextStart = lastStart + params.limit;
            params.start = nextStart;

        } catch (err) {
            console.log(`Wrong! request URL is ${requestUrl}  #######   ${err}`);
        }
    } while (nextStart <= totalParks);
    console.log("Total number of all parks is " + allParksData.data.length);
    return(allParksData);
}