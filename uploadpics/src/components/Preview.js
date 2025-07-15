import React from "react";

const Preview = ({ formData }) => {
  if (!formData.file) {
    return null; // Don't render anything if no file is selected
  }

  const previewUrl = URL.createObjectURL(formData.file);

  return (
    <div className="col-md-4">
      <div className="card shadow-lg border-0 h-100" style={{ borderRadius: '15px' }}>
        <div className="card-header bg-success text-white text-center" style={{ borderRadius: '15px 15px 0 0' }}>
          <h5 className="mb-0">Preview</h5>
        </div>
        <div className="card-body p-3">
          <div className="text-center mb-3">
            <img 
              src={previewUrl} 
              alt="Preview" 
              className="img-fluid rounded"
              style={{ 
                maxHeight: '200px', 
                maxWidth: '100%',
                objectFit: 'cover',
                border: '2px solid #e9ecef'
              }}
            />
          </div>
          <div className="text-center">
            <h6 className="fw-bold mb-2">{formData.title || 'Untitled'}</h6>
            <small className="text-muted">
              File: {formData.file.name}
            </small>
            <br />
            <small className="text-muted">
              Size: {(formData.file.size / 1024 / 1024).toFixed(2)} MB
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview; 