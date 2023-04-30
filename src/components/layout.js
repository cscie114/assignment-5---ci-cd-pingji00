import * as React from 'react'
import { Link } from 'gatsby'
import * as layoutStyles from './layout.module.scss'

const Layout = ({ pageTitle, children }) => {
  return (
        <div className={layoutStyles.container}>
            <header>
                <h1>Assignment 4: Gastby</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/parks/'>All Parks</Link>
                        </li>
                        <li>
                            <Link to='/states/'>All States</Link>
                        </li>
                        <li>
                            <Link to='/serverless/'>Serverless</Link>
                        </li>                    </ul>
                </nav>
            </header>
            <main>
                <h2>{pageTitle}</h2>
                {children}
            </main>
        </div>
  )
}

export default Layout
