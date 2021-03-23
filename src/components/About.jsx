import React from "react"
import styles from '../css/about.module.scss'
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import dot from '../assets/images/about-dot.svg';
import video from '../assets/travell.mp4';

export function About() {
	return (
		<div className={styles.container}>

			<div className={styles.heading}>
				<header className={styles.header}>
					<h1 className={styles.title}>ABOUT</h1>
					<h2 className={styles.subtitle}>JORDY SAHIT</h2>
					<p>Focused on UX/UI</p>
				</header>

				<nav>
					<ul className={styles.flexList}>
						<li className={styles.backButton}>
							<Link to="/">  &lt; </Link>
						</li>
						<li className={styles.navItem}>
							<Link to="/work">Work</Link>
						</li>
						<li className={styles.navItem}>
							<a href="mailto:jordy.sahit@hva.nl">Contact</a>
						</li>
					</ul>
				</nav>
			</div>

			<Tilt className={styles.tiltDot} tiltMaxAngleX={2} tiltMaxAngleY={2} trackOnWindow={true} tiltReverse={true} transitionSpeed={2500}>
				<img src={dot} className={styles.trDot} alt="" />
				<img src={dot} className={styles.tlDot} alt="" />
				<img src={dot} className={styles.blDot} alt="" />
				<img src={dot} className={styles.brDot} alt="" />

				<div className={styles.tech}>
					<p>LOCATION:</p>
					<p>ABOUT</p>
				</div>

				<div className={styles.extra}>
					<p>PORTFOLIO DESIGNED AND CODED BY ME. BUILT ON REACT</p>

				</div>
			</Tilt>

			<div className={styles.content}>
				<div className={styles.column}>

					<div className={styles.contentWrapper}>



						<div>
							<p>I am a UX designer that wants to make the digital world a better place
							for everyone. I love seeing how a small idea transforms into a complete
							concept. Having the traits of an explorer, I love to solve challenging
							problems. Collaborating with a team is the way to go but I can also work as
							a solo designer. I excel in user research, but I like to be involved all
							phases of the design process.</p>

							<p>
								As an explorer, I always try to grow and learn something new. I have been diving
								into coding trying to build cool things on my own. But aside from that I am always trying to learn new things about design.
								If I am not designing you'll find me in the gym doing powerlifting-focused training
								four to six times a week. I also like to travel. My most recent trips were to Japan, the UK and South-Korea.
								When COVID-19 is finally under control, I want to keep travelling and see more of Asia.
							</p>



						</div>

					</div>
					<video className={styles.travelVideo} src={video} autoPlay={true} loop={true} muted></video>

				</div>

			</div>


		</div>
	)
}
