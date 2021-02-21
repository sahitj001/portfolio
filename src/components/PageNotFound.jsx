import styles from '../css/notFound.module.scss';
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';



export function PageNotFound() {
	return (

			<div className={styles.container}>
				<header className={styles.header}>
					<h1 className={styles.title}>404</h1>
					<h2 className={styles.subtitle}>PAGE NOT FOUND</h2>
					<Link to="/"> GO BACK </Link>
				</header>
			</div>

	)
}
