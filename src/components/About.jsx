import { React, useEffect, useState } from "react"
import styles from '../css/about.module.scss'
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import dot from '../assets/images/about-dot.svg';
import video from '../assets/portfoliovid2.mp4';
import me from '../assets/images/me.jpg';
import { detect } from "detect-browser";
import { isMobile } from 'react-device-detect';

export function About() {
	const [angle, setAngle] = useState();

	useEffect(() => {

		if (isMobile) {
			// make the dots untiltable, safari doesnt like tiltable objects. It will render black stuff over elements.
			setAngle(0);
			// console.log('it is mobile');
		}
		else {
			// make the dots tiltable
			setAngle(2);
			// console.log('not mobile');
		}
	})


	return (
		<div className={styles.container}>

			<div className={styles.heading}>
				<header className={styles.header}>
					<h1 className={styles.title}>ABOUT</h1>
					<h2 className={styles.subtitle}>JORDY SAHIT</h2>
					<p>Focused on UX</p>
				</header>

				<nav>
					<ul className={styles.flexList}>
						<li className={styles.navItem}>
							<Link to="/work">Work</Link>
						</li>
						<li className={styles.navItem}>
							<a href="mailto:jordy.sahit@hva.nl">Contact</a>
						</li>
					</ul>
				</nav>
			</div>

			<Tilt className={styles.tiltDot} tiltMaxAngleX={angle} tiltMaxAngleY={angle} trackOnWindow={true} tiltReverse={true} transitionSpeed={2500}>
				<img src={dot} className={styles.trDot} alt="" />
				<img src={dot} className={styles.tlDot} alt="" />
				<img src={dot} className={styles.blDot} alt="" />
				<img src={dot} className={styles.brDot} alt="" />

				<div className={styles.tech}>
					<p>LOCATION:</p>
					<p>ABOUT</p>
				</div>

				<div className={styles.credits}>
					<p>PORTFOLIO DESIGNED AND CODED BY ME. BUILT ON REACT</p>

				</div>
			</Tilt>

			<div className={styles.content}>
				<div className={styles.column}>

					<div className={styles.contentWrapper}>

						<div>
							<p>I am a UX designer that wants to make the digital world a better place
							for everyone. Having the traits of an explorer, I love to solve challenging
							problems. I love finding the painpoints and seeing how a small idea transforms into a complete
							concept.</p>

							<p>
								As an explorer, I always try to grow and learn something new. I have been diving
								into coding trying to build cool things on my own such as my portfolio. But aside from coding I am always trying to learn new things about design other than UX (UI design for example).
								If I am not designing you'll find me in the gym doing powerlifting-focused training
								four to six times a week. I also like to travel. My most recent trips were to Japan, the U.K and South-Korea.
								When COVID-19 is finally under control, I want to keep travelling and see more of Asia.
							</p>

							<p>If you would you like to collaborate on projects concerning UX, UI or webdesign,
								feel free to reach out.</p>
						</div>

						<div>
						<img className={styles.imageSize} src={me} alt="" />
						</div>


					</div>
					<video className={styles.travelVideo} src={video} autoPlay={true} loop={true} muted></video>

				</div>

			</div>


		</div>
	)
}
