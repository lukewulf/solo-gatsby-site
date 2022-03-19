module.exports = {
  siteMetadata: {
      title: `Solo Try Gatsby Blog`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-sass", 
    "gatsby-plugin-image", 
    "gatsby-plugin-mdx", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      key: "images"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "falling-leaves/",
        "path": "./projects/falling-leaves/gallery",
      }
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "processing/",
        "path": "./projects/processing/gallery",
      }
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "wondergraph/",
        "path": "./projects/wondergraph/gallery",
      }
    },  {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "projects",
        "path": "./projects",
      }
    }, {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "0xWRENCH",
        short_name: "0xWRENCH",
        icon: "src/images/logoNewIcon.png"
      }
    }
  ]
};