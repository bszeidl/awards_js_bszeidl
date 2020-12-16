function pageLoad() {
	let rootDiv = document.getElementById('root');


	/* left section: slogan + author container */
	rootDiv.insertAdjacentHTML('afterbegin', '<div class="left-section"></div>');
	let leftSection = document.querySelector('.left-section');

		/*SLOGAN: top left corner*/
		leftSection.insertAdjacentHTML('afterbegin', '<div class="slogan"></div>');
		sloganDiv = document.querySelector('.slogan');
		sloganDiv.innerHTML = "CLOCK <br>STRIKES <br>TWELVE";	

		/*author div: bottom left corner*/
		leftSection.insertAdjacentHTML('beforeend', '<h3 class="author"></h3>');
		let authorDiv = document.querySelector('.author');
		authorDiv.innerHTML = "Max Niblock";

	/* middle section */
	rootDiv.insertAdjacentHTML('beforeend', '<div class="middle-section"></div>');
	let middleSection = document.querySelector('.middle-section');
	
		/*blank articles1*/
		middleSection.insertAdjacentHTML('afterbegin', '<div class="blank-article1"></div>');
		let blankArticle1 = document.querySelector('.blank-article1');
		blankArticle1.innerHTML = "";

		middleSection.insertAdjacentHTML('beforeend', '<div class="blank-article1"></div>');
		blankArticle1.innerHTML = "";


		/*hero title*/
		middleSection.insertAdjacentHTML('beforeend', `<h1 class="hero-title"></h1><div class="white-line"></div>`);
		let heroTitle = document.querySelector('.hero-title');
		heroTitle.innerHTML = "Art Direction <br> & Design";

		/*hero text*/						
		middleSection.insertAdjacentHTML('beforeend', '<p class="hero-text"></p>');
		let heroText = document.querySelector('.hero-text');
		heroText.innerHTML = 
		"I'm a Digital Design Director, most recently at MediaMonks and TBWA, working with brands including Adidas, Netflix, Airbnb and Polaroid. My role involves a mix of art direction, hands on design, mentoring and improving team process. Currently freelance.";
		
		middleSection.insertAdjacentHTML('beforeend', '<div class="blank-article2"></div>');
		let blankArticle2 = document.querySelector('.blank-article2');
		blankArticle2.innerHTML = "";
	
	/*right section navbar + language bar */
	rootDiv.insertAdjacentHTML('beforeend', '<div class="right-section"></div>');
	let rightSection = document.querySelector('.right-section');
		
		/*navbar and socialbar and linegraph and prelude*/
		rightSection.insertAdjacentHTML('afterbegin', '<div class="navSoc"></div>');
		let navSocDiv = document.querySelector('.navSoc');

			/*navbar div*/
			navSocDiv.insertAdjacentHTML('afterbegin', '<div class="navBar"></div>');
			let navBarDiv = document.querySelector('.navBar');

				/*about div*/
				navBarDiv.insertAdjacentHTML('afterbegin', '<div class="about"></div>');
				let aboutDiv = document.querySelector('.about');
				aboutDiv.innerHTML = '<a href="">About</a>';

				/*selected works div*/
				navBarDiv.insertAdjacentHTML('beforeend', '<div class="selectedworks"></div>');
				let selectedWorksDiv = document.querySelector('.selectedworks');
				selectedWorksDiv.innerHTML = '<a href="">Selected works</a>';
					
				/*email div*/
				navBarDiv.insertAdjacentHTML('beforeend', '<div class="email"></div>');
				let emailDiv = document.querySelector('.email');
				emailDiv.innerHTML = '<a href="">Email</a>';

			/*blank column*/
			navSocDiv.insertAdjacentHTML('beforeend', '<div class="blank-column"></div>');
			let blankColumn = document.querySelector('.blank-column');
			blankColumn.innerHTML = "";

			/*social media div*/
			navSocDiv.insertAdjacentHTML('beforeend', '<div class="socialBar"></div>');
			let socialBarDiv = document.querySelector('.socialBar');

				/*dribble div*/
				socialBarDiv.insertAdjacentHTML('afterbegin', '<div class="drib"></div>');
				let dribDiv = document.querySelector('.drib');
				dribDiv.innerHTML = '<a href="">Dr</a>';

				/*instagramma div*/
				socialBarDiv.insertAdjacentHTML('beforeend', '<div class="insta"></div>');
				let instaDiv = document.querySelector('.insta');
				instaDiv.innerHTML = '<a href="">In</a>';

				/*linkedin div*/
				socialBarDiv.insertAdjacentHTML('beforeend', '<div class="linkedin"></div>');
				let linkedInDiv = document.querySelector('.linkedin');
				linkedInDiv.innerHTML = '<a href="">Li</a><div><img class="menu" src="./img/burger.png" alt="burger"></div>';		

		/*graph article div*/
		rightSection.insertAdjacentHTML('beforeend', `
		<div class="article-graph"><svg id="lineall" data-name="lineall" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 291">
		<defs>
			<style>
				.cls-1 {
					fill: #5328b5;
				}
	
				.cls-2 {
					fill: #1f153d;
				}
	
				.cls-3 {
					fill: #1a1331;
				}
	
				.cls-4 {
					fill: #1e133a;
				}
	
				.cls-5 {
					fill: #3c2081;
				}
			</style>
		</defs>
		<g>
			<g class="line5">
				<path class="cls-1" d="M5.5,285.7h510a1.1,1.1,0,0,0,0-2.2H5.5a1.1,1.1,0,0,0,0,2.2Z"/>
				<g>
					<path class="cls-1" d="M515.5,284.6l167-167"/>
					<path class="cls-1" d="M516.3,285.4l65.3-65.3,65-65,36.7-36.7c1-1-.6-2.6-1.6-1.6l-65.3,65.3-65,65-36.7,36.7c-1,1,.6,2.6,1.6,1.6Z"/>
				</g>
				<g>
					<path class="cls-1" d="M682.8,117.4l167,167"/>
					<path class="cls-1" d="M682,118.2l65.3,65.3,65,65L849,285.2c1,1,2.6-.6,1.6-1.6l-65.3-65.3-65-65-36.7-36.7c-1-1-2.6.6-1.6,1.6Z"/>
				</g>
				<path class="cls-1" d="M850.5,285.7h510a1.1,1.1,0,0,0,0-2.2h-510a1.1,1.1,0,0,0,0,2.2Z"/>
			</g>
			<g class="line2">
				<path class="cls-2" d="M65.5,201.7h450a1.1,1.1,0,0,0,0-2.2H65.5a1.1,1.1,0,0,0,0,2.2Z"/>
				<g>
					<path class="cls-2" d="M515.5,200.6l167-167"/>
					<path class="cls-2" d="M516.3,201.4l65.3-65.3,65-65,36.7-36.7c1-1-.6-2.6-1.6-1.6L616.4,98.1l-65,65-36.7,36.7c-1,1,.6,2.6,1.6,1.6Z"/>
				</g>
				<g>
					<path class="cls-2" d="M682.8,33.4l167,167"/>
					<path class="cls-2" d="M682,34.2l65.3,65.3,65,65L849,201.2c1,1,2.6-.6,1.6-1.6l-65.3-65.3-65-65L683.6,32.6c-1-1-2.6.6-1.6,1.6Z"/>
				</g>
				<path class="cls-2" d="M850.5,201.7h450a1.1,1.1,0,0,0,0-2.2h-450a1.1,1.1,0,0,0,0,2.2Z"/>
			</g>
			<g class="line1">
				<path class="cls-3" d="M85.5,172.7h430a1.1,1.1,0,0,0,0-2.2H85.5a1.1,1.1,0,0,0,0,2.2Z"/>
				<g>
					<path class="cls-3" d="M515.5,171.6l167-167"/>
					<path class="cls-3" d="M516.3,172.4l65.3-65.3,65-65L683.3,5.4c1-1-.6-2.6-1.6-1.6L616.4,69.1l-65,65-36.7,36.7c-1,1,.6,2.6,1.6,1.6Z"/>
				</g>
				<g>
					<path class="cls-3" d="M682.8,4.4l167,167"/>
					<path class="cls-3" d="M682,5.2l65.3,65.3,65,65L849,172.2c1,1,2.6-.6,1.6-1.6l-65.3-65.3-65-65L683.6,3.6c-1-1-2.6.6-1.6,1.6Z"/>
				</g>
				<path class="cls-3" d="M850.5,172.7h430a1.1,1.1,0,0,0,0-2.2h-430a1.1,1.1,0,0,0,0,2.2Z"/>
			</g>
			<g class="line3">
				<path class="cls-4" d="M45.5,231.7h470a1.1,1.1,0,0,0,0-2.2H45.5a1.1,1.1,0,0,0,0,2.2Z"/>
				<g>
					<path class="cls-4" d="M515.5,230.6l167-167"/>
					<path class="cls-4" d="M516.3,231.4l65.3-65.3,65-65,36.7-36.7c1-1-.6-2.6-1.6-1.6l-65.3,65.3-65,65-36.7,36.7c-1,1,.6,2.6,1.6,1.6Z"/>
				</g>
				<g>
					<path class="cls-4" d="M682.8,63.4l167,167"/>
					<path class="cls-4" d="M682,64.2l65.3,65.3,65,65L849,231.2c1,1,2.6-.6,1.6-1.6l-65.3-65.3-65-65L683.6,62.6c-1-1-2.6.6-1.6,1.6Z"/>
				</g>
				<path class="cls-4" d="M850.5,231.7h470a1.1,1.1,0,0,0,0-2.2h-470a1.1,1.1,0,0,0,0,2.2Z"/>
			</g>
			<g class="line4">
				<path class="cls-5" d="M25.5,259.7h490a1.1,1.1,0,0,0,0-2.2H25.5a1.1,1.1,0,0,0,0,2.2Z"/>
				<g>
					<path class="cls-5" d="M515.5,258.6l167-167"/>
					<path class="cls-5" d="M516.3,259.4l65.3-65.3,65-65,36.7-36.7c1-1-.6-2.6-1.6-1.6l-65.3,65.3-65,65-36.7,36.7c-1,1,.6,2.6,1.6,1.6Z"/>
				</g>
				<g>
					<path class="cls-5" d="M682.8,91.4l167,167"/>
					<path class="cls-5" d="M682,92.2l65.3,65.3,65,65L849,259.2c1,1,2.6-.6,1.6-1.6l-65.3-65.3-65-65L683.6,90.6c-1-1-2.6.6-1.6,1.6Z"/>
				</g>
				<path class="cls-5" d="M850.5,259.7h490a1.1,1.1,0,0,0,0-2.2h-490a1.1,1.1,0,0,0,0,2.2Z"/>
			</g>
		</g>
	</svg>
	</div>`);
		let articleGraph = document.querySelector('.article-graph');	
		
		/*right-bottom section*/

		rightSection.insertAdjacentHTML('beforeend', '<div class="right-bottom-section"></div>');
		let rightBottomSection = document.querySelector('.right-bottom-section');
		
		/*prelude article */
		rightBottomSection.insertAdjacentHTML('beforeend', '<h3 class="prelude-article"></h3>');
		let preludeArticle = document.querySelector('.prelude-article');
		preludeArticle.innerHTML = "Prelude";

		/*counter article */
		rightBottomSection.insertAdjacentHTML('beforeend', '<h1 class="counter-article"></h1>');
		let counterArticle = document.querySelector('.counter-article');

}


window.addEventListener('load', pageLoad);