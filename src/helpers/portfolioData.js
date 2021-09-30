import CodeQuiz from '../images/projectsicon/CodeQuiz.gif'
import weather_dashboard from '../images/projectsicon/weather_dashboard.gif'
import work_day from '../images/projectsicon/Work_Day_Scheduler.gif'
import covidDashboard from '../images/projectsicon/Covid_Dashboard.gif'
import Tech_Blog from '../images/projectsicon/Tech_Blog.gif'
import surveyDonkey from '../images/projectsicon/surveayDonkey.gif'
import Booklyst from '../images/projectsicon/Booklyst.gif'
import Redux from '../images/projectsicon/redux.gif'
import Zookeeper from '../images/projectsicon/Zookeeper.PNG'
import booksearch from '../images/projectsicon/booksearch.gif'


const portfolioData = [
  {
    image: booksearch,
    link: 'https://booksearch-engine-graphql.herokuapp.com',
    desc: 'Google Books API search engine with GraphQL API',
    summary: 'A fully functioning Google Books API search engine refactored with GraphQL API built with Apollo Server.',
    tech: 'HTML| Javascript |CSS |graphQl|apolloServerExpress|bcrypt|mongoose|jsonwebtoken|redux|bootstrap|Node.js',
    GitHub:'https://github.com/FarnoushYousefi/shop-shop'
  },
  {
    image: Redux,
    link: 'https://ecomercialapp-with-redux.herokuapp.com/',
    summary: 'The Application that we have created will help find the books you are searching for across multiple sites so that you can buy your book for the cheapest cost. You can search book using text or voice. An intuitive dashboard to track all your favourite and read books!',
    desc: 'A simple ecommerce store that uses Redux for global state state management.',
    tech: 'HTML| Javascript |CSS |graphQl|apolloServerExpress|bcrypt|mongoose|jsonwebtoken|redux|bootstrap|Node.js',
    GitHub:'https://github.com/FarnoushYousefi/shop-shop'
  },
  {
    image: Booklyst,
    link: 'https://booklyst-project.herokuapp.com',
    summary: 'The Application that we have created will help find the books you are searching for across multiple sites so that you can buy your book for the cheapest cost. You can search book using text or voice. An intuitive dashboard to track all your favourite and read books!',
    desc: 'Web APIs Code Quize',
    tech: 'HTML| Javascript |CSS |graphQl|apolloServerExpress|bcrypt|mongoose|jsonwebtoken|redux|bootstrap',
    GitHub:'https://github.com/FarnoushYousefi/Code-Quiz-'
  },
  {
    image: CodeQuiz,
    link: 'https://farnoushyousefi.github.io/Code-Quiz-/',
    desc: 'Code Quiz API',
    summary: 'Web APIs Code Quize',
    tech: 'HTML| Javascript |CSS',
    GitHub:'https://github.com/FarnoushYousefi/Code-Quiz-'
  },
  {
    image: Zookeeper,
    link: 'https://secret-anchorage-53620.herokuapp.com/',
    summary: 'A web server using the Express.js framework and add it to a front-end application that the local zoo is developing, called Zoo Keepr. The site’s data will live on the server you build so that anyone can access it without having to download it.',
    desc: 'Zookeeper BackEnd Project',
    tech: 'HTML| Javascript |CSS|Node.js',
    GitHub:'https://github.com/FarnoushYousefi/zookeepr'
  },
  {
    image: weather_dashboard,
    link: 'https://farnoushyousefi.github.io/weatherApi/',
    desc: 'Weather Dashboard ',
    summary: 'AS A traveler I WANT to see the weather outlook for multiple cities SO THAT I can plan a trip accordingly',
    tech: 'HTML| Javascript | API Call',
    GitHub:'https://github.com/FarnoushYousefi/weatherApi'
  },
  {
    image: work_day,
    link: 'https://farnoushyousefi.github.io/super-disco/',
    desc: 'Work Day Scheduler',
    summary: 'AS AN employee with a busy scheduleI WANT to add important events to a daily planner SO THAT I can manage my time effectively',
    tech: 'HTML| Javascript|Moment.js',
    GitHub:'https://github.com/FarnoushYousefi/super-disco'
  },
  {
    image: covidDashboard,
    link: 'https://farnoushyousefi.github.io/Covid-dashboard/',
    desc: 'survey_dashboard',
    summary: 'This repository contains a Dashborard that shows you the a variaty of information combined in one place for when things re-open in Canada',
    tech: 'HTML| Javascript |CSS',
    GitHub:'https://github.com/FarnoushYousefi/Covid-dashboard'
  },
{
  image: Tech_Blog,
  link:'https://techblog-sequelize.herokuapp.com/',
  desc: 'Tech_Blog',
  summary: 'AS A developer who writes about tech I WANT a CMS-style blog sit SO THAT I can publish articles, blog posts, and my thoughts and opinions',
  tech:'Handlebars|Node.js|Sequelize|MySQL2|Express-session|heroku',
  GitHub:'https://github.com/FarnoushYousefi/Tech-Blog-'
},
{
  image:surveyDonkey,
  link:'https://safe-earth-34464.herokuapp.com/',
  desc:'Survey Donkey',
  summary: 'A survey application where users are able to make their own surveys and share with others. While anyone will be able to take the surveys, only logged in users will be able to create, edit, and delete their surveys.',
  tech:'Handlebars|Node.js|Sequelize|MySQL2|Express-session|heroku',
  Github:'https://github.com/uotgroup1/project2-group1'
}

];

export default portfolioData;
