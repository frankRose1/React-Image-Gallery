import React from 'react';

const FileNotFound = () => (
    <div className="file-not-found">
        <div className="err-message">
        <i className="fas fa-exclamation-triangle"></i>
        <h3>404</h3>
        </div>
        <p>Sorry, the page you requested could not be found.</p>
    </div>
);

export default FileNotFound;