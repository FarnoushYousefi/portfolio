import quiz from '../images/projectsicon/quize.gif'
import weather_dashboard from '../images/projectsicon/weather_dashboard.gif'
import work_day from '../images/projectsicon/Work_Day_Scheduler.gif'
import survey_dashboard from '../images/projectsicon/Covid_Dashboard.gif'
import Tech_Blog from '../images/projectsicon/Tech_Blog.gif'

const portfolioData = [
  {
    image: quiz,
    link: 'https://farnoushyousefi.github.io/Code-Quiz-/',
    desc: 'Code Quiz API',
    summary: 'Web APIs Code Quize',
    tech: 'HTML| Javascript |CSS'
  },
  {
    image: weather_dashboard,
    link: 'https://farnoushyousefi.github.io/weatherApi/',
    desc: 'Weather Dashboard ',
    summary: 'AS A traveler I WANT to see the weather outlook for multiple cities SO THAT I can plan a trip accordingly',
    tech: 'HTML| Javascript | API Call'
  },
  {
    image: work_day,
    link: 'https://farnoushyousefi.github.io/super-disco/',
    desc: 'Work Day Scheduler',
    summary: 'AS AN employee with a busy scheduleI WANT to add important events to a daily planner SO THAT I can manage my time effectively',
    tech: 'HTML| Javascript|Moment.js'
  },
  {
    image: survey_dashboard,
    link: 'https://teamtoo222.github.io/Project-1-UofT/',
    desc: 'survey_dashboard',
    summary: 'This repository contains a Dashborard that shows you the a variaty of information combined in one place for when things re-open in Canada',
    tech: 'HTML| Javascript |CSS'
  },
{
  image: Tech_Blog,
  link:'https://techblog-sequelize.herokuapp.com/',
  desc: 'Tech_Blog',
  summary: 'AS A developer who writes about tech I WANT a CMS-style blog sit SO THAT I can publish articles, blog posts, and my thoughts and opinions',
  tech:'Handlebars|Node.js|Sequelize|MySQL2|Express-session'
}

];

export default portfolioData;
