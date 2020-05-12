import { graphql } from 'gatsby'

export const backGroundBlur = graphql`
    fragment backGroundBlur on File {
        childImageSharp {
            fluid(maxWidth: 1920, srcSetBreakpoints: [600, 992]) {
                ...GatsbyImageSharpFluid_withWebp
                originalName
            }
        }
    }
`

export const fadeIn = graphql`
    fragment fadeIn on File {
        childImageSharp {
            fluid(maxWidth: 1920, srcSetBreakpoints: [600, 992]) {
                ...GatsbyImageSharpFluid_noBase64
                originalName
            }
        }
    }
`
