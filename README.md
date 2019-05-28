# JamStack-Gatsby

## Introduction

As preparation for a tech talk hosted by adesso Austria, this gatsbyjs project represents a blog backed up by a headless CMS system. It should give developers familiar with NodeJS-powered frameworks an overlook about what the **JamStack** can do. It is powered by [gatsby](https://gatsbyjs.org) and [strapi](https://strapi.io). To get deeper insight about the *api* (strapi) have a look at the README.md inside the *api* directory.

## How to run/develop/build

### Prerequisites

You need the following tools installed on your system.

- nodeJS [>= 10.15.3]
- gatsby-cli [>= 2.5.12]
- strapi [>= 3.0.0]
- yarn [>= 1.15.2]

### Setup

```shell
clear && yarn install
```

### Develop

```shell
clear && yarn start
```

### Build

```shell
clear && yarn run build
```

## Libraries/Frameworks used

### Gatsbyjs specific plugins

- gatsby-source-filesystem

... to source content from your local filesystem

- gatsby-plugin-sass

... to natively use *sass*/*scss*

- gatsby-transformer-remark

... to transform your Markdown content into html

- gatsby-source-instagram

... to fetch instagram posts

- gatsby-plugin-sharp

... to fetch images in a custom resolution

- gatsby-transformer-sharp
  
... to transform the image depending on screen-size (and many more options)

### Other libraries

- gatsby-image

Provides an **Img** tag we use for our scaled images

- node-sass

The node sass parser