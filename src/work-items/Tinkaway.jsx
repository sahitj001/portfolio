import { React, useEffect } from "react"
import styles from '../css/work-item.module.scss'
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import workDot from '../assets/images/work-dot.svg';
import t1 from '../assets/images/tinkaway1.jpg';
import t2 from '../assets/images/tinkaway2.jpg';
import t3 from '../assets/images/tinkaway3.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { detect } from "detect-browser";

export function Tinkaway() {

	useEffect(() => {
		const browser = detect();

		if (browser.name == 'safari') {
			const check = document.querySelector(".work-item_workDot__17oIq");
			check.setAttribute('style', 'visibility:hidden');
			console.log('it is safari');
		}
		else {
			console.log('no safari');
		}
	})

	return (
		<div className={styles.container}>

			<div className={styles.heading}>
				<header className={styles.header}>
					<h1 className={styles.title}>Tinkaway</h1>
					<h2 className={styles.subtitle}>Webdesign for a consultancy establishment.</h2>
					<p>Designing and building a website.</p>
				</header>

				<nav>
					<ul className={styles.flexList}>
						<li className={styles.backButton}>
							<Link to="/work">  &lt; </Link>
						</li>
						<li className={styles.navItem}>
							<Link to="/">Home</Link>
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


			<Tilt className={styles.workDot} tiltMaxAngleX={1} tiltMaxAngleY={1} trackOnWindow={true} tiltReverse={true} transitionSpeed={2500}>
				<img className={styles.tlDot} src={workDot} alt="" />
				<img className={styles.blDot} src={workDot} alt="" />
				<img className={styles.trDot} src={workDot} alt="" />
				<img className={styles.brDot} src={workDot} alt="" />

				<div className={styles.tech}>
					<p>LOCATION:</p>
					<p>WORK</p>
					<p>//</p>
					<p>TINKAWAY</p>
				</div>
			</Tilt>


			<div className={styles.column}>
				<section className={styles.content}>
					<div className={styles.contentWrapper}>
						<div>
							<h3>My role</h3>
							<p>UI/Front-end</p>
							<p>WORKED ON: Desk research, Concepting, Prototyping, Design Guide, Front-end</p>
						</div>

						<div>
							<h3>Type of product</h3>
							<p>Responsive website for mobile, tablet and desktop built on Wordpress.</p>
						</div>

						<div>
							<h3>Description</h3>
							<p>
								Tinkaway is a consultancy establishment that focuses on
								getting you as company back on track. They deliver
								three specific services: A consultationsession, brainstormsession
								and they also offer taking the lead upon projects.
								It is Tinkaway's goal to make sure that you as a company keeps growing.
						</p>
						</div>

						<div>
							<h3>Design Challenge</h3>
							<p>Design a website according to the branding guidelines of Tinkaway.
						</p>
						</div>

					</div>

					<div className={styles.contentWrapper}>
						<div>
							<h3>The design</h3>
							<p>
								Tinkaway already had a brand so this meant that I had to design according to those guidelines. By playing with circular elements such as rounded corners and sections that creates a specific aesthetic
								which fits the website. One other important requirement was that the website has to look really clean. There shouldn't be any distractions on the page so I made sure that the content is the most important element of the pages.
								One design decision that helped making Tinkaway look more clean, was by putting a more space between letters so that the website doesn't look restless.
						</p>

							<a className={styles.websiteLink} href="https://tinkaway.nl"> Click here to go to the website </a>

						</div>

					</div>

					<div className={styles.whiteImgBg}>

						<div className={styles.whiteImgBg}>
							<a href="../static/media/tinkaway1.a2e658e2.jpg"><LazyLoadImage
								height={400}
								src={t1}
								effect="blur"></LazyLoadImage></a>
						</div>

						<div className={styles.whiteImgBg}>
							<a href="../static/media/tinkaway2.7fc6bb31.jpg"><LazyLoadImage
								height={400}
								src={t2}
								effect="blur"></LazyLoadImage></a>
						</div>

						<div className={styles.whiteImgBg}>
							<a href="../static/media/tinkaway3.b2b4d6f2.jpg"><LazyLoadImage
								height={400}
								src={t3}
								effect="blur"></LazyLoadImage></a>
						</div>

					</div>

				</section>

			</div>

		</div>
	)
}
