import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image?: string;
  children?: ReactNode;
}

const PageHeader = ({ title, subtitle, image, children }: PageHeaderProps) => {
  const defaultImage = "https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80";
  const bgImage = image || defaultImage;

  return (
    <div style={{
      position: 'relative',
      padding: '6rem 0',
      color: 'var(--white)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      minHeight: '30vh'
    }}>
      {/* Background Image with Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: -2
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(15, 23, 42, 0.7)', // Overlay using primary color
        zIndex: -1
      }} />

      <div className="container fade-in">
        <h1 style={{
          fontSize: '3rem',
          marginBottom: '1rem',
          color: 'var(--white)'
        }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{
            fontSize: '1.25rem',
            color: '#E2E8F0',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            {subtitle}
          </p>
        )}
        {children && <div style={{ marginTop: '2rem' }}>{children}</div>}
      </div>
    </div>
  );
};

export default PageHeader;
