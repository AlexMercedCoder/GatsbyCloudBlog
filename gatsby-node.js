const fetch = require("node-fetch")
const queryString = require("query-string")
exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions
  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins
  // Helper function that processes a photo to match Gatsby's node structure
  const processPost = post => {
    const nodeId = createNodeId(`post-${post.sys.id}`)
    const nodeContent = JSON.stringify(post.fields)
    const nodeData = Object.assign({}, post.fields, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `BlogPost`,
        content: nodeContent,
        contentDigest: createContentDigest(post),
      },
    })
    return nodeData
  }
  // Convert the options object into a query string
  const apiOptions = queryString.stringify(configOptions)
  // Join apiOptions with the Pixabay API URL
  const apiUrl = `https://cdn.contentful.com/spaces/wiothdq64tqj/environments/master/entries?access_token=fbY3krPsiW8hWQ4m7GysjrfCfBdeCP9gBLqh3klbO20`
  // Gatsby expects sourceNodes to return a promise
  return (
    // Fetch a response from the apiUrl
    fetch(apiUrl)
      // Parse the response as JSON
      .then(response => response.json())
      // Process the response data into a node
      .then(data => {
        // For each query result (or 'hit')
        data.items.forEach(post => {
          // Process the photo data to match the structure of a Gatsby node
          const nodeData = processPost(post)
          // Use Gatsby's createNode helper to create a node from the node data
          createNode(nodeData)
        })
      })
  )
}



/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
