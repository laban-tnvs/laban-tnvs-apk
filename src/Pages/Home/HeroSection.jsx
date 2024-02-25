import React from 'react';

export default function HeroSection() {
  const handleDownload = () => {
    // Create an anchor element
    const anchor = document.createElement('a');
    // Set the href attribute to the relative path of the APK file
    anchor.href = '/laban-tnvs.apk';
    // Set the download attribute to specify the file name
    anchor.download = 'laban-tnvs.apk';
    // Append the anchor element to the document body
    document.body.appendChild(anchor);
    // Click the anchor element to trigger the download
    anchor.click();
    // Remove the anchor element from the document body
    document.body.removeChild(anchor);
  };

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Welcome to Laban TNVS</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Download</span> the Laban TNVS App
          </h1>
          <p className="hero--section-description">
            Experience the power of the Laban TNVS app.
            <br /> Download the latest version for your Android device now.
          </p>
        </div>
        <button className="btn btn-primary" onClick={handleDownload}>Download Now</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/tnvs.png" alt="Laban TNVS" />
      </div>
    </section>
  );
}
