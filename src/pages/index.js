import * as React from 'react'
import { graphql } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import Seo from '../components/seo'

const IndexPage = ({ data }) => {
  const images = data.allAcadimgJson.nodes
  return (
    <Layout pageTitle="One of my favorite: Acadia National Park">
      <StaticImage src="../images/acadia.jpg" height={1200} alt="Acadia national park | Image by Michael Rickard / Getty Images"></StaticImage>
      <ul>
        {images.map((image) => {
          const url = getImage(image.localImages)
          return (
            <li key={image.id}>
              <GatsbyImage image={url} />
              <p>{image.caption}</p>
              <p>{image.credit}</p>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query acdaImages {
    allAcadimgJson {
      nodes {
        localImages {
          childImageSharp {
            gatsbyImageData(sizes: "600", aspectRatio: 1.5)
          }
        }
        altText
        caption
        credit
        title
        id
      }
    }
  }
`

export const Head = () => <Seo title="Home Page"></Seo>
export default IndexPage
