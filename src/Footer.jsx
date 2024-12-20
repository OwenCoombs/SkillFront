import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-item">
        <Link to="/">
          <i className="fas fa-home"></i>
        </Link>
      </div>
      <div className="footer-item">
        <Link to="/search">
          <i className="fas fa-search"></i>
        </Link>
      </div>
      <div className="footer-item">
        <Link to="/profile">
          <i className="fas fa-user"></i>
        </Link>
      </div>
      <div className="footer-item">
        <Link to="/settings">
          <i className="fas fa-cog"></i>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;