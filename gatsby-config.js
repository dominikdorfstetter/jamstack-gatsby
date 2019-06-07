module.exports = {
   siteMetadata: {
      title: 'adesso - the great Gatsby',
      titleTemplate: "%s · 2019",
      author: 'Dominik Dorfstetter',
      company: 'adesso Austria GmbH',
      year: 2019,
      socialLinks: {
         twitter: 'https://twitter.com/dorfstetter_d'
      },
      description:
      "This is a starter template for GatsbyJS. Business. People. Technology. adesso Austria",
      url: "https://www.adesso.at", // No trailing slash allowed!
   },
   plugins: [
      'gatsby-plugin-sitemap',
      'gatsby-plugin-sass',
      {
         resolve: 'gatsby-source-filesystem',
         options: {
            name: 'src',
            path: `${__dirname}/src/`
         }
      },
      {
         resolve: `gatsby-transformer-remark`,
         options: {
           // CommonMark mode (default: true)
           commonmark: true,
           // Footnotes mode (default: true)
           footnotes: true,
           // Pedantic mode (default: true)
           pedantic: true,
           // GitHub Flavored Markdown mode (default: true)
           gfm: true,
           // Plugins configs
           plugins: [],
         }
      },
      {
         resolve: `gatsby-source-instagram`,
         options: {
            username: `adesso_ag`,
          },
      },
      {
         resolve: `gatsby-plugin-sharp`,
         options: {
           useMozJpeg: false,
           stripMetadata: true,
           defaultQuality: 75,
         }
      },
      'gatsby-transformer-sharp'
   ]
}