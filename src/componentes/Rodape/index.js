// import { SiLinkedin } from 'react-icons/si';
// import { AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import '../Rodape';


const Rodape = () => {
  const instagramUrl = 'https://www.instagram.com/sy.balzan';

  return (<footer className="footer">
     <section>
     <ul>
          <li>
               <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                  <img src="/imagens/instagram.png" alt="logo instagram" />
                  
              </a>
          </li>
          <li>
              <a href="twitter.com" target="_blank">
                  <img src="/imagens/twitter.png" alt="" />
              </a>
          </li>
          <li>
              <a href="instagram.com" target="_blank">
                  <img src="/imagens/instagram.png" alt="" />
              </a>
          </li>
      </ul>
     </section>
     <section>
     <img src="/imagens/logo.png" alt="" />
     </section>
     <section>
      <p>
          Desenvolvido por Alura.
      </p>
     </section>
  </footer>)
}

export default Rodape





