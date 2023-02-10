import { graphql, useStaticQuery } from 'gatsby';

export const InvestorFragment = graphql`
  fragment InvestorFragment on Query {
    sequoia: imageSharp(fluid: { originalName: { regex: "/sequoia/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    btov: imageSharp(fluid: { originalName: { regex: "/btov/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    visionariesClub: imageSharp(fluid: { originalName: { regex: "/visionariesClub/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    creathor: imageSharp(fluid: { originalName: { regex: "/creathor/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    viPartners: imageSharp(fluid: { originalName: { regex: "/viPartners/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    daniel: imageSharp(fluid: { originalName: { regex: "/daniel/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    luciana: imageSharp(fluid: { originalName: { regex: "/luciana/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    andreas: imageSharp(fluid: { originalName: { regex: "/andreas/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    myke: imageSharp(fluid: { originalName: { regex: "/myke/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    paul: imageSharp(fluid: { originalName: { regex: "/paul/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    harry: imageSharp(fluid: { originalName: { regex: "/harry/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    xavier: imageSharp(fluid: { originalName: { regex: "/xavier/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
    mathilde: imageSharp(fluid: { originalName: { regex: "/mathilde/" } }) {
      fixed(width: 128, height: 128) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;

export const getInvestorImages = () =>
  useStaticQuery(graphql`
    query {
      ...InvestorFragment
    }
  `);
