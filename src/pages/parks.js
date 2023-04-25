import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

const ParksPage = ({ data }) => {
  const parks = data.allPark.nodes
  return (
        <Layout pageTitle="All parks">
            <ul>
                {parks.map((park) => {
                  return (
                        <li key={park.id}>
                            <Link to={'/parks/' + park.parkCode}>
                                {park.fullName}
                            </Link>
                        </li>
                  )
                })}
            </ul>
        </Layout>
  )
}
export const query = graphql`
    query ParksPageQuery {
        allPark {
          nodes {
            id
            name
            parkCode
            states
            fullName
          }
        }
      }
`
export const Head = () => <Seo title="All parks list"></Seo>

export default ParksPage
