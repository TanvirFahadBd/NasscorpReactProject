import media from '../images/media.png'

function FromSection() {
  return (
    
<section id="from-section">
  <div className="conteiner">
    <div className="from-flex">
      <div className="form-images">
        <img src={media} alt />
      </div>
      <div className="from-texts">
        <div className="f-texts">
          <h1>Get A Free Quote Here</h1>
        </div>
        <div className="from">
          <div className="name">
            <label htmlFor="name">Name *</label>
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div className="Email">
            <label htmlFor="Email">Email *</label>
            <input type="email" id="Email" placeholder="email" />
          </div>
          <div className="Department">
            <label htmlFor="department">Department *</label>
            <select name="department" id="department" required>
              <option value disabled selected>Please Select</option>
              <option value="sales">Sales</option>
              <option value="marketing">Marketing</option>
              <option value="support">Customer Support</option>
              <option value="engineering">engineering</option>
            </select>
          </div>
          <div className="time">
            <label htmlFor="time">Time *</label>
            <select name="time" id="time" required>
              <option value=" " disabled selected>select time and date</option>
              <option value="4:00">4:00 am availabel</option>
              <option value="5:00">5:00 am availabel</option>
              <option value="6:00">6:00 am availabel</option>
              <option value="7:00">7:00 am availabel</option>
            </select>
          </div>
        </div>
        <div className="button0">
          <button>Book Appointment</button>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default FromSection
