import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-section">
        <nav>
          <ul>
            <li>
              <a href="">🏠Home</a> <br />
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a href="">About Us</a> <br />
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <input type="text" placeholder="Search..." />
              <button type="submit">Search</button>
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a href="">Profile</a> <br />
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a href="">Favorites</a> <br />
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
