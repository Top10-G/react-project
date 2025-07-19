import myimage from "../assets/getchange.png"

function Nav() {
  
  return (
    <>
      <nav class="navbar navbar-expand-lg" style={{height:80, color:""}}>
       <div class="container-fluid">
          <img src={myimage} className="" style={{height: 40}} />
      
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <form class="d-flex" style={{marginRight:60}}>
              <div className="circle"></div>

              <li class="nav-item dropdown d-flex" style={{fontSize:18, color:"#013c61"}}>
                <a class="nav-link dropdown-toggle fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Hi, Joshua
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
