import React from "react"
import styles from '../css/work-item.module.scss'
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import contactPage from '../assets/images/contactpage.svg';
import workDot from '../assets/images/work-dot.svg';
import projectPage from '../assets/images/projectpage.svg';
import landingPage from '../assets/images/landingpage.svg';
import woman from '../assets/images/vmc-woman.svg';
import blocks from '../assets/images/blocks.svg';
import man from '../assets/images/vmc-man.svg';
import vehicles from '../assets/images/vehicles.svg';
import tokenPage from '../assets/images/tokenpage.svg';


export function VMC() {
	return (
		<div className={styles.container}>

			<div className={styles.heading}>
				<header className={styles.header}>
					<h1 className={styles.title}>Itsavirus</h1>
					<h2 className={styles.subtitle}>Mobility on blockchain</h2>
					<p>Order a ride through a decentralised app.</p>
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
			</Tilt>


			<div className={styles.column}>
				<section className={styles.content}>
				<div className={styles.contentWrapper}>
					<div>
						<h3>My role</h3>
						<p>UI/UX</p>
						<p>WORKED ON: Desk research, User Research, Concepting, Testing, Prototyping, Design Guide</p>

					</div>

					<div>
						<h3>Type of product</h3>
						<p>Responsive website for mobile, tablet and desktop.</p>
					</div>

					<div>
						<h3>Description</h3>
						<p>For my internship I designed and built a website for Itsavirus. This website is for VMC, a venture initiated by Itsavirus.
							VMC developed a new blockchain platform (VMC CORE) in an attempt to develop a fully open
							and decentralised payment and ticketing platform. The goal was to demonstrate a working
							platform.
						</p>

						<p>
						Transactions in marketplace are executed via a stable-coin called
						the VAI token. People use VAI to transact with the network while providers
						and stakeholders (such as governments or data providers) can share incentives
						and cooperate.
						</p>
					</div>
					</div>


					<div className={styles.contentWrapper}>
						<div>
							<h3>The design</h3>
							<p>Itsavirus requested a clean website. By laying the emphasis on 'less is more', I designed and built a website
								where the textual content is the primary focus. A picture is worth more than a thousand words, so another challenge was
								that I had to illustrate for my design. These illustrations make it more clear what VMC does.
					</p>
						</div>
					</div>

					<div className={styles.whiteImgBg}>
						<img className={styles.imageSize} src={man} alt="" />
						<img className={styles.imageSize} src={woman} alt="" />

					</div>

					<div className={styles.whiteImgBg}>
					<img className={styles.imageSize} src={vehicles} alt="" />
						<img className={styles.imageSize} src={blocks} alt="" />
					</div>

					<div className={styles.whiteImgBg}>
						<a href="../static/media/landingpage.f2ab8c05.svg"><img src={landingPage} alt=""/></a>
					</div>

					<div className={styles.whiteImgBg}>
						<a href="../static/media/projectpage.5069222e.svg"><img src={projectPage} alt=""/></a>
					</div>

					<div className={styles.whiteImgBg}>
						<a href="../static/media/contactpage.a47e2bf8.svg"><img src={contactPage} alt=""/></a>
					</div>

					<div className={styles.whiteImgBg}>
						<a href="../static/media/tokenpage.88dffc04.svg"><img src={tokenPage} alt=""/></a>
					</div>


				</section>
			</div>

		</div>
	)
}
