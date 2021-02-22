import React from "react"
import styles from '../css/work.module.scss'
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import cat from '../assets/images/cat.bmp';
import workDot from '../assets/images/work-dot.svg';
import itemDot from '../assets/images/item-dot.svg';

export function Work() {
	return (
		<div className={styles.container}>

			<div className={styles.heading}>
				<header className={styles.header}>
					<h1 className={styles.title}>WORK</h1>
					<h2 className={styles.subtitle}>JORDY SAHIT</h2>
					<p>Focused on UX/Frontend</p>
				</header>

				<nav>
					<ul className={styles.flexList}>
						<li className={styles.backButton}>
							<Link to="/">  &lt; </Link>
						</li>
						<li className={styles.navItem}>
							<Link to="/about">About</Link>
						</li>
						<li className={styles.navItem}>
							<a href="mailto:jordy.sahit@hva.nl">Contact</a>
						</li>
					</ul>
				</nav>
			</div>


			<Tilt className={styles.workDot} tiltMaxAngleX={2} tiltMaxAngleY={2} trackOnWindow={true} tiltReverse={true} transitionSpeed={2500}>
				<img className={styles.tlDot} src={workDot} alt="" />
				<img className={styles.blDot} src={workDot} alt="" />
				<img className={styles.trDot} src={workDot} alt="" />
				<img className={styles.brDot} src={workDot} alt="" />
			</Tilt>

			<div className={styles.content}>
				<div className={styles.column}>
					<Link to="/work/tcg">
						<div className={styles.item}>
							<img className={styles.thumbnail} src={cat} alt="" />
								<Tilt className={styles.tiltItem} tiltMaxAngleX={5} tiltMaxAngleY={5} trackOnWindow={true} tiltReverse={true} transitionSpeed={1500}>
									<img className={styles.tlDot} src={itemDot} alt="" />
									<img className={styles.blDot} src={itemDot} alt="" />
									<img className={styles.trDot} src={itemDot} alt="" />
									<img className={styles.brDot} src={itemDot} alt="" />
								</Tilt>
							<div className={styles.itemText}>
								<h2>Scared cat</h2>
								<p>Really scared of you</p>
							</div>
						</div>
					</Link>

					<Link to="/work/tcg">
						<div className={styles.item}>
							<img className={styles.thumbnail} src={cat} alt="" />
								<Tilt className={styles.tiltItem} tiltMaxAngleX={5} tiltMaxAngleY={5} trackOnWindow={true} tiltReverse={true} transitionSpeed={1500}>
									<img className={styles.tlDot} src={itemDot} alt="" />
									<img className={styles.blDot} src={itemDot} alt="" />
									<img className={styles.trDot} src={itemDot} alt="" />
									<img className={styles.brDot} src={itemDot} alt="" />
								</Tilt>
							<div className={styles.itemText}>
								<h2>Scared cat</h2>
								<p>Really scared of you</p>
							</div>
						</div>
					</Link>

					<Link to="/work/tcg">
						<div className={styles.item}>
							<img className={styles.thumbnail} src={cat} alt="" />
							<Tilt className={styles.tiltItem} tiltMaxAngleX={10} tiltMaxAngleY={10} trackOnWindow={true} tiltReverse={true} transitionSpeed={1500}>
								<img className={styles.tlDot} src={itemDot} alt="" />
								<img className={styles.blDot} src={itemDot} alt="" />
								<img className={styles.trDot} src={itemDot} alt="" />
								<img className={styles.brDot} src={itemDot} alt="" />
							</Tilt>
							<div className={styles.itemText}>
								<h2>Scared cat</h2>
								<p>Really scared of you</p>
							</div>
						</div>
					</Link>

				</div>
			</div>
		</div>
	)
}
