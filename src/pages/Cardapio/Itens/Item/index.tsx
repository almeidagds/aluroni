import styles from "./Item.module.scss";
import logo from "assets/logo.svg";

export default function Item() {
    return (
        <div className={styles.item}>
            <div className={styles.item__imagem}>
                <img src={logo} alt="imagem" />
            </div>
            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2>Macarrão</h2>
                    <p>Descrição macarrão</p>
                </div>
            </div>
            <div className={styles.item__tags}>
                <div className={styles.item__tipo}>
                    Massa
                </div>
                <div className={styles.item__porcao}>
                    400g
                </div>
                <div className={styles.item__qtdpessoas}>
                    Serve 2 pessoas
                </div>
                <div className={styles.item__valor}>
                    R$50.00
                </div>
            </div>
        </div>
    );
}