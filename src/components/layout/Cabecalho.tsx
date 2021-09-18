import estilo from '../../styles/Cabecalho.module.css'

export default function Cabecalho() {
    return (
        <div className={estilo.layout}>
            <div className={estilo.titulo}>Seja Bem Vindo</div>
            <div className={estilo.subtitulo}>Mateus o Aventureiro</div>
        </div>
    )
}