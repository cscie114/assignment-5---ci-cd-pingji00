require('dotenv').config();
const eleventyFetch = require('@11ty/eleventy-fetch');

module.exports = async function() {
  const baseUrl = 'https://developer.nps.gov/api/v1/parks?';
  const state = 'MA';
  const apiKey = process.env.NPS_API_KEY;

  const requestParams = {
    stateCode: state,
    limit: 600,
  };
  const params = new URLSearchParams(requestParams);
  const queryString = params.toString();

  const requestUrl = baseUrl + queryString + '&api_key=' + apiKey;
  console.log(requestUrl);

  try {
    const parksData = await eleventyFetch(requestUrl, {
      duration: '1d',
      type: 'json',
      fetchOptions: {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
        },
      },
    });
    return (parksData);
  } catch (err) {
    console.error('Wrong !!!');
    console.log(err);
  }
};

