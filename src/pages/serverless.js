import React, {useState, useEffect} from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import fetch from 'node-fetch'

const ServerlessPage = () => {
  const [charData, setCharData] = useState({});
  useEffect(
    () => {
      fetch("/.netlify/functions/omdbApi?movieId=tt1371111", {
        method: "GET"
      })
      .then(
        (result) =>{
          return result.json()
        }
      )
      .then(
        json => {
          console.log(json.data)
          setCharData(json.data)
        }
      )
      .catch(
        (error) => alert(error)
      )
    }, [charData.title]
  );



  return (
    <Layout pageTitle="Serverless function">
      <h4>IMDB API Call</h4>
      <p>Building on the Atlas metaphor: Serverless Functions</p>
      <ul>
        {
          Object.entries(charData).map(
            ([key, value]) => {
              return <li key={key}><strong>{key}:</strong> {value.toString()}</li>
            }
          )
        }
      </ul>
    </Layout>
  )
}

export const Head = () => <Seo title="Serverless Function"></Seo>
export default ServerlessPage
