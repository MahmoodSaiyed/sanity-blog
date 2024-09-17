/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql,actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })

  const result = await graphql(`
    {
      allSanityPost {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  result.data.allSanityPost.nodes.forEach(post => {
    createPage({
      path: `/blog/${post.slug.current}`, // Path for the blog post page
      component: require.resolve('./src/templates/blog-post.js'),
      context: {
        slug: post.slug.current, // Pass the slug as context to the template
      },
    });
  });
}
