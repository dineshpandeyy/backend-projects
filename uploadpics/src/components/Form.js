import React from "react";

const Form = () => {
  return (
    <div className="container mt-4 mb-4">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card shadow-lg border-0" style={{ borderRadius: '15px' }}>
            <div className="card-header bg-primary text-white text-center" style={{ borderRadius: '15px 15px 0 0' }}>
              <h4 className="mb-0">Add New Photo</h4>
            </div>
            <div className="card-body p-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="photoTitle" className="form-label fw-bold">Photo Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="photoTitle"
                    placeholder="Enter photo title"
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="photoFile" className="form-label fw-bold">Upload Photo</label>
                  <div className="input-group">
                    <input
                      type="file"
                      className="form-control"
                      id="photoFile"
                      accept="image/*"
                    />
                  </div>
                  <div className="form-text">Supported formats: JPG, PNG, GIF (Max 5MB)</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
