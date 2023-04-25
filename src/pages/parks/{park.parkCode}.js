import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import Park from '../../components/park'

const ParkPage = ({ data }) => {
  const park = data.allPark.nodes[0]

  return (
        <Layout pageTitle={park.fullName}>
            <Park park={park}></Park>
        </Layout>

  )
}

export const query = graphql`
    query ParkPageQuery($parkCode: String) {
        allPark(filter: {parkCode: {eq: $parkCode}}) {
            nodes {
                id
                parkCode
                states
                url
                description
                fullName
                images {
                    altText
                    caption
                    credit
                    title
                    url
                }
            }
        }

    }
`
export const Head = () => <Seo title="National Park"></Seo>

export default ParkPage
