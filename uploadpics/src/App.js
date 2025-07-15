import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";


import Navbar from "./components/Narbar";
import Card from "./components/Card";
import Form from "./components/Form";
import Button from "./components/Button";
import Preview from "./components/Preview";
import Firestore from "./handlers/firestore";

const players = [
  "https://ichef.bbci.co.uk/ace/standard/2560/cpsprodpb/0b6d/live/c3931d50-60de-11f0-bfe6-55783cb3c7cd.jpg",
  "https://ichef.bbci.co.uk/ace/standard/2560/cpsprodpb/0b6d/live/c3931d50-60de-11f0-bfe6-55783cb3c7cd.jpg",
  "https://ichef.bbci.co.uk/ace/standard/2560/cpsprodpb/0b6d/live/c3931d50-60de-11f0-bfe6-55783cb3c7cd.jpg",
  "https://ichef.bbci.co.uk/ace/standard/2560/cpsprodpb/0b6d/live/c3931d50-60de-11f0-bfe6-55783cb3c7cd.jpg",
  "https://ichef.bbci.co.uk/ace/standard/2560/cpsprodpb/0b6d/live/c3931d50-60de-11f0-bfe6-55783cb3c7cd.jpg",
];

function App() {
  const [showForm, setShowForm] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    file: null
  });

  useEffect(() => {
    console.log(photos);
  }, [photos]);

  // Load photos from database on component mount
  useEffect(() => {
    const loadPhotos = async () => {
      try {
        const photosFromDB = await Firestore.readAllDocs("photos");
        setPhotos(photosFromDB);
        console.log("Photos loaded from database:", photosFromDB);
      } catch (error) {
        console.error("Error loading photos from database:", error);
      }
    };
    
    loadPhotos();
  }, []);

  const handleAddPhoto = async (e) => {
    e.preventDefault();
    if (formData.title && formData.file) {
      const newPhoto = {
        id: Date.now(),
        title: formData.title,
        url: URL.createObjectURL(formData.file),
        fileName: formData.file.name,
        fileSize: formData.file.size,
        timestamp: Date.now()
      };
      
      try {
        // Save to Firestore
        await Firestore.writeDoc(newPhoto, "photos");
        console.log("Photo saved to database successfully!");
        
        // Update local state
        setPhotos([...photos, newPhoto]);
        setFormData({ title: "", file: null });
        setShowForm(false);
      } catch (error) {
        console.error("Error saving to database:", error);
        alert("Error saving photo to database. Please try again.");
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleShowForm = () => {
    setShowForm(!showForm);
    if (!showForm) {
      setFormData({ title: "", file: null });
    }
  };

  return (
    <>
      <Navbar />
      <Button onClick={handleShowForm}/>
      {showForm && (
        <div className="container mt-4 mb-4">
          <div className="row justify-content-center">
            <Form 
              formData={formData}
              handleInputChange={handleInputChange} 
              handleAddPhoto={handleAddPhoto} 
            />
            <Preview formData={formData} />
          </div>
        </div>
      )}
      <div style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)', minHeight: '100vh', padding: '40px 0' }}>
        <div className="container">
          <h1 className="display-3 mb-5 fw-bolder text-center" style={{
            background: 'linear-gradient(90deg, #007cf0 0%, #00dfd8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 2px 8px rgba(0, 140, 255, 0.10)'
          }}>Gallery</h1>
          <h2 className="text-center mb-4 text-muted" style={{ fontSize: '1.2rem', fontWeight: '400' }}>
            {photos.length === 0 
              ? "No photos in the gallery yet" 
              : `There ${photos.length === 1 ? 'is' : 'are'} ${photos.length} ${photos.length === 1 ? 'photo' : 'photos'} in the gallery`
            }
          </h2>
          <div className="row justify-content-center">
            {photos.length === 0 ? (
              <div className="col-12 text-center">
                <p className="text-muted fs-5">No photos uploaded yet. Click the + button to add your first photo!</p>
              </div>
            ) : (
              photos.map((photo, idx) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch" key={photo.id}>
                  <Card photo={photo.url} title={photo.title} description="Uploaded photo" />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
