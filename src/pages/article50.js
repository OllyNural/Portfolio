import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import '../../node_modules/react-vis/dist/style.css'
import article50 from './article50.module.css'

import Layout from '../components/layout'
import SEO from '../components/seo'
import LineBreak from '../components/line-break'
import RadialChartCountry from '../components/article50/RadialChartCountryClass'
import RadialChartArea from '../components/article50/RadialChartAreaClass'
import RadialChartAreaRatio from '../components/article50/RadialChartAreaRatioClass'
import VerticalBarSeriesCountry from '../components/article50/VerticalBarSeriesCountry'
import VerticalBarSeriesArea from '../components/article50/VerticalBarSeriesArea'
import VerticalBarSeriesRatioConstituency from '../components/article50/VerticalBarSeriesRatioConstituency'

const getIntro = () => (
    <div>
        <h1 className={article50.pageTitle} > Article50 petition data visualisation</h1>
        <p> After being linked the petition below requesting to revoke Article 50, I thought it could be interesting to visualise some of the data provided by the government website.</p>
        <p> This is my first attempt at any sort of data visualisation so feel free to request more graphs/send some feedback at <i>oliver.nural@gmail.com</i> </p>
        <p> I haven't really done much styling, so realistically this is in as much of a mess as our country is. </p>
        <p> <i> Disclaimer: This is purely the result of procrastination on a Saturday afternoon. </i> </p>
    </div>
)

const getMetaData = ({ data, links }) => {
    const selfLink = links.self
    const voteLink = selfLink.slice(0, selfLink.length - 5)
    const action = data.attributes.action;
    const background = data.attributes.background;
    const sigCount = data.attributes.signature_count;
    return (
        <div className="referendum-meta" >
            <h2><a href={voteLink} className={article50.articleLink} target='article50'>{action}</a></h2>
            <h3>Description</h3>
            <p>{background}</p>
            <p>Signature Count: <b><i>{sigCount}</i></b></p>
            <p><i> This website has been generated from the data at: <a href={selfLink} target='article50'>{selfLink}</a> </i></p>
        </div>
    )
}

const IndexPage = () => (
    <StaticQuery
        query={graphql`
        query {
            allArticle50Votes(filter: {id: {ne: "dummy"}}) {
              edges {
                node {
                  id
                  links {
                    self
                  }
                  data {
                    type
                    alternative_id
                    attributes {
                      action
                      background
                      signature_count
                      signatures_by_country {
                        name
                        code
                        signature_count
                      }
                      signatures_by_constituency {
                        name
                        ons_code
                        mp
                        signature_count
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allArticle50Votes }) => 
            <Layout>
                <SEO title="Oliver Nural | Article50 Data Visualisation" keywords={[`article50`, `petition`, `data visualisation`]} />
                {getIntro()}
                <LineBreak />
                {getMetaData(allArticle50Votes.edges[0].node)}
                <LineBreak />
                <h3> Radial Chart of Votes by Country </h3>
                <p>Showing us that the UK accounted for the vast majority of votes is no suprise.</p>
                <RadialChartCountry
                    data={allArticle50Votes.edges[0].node}
                    width={500}
                    height={500} />


                <h3> Logarithmic Bar Chart of Votes by Country </h3>
                <p>This lets us easily see the list of countries who voted in order of the largest number of votes. </p>
                <VerticalBarSeriesCountry 
                    data={allArticle50Votes.edges[0].node}
                    width={500}
                    height={500} />


                <LineBreak />
                <h3> Chart of Votes by constituency within the United Kingdom </h3>
                <p> Upon first glance this looks like a massive amount of votes for England comparitive to other countries, but it does not take into account constituency population.</p>
                <RadialChartArea
                    data={allArticle50Votes.edges[0].node}
                    width={500}
                    height={500} />


                <LineBreak />
                <h3> Ratio of voters per country by population within the United Kingdom</h3>
                <p><i>The populations were taken from: <a href="https://en.wikipedia.org/wiki/Countries_of_the_United_Kingdom_by_population" target="wiki">https://en.wikipedia.org/wiki/Countries_of_the_United_Kingdom_by_population </a></i></p>
                <p> Interestingly the votes look a lot more even, with both Wales and Scotland actually voting more than England relative to their population.</p>
                <RadialChartAreaRatio
                    data={allArticle50Votes.edges[0].node}
                    width={500}
                    height={500} />

                <LineBreak />
                <h3> Largest voting areas for each constituency within the United Kingdom</h3>
                <p>Each of these list the counties within each of England, Scotland, Wales, and Northern Ireland in the order of the most voted. However this is heavily skewed by city and county sizes.</p>
                <p>However, it does interestingly show that England voted a lot more consistently across most counties, whilst Scotland, Wales and Northern Ireland both have a few large outliers and many more reserved areas.</p>
                <h4>England</h4>
                <VerticalBarSeriesArea
                    data={allArticle50Votes.edges[0].node}
                    area={'E'}
                    height={500} />
                <h4>Scotland</h4>
                <VerticalBarSeriesArea
                    data={allArticle50Votes.edges[0].node}
                    area={'S'}
                    height={500} />
                <h4>Wales</h4>
                <VerticalBarSeriesArea
                    data={allArticle50Votes.edges[0].node}
                    area={'W'}
                    height={500} />
                <h4>Northern Ireland</h4>
                <VerticalBarSeriesArea
                    data={allArticle50Votes.edges[0].node}
                    area={'N'}
                    height={500} />

                <LineBreak />
                <h3> Ratio of voting areas for each constituency against population within the UK </h3>
                <p><i>The population per constituency was found <a href="https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/populationestimates/datasets/parliamentaryconstituencymidyearpopulationestimates" target="constituencyvotes">here</a>.</i></p>
                <p> Unfortunately, I could only currently find data for England and Wales. </p>
                <h4>England</h4>
                <VerticalBarSeriesRatioConstituency
                    data={allArticle50Votes.edges[0].node}
                    area={'E'}
                    height={500} />

                <h4>Wales</h4>
                <VerticalBarSeriesRatioConstituency
                    data={allArticle50Votes.edges[0].node}
                    area={'W'}
                    height={500} />


                <LineBreak />
                <p><i>Made with <a href="https://github.com/uber/react-vis">React-Vis</a></i></p>
            </Layout>
        }
        />

)

export default IndexPage
