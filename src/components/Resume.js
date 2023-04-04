import React from "react";
import resumePlaceholder from "../assets/resume_placeholder.png";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePlaceholder;
    link.download = "resume_placeholder.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center h-100">
        <h3 className="text-warning">Hi! This is a placeholder with all the working logic. Pressing download will download the image below, not a resume!</h3>
      <img
        src={resumePlaceholder}
        className="img-fluid"
        alt="Resume Preview"
        style={{ maxHeight: "90vh" }}
      />
      <div className="mt-3">
        <button
          className="btn btn-outline-light btn-lg fw-bold"
          onClick={handleDownload}
          style={{ width: "100%" }}
        >
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Resume;
