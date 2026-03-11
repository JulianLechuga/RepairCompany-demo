import { Check, Bath, Utensils, Home as HomeIcon, PaintRoller } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';

const Services = () => {
  const servicesList = [
    {
      id: 'cocinas',
      title: 'Reformas de Cocinas',
      icon: <Utensils size={40} color="var(--accent-color)" />,
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'Diseñamos y ejecutamos reformas de cocinas combinando funcionalidad y estética. Trabajamos con los mejores fabricantes de muebles y electrodomésticos.',
      features: ['Diseño 3D previo', 'Mobiliario a medida', 'Alicatados y solados', 'Instalación de fontanería y electricidad']
    },
    {
      id: 'banos',
      title: 'Reformas de Baños',
      icon: <Bath size={40} color="var(--accent-color)" />,
      image: 'https://images.unsplash.com/photo-1564540586988-cb5a45b34006?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'Actualizamos su cuarto de baño para hacerlo más seguro, moderno y accesible. Especialistas en cambio de bañera por plato de ducha.',
      features: ['Platos de ducha antideslizantes', 'Mamparas a medida', 'Sanitarios suspendidos', 'Grifería eficiente']
    },
    {
      id: 'integrales',
      title: 'Reformas Integrales',
      icon: <HomeIcon size={40} color="var(--accent-color)" />,
      image: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'Gestión completa de la reforma de su vivienda. Un único interlocutor coordinando todos los gremios para cumplir plazos y presupuesto.',
      features: ['Demoliciones e insonorización', 'Albañilería general', 'Carpintería interior y exterior', 'Climatización y calefacción']
    },
    {
      id: 'pintura',
      title: 'Pintura y Suelos',
      icon: <PaintRoller size={40} color="var(--accent-color)" />,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      description: 'Renovamos el aspecto de su hogar con acabados impecables en pintura y la instalación de todo tipo de pavimentos.',
      features: ['Pintura en liso y estucos', 'Tarimas flotantes y parquet', 'Suelos porcelánicos', 'Rodapiés y molduras']
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Nuestros Servicios" 
        subtitle="Especialistas en cada etapa de su reforma. Descubra todo lo que podemos hacer por su hogar."
        image="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <section className="section" style={{ backgroundColor: 'var(--background-light)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {servicesList.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                style={{ 
                  display: 'flex', 
                  flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                  gap: '3rem',
                  alignItems: 'center',
                  backgroundColor: 'var(--white)',
                  borderRadius: '0.5rem',
                  overflow: 'hidden',
                  boxShadow: 'var(--box-shadow)'
                }}
                className="service-card"
              >
                <div style={{ flex: 1, minHeight: '300px' }}>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ flex: 1, padding: '3rem' }}>
                  <div style={{ marginBottom: '1.5rem' }}>{service.icon}</div>
                  <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary-color)' }}>{service.title}</h2>
                  <p style={{ fontSize: '1.1rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
                    {service.description}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    {service.features.map((feature, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)' }}>
                        <Check size={20} color="var(--accent-color)" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div style={{ marginTop: '2.5rem' }}>
                    <Link to="/quote" className="btn btn-primary">Solicitar Presupuesto</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 900px) {
            .service-card {
              flex-direction: column !important;
            }
            .service-card > div {
              width: 100%;
            }
          }
        `}</style>
      </section>
    </div>
  );
};

export default Services;
