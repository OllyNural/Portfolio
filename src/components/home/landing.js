import React from 'react';
import { StaticQuery, graphql } from "gatsby";

import landing from "./landing.module.css";

const Landing = () => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQueryLanding {
          site {
            siteMetadata {
              name
            }
          }
        }
      `}
      render={data => (
        <div className={landing.container}>
          <div className={landing.mainDiv} >
          </div>
          <div className={landing.mainDiv2} >
          </div>
          <div className={landing.mainDiv3} >
          </div>
          <h1 className={landing.mainText}>
            Hello. <br /> We're reinventing code.
          </h1>
        </div>
      )}
    />
  )
}

export default Landing;