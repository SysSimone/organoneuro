import { FaRocket } from 'react-icons/fa';

import '../Rodape';

const Rodape = () => {
  //const instagramUrl = 'https://www.instagram.com/sy.balzan';
  //const linkedinUrl = 'https://www.linkedin.com/in/simonebsdev';
  //const twitterUrl = 'https://twitter.com/sybalzan';
  //const githubUrl = 'https://github.com/SysSimone';
  
  return (
    
<footer className="rodape">
        
      <section>
     
        
        <ul>
          <li>      
          
          <a href="https://www.linkedin.com/in/simonebsdev/"><FaRocket /> Clique aqui para visualizar meu Linkedin
              
            </a>
          </li>
          <li>
          <a href="https://www.instagram.com/sy.balzan/">

              Clique aqui para visualizar meu instagram
             </a>
          </li>
          <li>
          <a href="https://github.com/SysSimone">
              Clique aqui para visualizar meu GitHub
            </a>
          </li>
          
        </ul>
      </section>
    </footer>
  );
}

export default Rodape;






