import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../css/navbar.css';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Education', '/education'],
  ['Skills', '/skills'],
  ['Certificates', '/certificates'],
  ['Projects', '/projects'],
  ['Contact', '/contact'],
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setIsOpen(false), [location.pathname]);

  return (
    <>
      <button
        className="sidebar-toggle"
        type="button"
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        <span aria-hidden="true">{isOpen ? '×' : '☰'}</span>
      </button>
      {isOpen && <button className="nav-backdrop" type="button" aria-label="Close navigation menu" onClick={() => setIsOpen(false)} />}
      <nav id="primary-navigation" className={`site-nav${isOpen ? ' nav-active' : ''}`} aria-label="Main navigation">
        <div className="nav-brand">
          <span className="nav-brand-mark">K</span>
          <div><strong>Kawgong</strong><span>PORTFOLIO</span></div>
        </div>
        <p className="nav-section-label">MENU</p>
        <ul>
          {links.map(([label, path]) => (
            <li key={path}>
              <NavLink to={path} end={path === '/'} onClick={() => setIsOpen(false)}>
                <span className="nav-link-dot" aria-hidden="true" />{label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-footer"><span className="availability-dot" /> Open to opportunities</div>
      </nav>
    </>
  );
}

export default Navbar;
