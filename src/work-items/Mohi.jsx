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
import onboarding1 from '../assets/images/onboarding-idea.png';
import onboarding2 from '../assets/images/first-iteration.png';
import onboarding3 from '../assets/images/iteration-2.png';
import onboarding4 from '../assets/images/mohi-animation.gif';
import onboarding5 from '../assets/images/mohi-wireflow.png';
import mockup from '../assets/images/mohi-mockup.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { detect } from "detect-browser";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { MapInteractionCSS } from 'react-map-interaction';

export function Mohi() {
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
					<h1 className={styles.title}>Mohi</h1>
					<h2 className={styles.subtitle}>Exchanging meaningful content with your close ones.</h2>
					<p>A mobile social media app focused on sharing meaningful content.</p>
				</header>

				<nav>
					<ul className={styles.flexList}>
						<li className={styles.backButton}>
							<Link to="/work">Back</Link>
						</li>
						<li className={styles.navItem}>
						<Link to="/">About</Link>
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
					<p>MOHI</p>
				</div>
			</Tilt>


			<div className={styles.column}>
				<section className={styles.content}>

					<div className={styles.contentWrapper}>
					<div>
							<img className={styles.mockupBig} src={mockup}></img>
				</div>

						<div>
							<h3>My role</h3>
							<p>UX</p>
							<h3>Worked on</h3>
							<p>Field research: Did interviews with completely new users who haven't used Mohi at all. From them I gained valuable insights.
							</p>
							<p>Desk research: Obtaining information from items such as internet articles from Medium and the book 'Better onboarding' by Krystal Higgins.</p>
							<p>Ideation and concepting: I brainstormed a couple of ways to tackle the problem and eventually created one concept.</p>
							<p>Prototyping: After having designed the concept, I made a clickable prototype with animations to show how the solution works.</p>
						</div>

						<div>
							<h3>Type of product</h3>
							<p>Prototyping: After having designed the concept, I made a clickable prototype with animations to show how the solution works.</p>
						</div>

						<div>
							<h3>Description</h3>
							<p>For my school minor I chose to focus more on refining my design skills and found User Experience a fitting choice. The minor has a period of one school semester wherein we follow some kind of bootcamp. The pressure applied to us was pretty heavy at some times. The objective of the bootcamp is to quickly learn the fundamentals of a UX designer. After having completed all these courses, your skills will be tested during the Mastertest. At the Mastertest you work 6 weeks long with a real client and put the learned skills from the bootcamp into practice. The client I chose was Mohi.
						</p>

							<p>
							Mohi.app is a Slow Media platform combined with social activities to foster meaningful connections. This means that they want to transition to something slower with more focus on less. Centering around exchanging beautiful content experiences to bridge and strengthen actual relationships and inspire creativity. Slow Media advocates for alternative ways of making and using media that are more intentional, more enjoyable, longer lasting, more ethical, and of higher quality overall. By creating a Monthly Highlight you show your close ones what you liked the most.
						</p>
						</div>

						<div>
							<h3>Design Challenge</h3>
							<p>How can I improve the onboarding and sign up flow of Mohi? I want to achieve an improvement on the current design of the onboarding and sign up experience. This challenge is aimed at all media consumers that will be using Mohi. </p>
						</div>
					</div>


					<div className={styles.contentWrapper}>
						<div>
							<h3>The design</h3>
							<h4>Gaining the insights</h4>
							<p>In the first two weeks I have been purely focussing on gaining valuable insights to better the onboarding process. Through the interviews I have done and based on my own observations, I found:
					</p>
					<p>
					 - Users quickly forgot what happened in the first four screens of the onboarding. Mainly because they were setting up an account right after.
					</p>
					<p>
					 - The onboarding wasn't interesting, users found that it looked like an advertisement.
					</p>
					<p>
					 - The five core functionalities of the app weren't highlighted/explained in the app. The users themselves had to find out which core functionalities Mohi had.
					</p>
					<p>
					 - Almost every user knew that he could make a monthly highlight but had no idea what MoHi stood for.
					</p>
					<p>
					An onboarding should explain the app for you in a way that is easy to follow. The problem with the current onboarding is that it is positioned in a bad spot. Furthermore, the explanation screens weren't attracting the user to read the content on them.
					</p>
						</div>

						<div>
							<h4>My first ideas</h4>
							<p>During my first meeting with the client I proposed two ideas:</p>
							<p>Switching the position of the explanation screens. After having read the book from Krystal Higgins 'better onboarding', I found that it is important to keep the explanation close to the end of the onboarding. The reason for this is that the user won't be distracted with other information. The ideal situation is that before the user sees the main screen, he reads the explanation before he goes in. This way he is informed and has a general idea what he can do in Mohi.</p>
							<p>My second idea was to introduce a zero state. I wanted to make use of hints that show how each core functionality works when the user navigates to the designated screen. I found that this was the best idea to tackle the design challenge since my client also wanted me to highlight each core functionality of Mohi.</p>
						</div>
					</div>

					<div className={styles.whiteImgBg}>
						<MapInteractionCSS>
						<img src={onboarding1}></img>
						</MapInteractionCSS>

					</div>

					<div className={styles.contentWrapper}>
						<div>
						<h4>The concept</h4>
						<p>After having decided to use hints throughout the whole app I started with the design! In my first iteration I had an unskippable tour. In this tour the whole app would be explained through some hints. The problem however was that this tour was quite long since I had to go through five functionalities. If you chose to skip in the middle of the tour, you could do it again but you'll have to start from the beginning.</p>
						</div>
					</div>

					<div className={styles.whiteImgBg}>
					<img src={onboarding2}></img>
					</div>

					<div className={styles.contentWrapper}>
						<p>In my second iteration I made it so that there would be hints popping out on the screen when the user has navigated to that page for the first time. I also added a help button to the page that shows the hints again.</p>
					</div>

					<div className={styles.whiteImgBg}>
					<img src={onboarding3}></img>
					</div>

					<div className={styles.contentWrapper}>
						<p>For my last iteration I wanted to make it cleared for the user on how to upload items to Mohi. Due to my limited time during the mastertest I focused on showing how to upload items with animations. </p>
					</div>

					<div className={styles.whiteImgBg}>
					<img src={onboarding4}></img>
					</div>

					<div className={styles.contentWrapper}>
						<p>You can click on the wireflow down below, but you have to go back via your browser back button!</p>
					</div>

					<div className={styles.whiteImgBg}>
					<MapInteractionCSS>
						<a href={"../static/media/mohi-wireflow.071736fd.png"}><img src={onboarding5} alt="" /></a>
					</MapInteractionCSS>
					</div>

				</section>
			</div>

		</div>
	)
}
