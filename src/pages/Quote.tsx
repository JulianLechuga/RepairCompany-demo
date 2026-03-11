import { useState } from 'react';
import { Send, Clock, Calculator, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Quote = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div style={{ backgroundColor: 'var(--background-light)', minHeight: '100vh' }}>
      <PageHeader 
        title="Solicite su Presupuesto" 
        subtitle="Rellene el formulario y nos pondremos en contacto con usted en menos de 24 horas para valorar su proyecto sin compromiso."
        image="https://images.unsplash.com/photo-1541123437800-1c5c0a9693bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="container section" style={{ marginTop: '-4rem', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '2rem' }}>
          
          {/* Info Panel side */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ 
              backgroundColor: 'var(--primary-color)', 
              color: 'var(--white)', 
              padding: '2.5rem', 
              borderRadius: '0.5rem',
              boxShadow: 'var(--box-shadow)'
            }}>
              <h3 style={{ color: 'var(--white)', marginBottom: '1.5rem', fontSize: '1.5rem' }}>El proceso es sencillo</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '50%' }}>
                    <Calculator size={24} color="var(--accent-color)" />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--white)', margin: '0 0 0.25rem 0' }}>1. Solicitud</h4>
                    <p style={{ color: '#CBD5E1', margin: 0, fontSize: '0.9rem' }}>Cuéntenos qué necesita reformar rellenando este formulario.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '50%' }}>
                    <Clock size={24} color="var(--accent-color)" />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--white)', margin: '0 0 0.25rem 0' }}>2. Visita Técnica</h4>
                    <p style={{ color: '#CBD5E1', margin: 0, fontSize: '0.9rem' }}>Visitamos su inmueble gratis para tomar medidas y asesorarle.</p>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '50%' }}>
                    <CheckCircle2 size={24} color="var(--accent-color)" />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--white)', margin: '0 0 0.25rem 0' }}>3. Presupuesto Exacto</h4>
                    <p style={{ color: '#CBD5E1', margin: 0, fontSize: '0.9rem' }}>Presentamos un presupuesto detallado, cerrado y sin compromiso.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div style={{ 
              backgroundColor: 'var(--white)', 
              padding: '2rem', 
              borderRadius: '0.5rem',
              boxShadow: 'var(--box-shadow)'
            }}>
              <h4 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>¿Dudas urgentes?</h4>
              <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>Llámenos directamente y le atenderemos al instante.</p>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--accent-color)' }}>
                +34 912 345 678
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div style={{ 
            backgroundColor: 'var(--white)', 
            padding: '3rem', 
            borderRadius: '0.5rem',
            boxShadow: 'var(--box-shadow)'
          }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }} className="fade-in">
                <CheckCircle2 size={64} color="#10B981" style={{ margin: '0 auto 1.5rem' }} />
                <h2 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>¡Solicitud enviada con éxito!</h2>
                <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                  Hemos recibido sus datos correctamente. Uno de nuestros técnicos contactará con usted en las próximas 24-48 horas lectivas.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="btn btn-secondary"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} className="fade-in">
                <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--primary-color)', borderBottom: '2px solid var(--background-light)', paddingBottom: '1rem' }}>
                  Detalles del Proyecto
                </h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-grid">
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Nombre Completo *</label>
                    <input type="text" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.375rem', border: '1px solid #CBD5E1', outline: 'none' }} placeholder="Juan Pérez" />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Teléfono *</label>
                    <input type="tel" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.375rem', border: '1px solid #CBD5E1', outline: 'none' }} placeholder="600 000 000" />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="form-grid">
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email *</label>
                    <input type="email" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.375rem', border: '1px solid #CBD5E1', outline: 'none' }} placeholder="juan@ejemplo.com" />
                  </div>
                  <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Código Postal de la Obra *</label>
                    <input type="text" required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.375rem', border: '1px solid #CBD5E1', outline: 'none' }} placeholder="28001" />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Tipo de Reforma *</label>
                  <select required style={{ width: '100%', padding: '0.75rem', borderRadius: '0.375rem', border: '1px solid #CBD5E1', outline: 'none', backgroundColor: 'var(--white)' }}>
                    <option value="">Seleccione una opción</option>
                    <option value="integral">Reforma Integral de Vivienda</option>
                    <option value="cocina">Reforma de Cocina</option>
                    <option value="bano">Reforma de Baño</option>
                    <option value="local">Reforma de Local Comercial</option>
                    <option value="otros">Otros (Suelos, Pintura, etc.)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Descripción y Detalles del Proyecto *</label>
                  <textarea 
                    required 
                    rows={5} 
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '0.375rem', border: '1px solid #CBD5E1', outline: 'none', resize: 'vertical' }} 
                    placeholder="Cuéntenos más sobre su idea (metros cuadrados aproximados, calidades deseadas, fecha estimada para inicio...)"
                  ></textarea>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                  <input type="checkbox" id="privacy" required style={{ marginTop: '0.25rem' }} />
                  <label htmlFor="privacy" style={{ fontSize: '0.875rem', color: 'var(--text-light)' }}>
                    He leído y acepto la política de privacidad. Consiento el tratamiento de mis datos para la gestión de este presupuesto.
                  </label>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.125rem', padding: '1rem', marginTop: '1rem' }}>
                  Enviar Solicitud <Send size={20} style={{ marginLeft: '0.5rem' }} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .container > div {
            grid-template-columns: 1fr !important;
          }
          .form-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Quote;
