import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from './Components/Form/Client/SignInForm';
import SignUp from './Components/Form/Client/SignUpForm';
import Profile from './Layouts/Client/Profile';
import Header from './Layouts/Client/Header';
import Footer from './Layouts/Client/Footer';
import Home from './Layouts/Client/Home';
function App() {
  return (
    <div className="App lg:px-36 sm:px-6 md:px-6">
      <BrowserRouter>
        <Route path="/" >
          <Header />
          <Home />
        </Route>
        <div className='lg:py-10 sm:py-4 md:py-6'>
          <Route path="/signin"><SignIn /></Route>
          <Route path="/signup"><SignUp /></Route>
          <Route path="/profile" ><Profile /></Route>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;