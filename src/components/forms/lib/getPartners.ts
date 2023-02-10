import { graphql, useStaticQuery } from 'gatsby';

const partnersQuery = graphql`
  query {
    contentfulSimpleList(title: { eq: "partnership" }) {
      list
    }
  }
`;

export const getPartners = (): string[] => {
  const result = useStaticQuery(partnersQuery);
  return result.contentfulSimpleList.list.sort();
};
