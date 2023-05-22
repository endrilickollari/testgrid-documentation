exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

    result.data.allMdx.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.slug,
            component: require.resolve('./src/templates/mdx-page-template.js'),
            context: {
                slug: node.frontmatter.slug,
            },
        });
    });
};
