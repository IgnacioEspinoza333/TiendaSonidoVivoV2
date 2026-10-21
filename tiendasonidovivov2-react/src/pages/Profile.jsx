import ProfileCard from '../components/organisms/ProfileCard';
import '../styles/estilosindex.css';
import '../styles/estiloscompra.css';
import '../styles/estilosperfil.css';

export default function Profile() {
  return (
    <section id="contenido-perfil">
      <h2>Mi Perfil</h2>
      <p className="perfil-subtitulo">Estos son los datos de tu cuenta en Sonido Vivo.</p>
      <ProfileCard />
    </section>
  );
}