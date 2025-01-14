import Topbar from './components/topbar.jsx';
import Start from './pages/Start.jsx';
import SignIn from './pages/SignIn.jsx';
import Main from './pages/Body.jsx';
import Team from './pages/Team.jsx';
import WhenToMeet from './pages/WhenToMeet.jsx';
import Dashboards from './pages/Dashboards.jsx';

import { useRoutes, BrowserRouter as Router } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
    // Sets up routes
    let element = useRoutes([
      {
        path:"/start",
        element: <Start />
      }, 
      {
        path: "/signin",
        element:<SignIn/>
      },
      {
        path: "/",
        element:<Main/>
      },
      {
        path: "/team",
        element:<Team/>
      },
      {
        path: "/whentomeet",
        element:<WhenToMeet/>
      },
      {
        path: "/dashboards",
        element:<Dashboards/>
      }
    ]);

  return (
    <>
    <Topbar />
    <div className="page-wrapper">
    {element}
    </div>
    </>
  )
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

