import { Link } from 'react-router-dom';
import styles from './header.module.css';

const Header: React.FC = () => {
  return (
    <header id="header" className={`${styles.header} d-flex align-items-center fixed-top`}>
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <h1 className={styles.sitename}>SEFIS</h1>

        <nav id="navmenu" className={styles.navmenu}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/partners">Partners</Link></li>
            <li><Link to="/company">Company</Link></li>
          </ul>
        </nav>
        <Link className={styles.getADemo} to="/contact">Get A Demo</Link>
      </div>
    </header>
  );
};

export default Header;
