import { React, useEffect, useState } from "react"
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
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { detect } from "detect-browser";

export function Itsavirus() {
	const [angle, setAngle] = useState();

	useEffect(() => {
		const browser = detect();

		if (browser.name == 'safari') {
			// make the dots untiltable, safari doesnt like tiltable objects. It will render black stuff over elements.
			setAngle(0);
			console.log('it is safari');
		}
		else {
			// make the dots tiltable
			setAngle(1);
			console.log('no safari');
		}
	})

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
							<Link to="/work">  Back </Link>
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


			<Tilt className={styles.workDot} tiltMaxAngleX={angle} tiltMaxAngleY={angle} trackOnWindow={true} tiltReverse={true} transitionSpeed={2500}>
				<img className={styles.tlDot} src={workDot} alt="" />
				<img className={styles.blDot} src={workDot} alt="" />
				<img className={styles.trDot} src={workDot} alt="" />
				<img className={styles.brDot} src={workDot} alt="" />

				<div className={styles.tech}>
					<p>LOCATION:</p>
					<p>WORK</p>
					<p>//</p>
					<p>ITSAVIRUS</p>
				</div>
			</Tilt>


			<div className={styles.column}>
				<section className={styles.content}>
					<div className={styles.contentWrapper}>
						<div>
							<h3>My role</h3>
							<p>UI/UX/Front-end</p>
							<h3>Worked on</h3>
							<p>Desk research: Finding out how the websites of our competitors are designed like. I also did research what the usual look and feel is for
								websites focused on cryptocurrency. Another thing I focused on researching, was on how to illustrate.
							</p>
							<p>Ideation and concepting: Designing pages for the website and based on this feedback I reiterated until I got a design I was satisfied with.</p>
							<p>Prototyping: Making sure that the website looks good on desktop, tablet and smartphone.</p>
							<p>Front-end: Building the website on Wordpress with Divi.</p>
						</div>

						<div>
							<h3>Type of product</h3>
							<p>Responsive website for mobile, tablet and desktop.</p>
						</div>

						<div>
							<h3>Description</h3>
							<p>For my internship I designed and built under request of Itsavirus. This website is for VMC, a venture initiated by Itsavirus.
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

						<div>
							<h3>Design Challenge</h3>
							<p>Design a website for VMC. The website has to have a clean look and feel.</p>
						</div>
					</div>


					<div className={styles.contentWrapper}>
						<div>
							<h3>The design</h3>
							<p>By laying the emphasis on 'less is more', I designed and built a website
							where the textual content is the primary focus. A picture is worth more than a thousand words, so another challenge was
							that I had to illustrate for my design. I got my inspiration from other websites that focus on blockchain. They all got this
							'flat design'-ish look to them so I made the same kind of illustrations. These illustrations make it more clear what VMC does.
					</p>
						</div>
					</div>

					<div className={styles.whiteImgBg}>
						<LazyLoadImage
							className={styles.imageSize}
							height={464}
							src={man}
							effect="blur"></LazyLoadImage>
						<LazyLoadImage
							className={styles.imageSize}
							height={464}
							src={woman}
							effect="blur"></LazyLoadImage>
					</div>

					<div className={styles.whiteImgBg}>
						<LazyLoadImage
							className={styles.imageSize}
							height={464}
							src={vehicles}
							effect="blur"></LazyLoadImage>
						<LazyLoadImage
							className={styles.imageSize}
							height={464}
							src={blocks}
							effect="blur"></LazyLoadImage>
					</div>

					<div className={styles.whiteImgBg}>
						<a href="../static/media/landingpage.f2ab8c05.svg"><LazyLoadImage
							height={400}
							src={landingPage}
							effect="blur"></LazyLoadImage></a>
					</div>

					<div className={styles.whiteImgBg}>
						<a href="../static/media/projectpage.5069222e.svg"><LazyLoadImage
							height={400}
							src={projectPage}
							effect="blur"></LazyLoadImage></a>
					</div>

					<div className={styles.whiteImgBg}>
						<a href="../static/media/contactpage.a47e2bf8.svg"><LazyLoadImage
							height={400}
							src={contactPage}
							effect="blur"></LazyLoadImage></a>
					</div>

					<div className={styles.whiteImgBg}>
						<a href="../static/media/tokenpage.88dffc04.svg"><LazyLoadImage
							height={400}
							src={tokenPage}
							effect="blur"></LazyLoadImage></a>
					</div>

				</section>
			</div>

		</div>
	)
}
