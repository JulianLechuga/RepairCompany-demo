import PageHeader from '../components/PageHeader';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Reforma Integral en Barrio Salamanca',
      category: 'Integral',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 2,
      title: 'Cocina Moderna Abierta',
      category: 'Cocina',
      image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 3,
      title: 'Baño Minimalista',
      category: 'Baño',
      image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
    },
    {
      id: 4,
      title: 'Reforma Loft Chamberí',
      category: 'Integral',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09c15468?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 5,
      title: 'Suelos de Tarima en Chamartín',
      category: 'Suelos',
      image: 'https://images.unsplash.com/photo-1581858326442-88229fb443f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    },
    {
      id: 6,
      title: 'Renovación de Baño Suite',
      category: 'Baño',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    }
  ];

  return (
    <div>
      <PageHeader 
        title="Proyectos Realizados" 
        subtitle="Explore nuestro portfolio de reformas y descubra la calidad de nuestros acabados."
        image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
      />

      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          {/* Simple Gallery Grid */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', 
            gap: '2rem' 
          }}>
            {projects.map((project) => (
              <div 
                key={project.id} 
                style={{ 
                  borderRadius: '0.5rem', 
                  overflow: 'hidden',
                  boxShadow: 'var(--box-shadow)',
                  position: 'relative'
                }}
                className="project-card group"
              >
                <div style={{ height: '300px', overflow: 'hidden' }}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }} 
                    className="project-img"
                  />
                </div>
                <div style={{ padding: '1.5rem', backgroundColor: 'var(--white)' }}>
                  <span style={{ 
                    display: 'inline-block', 
                    padding: '0.25rem 0.75rem', 
                    backgroundColor: 'var(--background-light)', 
                    color: 'var(--accent-color)', 
                    borderRadius: '999px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    marginBottom: '0.75rem'
                  }}>
                    {project.category}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0' }}>{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .project-card:hover .project-img {
            transform: scale(1.05);
          }
        `}</style>
      </section>

      {/* CTA section */}
      <section className="section" style={{ backgroundColor: 'var(--primary-color)', color: 'var(--white)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--white)' }}>¿Inspirado por nuestros proyectos?</h2>
          <p style={{ fontSize: '1.2rem', color: '#CBD5E1', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Transforme su hogar con nuestro equipo de profesionales. Cuéntenos su idea y le propondremos la mejor solución.
          </p>
          <Link to="/quote" className="btn btn-primary" style={{ fontSize: '1.125rem' }}>
            Contactar Ahora <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
