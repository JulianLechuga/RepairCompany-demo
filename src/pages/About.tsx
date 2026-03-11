import { Award, Users, Target, Heart } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const About = () => {
  return (
    <div>
      <PageHeader 
        title="Sobre Nosotros" 
        subtitle="Más de 15 años transformando hogares en la Comunidad de Madrid con pasión y dedicación."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80"
      />

      {/* History & Mission */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--primary-color)' }}>Nuestra Historia</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                ReformasPro nació hace más de 15 años con una visión clara: profesionalizar el sector de las reformas 
                ofreciendo un servicio integral donde la transparencia, la calidad y el cumplimiento de plazos fueran la norma y no la excepción.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '2rem', lineHeight: '1.8' }}>
                Con sede en Madrid, nuestro equipo está formado por profesionales altamente cualificados en todos los gremios: 
                albañilería, fontanería, electricidad, carpintería y diseño de interiores. Nos enorgullece decir que 
                más del 70% de nuestros nuevos clientes llegan por recomendación de clientes satisfechos.
              </p>
              
              <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-color)' }}>15+</div>
                  <div style={{ color: 'var(--text-main)', fontWeight: 600 }}>Años de exp.</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-color)' }}>500+</div>
                  <div style={{ color: 'var(--text-main)', fontWeight: 600 }}>Proyectos</div>
                </div>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-color)' }}>100%</div>
                  <div style={{ color: 'var(--text-main)', fontWeight: 600 }}>Satisfacción</div>
                </div>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <img 
                src="https://images.unsplash.com/photo-1541888086925-92080f5bb1c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80" 
                alt="Equipo trabajando" 
                style={{ borderRadius: '0.5rem', boxShadow: 'var(--box-shadow)', width: '100%' }}
              />
              <div style={{ 
                position: 'absolute', 
                bottom: '-2rem', 
                left: '-2rem', 
                backgroundColor: 'var(--primary-color)', 
                color: 'var(--white)',
                padding: '2rem',
                borderRadius: '0.5rem',
                boxShadow: 'var(--box-shadow)',
                maxWidth: '250px'
              }} className="hide-on-mobile">
                <h4 style={{ color: 'var(--white)', marginBottom: '0.5rem' }}>Compromiso Total</h4>
                <p style={{ fontSize: '0.9rem', color: '#CBD5E1', margin: 0 }}>Su tranquilidad es nuestro mayor objetivo.</p>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .hide-on-mobile { display: none; }
          }
        `}</style>
      </section>

      {/* Values */}
      <section className="section" style={{ backgroundColor: 'var(--background-light)' }}>
        <div className="container">
          <h2 className="section-title">Nuestros Valores</h2>
          <p className="section-subtitle">Los pilares fundamentales sobre los que construimos la confianza con nuestros clientes.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
            {[
              { icon: <Award size={32} color="var(--white)" />, title: 'Calidad Premium', desc: 'Trabajamos solo con materiales de primera calidad y marcas reconocidas.', bg: '#0F172A' },
              { icon: <Target size={32} color="var(--white)" />, title: 'Puntualidad', desc: 'Cumplimos estrictamente con los plazos de entrega acordados en contrato.', bg: '#1E293B' },
              { icon: <Users size={32} color="var(--white)" />, title: 'Equipo Experto', desc: 'Profesionales en constante formación y especialistas en cada gremio.', bg: '#334155' },
              { icon: <Heart size={32} color="var(--white)" />, title: 'Atención Cercana', desc: 'Escuchamos sus necesidades y le asesoramos de forma personalizada.', bg: '#475569' }
            ].map((value, index) => (
              <div key={index} style={{
                backgroundColor: 'var(--white)',
                padding: '2.5rem 2rem',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)',
                textAlign: 'center'
              }}>
                <div style={{ 
                  width: '64px', 
                  height: '64px', 
                  backgroundColor: 'var(--accent-color)', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  boxShadow: '0 4px 10px rgba(245, 158, 11, 0.3)'
                }}>
                  {value.icon}
                </div>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{value.title}</h3>
                <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
