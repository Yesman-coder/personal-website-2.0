import Logo from "./img/yesman_logo_name.png";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg fixed-top navbar-light sticky">
      <div class="container">
        <a class="navbar-brand" href="Home">
          <img src={Logo} alt="" class="logo-light" height="22" />
          <img src={Logo} alt="" class="logo-dark" height="63" />
        </a>
        <a
          href="javascript:void(0)"
          class="navbar-toggler ml-auto"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggle-icon">
            <i class="ri-menu-line"></i>
          </span>
        </a>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar();
