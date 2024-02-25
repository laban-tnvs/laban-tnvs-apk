export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading"></h1>
          <p className="hero--section-description">
            This system, known as the Android-based Grab Boundary Management System with GPS Tracker and Notification, aims to simplify vehicle boundary monitoring for operators. It offers daily, weekly, monthly, and yearly monitoring options as agreed upon. The GPS tracker enables real-time unit monitoring, while users can access driver records like police clearance, NBI clearance, medical records, and driver's license. Additionally, this system stores essential vehicle-related documents such as the car franchise, ORCR, and insurance, and provides maintenance history for monitoring. Moreover, it features a notification system to alert owners about franchise expiration and boundary payments.
          </p>
        </div>
      </div>
    </section>
  );
}
