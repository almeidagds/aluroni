import styles from "./Menu.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";

export default function Menu() {
	return (
		<nav className={styles.menu}>
			<Logo />
		</nav>
	);
}