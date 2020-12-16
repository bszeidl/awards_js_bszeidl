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
		middleSection.insertAdjacentHTML('beforeend', '<h1 class="hero-title"></h1>');
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
				linkedInDiv.innerHTML = '<a href="">Li</a>';		

		/*graph article div*/
		rightSection.insertAdjacentHTML('beforeend', '<div class="article-graph"></div>');
		let articleGraph = document.querySelector('.article-graph');
		articleGraph.innerHTML = "Ide jön a vonalas grafika";	
		
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
		counterArticle.innerHTML = "idejön a loading status bar és a számláló 00/05";

}


window.addEventListener('load', pageLoad);