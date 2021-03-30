import styles from '../css/notFound.module.scss';
import { Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';



export function PageNotFound() {
	return (

		<div className={styles.container}>
			<header className={styles.header}>
				<h1 className={styles.title}>404</h1>
				<h2 className={styles.subtitle}>PAGE NOT FOUND</h2>
				<Link className={styles.returnToHome} to="/"> GO BACK </Link>
			</header>
		</div>

	)
}
