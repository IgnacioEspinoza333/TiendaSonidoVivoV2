import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="pie">
      <div className="pie-contenedor">
        <div className="pie-columna">
          <div className="pie-marca">
            <img src="/img/logo-tienda.jpg" alt="Logo Sonido Vivo" className="pie-logo-img" />
            <h3 className="pie-logo">SONIDO VIVO</h3>
          </div>
          <p>Tienda de instrumentos y equipamiento musical con atención presencial y despachos a todo Chile.</p>
          <p><strong>Ubicación:</strong> Viña del Mar, Región de Valparaíso.</p>
        </div>

        <div className="pie-columna">
          <h4>Navegación</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/productos">Catálogo Completo</Link></li>
            <li><Link to="/login">Iniciar Sesión</Link></li>
            <li><Link to="/registro">Crear Cuenta</Link></li>
          </ul>
        </div>

        <div className="pie-columna">
          <h4>Contacto y Pedidos</h4>
          <p>¿Eres de otra ciudad? Consulta disponibilidad y haz tu pedido:</p>
          <p>📱 WhatsApp / Instagram</p>
          <p>✉️ contacto@sonidovivo.cl</p>
        </div>
      </div>

      <div className="pie-creditos">
        <p><small>&copy; 2026 Sonido Vivo — Todos los derechos reservados.</small></p>
      </div>
    </footer>
  );
}