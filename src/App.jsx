import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './css/mvp.css';
import EventForm from "./components/EventForm";
import EventList from "./components/EventList";
import EventHome from "./components/EventHome";
import EventExamples from "./components/EventExamples.jsx";

/**
 * App component
 * @author Peter
 * @returns {Element}
 * @constructor
 */
const App = () => {
    const [events, setEvents] = useState([
        {
            name: "Freiluft Kino",
            type: "Outdoor",
            public: true,
            participants: 150,
        }
    ]);

    const addEvent = (newEvent) => {
        setEvents([...events, newEvent]);
    };

    return (
        <Router>
            <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
                <h1>Event-Planer</h1>
                <nav>
                    <ul style={{ display: "flex", gap: "10px", listStyle: "none", padding: 0 }}>
                        <li><Link to="/">Wilkommen</Link></li>
                        <li><Link to="/examples">Ideen</Link></li>
                        <li><Link to="/add">Event erfassen</Link></li>
                        <li><Link to="/list">Veranstaltungen</Link></li>
                    </ul>
                </nav>
                <hr />
                <Routes>
                    <Route path="/" element={<EventHome />} />
                    <Route path="/examples" element={<EventExamples />} />
                    <Route path="/add" element={<EventForm onAddEvent={addEvent} />} />
                    <Route path="/list" element={<EventList events={events} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
