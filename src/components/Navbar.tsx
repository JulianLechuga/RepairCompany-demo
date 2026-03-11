import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hammer } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/services' },
    { name: 'Proyectos', path: '/projects' },
    { name: 'Nosotros', path: '/about' },
    { name: 'Contacto', path: '/contact' },
  ];

  const handleLinkClick = () => setIsOpen(false);

  // Reusable inline styles for demonstration. Real project might use CSS Modules or Tailwind.
  // We'll stick to a robust standard CSS approach utilizing our global properties.
  return (
    <nav className="navbar" style={{
      backgroundColor: 'var(--white)',
      boxShadow: 'var(--box-shadow)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
      padding: '1rem 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--primary-color)' }}>
          <Hammer size={32} color="var(--accent-color)" />
          <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>Reformas<span style={{ color: 'var(--accent-color)' }}>Pro</span></span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'none' }} className="desktop-nav">
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  fontWeight: 600,
                  color: location.pathname === link.path ? 'var(--accent-color)' : 'var(--text-main)',
                  transition: 'var(--transition)'
                }}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/quote" className="btn btn-primary" style={{ display: 'flex', gap: '0.5rem' }}>
              Solicitar Presupuesto
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="mobile-toggle" style={{ display: 'block' }}>
          <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', color: 'var(--primary-color)' }}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu" style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'var(--white)',
          padding: '1rem',
          boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={handleLinkClick}
              style={{
                padding: '0.75rem 1rem',
                fontWeight: 600,
                color: location.pathname === link.path ? 'var(--accent-color)' : 'var(--text-main)',
                backgroundColor: location.pathname === link.path ? 'var(--background-light)' : 'transparent',
                borderRadius: '0.375rem',
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/quote" onClick={handleLinkClick} className="btn btn-primary" style={{ justifyContent: 'center', marginTop: '1rem' }}>
            Solicitar Presupuesto
          </Link>
        </div>
      )}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
