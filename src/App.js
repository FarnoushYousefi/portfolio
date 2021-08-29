
import './App.css';
import ParticleAnimation from 'react-particle-animation'
import Navigation from './screens/navigationBar/NavigationBar'
import Header from './screens/header/Header'

function App() {
  return (
    <div className="App">

      <Navigation/>
      <Header/>
      <ParticleAnimation
      style={{height:'96vh'}}
      background={	{ r: 21, g: 22, b: 23, a: 1 }}
      particleSpeed={0.1}
      particleRadius={1.5}
      color={	{ r: 158, g: 217, b: 249, a: 255 }}
      />
   
    </div>
  );
}

export default App;