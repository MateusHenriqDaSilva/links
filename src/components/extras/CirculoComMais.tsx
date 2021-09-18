import estilo from '../../styles/CirculoComMais.module.css'

export default function CirculoComMais() {
    return (
        <div className={estilo.layout}>
            <div className={estilo.tracoHorizontal} />
            <div className={estilo.tracoVertical} />
        </div>
    )
}