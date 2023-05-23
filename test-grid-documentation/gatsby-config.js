module.exports = {
    siteMetadata: {
        title: 'My Gatsby Website',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-remark',
        'gatsby-plugin-mdx',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'content',
                path: `${__dirname}/content`,
            },
        },
    ]
};