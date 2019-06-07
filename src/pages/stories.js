import React from 'react'
import Layout from '../components/layout'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Stories = () => {
    const pageQuery = useStaticQuery(graphql`
        {
            allInstaNode {
                edges {
                    node {
                        id
                        username
                        caption
                        likes
                        localFile {
                            childImageSharp {
                                fixed(width: 200, height: 200) {
                                    ...GatsbyImageSharpFixed
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    const stories = pageQuery.allInstaNode.edges

    return (
        <Layout>
            <h1><i>@{ stories[0].node.username.toUpperCase() }</i></h1>
            <hr/>
            <br/>
            <div className="stories_gallery">
                {
                    stories.map((storie) => 
                        (
                            <Img key={storie.node.id} fixed={storie.node.localFile.childImageSharp.fixed} /> 
                        )
                    )
                }
            </div>
        </Layout>
    )
}

export default Stories