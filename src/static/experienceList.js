const list = [
  {
    name: 'Consensys',
    bulletPoints: [
      "Created and refactored React app using NextJS and ExpressJS, and Wordpress CMS using PHP",
      'Built a microservice to convert HTML element into an image to append it to Open Graph and Twitter card preview using Puppeteer.',
      'Made custom Buildpack using Bash to purge all Cloudflare cache when deploying to Heroku'
    ],
    logo: require('./Consensys.png'),
    startDate: 'January 2019',
    endDate: 'April 2019',
    role: 'Fullstack Developer Intern',
  },

  {
    name: 'Hubdoc',
    bulletPoints: [
      "Created and maintained 700+ web scraping micro-services in a small team for 30000+ users",
      'Automated extracting process from websites using NodeJS, NightmareJS and jQuery',
      'Developed visualization for proxy success rate for automated tasks using Backbone.js and PostgreSQL'
    ],
    logo: require('./Hubdoc.png'),
    startDate: 'May 2018',
    endDate: 'August 2018',
    role: 'Software Developer Intern'
  },

  {
    name: 'Bombardier',
    bulletPoints: [
      "Designed a web app using C# and AngularJS to analyze data and create a daily report to be reviewed by the company executives ",
      'Managed the application database using MS SQL Server ',
      'Built SSIS Packages to automate SAP GUI Scripting to retrieve information for the application '
    ],
    logo: require('./Bombardier.png'),
    startDate: 'September 2017',
    endDate: 'December 2017',
    role: 'Fullstack Developer Intern',
  },
  {
    name: 'Thales',
    bulletPoints: [
      "Created tools using Perl for subway operators to observe circuit relay status ",
      'Fixed bugs for Perl programs that were used for high level systems design circuit blueprint ',
      'Analyzed train circuit relay diagrams for safety inspection'
    ],
    logo: require('./Thales.png'),
    startDate: 'January 2017',
    endDate: 'May 2017',
    role: 'Software Analyst Inter',
  },
  {
    name: 'SpinMaster',
    bulletPoints: [
      "Applied VBA knowledge to create a program to efficiently organize company excel data ",
      'Created a 3D CAD for a product concept, and changes to an existing product with SolidWorks ',
      'Composed a prelim manufacturing cost of a new products, and products with modifications '
    ],
    logo: require('./SpinMaster.png'),
    startDate: 'September 2015',
    endDate: 'December 2015',
    role: 'Product Development Engineering Intern'
  },
];

module.exports = list;