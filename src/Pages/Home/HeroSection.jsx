import React from 'react';

export default function HeroSection() {
  const handleDownload = () => {
    
    const anchor = document.createElement('a');
    
    anchor.href = '/laban-tnvs.apk';
    
    anchor.download = 'laban-tnvs.apk';
  
    document.body.appendChild(anchor);
  
    anchor.click();

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
