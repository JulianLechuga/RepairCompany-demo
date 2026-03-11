import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  return (
    <div>
      <PageHeader 
        title="Contacto" 
        subtitle="Estamos aquí para ayudarle. Llámenos, envíenos un correo o visítenos en nuestra oficina."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
      />

      <section className="section" style={{ backgroundColor: 'var(--background-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            
            {/* Contact Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ backgroundColor: 'var(--white)', padding: '2rem', borderRadius: '0.5rem', boxShadow: 'var(--box-shadow)', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--background-light)', padding: '1rem', borderRadius: '50%' }}>
                  <Phone size={28} color="var(--accent-color)" />
                </div>
                <div>
                  <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary-color)' }}>Teléfono</h3>
                  <p style={{ color: 'var(--text-light)', marginBottom: '0.5rem' }}>Atención al cliente y presupuestos</p>
                  <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--primary-color)', margin: 0 }}>+34 912 345 678</p>
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--white)', padding: '2rem', borderRadius: '0.5rem', boxShadow: 'var(--box-shadow)', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--background-light)', padding: '1rem', borderRadius: '50%' }}>
                  <Mail size={28} color="var(--accent-color)" />
                </div>
                <div>
                  <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary-color)' }}>Email</h3>
                  <p style={{ color: 'var(--text-light)', marginBottom: '0.5rem' }}>Envíanos tus consultas o planos</p>
                  <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--primary-color)', margin: 0 }}>info@reformaspro.es</p>
                </div>
              </div>

              <div style={{ backgroundColor: 'var(--white)', padding: '2rem', borderRadius: '0.5rem', boxShadow: 'var(--box-shadow)', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                <div style={{ backgroundColor: 'var(--background-light)', padding: '1rem', borderRadius: '50%' }}>
                  <Clock size={28} color="var(--accent-color)" />
                </div>
                <div>
                  <h3 style={{ marginBottom: '0.5rem', color: 'var(--primary-color)' }}>Horario</h3>
                  <p style={{ color: 'var(--text-light)', marginBottom: '0' }}>Lunes - Viernes: 09:00 - 19:00</p>
                  <p style={{ color: 'var(--text-light)', margin: 0 }}>Sábados: Con cita previa</p>
                </div>
              </div>
            </div>

            {/* Office Info & Secondary Map */}
            <div style={{ backgroundColor: 'var(--white)', padding: '2.5rem', borderRadius: '0.5rem', boxShadow: 'var(--box-shadow)' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                <MapPin size={32} color="var(--accent-color)" />
                <h2 style={{ margin: 0, color: 'var(--primary-color)' }}>Nuestra Oficina Central</h2>
              </div>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Calle Gran Vía 15</p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', marginBottom: '2rem' }}>28013 Madrid, España</p>
              
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                * Le recomendamos solicitar cita previa antes de visitarnos para asegurarnos de que el técnico especialista adecuado pueda atenderle.
              </p>

              <div style={{ width: '100%', height: '300px', borderRadius: '0.5rem', overflow: 'hidden', backgroundColor: '#E2E8F0' }}>
                 {/* Google Maps Embed for Madrid center */}
                 <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12149.610530737385!2d-3.71261!3d40.4203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42287e0767cb27%3A0xeab5e82b7db3e130!2sGran%20V%C3%ADa%2C%20Madrid!5e0!3m2!1sen!2ses!4v1698246835263!5m2!1sen!2ses" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Oficina ReformasPro Madrid"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
