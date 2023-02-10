/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { redirects } = require('./src/redirects.js');

const { languages, langPrefix } = require('./src/i18n-config.js');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  return new Promise((resolve) => {
    if (!page.component.endsWith('.mdx')) {
      deletePage(page);
      languages.forEach((language) => {
        const newPage = Object.assign({}, page, {
          originalPath: page.path,
          path: `${langPrefix(language)}${page.path}`,
          context: { lang: language },
        });
        createPage(newPage);
      });
    }

    resolve();
  });
};

// schema customization to allow Gatsby to query optional Contentful fields
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefinitions = `
  type ContentfulChecklistWithScreenshot implements Node {
    description: String
    checklist: [String]
    longDescription: contentfulChecklistWithScreenshotLongDescriptionTextNode @link(by: "id", from: "longDescription___NODE")
  }
  type ContentfulCallToAction2021 implements Node {
    linkText: String
    linkUrl: String
  }
  type ContentfulLogoBanner implements Node {
    description: String
  }
  type ContentfulTestimonialCardBuildingBlock implements Node {
    linkText: String
    linkUrl: String
  }
  type ContentfulContentWithChecklist implements Node {
    linkText: String
    linkUrl: String
  }
  type ContentfulTitleWithGraphic implements Node {
    buttons: [ContentfulButton] @link(by: "id", from: "buttons___NODE")
  }
  union EntryProps = ContentfulTopBanner | ContentfulLogoBanner | ContentfulSelectableCardsWithScreenshots | ContentfulFeatureGrid | ContentfulTestimonialCards | ContentfulTestimonials | ContentfulTitleWithGraphic | ContentfulContentWithChecklist | ContentfulCallToAction2021 | ContentfulChecklistWithScreenshot | ContentfulLongText | ContentfulStaticBlock | ContentfulLargeTestimonial
  type ContentfulDemoPage2021 implements Node {
    title: String
    requesterType: String
    content: [EntryProps] @link(by: "id", from: "content___NODE")
  }
  type ContentfulFrontPage2021 implements Node {
    title: String
    entries: [EntryProps] @link(by: "id", from: "entries___NODE")
  }
  type ContentfulFeaturePage2021HeaderWithMedia {
    raw: String
    references: [ContentfulAsset] @link(by: "id", from: "references___NODE")
  }
  type ContentfulFeaturePage2021SysContentTypeSys {
    type: String
    linkType: String
    id: String
  }
  type ContentfulFeaturePage2021SysContentType @derivedTypes {
    sys: ContentfulFeaturePage2021SysContentTypeSys
  }
  type ContentfulFeaturePage2021Sys @derivedTypes {
    type: String
    contentType: ContentfulFeaturePage2021SysContentType
    revision: Int
  }
  type ContentfulFeaturePage2021 implements ContentfulReference & ContentfulEntry & Node @derivedTypes @dontInfer {
    contentful_id: String!
    node_locale: String!
    indexable: Boolean
    title: String
    entries: [EntryProps] @link(by: "id", from: "entries___NODE")
    buttons: [ContentfulButton] @link(by: "id", from: "buttons___NODE")
    header: String
    slug: String
    description: String
    motivationText: String
    headerWithMedia: ContentfulFeaturePage2021HeaderWithMedia
    graphic: ContentfulAsset @link(by: "id", from: "graphic___NODE")
    spaceId: String
    createdAt: Date @dateformat
    updatedAt: Date @dateformat
    sys: ContentfulFeaturePage2021Sys
  }
  type ContentfulCustomerStory implements Node {
    title: String
  }
  type ContentfulPage implements Node {
    title: String
    entries: [EntryProps] @link(by: "id", from: "entries___NODE")
  }
  type GreenhouseJob implements Node {
    gh_Id: String
  }
`;
  createTypes(typeDefinitions);
};

const pageQuery = `
{
  allContentfulPage(limit: 1000) {
    edges {
      node {
        id
        slug
        namespace
      }
    }
  }
}
`;

const customerStoryQuery = `
{
  allContentfulCustomerStory(limit: 1000) {
    edges {
      node {
        id
        slug
        isOurStory
      }
    }
  }
}
`;

const marketplaceQuery = `
{
  allContentfulMarketplace(limit: 1000) {
    edges {
      node {
        id
        slug
        isIntegration
      }
    }
  }
}
`;

const featurePageQuery = `
{
  allContentfulFeaturePage2021(limit: 1000) {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`;

const customLandingPageQuery = `
{
  allContentfulCustomLandingPageWithBanner(limit: 1000) {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`;

const demoQuery = `
{
  allContentfulDemoPage2021(limit: 1000) {
    edges {
      node {
        id
        slug
      }
    }
  }
}
`;

const jobQuery = `
{
  allGreenhouseJob {
    nodes {
      id
      gh_Id
    }
  }
}
`;

const basePath = './src/layouts';

const resolvePagePromise = (query, createPageWithData) =>
  new Promise((resolve) => {
    query.then(({ errors, data }) => {
      if (errors) throw errors;
      createPageWithData(data);
      resolve();
    });
  });

exports.createPages = ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;
  const createLocalizedPages = (pagePath, component, context) => {
    languages.forEach((language) =>
      createPage({ path: `${langPrefix(language)}${pagePath}`, component, context })
    );
  };

  redirects.forEach(([from, toPath]) => {
    const redirectInBrowser = true;
    [from, `${from}/`].forEach((fromPath) => {
      createRedirect({ fromPath, toPath, redirectInBrowser });
      languages.forEach((lang) =>
        createRedirect({
          fromPath: `/${lang}${fromPath}`,
          toPath: `/${lang}${toPath}`,
          redirectInBrowser,
        })
      );
    });
  });

  const pageComponent = path.resolve(`${basePath}/page.tsx`);
  const createPages = resolvePagePromise(graphql(pageQuery), (data) =>
    data.allContentfulPage.edges.forEach(({ node }) => {
      const { id, slug, namespace } = node;
      const pagePath = `${namespace}${slug}/`;
      const context = { id };
      createLocalizedPages(pagePath, pageComponent, context);
    })
  );

  const marketplaceComponent = path.resolve(`${basePath}/marketplace.tsx`);
  const createMarketplaces = resolvePagePromise(graphql(marketplaceQuery), (data) =>
    data.allContentfulMarketplace.edges.forEach(({ node }) => {
      const { id, isIntegration, slug } = node;
      const pagePath = `/${isIntegration ? 'integrations' : 'partnerships'}/${slug}/`;
      const context = { id };
      createLocalizedPages(pagePath, marketplaceComponent, context);
    })
  );

  const featurePageComponent = path.resolve(`${basePath}/featurePage.tsx`);
  const createFeaturePages = resolvePagePromise(graphql(featurePageQuery), (data) =>
    data.allContentfulFeaturePage2021.edges.forEach(({ node }) => {
      const { id, slug } = node;
      const pagePath = `/${slug}/`;
      const context = { id };
      createLocalizedPages(pagePath, featurePageComponent, context);
    })
  );

  const customerStoryComponent = path.resolve(`${basePath}/customerStory.tsx`);
  const createCustomerStories = resolvePagePromise(graphql(customerStoryQuery), (data) =>
    data.allContentfulCustomerStory.edges.forEach(({ node }) => {
      const { id, slug, isOurStory } = node;
      const pagePath = isOurStory ? `/${slug}/` : `/customer-stories/${slug}/`;
      const context = { id };
      createLocalizedPages(pagePath, customerStoryComponent, context);
    })
  );

  const customLandingPageComponent = path.resolve(`${basePath}/customLandingPage.tsx`);
  const createCustomLandingPages = resolvePagePromise(graphql(customLandingPageQuery), (data) =>
    data.allContentfulCustomLandingPageWithBanner.edges.forEach(({ node }) => {
      const { id, slug } = node;
      const pagePath = `/${slug}/`;
      const context = { id };
      createLocalizedPages(pagePath, customLandingPageComponent, context);
    })
  );

  const demoPageComponent = path.resolve(`${basePath}/demo.tsx`);
  const createDemoPages = resolvePagePromise(graphql(demoQuery), (data) =>
    data.allContentfulDemoPage2021.edges.forEach(({ node }) => {
      const { id, slug } = node;
      const pagePath = `/demo/${slug}/`;
      const context = { id };
      createLocalizedPages(pagePath, demoPageComponent, context);
    })
  );

  const jobPageComponent = path.resolve(`${basePath}/job.tsx`);
  const createJobPages = resolvePagePromise(graphql(jobQuery), (data) =>
    data.allGreenhouseJob.nodes.forEach(({ id, gh_Id }) => {
      const pagePath = `/careers/${gh_Id}/`;
      const context = { id };
      createLocalizedPages(pagePath, jobPageComponent, context);
      const fromPath = `/jobs/${gh_Id}/`;
      createRedirect({ fromPath: fromPath, toPath: pagePath, redirectInBrowser: true });
      languages.forEach((lang) =>
        createRedirect({
          fromPath: `/${lang}${fromPath}`,
          toPath: `/${lang}${pagePath}`,
          redirectInBrowser: true,
        })
      );
    })
  );

  const allPages = [
    createPages,
    createCustomerStories,
    createMarketplaces,
    createFeaturePages,
    createCustomLandingPages,
    createDemoPages,
    createJobPages,
  ];

  return Promise.all(allPages);
};
