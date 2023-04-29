import * as React from 'react'
import * as parkStyles from './park.module.scss'

const Park = ({ park }) => {
  return (
    <div>

      <p>{park.description}</p>
      <h4>More info can be found at <a href={park.url}>here</a></h4>
      <ul className={parkStyles.gallery}>
        {park.images.map((image, index) => (
          <li key={index}>
            <img src={image.url} alt={image.altText} width="300"/>
            <p className={parkStyles.credit}>Photo credit: {image.credit}</p>
            <p className={parkStyles.caption}>{image.caption}</p>
          </li>
        ))}

      </ul>
    </div>
  )
}

export default Park
