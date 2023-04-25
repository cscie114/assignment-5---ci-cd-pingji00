### Starter code for Assignment 4 - Gatsby
#### Harvard CSCI E114

This is a gatsby website of national parks. To run it, 
1. get the [API key](https://www.nps.gov/subjects/developer/) and save it in a `.env` file
2. run `npm build`
3. visit it at (http://localhost:8000/)

### Assignment requiement
#### React components
1. `components/layout.js`
2. `components/seo.js`

#### Data sources
* remote API: `gatsby-node.js`
* file system: `data/states.js`
* use two source together `pages/parks/{park.parkCode}.js`, `localhost:8000/parks/grsp/`

#### Create pages from data programmatically
* one page per element in the set: `components/park.js`
* a page that lists and links to each of the pages of that data set: `pages/parks/{park.parkCode}.js`

#### Static and dynamic Images
* both static and dynamic image are on `pages/index.js`
* the hero image is staic image.
* the thumbnails under it are dynmaic iamges. the source is from `data/acadimg.json`