
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import ParticleAnimation from 'react-particle-animation';
import Navigation from './screens/navigationBar/NavigationBar';
import Header from './screens/header/Header';
import AboutMe from './screens/aboutMe/AboutMe';
import Technologies from './screens/technologies/Technologies';
import Portfolio from './screens/portfolio/Portfolio'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navigation />
        <Route exact path="/">
          <Header />
          <ParticleAnimation
            style={{ height: '96vh' }}
            background={{ r: 21, g: 22, b: 23, a: 1 }}
            particleSpeed={0.1}
            particleRadius={1.5}
            color={{ r: 158, g: 217, b: 249, a: 255 }}
          />
          <AboutMe />
          <Technologies />
         <Portfolio/>
        </Route>
        <Route exact path="/technologies">
          <Technologies />
        </Route>
        <Route exact path="/about-me">
          <AboutMe />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
      </div>
    </Router>
  );
}

export default App;
