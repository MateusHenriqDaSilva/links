import estilo from '../../styles/Cartao.module.css'
import Image from 'next/image';
import Link from 'next/link'
import CirculoComMais from '../extras/CirculoComMais';
import { iconeComprar } from '../icons';

interface cartaoProps {
    titulo: string
    subtitulo: string
    link: string
    imagem: any
    icone: any
}

export default function Cartao(props: cartaoProps) {
    return (
        <div className={estilo.cartao}>
            <div className={estilo.titulo}>{props.titulo}</div>
            <div className={estilo.subtitulo}>{props.subtitulo}</div>
            <Link href={props.link} passHref>
                <Image src={props.imagem} width={200} height={200} alt="Imagem do linkedin" className={estilo.imagem} />
            </Link>
            <Link href={props.link} passHref>
            <div className={estilo.botaoPersonalizado}>
                {props.icone}
            </div>
            </Link>
        </div >
    )
}