module.exports = {
    siteMetadata: {
        title: 'Test Grid Docs',
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
        {
            resolve: 'gatsby-plugin-theme-ui',
            options: {
                preset: '@theme-ui/preset-funk'
            }
        }
    ]
};