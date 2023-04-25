import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const StatePage = ({ pageContext, data }) => {
  const parks = data.allPark.nodes
  const state = data.allStatesJson.nodes[0]
  return (
        <Layout pageTitle={state.name}>
            <p>{parks.length} in here</p>
            <ul>
                {parks.map((park) => {
                  return (
                        <li key={park.parkCode}>
                            <Link to={`/parks/${park.parkCode}`}>
                                {park.fullName}
                            </Link>
                        </li>
                  )
                })}
            </ul>
            <Link to="/states/">Back to states list</Link>
        </Layout>
  )
}

export const query = graphql`
    query StateParksQuery($code: String) {
        allPark(filter: {states: {glob: $code}}) {
            nodes {
                id
                parkCode
                fullName
                states
                description
                url
                images {
                    altText
                    caption
                    credit
                    title
                    url
                }
            }
        }
        allStatesJson(filter: {code: {eq: $code}}) {
            nodes {
                id
                name
                code
            }
        }
    }
`
export const Head = () => <Seo title="National Park"></Seo>

export default StatePage
