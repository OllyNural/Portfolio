import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Check, X } from "react-feather";

import pricing from "./pricing.module.css"

const Pricing = () => {
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQueryPricing {
            site {
              siteMetadata {
                name
              }
            }
          }
        `}
        render= {data => (
          <div className={pricing.container}>
            <div className={pricing.model}>
              <h1>Pricing</h1>
            </div>
            <div className={`${pricing.option} ${pricing.low}`}>
              <div className={pricing.tier}>
                <h3>Starter</h3>
                <hr />
                <span className={pricing.currency}>Free!</span>
                <hr />
                <span>What you'd get </span>
              </div>
              <hr />
              <ul className={pricing.ul}>
                <li className={pricing.li}>
                  <Check color="green"/> Some code
                </li>
                <li className={pricing.li}>
                  <X color="red"/> More Code
                </li>
                <li className={pricing.li}>
                  <X color="red"/> A working website
                </li>
                <li className={pricing.li}>
                  <X color="red"/> Free stickers
                </li>
                <li className={pricing.li}>
                  <X color="red"/> 24/7 Support
                </li>
              </ul>
            </div>
            <div className={`${pricing.swell} ${pricing.option} ${pricing.medium}`}>
              <h2>Individual</h2>
              <hr />
              <span className={pricing.currency}>£</span><span className={pricing.price}>15</span><span className={pricing.timecost}>   /month</span>
              <hr />
              <span>What you'd get </span>
              <hr />
              <ul className={pricing.ul}>
                <li className={pricing.li}>
                  <Check color="green"/> Some code
                </li>
                <li className={pricing.li}>
                  <Check color="green"/> More Code
                </li>
                <li className={pricing.li}>
                  <Check color="green"/> A working website
                </li>
                <li className={pricing.li}>
                  <X color="red"/> Free stickers
                </li>
                <li className={pricing.li}>
                  <X color="red"/> 24/7 Support
                </li>
              </ul>
            </div>
            <div className={`${pricing.option} ${pricing.high}`}>
              <h3>Business</h3>
              <hr />
              <span className={pricing.currency}>£</span><span className={pricing.price}>50</span><span className={pricing.timecost}>   /month</span>
              <hr />
              <span>What you'd get </span>
              <hr />
              <ul className={pricing.ul}>
                <li className={pricing.li}>
                  <Check color="green"/> Some code
                </li>
                <li className={pricing.li}>
                  <Check color="green"/> More Code
                </li>
                <li className={pricing.li}>
                  <Check color="green"/> A working website
                </li>
                <li className={pricing.li}>
                  <Check color="green"/> Free stickers
                </li>
                <li className={pricing.li}>
                  <Check color="green"/> 24/7 Support
                </li>
              </ul>
            </div>
          </div>
        )}
        />
    )
}

export default Pricing;