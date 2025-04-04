import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeView from './views/HomeView';
import './assets/scss/style.scss';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<HomeView />} />
                </Routes>
            </main>
        </Router>
    );
};

export default App; 