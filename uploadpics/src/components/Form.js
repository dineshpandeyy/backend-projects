import React from "react";

const Form = ({ formData, handleInputChange, handleAddPhoto }) => {
  const isFormValid = formData.title && formData.file;
  const hasFile = formData.file;

  return (
    <div className={hasFile ? "col-md-8" : "col-md-12"}>
      <div className="card shadow-lg border-0 h-100" style={{ borderRadius: '15px' }}>
        <div className="card-header bg-primary text-white text-center" style={{ borderRadius: '15px 15px 0 0' }}>
          <h4 className="mb-0">Add New Photo</h4>
        </div>
        <div className="card-body p-4">
          <form onSubmit={handleAddPhoto}>
            <div className="mb-3">
              <label htmlFor="photoTitle" className="form-label fw-bold">Photo Title</label>
              <input
                type="text"
                className="form-control"
                id="photoTitle"
                name="title"
                placeholder="Enter photo title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="photoFile" className="form-label fw-bold">Upload Photo</label>
              <div className="input-group">
                <input
                  type="file"
                  className="form-control"
                  id="photoFile"
                  name="file"
                  accept="image/*"
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-text">Supported formats: JPG, PNG, GIF (Max 5MB)</div>
              {formData.file && (
                <div className="mt-2">
                  <small className="text-success">
                    ✓ File selected: {formData.file.name}
                  </small>
                </div>
              )}
            </div>
            
            <div className="d-grid gap-2">
              <button 
                type="submit" 
                className={`btn ${isFormValid ? 'btn-primary' : 'btn-secondary'}`}
                disabled={!isFormValid}
              >
                {isFormValid ? 'Upload Photo' : 'Please fill all fields'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
