import './App.css'
import NavBar from "./components/NavBar"
import Login from './components/Login'
import Register from './components/Register'
import Courses from './components/Courses'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './AuthContext'

const Home = () => {
  <div>
    return <h2>Welcome to the Home Page</h2>
    <p>Please use the menu to navigate through the page</p>
  </div>
}



  const App = () => (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route paths = '/' element={<Home />} />
          <Route paths = '/login' element={<Login />} />
          <Route paths = '/register' element={<Register />} />
          <Route paths = '/courses' element={<Courses />} />
        </Routes>
      </Router>
    </AuthProvider>
  );


export default App
