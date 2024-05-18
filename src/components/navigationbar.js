export default function Navbar(props) {
  return (
    <div className={props.mode}>
      <nav className="navbar" id="navbar">
        <a className="nav-link" href="/">
          Home
        </a>
        <li className="form-check form-switch" style={{ width: 9 + "vw" }}>
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onClick={props.toggleMode}
          />
          {props.mode}
        </li>
      </nav>
      <ul className="unorders"></ul>
    </div>
  );
}
