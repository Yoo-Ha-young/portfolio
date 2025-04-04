import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView.jsx";
import AboutView from "./views/AboutView.jsx";
import Header from "./components/Header.jsx";
import Skip from "./components/Skip.jsx";
import ProjectView from './views/ProjectView';

const App = () => {
    return (
        <BrowserRouter>
            <Skip />
            
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/about" element={<AboutView />} />
                <Route path="/skills" element={<HomeView />} />
                <Route path="/project" element={<HomeView />} />
                <Route path="/project/:id" element={<ProjectView />} />
                <Route path="/contact" element={<HomeView />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
