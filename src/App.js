
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import HomePage from './componets/HomePage'
import AboutUsPage from './componets/AboutUsPage'
import ContactPage from './componets/ContactPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage/>}></Route>
        <Route exact path='/about-us' element={<AboutUsPage/>}></Route>
        <Route exact path='/contact' element={<ContactPage/>}></Route>
       
      </Routes>
    </Router>
  );
}

export default App;
