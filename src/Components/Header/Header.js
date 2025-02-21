import myImage from './images/image logo.png';

function Header() {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src={myImage} style={{height: "70px"}}/>
        </a>

        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search or Ask a Question"
            aria-label="Search"
          />
        </form>

        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Login/Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
 export default Header;