import style from './style.module.scss';

export default function BigCard({ title, description, date, href, imageSrc }) {
    return (
        <article className={style.big_card}>
            <div className={style.big_card_content}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={style.big_card_date}>
                    <p>{date}</p>
                    <a title="Ver matéria" href={href}>Ver matéria</a>
                </div>
            </div>
            <div className={style.big_card_image}>
                <img alt="Imagem Blog" src={imageSrc}></img>
            </div>
        </article>
    )
}