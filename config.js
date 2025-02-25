// import React from 'react';

const REPOSITORY = 'gatsby-resume-template';
const FIRST_NAME = 'Rob';
const LAST_NAME = 'Boykin';
const GITHUB_USERNAME = 'rfboykin';
const LINKEDIN_USERNAME = 'robert-boykin';
const ADDRESS = 'Chicago';
const EMAIL = 'rfboykin@gmail.com';
const PROTOTYPE_SITE = 'rboyk.in';
const FOOTER_URL =
  'https://github.com/cto-ai/gatsby-resume-template/tree/master';

const BIO = `
      A highly motivated, PRINCE2 Agile  Practitioner-certified project manager with a background 
      in Web Development and Software Engineering. My technical experience has been in 
      engineering web applications, where I frequently took initiative for project planning 
      and communication duties which then allowed me to transition into leading the project and 
      being responsible for its timely deliverables. Relentlessly positive and enthusiastic, 
      my favorite testimonial is is that coworkers describe me as “a delight to work with"`;

const EXPERIENCE_LIST = [
  {
    title: "Founder, Owner",
    company: "Fulcrum Apps, LLC",
    description: `
    * Founded and operated Fulcrum Apps, LLC specializing in technology consulting for small businesses.
    * Created client-facing Wordpress website which increased lead generation by 30% for an independent insurance broker.
    * Built Flask & React app to migrate business data into new CRM platform, reducing costs by 75%.`,
    period: 'August 2024 - Present',
    links: {
      'Fulcrum Apps, LLC':
        'https://fulcrumapps.dev/'
    }
  },
  {
    title: 'Technical Project Manager',
    company: 'Mintel',
    description: `
      * Delivered Mintel Leap, responsible for additional $1M in revenue, ahead of schedule by streamlining processes, managing dependencies, and coordinating across business functions.
      * Managed full project lifecycle of 3-4 SaaS projects simultaneously with budgets ranging from $100k-$500k.
      * Achieved on-time deliveries for 95% of projects under my supervision by actively managing timelines, risks, and budget.
      * Acted as go-to person between stakeholders and individual contributors, published weekly status reports to C-Suite audiences to give visibility on budget and scope progress.`,
    period: 'December 2021 - July 2024',
    links: {
      'Mintel Leap':
        'https://www.mintel.com/products/leap-market-intelligence-ai/',
    },
  },
  {
    title: 'Scrum Master & Full Stack Engineer',
    company: 'Mintel',
    description: `
      * Led cloud migration of web infrastructure to AWS, cutting infrastructure costs by 10% & aligning with strategic initiatives.
      * Responsible for the team consistently delivering value, communicating project progress to stakeholders, and identifying opportunities for continuous improvement within the team 
      * Championed Agile best practices by leading Daily Scrums, Sprint Planning ceremonies and Retrospectives.
      * Regularly met with individual contributors and stakeholders, including Product Owners, Engineering Leads, Designers, Develoeprs, and Leads of other teams. 
    `,
    period: 'February 2019 - December 2021',
  },
  {
    title: 'Front End Engineer',
    company: 'Mintel',
    description: `
    * Engineered front-end website of Comperemedia Omni, multi-channel marketing analysis tool focused on Financial Services and Insurance industries. 
* Developed incremental features and updates, working with Design, Product, and Operations to gather and understand requirements.  
* Built the first version of the Omni data entry web application, Sherpa. Worked closely with Operations to gather their requirements and deliver an application they could use and maintain as needed.  
* Led a project to update the graphing visualization library after identifying deficiencies 
* Pitched, planned, executed and provided support for the initiative  
* Worked with a team of developers to deliver what is now the primary data visualization library across Mintel applications 
* Assisted the Project Lead in running refinement meetings and breaking down work, took on some project management responsibilities  
    `,
    period: 'March 2017 - February 2019',
    links: {
      'Comperemedia Omni':
        'https://welcome.comperemedia.com/solutions/comperemedia-omni/',
    },
  },
  {
    title: 'Front-End Engineer',
    company: 'The Boeing Company- IT Career Foundation Year 3',
    description: `
      * Developed a suite of common Angular 2 UI components with Typescript and SCSS to be used across multiple shop-floor applications.  
      * Evaluated the user experience of the existing application and worked with the team to improve the usability of the application based on my recommendations.`,
    period: 'July 2016 - January 2017',
  },
  {
    title: 'User Experience Specialist',
    company: 'The Boeing Company- IT Career Foundation Year 2',
    description: `
      * Presented heuristic reviews and usability studies of current systems and provided recommendations to customers to aid them in remedying usability issues.  
      * Conducted focus groups, user interviews, in-lab user testing, and surveys 
      * Delivered interactive prototypes to our customers, iteratively designed according to continuous user testing. `,
    period: 'July 2015 - June 2016',
  },
  {
    title: 'Application Health and Availability Monitor',
    company: 'The Boeing Company- IT Career Foundation Year 1',
    description: `
      * Developed and maintained over 100 application availability monitors, which included working with application developers to create monitoring requirements and soliciting approvals from application managers. 
      * Identified a process improvement relating to the alerting system of HP BSM which would better serve our customers by enabling them to react to application outages sooner. Helped to incorporate my improvement into the application monitoring standards across the Boeing Enterprise.       
`,
    period: 'July 2014 - June 2015',
  },
];

const EDUCATION_LIST = [
  {
    institution: 'Axelos',
    qualification: 'PRINCE2 Agile Practioner Course',
    description: `PRINCE2 Agile® blends the flexibility and responsiveness of agile with the defined governance of PRINCE2®.
    PRINCE2 Agile Practioner provides the fundamentals of the PRINCE2 method so it can be embedded in day-to-day work practices, while testing knowledge of PRINCE2 governance requirements, agile concepts and techniques and the interface between them. 
    Additionally, the concepts are applied using real-world management examples.`,
    period: 'December 2023',
  },
  {
    institution: 'University of South Carolina',
    qualification: 'Bachelor of Science',
    description: `
      Bachelor of Science in Civil and Environmental Engineering, Minor in Computer Science`,
    period: 'May 2014',
  },
];

const LANGUAGES_AND_TOOLS = [
  { name: 'HTML5', iconClass: 'fa-html5' },
  { name: 'CSS3', iconClass: 'fa-css3-alt' },
  { name: 'Javascript', iconClass: 'fa-js-square' },
  { name: 'TypeScript', iconClass: 'fa-ts-square' },
  { name: 'Docker', iconClass: 'fa-docker' },
  { name: 'Angular', iconClass: 'fa-angular' },
  { name: 'Django', iconClass: 'fa-django' }, // todo
  { name: 'React', iconClass: 'fa-react' },
  { name: 'Redux', iconClass: 'fa-redux' }, // todo
  { name: 'ElasticSearch', iconClass: 'fa-elastic' }, // todo
  { name: 'NodeJS', iconClass: 'fa-node-js' },
  { name: 'SASS', iconClass: 'fa-sass' },
  { name: 'Wordpress', iconClass: 'fa-wordpress' },
  { name: 'NPM', iconClass: 'fa-npm' },
];

const SKILLS = [
  'Collaborative Problem Solving',
  'Agile',
  'Scrum Mastering',
  'Requirements Gathering',
  'Workshop and Retrospective Facilitating',
  'Risk Management',
];

const PORTFOLIO = {
  introParagraphs: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
    `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt anim id est laborum.`,
  ],
  items: [
    {
      name: 'First portfolio item',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      url: 'https://github.com/user/repo',
    },
    {
      name: 'Second portoflio item name',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
      url: 'https://github.com/user/repo',
    },
  ],
};

const CERTIFICATIONS = [
  'PRINCE2 Agile Practioner',
  '3-time "Mintel MVP" (Performance-based award) ',
];

module.exports = {
  siteTitle: `${FIRST_NAME} ${LAST_NAME}'s Resume`, // <title>
  manifestName: `${FIRST_NAME} ${LAST_NAME}'s Resume`,
  manifestShortName: 'Resume', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/images/headshot.jpg', // TODO: new icon
  pathPrefix: `/${REPOSITORY}`, // This path is subpath of your hosting https://domain/portfolio
  firstName: FIRST_NAME,
  lastName: LAST_NAME,
  // bio
  bio: BIO,
  // experience
  experienceList: EXPERIENCE_LIST,
  // education
  educationList: EDUCATION_LIST,
  // languages & tools
  langTools: LANGUAGES_AND_TOOLS,
  // skills
  skills: SKILLS,
  // certifications
  certifications: CERTIFICATIONS,
  // portfolio
  portfolio: PORTFOLIO,
  // social
  socialLinks: [
    {
      icon: 'fa-github',
      name: 'Github',
      url: `https://github.com/${GITHUB_USERNAME}`,
    },
    {
      icon: 'fa-linkedin-in',
      name: 'Linkedin',
      url: `https://linkedin.com/in/${LINKEDIN_USERNAME}`,
    },
  ],
  email: EMAIL,
  address: ADDRESS,
  footerUrl: FOOTER_URL,
  prototypeSite: PROTOTYPE_SITE,
};
