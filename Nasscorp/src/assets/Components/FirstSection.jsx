import peopleicon from '../images/peopleicon.png'
function FirstSection() {
  return (
    <section id="first-section">
  <div className="conteiner">
    <div className="second-flex">
      <div className="second-text">
        <h1>Experts are here solve
          your business problem.</h1>
        <p>We know how large objects will act, but things on a
          small scale just do not act that way.</p>
        <div className="seconsatag">
          <a href="#">Get Quote Now</a>
          <a href="#">Learn More</a>
        </div>
      </div>
      <div className="people">
        {/* 01 */}
        <div className="peopleand-text">
          <div className="people-icon">
            <img src={peopleicon} alt />
          </div>
          <div className="people-txt">
            <h5>1.5k</h5>
            <p>HAPPY </p>
            <p>CUSTOMERS</p>
          </div>
        </div>
        {/* 02 */}
        <div className="peopleand-text">
          <div className="people-icon">
            <img src={peopleicon} alt />
          </div>
          <div className="people-txt">
            <h5>1.5k</h5>
            <p>HAPPY </p>
            <p>CUSTOMERS</p>
          </div>
        </div>
        {/* 03 */}
        <div className="peopleand-text">
          <div className="people-icon">
            <img src={peopleicon} alt />
          </div>
          <div className="people-txt">
            <h5>1.5k</h5>
            <p>HAPPY </p>
            <p>CUSTOMERS</p>
          </div>
        </div>
        {/* 04 */}
        <div className="peopleand-text">
          <div className="people-icon">
            <img src={peopleicon} alt />
          </div>
          <div className="people-txt">
            <h5>1.5k</h5>
            <p>HAPPY </p>
            <p>CUSTOMERS</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default FirstSection