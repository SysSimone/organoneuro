import { SiLinkedin } from 'react-icons/si';
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai'
import '../Rodape';


const Rodape = () => {
   return (   
      <ul className='icons-container' >
        <div >
          <a href="https://www.linkedin.com/in/simonebsdev/"> <SiLinkedin color={'black'} size={30}  />
          </a>
        </div>
        <div >
          <a href="https://www.instagram.com/sy.balzan/"><AiFillInstagram color={'black'} size={30} display={'flex'} flex-direction={'column'} />
          </a>
        </div>
        <div >
          <a href="https://github.com/SysSimone/profile"><AiFillGithub color={'black'} size={30} display={'flex'} flex-direction={'column'} />
          </a>
        </div>
      </ul>

    
  );
}

export default Rodape;






