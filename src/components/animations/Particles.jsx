import React, { useCallback, useRef } from 'react';
import ReactParticles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Particles = ({ children }) => {
	const particlesContainerRef = useRef(null);

	const particlesInit = useCallback(async (engine) => {
		console.log(engine);
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);

	return (
		<React.Fragment>
			<div className='auth-page-wrapper pt-5'>
				<ReactParticles
					id='tsparticles'
					init={particlesInit}
					loaded={particlesLoaded}
					options={{
						particles: {
							number: {
								value: 90,
								density: {
									enable: !0,
									value_area: 800,
								},
							},
							color: {
								value: '#ffffff',
							},
							shape: {
								type: 'circle',
								stroke: {
									width: 0,
									color: '#000000',
								},
								polygon: {
									nb_sides: 5,
								},
								image: {
									src: 'img/github.svg',
									width: 100,
									height: 100,
								},
							},
							opacity: {
								value: 0.8,
								random: !0,
								anim: {
									enable: !0,
									speed: 1,
									opacity_min: 0,
									sync: !1,
								},
							},
							size: {
								value: 4,
								random: !0,
								anim: {
									enable: !1,
									speed: 4,
									size_min: 0.2,
									sync: !1,
								},
							},
							line_linked: {
								enable: !1,
								distance: 150,
								color: '#ffffff',
								opacity: 0.4,
								width: 1,
							},
							move: {
								enable: !0,
								speed: 2,
								direction: 'none',
								random: !1,
								straight: !1,
								out_mode: 'out',
								attract: {
									enable: !1,
									rotateX: 600,
									rotateY: 1200,
								},
							},
						},
						interactivity: {
							detect_on: 'canvas',
							events: {
								onhover: {
									enable: !0,
									mode: 'bubble',
								},
								onclick: {
									enable: !0,
									mode: 'repulse',
								},
								resize: !0,
							},
							modes: {
								grab: {
									distance: 400,
									line_linked: {
										opacity: 1,
									},
								},
								bubble: {
									distance: 400,
									size: 4,
									duration: 2,
									opacity: 0.8,
									speed: 3,
								},
								repulse: {
									distance: 200,
								},
								push: {
									particles_nb: 4,
								},
								remove: {
									particles_nb: 2,
								},
							},
						},
						retina_detect: !0,
						config_demo: {
							hide_card: !1,
							background_color: '#b61924',
							background_image: '',
							background_position: '50% 50%',
							background_repeat: 'no-repeat',
							background_size: 'cover',
						},
						fullScreen: { enable: false },
						detectRetina: true,
					}}
					className={'auth-one-bg-position'}
					style={{ zIndex: 99 }}
				/>

				<div className='auth-one-bg-position auth-one-bg' id='auth-particles'>
					<div className='bg-overlay'></div>

					<div className='shape'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							version='1.1'
							xmlnsXlink='http://www.w3.org/1999/xlink'
							viewBox='0 0 1440 120'>
							<path d='M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z'></path>
						</svg>
					</div>

					{/* pass the children */}
					{children}
				</div>

				<footer className='footer'>
					<div className='container'>
						<div className='row'>
							<div className='col-lg-12'>
								<div className='text-center'>
									<p className='mb-0 text-muted'>
										&copy; {new Date().getFullYear()} SalesPulse360.
									</p>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		</React.Fragment>
	);
};

export default Particles;
