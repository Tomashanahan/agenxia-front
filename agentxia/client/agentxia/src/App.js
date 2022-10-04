import './App.css';
import { LandingRoutes } from './Routes/landing.routes';
import { _Navbar } from './Components/Views/Navbar'
import 'aos/dist/aos.css';
import { LoginRoutes } from './Routes/login.routes';


function App() {
  return (
    <div className="App">
      <LandingRoutes />
      <LoginRoutes />
    </div>
  );
}

export default App;
