
import styles from "./Cardapio.module.scss";
import stylesTema from "styles/Tema.module.scss";
import { useState } from "react";
import Buscador from "./Buscador";
import Filtros from "./Filtros";
import Itens from "./Itens";
import Ordenador from "./Ordenador";

export default function Cardapio() {

	const [busca, setBusca] = useState("");
	const [filtro, setFiltro] = useState<number | null>(null);
	const [ordenador, setOrdenador] = useState("");

	return (
		<section className={styles.cardapio}>
			<h3 className={stylesTema.titulo}>Cardápio</h3>
			<Buscador busca={busca} setBusca={setBusca} />
			<div className={styles.cardapio__filtros}>
				<Filtros filtro={filtro} setFiltro={setFiltro} />
				<Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
			</div>
			<Itens busca={busca} filtro={filtro} ordenador={ordenador} />
		</section>
	);
}