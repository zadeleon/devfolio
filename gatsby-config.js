module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://aleodeleon.netlify.app/`,
    // Your Name
    name: 'Aleo De Leon',
    // Main Site Title
    title: `Aleo De Leon | Software Developer`,
    // Description that goes under your name in main bio
    description: `Software Engineer
                  aleodeleon5@gmail.com`,
    // Optional: Twitter account handle
    author: ``,
    // Optional: Github account URL
    github: ``,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/aleodeleon5/`,
    // Content of the About Me section
    about: `I am an experienced RPA developer focusing on UiPath and .Net for building solutions. My skills include identifying automation opportunities, designing and implementing RPA workflows, and delivering high-quality automation solutions that meet business needs. `,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Accrivot',
        description:
          'Developed a .Net solution using Winforms and C# to extract customer information from IBM 3270 screens.',
        link: '',
      },
      {
        name: 'Deal Date Recon',
        description:
          'Reconciled two Excel files from different source for deal date comparison.',
        link: '',
      },
      {
        name: 'SAP Processing',
        description:
          'Developed a Credit & Debit bot for the finance department to automate SAP processing.',
        link: '',
      },
      {
        name: 'Report Extraction',
        description:
          'Extracted data from vendor websites and performed lookups in Excel for report generation.',
        link: '',
      },
      {
        name: 'Web Extraction',
        description:
          'Automated file donwloading and transferring to another server using UiPath.',
        link: '',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'SLI Consulting Inc - Metrobank',
        description: 'RPA Developer, Aug 2022 - Present',
        link: '',
      },
      {
        name: 'Ingram Micro',
        description: 'Engineer, Software Development - RPA, May 2021 - Aug 2022',
        link: '',
      },
      {
        name: 'Asticom Technology Inc',
        description: 'Web Developer - RPA, Apr 2020 - Apr 2021',
        link: '',
      },
      {
        name: 'Genie Technologies Inc.',
        description: 'Software Quality Assurance, Oct 2019 - Apr 2020',
        link: '',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'RPA Tools',
        description:
          'C#, VB, VBA, .Net, SQL, UiPath, Orchestrator',
      },
      {
        name: 'Databases',
        description: 'MySQL',
      },
      {
        name: 'Other',
        description:
          'Source Control with Git, Agile / Scrum, Technical Documentations, MS Office, SAP',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
