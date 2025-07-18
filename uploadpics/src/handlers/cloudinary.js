// Replace 'your-cloud-name' with your actual Cloudinary cloud name
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/your-cloud-name/image/upload";
// Replace 'your-upload-preset' with your upload preset from Cloudinary dashboard
const CLOUDINARY_PRESET = "your-upload-preset";

const Cloudinary = {
    uploadImage: (file) => {
        return new Promise((resolve, reject) => {
            try {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', CLOUDINARY_PRESET);
                
                console.log("Uploading file to Cloudinary:", file.name);
                
                fetch(CLOUDINARY_URL, {
                    method: 'POST',
                    body: formData
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log("Cloudinary upload successful:", data.secure_url);
                    resolve(data.secure_url);
                })
                .catch(error => {
                    console.error("Error uploading to Cloudinary:", error);
                    reject("Error uploading to Cloudinary: " + error.message);
                });
            } catch(e) {
                console.error("Error in uploadImage:", e);
                reject("Error: " + e.message);
            }
        });
    }
};

export default Cloudinary; 