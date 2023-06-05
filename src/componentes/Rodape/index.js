import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai';
import './Rodape.css'

const Rodape = () => {
    const instagramUrl = 'https://www.instagram.com/sy.balzan';
    const linkedinUrl = "https://www.linkedin.com/in/simonebsdev/";
    const githubUrl = "https://github.com/SysSimone";

    return (
        <footer className="footer">
            <section>
                <img src="/imagens/logo.png" alt="" />
            </section>
            <section>
                <ul>
                    <li>
                        <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
                            <AiFillInstagram size={50} />
                        </a>
                    </li>
                    <li>
                        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                            <AiFillLinkedin size={50} />
                        </a>
                    </li>
                    <li>
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                            <AiFillGithub size={50} />
                        </a>
                    </li>
                </ul>
            </section>
            <section >
                <p>Desenvolvido por Simonebsdev</p>
            </section>
        </footer>)
}

export default Rodape;