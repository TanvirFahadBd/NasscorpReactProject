import star from '../images/star.png'
import profile from '../images/profile.png'

function FourthSection() {
  return (
<section id="forth-section">
  <div className="conteiner">
    <div className="forth-flex">
      <div className="forth-texts">
        <h2>What Clients Say</h2>
        <p>Problems trying to resolve the conflict between
          the two major realms of Classical physics: Newtonian mechanics </p>
      </div>
      <div className="profile">
        {/* 1 */}
        <div className="forth-profile">
          <div className="profile-text">
            <div className="image">
              <div className="progile-pic">
                <img src={profile} alt />
              </div>
              <div className="profile-name">
                <h3>Regina Miles</h3>
                <h6>Designer</h6>
              </div>
              <ul>
                <li><img src={star} alt /></li>
                <li><img src={star} alt /></li>
                <li><img src={star} alt /></li>
                <li><img src={star} alt /></li>
                <li><img src={star} alt /></li>
              </ul>
            </div>
            <p>This proved to be impossible using the traditional
              concepts of space and time. Einstein developed a
              new view of time first and then space. This proved
              to be impossible using the traditional concepts of
              space and time. Einstein developed a new view
              of time first and then space.</p>
          </div>
        </div>
        {/* 1 */}
        <div className="forth-profile">
          <div className="profile-text">
            <div className="image">
              <div className="progile-pic">
                <img src={profile} alt />
              </div>
              <div className="profile-name">
                <h3>Regina Miles</h3>
                <h6>Designer</h6>
              </div>
              <ul>
                <li><img src={star} alt /></li>
                <li><img src={star} alt /></li>
                <li><img src={star} alt /></li>
                <li><img src={star} alt /></li>
                <li><img src={star} alt /></li>
              </ul>
            </div>
            <p>This proved to be impossible using the traditional
              concepts of space and time. Einstein developed a
              new view of time first and then space. This proved
              to be impossible using the traditional concepts of
              space and time. Einstein developed a new view
              of time first and then space.</p>
          </div>
        </div>
        {/* 1 */}
        <div className="forth-profile">
          <div className="profile-text">
            <div className="image">
              <div className="progile-pic">
                <img src={profile} alt />
              </div>
              <div className="profile-name">
                <h3>Regina Miles</h3>
                <h6>Designer</h6>
              </div>
              <ul>
                <li><img src={star} alt /></li>
                <li><img src={star} alt /></li>
                <li><img src={star} alt /></li>
                <li><img src={star} alt /></li>
                <li><img src={star} alt /></li>
              </ul>
            </div>
            <p>This proved to be impossible using the traditional
              concepts of space and time. Einstein developed a
              new view of time first and then space. This proved
              to be impossible using the traditional concepts of
              space and time. Einstein developed a new view
              of time first and then space.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default FourthSection