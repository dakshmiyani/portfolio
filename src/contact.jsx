function Contact(){
    return(
        <>
        <div className="border"></div>
<div className="contact-container">
      {/* Left Side - Contact Form */}
      <div className="contact-form">
        <h2>Contact Me</h2>
        <form>
          <label>Name</label>
          <input className="conc" type="text" placeholder="Enter your name" />

          <label>Email</label>
          <input  className="conc" type="email" placeholder="Enter your email" />

          <label>Message</label>
          <textarea  className="conc" rows="4" placeholder="Write your message here..."></textarea>

          <button type="submit">Send</button>
        </form>
      </div>

      {/* Right Side - Contact Info */}
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>📧 dakshmiyani111@gmail.com</p>
        <p>📍 Mumbai, India</p>
      </div>
    </div>

        </>
    );

}

export default Contact