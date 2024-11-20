import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/Footer';
import Signup from './pages/auth/Signup'; // Import Signup component
import Login from './pages/auth/Login';   // Import Login component

function App() {
    return (
        <div className='max-w-screen-lg mx-auto'>
            <Header />
            <div className='min-h-[calc(100vh-136px)]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default App;