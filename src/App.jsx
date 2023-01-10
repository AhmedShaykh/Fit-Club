import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from 'react-router-dom';
import Home from './Pages/Home.jsx';
import ProductDetails from './Pages/ProductDetails.jsx';
import Sidebar from './Components/Sidebar.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';

const App = () => {

    return (
        <div className='overflow-hidden'>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/product/:id' element={<ProductDetails />} />
                </Routes>
                <Sidebar />
                <Footer />
            </Router>
        </div>
    )
};

export default App;