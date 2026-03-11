import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Clock, ThumbsUp } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Home = () => {
  const services = [
    { title: 'Reformas Integrales', icon: '🏠', desc: 'Transformación completa de su vivienda con llave en mano.' },
    { title: 'Cocinas y Baños', icon: '🚿', desc: 'Diseños modernos y funcionales adaptados a su estilo de vida.' },
    { title: 'Pintura y Suelos', icon: '🎨', desc: 'Renueve el aspecto de su hogar con acabados profesionales.' },
  ];

  const testimonials = [
    { name: 'María García', text: 'Excelente trabajo en la reforma de mi baño. Profesionales y puntuales.', rating: 5 },
    { name: 'Carlos López', text: 'La cocina quedó espectacular. Muy recomendables por su atención al detalle.', rating: 5 },
    { name: 'Ana Martínez', text: 'Cumplieron los plazos y el presupuesto. ¡Gracias por transformar nuestro salón!', rating: 5 },
  ];

  return (
    <div>
      {/* Dynamic Hero Section using PageHeader concept but tailored for Home */}
      <PageHeader
        title="Transformamos su Hogar"
        subtitle="Especialistas en reformas integrales en Madrid. Calidad, diseño y compromiso en cada proyecto."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
      >
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/quote" className="btn btn-primary" style={{ fontSize: '1.125rem', padding: '1rem 2rem' }}>
            Solicitar Presupuesto <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
          </Link>
          <Link to="/projects" className="btn btn-secondary" style={{ fontSize: '1.125rem', padding: '1rem 2rem', borderColor: 'var(--white)', color: 'var(--white)' }}>
            Ver Proyectos
          </Link>
        </div>
      </PageHeader>

      {/* Trust Indicators */}
      <section style={{ backgroundColor: 'var(--white)', padding: '3rem 0', borderBottom: '1px solid #E2E8F0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <ShieldCheck size={40} color="var(--accent-color)" />
            <div>
              <h4 style={{ margin: 0, fontSize: '1.1rem' }}>15+ Años</h4>
              <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '0.9rem' }}>De experiencia</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Clock size={40} color="var(--accent-color)" />
            <div>
              <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Plazos Reales</h4>
              <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '0.9rem' }}>Cumplimiento garantizado</p>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <ThumbsUp size={40} color="var(--accent-color)" />
            <div>
              <h4 style={{ margin: 0, fontSize: '1.1rem' }}>Satisfacción</h4>
              <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '0.9rem' }}>Clientes 100% felices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="section" style={{ backgroundColor: 'var(--background-light)' }}>
        <div className="container">
          <h2 className="section-title">Nuestros Servicios</h2>
          <p className="section-subtitle">Ofrecemos soluciones integrales para renovar cualquier espacio de su vivienda con los mejores materiales.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {services.map((service, index) => (
              <div key={index} style={{
                backgroundColor: 'var(--white)',
                padding: '2.5rem 2rem',
                borderRadius: '0.5rem',
                boxShadow: 'var(--box-shadow)',
                transition: 'transform 0.3s ease',
                textAlign: 'center'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{service.icon}</div>
                <h3 style={{ marginBottom: '1rem' }}>{service.title}</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>{service.desc}</p>
                <Link to="/services" style={{ color: 'var(--accent-color)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Saber más <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Choose Us & Process */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" alt="Proceso de reforma" style={{ borderRadius: '0.5rem', boxShadow: 'var(--box-shadow)' }} />
          </div>
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>¿Por qué elegir ReformasPro?</h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '2rem', fontSize: '1.1rem' }}>
              Nos encargamos de todo el proceso, desde el diseño inicial hasta la entrega de llaves, para que usted no tenga que preocuparse por nada.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                'Presupuesto detallado y sin compromiso.',
                'Asesoramiento personalizado en materiales.',
                'Un único interlocutor durante toda la obra.',
                'Limpieza final incluida en todos los proyectos.'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.1rem' }}>
                  <CheckCircle2 color="var(--accent-color)" size={24} style={{ flexShrink: 0 }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .container { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white)' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: 'var(--white)' }}>Lo que dicen nuestros clientes</h2>
          <p className="section-subtitle" style={{ color: '#CBD5E1' }}>La satisfacción de nuestros clientes es nuestra mejor garantía.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {testimonials.map((testio, index) => (
              <div key={index} style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                padding: '2rem',
                borderRadius: '0.5rem',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem', color: 'var(--accent-color)' }}>
                  {[...Array(testio.rating)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                </div>
                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', fontSize: '1.1rem', color: '#E2E8F0' }}>"{testio.text}"</p>
                <div style={{ fontWeight: 600 }}>- {testio.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center', backgroundColor: 'var(--background-light)' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>¿Listo para empezar su proyecto?</h2>
          <p style={{ color: 'var(--text-light)', fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Contacte con nosotros hoy mismo y solicite su presupuesto gratuito. Estamos aquí para ayudarle a hacer realidad la casa de sus sueños.
          </p>
          <Link to="/quote" className="btn btn-primary" style={{ fontSize: '1.25rem', padding: '1rem 2.5rem' }}>
            Solicitar Presupuesto Gratuito
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
