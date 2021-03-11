import React from "react"
import styles from '../css/work-item.module.scss'
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import workDot from '../assets/images/work-dot.svg';
import tropomi1 from '../assets/images/tropomi1.gif';
import tropomi2 from '../assets/images/tropomi2.gif';
import tropomi3 from '../assets/images/tropomi3.gif';
import tropomi4 from '../assets/images/tropomi4.gif';
import tropomi5 from '../assets/images/tropomi5.gif';
import tropomi6 from '../assets/images/tropomi6.png';


export function Tropomi() {
	return (
		<div className={styles.container}>

			<div className={styles.heading}>
				<header className={styles.header}>
					<h1 className={styles.title}>KNMI</h1>
					<h2 className={styles.subtitle}>Lockdown air pollution</h2>
					<p>How lockdown measures in Europe and Asia changed nitrogen dioxide emissions.</p>
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
					<p>KNMI</p>
				</div>
			</Tilt>


			<div className={styles.column}>
				<section className={styles.content}>
					<div className={styles.contentWrapper}>
						<div>
							<h3>My role</h3>
							<p>UI/UX/Front-end</p>
							<p>WORKED ON: Desk research, User Research, Concepting, Prototyping, Design Guide, HTML/CSS.</p>

						</div>

						<div>
							<h3>Type of product</h3>
							<p>Datavisualisation on a website working on a Javascript framework (Vue).</p>
						</div>

						<div>
							<h3>Description</h3>
							<p>
								For one of my semesters I was following a course on Information Design. In this course we learn
								a lot about datavisualisations. We learn how they work, are applied and when they should be applied.
						</p>

							<p>
								The KNMI has commissioned me (and my team) to create an interactive,
								insightful tool so that policymakers and the general public can better
								understand what changing collective behavior can contribute to the reduction
								of air pollution.
						</p>

							<h3>What is the KNMI?</h3>
							<p>
								The KNMI provides reliable and consistent measurements, data and forecasts that
								form the basis of important decisions that keep the Netherlands safe. From a
								code red for road traffic to the climate scenarios for the Delta Program,
								involving billions of euros, for a safe Netherlands that is prepared for the
								impact of weather, climate and earthquakes.
						</p>
						</div>

						<div>
							<h3>Design Challenge</h3>
							<p>
								What consequences has the corona virus had on the air pollution of our
								world? In what way do we show in an interactive way how
								changing collective behavior can reduce air pollution?
						</p>
						</div>
					</div>


					<div className={styles.contentWrapper}>
						<div>
							<h3>The solution</h3>
							<p>We made a tool where you can compare countries' COVID-19 measures against each other. When you hover over a timeframe
							, you will which COVID-19 measure was applied. Aside from seeing it when hovering, there are also bars at the bottom of the visualisation
							that show you how long a measure lasted. Since this is a quite complex tool to use, we also designed a tutorial section before making use of
							the datavisualisation.
							</p>
						</div>
						<div>
							<h3>The design</h3>
							<p> We wanted to create a look and feel just like the video's from Kurzgesagt. It is aesthetically pleasing, but has also a very clean kind of
							design that doesn't distract the user a lot. In our first half of our website we wanted to make it look a bit more playful. When you scroll
							down and dive into the details, we focused on giving the design a more clean look so that the user can focus fully on the content. We designed a
							quite complex datavisualisation so helping the user to understand how it works is an important design decision.
					</p>
						</div>
						<a className={styles.websiteLink} href="https://tropomi.netlify.app/"> Click here to go to the live project </a>
					</div>

					<div className={styles.whiteImgBg}>
						<img src={tropomi5} alt="" />
						<img src={tropomi1} alt="" />
						<img src={tropomi2} alt="" />
						<img src={tropomi3} alt="" />
						<img src={tropomi4} alt="" />
						<img src={tropomi6} alt="" />
					</div>

				</section>
			</div>

		</div>
	)
}
