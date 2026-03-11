import { Link } from 'react-router-dom';
import { Hammer, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--primary-color)',
      color: 'var(--white)',
      padding: '4rem 0 2rem 0',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          {/* Brand & About */}
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--white)', marginBottom: '1.5rem' }}>
              <Hammer size={32} color="var(--accent-color)" />
              <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>Reformas<span style={{ color: 'var(--accent-color)' }}>Pro</span></span>
            </Link>
            <p style={{ color: '#CBD5E1', marginBottom: '1.5rem' }}>
              Transformamos tus espacios en Madrid con más de 15 años de experiencia en reformas integrales, cocinas y baños. Calidad y compromiso en cada detalle.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#" style={{ color: 'var(--white)' }}><Facebook size={24} /></a>
              <a href="#" style={{ color: 'var(--white)' }}><Instagram size={24} /></a>
              <a href="#" style={{ color: 'var(--white)' }}><Twitter size={24} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'var(--white)', fontSize: '1.25rem', marginBottom: '1.5rem' }}>Enlaces Rápidos</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li><Link to="/services" style={{ color: '#CBD5E1' }}>Nuestros Servicios</Link></li>
              <li><Link to="/projects" style={{ color: '#CBD5E1' }}>Proyectos Realizados</Link></li>
              <li><Link to="/about" style={{ color: '#CBD5E1' }}>Sobre Nosotros</Link></li>
              <li><Link to="/contact" style={{ color: '#CBD5E1' }}>Contacto</Link></li>
              <li><Link to="/quote" style={{ color: 'var(--accent-color)', fontWeight: 600 }}>Solicitar Presupuesto</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ color: 'var(--white)', fontSize: '1.25rem', marginBottom: '1.5rem' }}>Contacto</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '1rem', color: '#CBD5E1', alignItems: 'flex-start' }}>
                <MapPin size={20} color="var(--accent-color)" style={{ flexShrink: 0 }} />
                <span>Calle Gran Vía 15, 28013 Madrid, España</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', color: '#CBD5E1', alignItems: 'center' }}>
                <Phone size={20} color="var(--accent-color)" style={{ flexShrink: 0 }} />
                <span>+34 912 345 678</span>
              </li>
              <li style={{ display: 'flex', gap: '1rem', color: '#CBD5E1', alignItems: 'center' }}>
                <Mail size={20} color="var(--accent-color)" style={{ flexShrink: 0 }} />
                <span>info@reformaspro.es</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #334155',
          paddingTop: '2rem',
          textAlign: 'center',
          color: '#94A3B8',
          fontSize: '0.875rem'
        }}>
          &copy; {new Date().getFullYear()} ReformasPro. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
