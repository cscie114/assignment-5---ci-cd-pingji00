import React, {useState, useEffect} from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import fetch from 'node-fetch'

const ServerlessPage = () => {
  const [weatherData, setWeatherData] = useState({});
  useEffect(
    () => {
      fetch("/.netlify/functions/weatherApi", {
        method: "GET"
      })
      .then(
        (result) =>{
          return result.json()
        }
      )
      .then(
        json => {
          setWeatherData(json.data.current)
        }
      )
      .catch(
        (error) => alert(error)
      )
    }, [weatherData.title]
  );

  console.log("Type of weatherData is " + typeof(weatherData))
  console.log(weatherData.current)

  return (
    <Layout pageTitle="Serverless Weather: Boston">
      <ul>
        {
          Object.entries(weatherData).map(
            ([key, value]) => {
              return <li key={key}><strong>{key}:</strong> {value.toString()}</li>
            }
          )
        }
      </ul>
      <hr></hr>
      <h3>Building on the <a href="https://www.weatherapi.com/docs/">weatherapi</a></h3>
      <hr></hr>
    </Layout>
  )
}

export const Head = () => <Seo title="Serverless Function"></Seo>
export default ServerlessPage
