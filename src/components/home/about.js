import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import { Repeat, Code, Sliders } from "react-feather";

import about from './about.module.css';

const About = () => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQueryAbout {
          site {
            siteMetadata {
              name
            }
          }
        }
      `}
      render={data => (
        <div className={about.container} >
          <div className={about.header}>
            <h1> What we do </h1>
          </div>
          <div className={about.info}>
            <p>We build beautiful user experiences that work on all devices, even the ones that don't exist yet.</p>
            <p>Over <b>28,456</b> lines of code, and around <b>38</b> hot drinks consumed this week.</p>
            <h4> See our process below... </h4>
          </div>
          <div className={about.colContainer}>
            <div className={about.singleCol}>
              <Code size={`5em`}/>
              <h2> We Code </h2>
              <p> You know that thing that you're on right now? Yeah we make those. </p>
              <p> We make only the best <del>Wordpress</del> <b>bespoke</b> websites using the cleanest, bug-free code this side of Central London. </p>
            </div>
            <div className={about.singleCol}>
              <Repeat size={`5em`}/>
              <h2> We Iterate </h2>
              <p> No-one is perfect. <i>Especially not us.</i> Therefore we say we use Agile methodologies to over our mistakes, and iterate many times on our projects before we are completely satisfied.</p>
              <p> Iteration, not irritation. </p>
            </div>
            <div className={about.singleCol}>
              <Sliders size={`5em`}/>
              <h2> We Tune </h2>
              <p> We make sure we fine tune our <del>templates</del> <b>still bespoke</b> to fit your exact needs, whether that's having 3 pictures on your site, <b>or 4.</b></p>
              <p> There's probably a pun about Radio Stations somewhere </p>
            </div>
          </div>
        </div>
      )}
    />
  )
}

export default About