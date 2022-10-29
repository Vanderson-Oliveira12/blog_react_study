import style from './style.module.scss';

export default function GiantCard({ title, description, date, href, titleLink, srcImage, altImage }) {
    return (
        <article className={style.giant_card}>
            <div className={style.giant_card_content}>
                <h2>
                    <strong>
                        {title}
                    </strong>
                </h2>
                <p>
                    {description}
                </p>
                <div className={style.giant_card_date}>
                    <p>
                        {date}
                    </p>
                    <a href={href} title={titleLink}>
                        Ver matéria
                    </a>
                </div>
            </div>
            <div className={style.giant_card_image}>
                <img src={srcImage} alt={altImage}></img>
            </div>

        </article>
    )
}