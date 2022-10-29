import style from './style.module.scss';

export default function SmallCard({ srcImage, alt, title, description, date, href }) {
    return (
        <article className={style.small_card}>
            <img className={style.small_card_img} alt={alt} src={srcImage}></img>
            <div className={style.small_card_content}>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={style.small_card_date}>
                    <p>{date}</p>
                    <a href={href}>Ler matéria</a>
                </div>
            </div>
        </article>
    )
}