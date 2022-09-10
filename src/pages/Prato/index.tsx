import styles from "./Prato.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import cardapio from "data/cardapio.json";
import TagsPrato from "components/TagsPrato";

export default function Prato() {
	
	const { id } = useParams();
	const navigate = useNavigate();
	const prato = cardapio.find(item => item.id === Number(id));

	if (!prato) {
		return "";
	}

	return (
		<>
			<button className={styles.voltar} onClick={() => navigate(-1)}>
				{"< Voltar >"}
			</button>
			<section className={styles.container}>
				<h1 className={styles.titulo}>
					{prato.title}
				</h1>
				<div className={styles.imagem}>
					<img src={prato.photo} alt={prato.title} />
				</div>
				<div className={styles.conteudo}>
					<p className={styles.conteudo__descricao}>
						{prato.description}
					</p>
					<TagsPrato {...prato} />
				</div>
			</section>
		</>
	);
}