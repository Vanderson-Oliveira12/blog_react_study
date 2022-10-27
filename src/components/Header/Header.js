import style from './style.module.scss';
import hero from '../../svg/hero.svg';
import coffe from '../../svg/coffe.svg'

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.header_title}>
                <h1>
                    Make better <br />
                    <span>
                        coffee
                        <img alt="Café" src={coffe}></img>
                    </span>
                </h1>
                <h2>
                    why learn how to blog?
                </h2>
            </div>
            <div className={style.header_hero}>
                <img src={hero} alt="Hero Background"></img>
            </div>
        </header>
    )
}