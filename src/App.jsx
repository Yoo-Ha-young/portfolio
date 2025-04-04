import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeView from './views/HomeView';

const App = () => {
    return (
        <Router>
            <div className="app">
                <main>
                    <Routes>
                        <Route path="/" element={<HomeView />} />
                        <Route path="*" element={<HomeView />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
