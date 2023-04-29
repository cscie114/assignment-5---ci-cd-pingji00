import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ParksPage = ({ data }) => {
  const states = data.allStatesJson.nodes
  return (
        <Layout pageTitle="All States">
            <ul>
                {states.map((state) => {
                  return (
                        <li key={state.id}>
                            <Link to={`/states/${state.code.toLowerCase()}`}>
                                {state.name} ({state.code})
                            </Link>
                        </li>
                  )
                })}
            </ul>
        </Layout>
  )
}
export const query = graphql`
    query StatesPageQuery {
        allStatesJson {
            nodes {
              id
              name
              code
            }
          }
      }
`
export const Head = () => <Seo title="All parks list"></Seo>

export default ParksPage
