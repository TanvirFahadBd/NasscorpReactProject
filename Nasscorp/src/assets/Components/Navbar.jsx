import search from '../images/search.png'
import Shooping from '../images/shoping-card.png'

function Navbar() {
  return (
 <nav>
  <div className="conteiner">
    <div className="first-flex">
      <div className="logo">
        <a href="#">Nasscorp</a>
      </div>
      <div className="main-menu">
        <ul>
          <li><a href="#">home</a></li>
          <li><a href="#">product</a></li>
          <li><a href="#">pricing</a></li>
          <li><a href="#">contact</a></li>
        </ul>
        <div className="first-icons">
          <a href="#"><img src={search} alt /></a>
          <a href="#"><img src={Shooping} alt /></a>
        </div>
      </div>
    </div>
  </div>
</nav>

  )
}

export default Navbar