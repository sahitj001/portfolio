import React from "react"
import styles from '../css/work-item.module.scss'
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import cat from '../assets/images/cat.bmp';
import workDot from '../assets/images/work-dot.svg';
import chicken from '../assets/images/chicken.png';
import chickenEmotions from '../assets/images/chicken-emotions.png';
import beakRotation from '../assets/images/chicken-beak-rotation.svg';
import chickenSetup from '../assets/images/chicken-setup.png';
import chickenBonus from '../assets/images/chicken-bonus.png';

export function Tcg() {
	return (
		<div className={styles.container}>

			<div className={styles.heading}>
				<header className={styles.header}>
					<h1 className={styles.title}>THE GAME CHANGER</h1>
					<h2 className={styles.subtitle}>SLEEP MORE, <span>GAME MORE</span> </h2>
					<p>Nominated for the Golden Dot Awards 2018</p>
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
				<div>
						<h3>My role</h3>
						<p>UI/UX</p>
						<p>WORKED ON: Desk research, User Research, Concepting, Testing, Prototyping</p>

					</div>

					<div>
					<h3>Type of product</h3>
						<p>Physical product</p>
					</div>

					<div>
						<h3>The problem</h3>
						<p>Young children have a lot of free time. They can choose to play outside
						but also can game whenever they want. They often spend multiple hours gaming in a row.
						These long sessions of gaming could make them end up being game addicts.
								</p>
					</div>

					<div>
						<h3>Design Challenge</h3>
						<p>Design a product that positively stimulates the gaming behaviour of children between
						six and twelve years old. It was quite a challenge to design the UX of this project. This was
						also my first time designing a physical product so there was a lot to learn.
								</p>
					</div>



					<img src={chicken} alt="" />
					<div>
						<h3>The solution</h3>
						<p>The Game Changer is a timer that is specifically designed for children between six and twelve years old. It keeps track of the
						playtime of your child. You simply enter how long the child can game and the timer starts running.
						If he decides to stop earlier than planned, The Game Changer will give him a reward in the form of
						extra time. This 'bonus' time can only be used if their parents allow it.
									</p>
					</div>

					<div>
						<h3>Setting up the chicken</h3>
						<p>
							When the chicken is powered on, you will start with setting up the security settings.
							This will be done by registering your fingerprint. After having set up the system you are
							able to choose between the gametimer or setting up a bonusday.
						</p>
					</div>
					<img className={styles.imageSize} src={chickenSetup} alt="" />

					<div>
						<h3>The chicken has feelings!</h3>
						<p>
							You stop the gametimer by pressing its mohawk. The Game Changer will become happy if you stop 1 hour before the timer ends.
							You will get that one hour plus half an hour extra that you can use for a bonusdays. When you stop half an hour between an
							hour the chicken will look concerned. When the chicken is concerned you will get 15 minutes bonus. If you stop half an hour or later the chicken will be sad and you won’t get any bonushours. The numbers at the right side are the hours that have been saved up.
						</p>
					</div>
					<img className={styles.imageSize} src={chickenEmotions} alt="" />

					<img className={styles.imageSize} src={beakRotation} alt="" />
					<div>
						<h3>Adjust the timer</h3>
						<p>
							You can rotate the beak to adjust the gametimer. When you want to change the selection of hours
							and minutes, you can click once on the beak. When you are done setting up the timer, double tap
							the beak to start.
						</p>
					</div>

					<img className={styles.imageSize} src={chickenBonus} alt="" />
					<div>
						<h3>Bonusday</h3>
						<p>
							When your child has been very nice or if the holidays have started, you might consider starting a bonusday. By initiating a bonusday The Game Changer will use the spare hours that have been stored. You can start a bonusday via the main menu. The timer starts immediately.
							When the child is done, he can press on the mohawk to end the bonusday.
						</p>
					</div>
				</section>
			</div>

		</div>
	)
}
