import twiter from '../images/twiter.png'
function LastSection() {
  return (
 <div className="last-section">
  <div className="conteiner">
    <div className="last-flex">
      <div className="twitter">
        <h1>Get In Touch</h1>
        <p>the quick fox jumps over the
          lazy dog</p>
        <div className="l-image">
          <img src={twiter} alt />
          <img src={twiter} alt />
          <img src={twiter} alt />
          <img src={twiter} alt />
        </div>
      </div>
      <div className="last-text-grid">
        {/* 01 */}
        <div className="last-texts">
          <div className="heading">
            <h1>Company info</h1>
          </div>
          <div className="pera">
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
        </div>
        {/* 02 */}
        <div className="last-texts">
          <div className="heading">
            <h1>Company info</h1>
          </div>
          <div className="pera">
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
        </div>
        {/* 03 */}
        <div className="last-texts">
          <div className="heading">
            <h1>Company info</h1>
          </div>
          <div className="pera">
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default LastSection
