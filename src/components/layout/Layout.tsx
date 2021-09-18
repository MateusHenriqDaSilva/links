import estilo from '../../styles/Layout.module.css'
import Cartao from '../cartao/Cartao'
import Cabecalho from './Cabecalho'
import imagemLinkedin from '../../../public/linkedin.jpeg'
import imagemFacebook from '../../../public/facebook.jpg'
import imagemInstagram from '../../../public/instagram.png'
import imagemGithub from '../../../public/github.png'
import imagemTwitter from '../../../public/twitter.jpg'
import imagemMateus from '../../../public/mateus.png'
import { iconeComprar } from '../icons'

export default function Layout() {
    return (
        <div className={estilo.layout}>
            <Cabecalho />
            <div className={estilo.container}>
                <Cartao
                    titulo="Linkedin"
                    subtitulo="Siga e acompanhe experiencias de trabalho"
                    link="https://www.linkedin.com/in/mateus-henrique-309402198"
                    imagem={imagemLinkedin}
                    icone={iconeComprar()}
                />
                <Cartao
                    titulo="Facebook"
                    subtitulo="Siga e acompanhe a vida diaria de forma informal"
                    link="https://www.facebook.com/profile.php?id=100009415090594"
                    imagem={imagemFacebook}
                    icone={iconeComprar()}
                />
                <Cartao
                    titulo="Instagram"
                    subtitulo="Siga e acompanhe fotos com textos curtos sobre paixoes e hobbies"
                    link="https://www.instagram.com/mateusoaventureiro/"
                    imagem={imagemInstagram}
                    icone={iconeComprar()}
                />
            </div>
            <div className={estilo.container}>
                <Cartao
                    titulo="Github"
                    subtitulo="Siga e acompanhe codigos de desenvolvimento"
                    link="https://github.com/mateusprogaming"
                    imagem={imagemGithub}
                    icone={iconeComprar()}
                />
                <Cartao
                    titulo="Twiiter"
                    subtitulo="Siga e acompanhe e tire suas duvidas com twiits"
                    link="https://twitter.com/MateusH46528273"
                    imagem={imagemTwitter}
                    icone={iconeComprar()}
                />
                <Cartao
                    titulo="Portfolio"
                    subtitulo="Siga e baixe o curriculo"
                    link="https://mahends.tk/"
                    imagem={imagemMateus}
                    icone={iconeComprar()}
                />
            </div >
        </div >
    )
}
