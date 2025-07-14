import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import Navbar from "./components/Narbar";
import Card from "./components/Card";
import Form from "./components/Form";
import Button from "./components/Button";

const players = [
  "https://ichef.bbci.co.uk/ace/standard/2560/cpsprodpb/0b6d/live/c3931d50-60de-11f0-bfe6-55783cb3c7cd.jpg",
  "https://ichef.bbci.co.uk/ace/standard/2560/cpsprodpb/0b6d/live/c3931d50-60de-11f0-bfe6-55783cb3c7cd.jpg",
  "https://ichef.bbci.co.uk/ace/standard/2560/cpsprodpb/0b6d/live/c3931d50-60de-11f0-bfe6-55783cb3c7cd.jpg",
  "https://ichef.bbci.co.uk/ace/standard/2560/cpsprodpb/0b6d/live/c3931d50-60de-11f0-bfe6-55783cb3c7cd.jpg",
  "https://ichef.bbci.co.uk/ace/standard/2560/cpsprodpb/0b6d/live/c3931d50-60de-11f0-bfe6-55783cb3c7cd.jpg",
];

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <Navbar />
      <Button onClick={handleShowForm}/>
      {showForm && <Form/>}
      <div style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)', minHeight: '100vh', padding: '40px 0' }}>
        <div className="container">
          <h1 className="display-3 mb-5 fw-bolder text-center" style={{
            background: 'linear-gradient(90deg, #007cf0 0%, #00dfd8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 2px 8px rgba(0, 140, 255, 0.10)'
          }}>Gallery</h1>
          <div className="row justify-content-center">
            {players.map((player, idx) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch" key={idx}>
                <Card player={player} title={`Card ${idx + 1}`} description="This is a modern photo card. Add your own description here!" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
