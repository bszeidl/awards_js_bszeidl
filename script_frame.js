function pageLoad() {
	let rootDiv = document.getElementById('root');
	
	/*top line container slogan div + navbar + language bar */
	rootDiv.insertAdjacentHTML('afterbegin', '<div class="topLine"></div>');
	let topLineDiv = document.querySelector('.topLine');

		/*SLOGAN: top lef corner*/
		topLineDiv.insertAdjacentHTML('afterbegin', '<div class="slogan"></div>');
		sloganDiv = document.querySelector('.slogan');
		sloganDiv.innerHTML = "CLOCK STRIKES TWELVE";	
		
			/*navbar and social wrapper*/
			topLineDiv.insertAdjacentHTML('beforeend', '<div class="navSoc"></div>');
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

		/*herowrapper div*/
		rootDiv.insertAdjacentHTML('beforeend', '<div class="hero-wrapper"></div>');
		let heroWrapper = document.querySelector('.hero-wrapper');

			/*author div*/
			heroWrapper.insertAdjacentHTML('afterbegin', '<h4 class="author"></h4>');
			let authorDiv = document.querySelector('.author');
			authorDiv.innerHTML = "Max NiBlock";

			/*hero title and text */
			heroWrapper.insertAdjacentHTML('beforeend', '<h1 class="hero-title1"></h1>');
			let heroTitle1 = document.querySelector('.hero-title1');
			heroTitle1.innerHTML = "Art Direction";
			heroWrapper.insertAdjacentHTML('beforeend', '<h1 class="hero-title2"></h1>');
			let heroTitle2 = document.querySelector('.hero-title2');
			heroTitle2.innerHTML = "& Design";
			heroWrapper.insertAdjacentHTML('beforeend', '<p class="hero-text"></p>');
			let heroText = document.querySelector('.hero-text');
			heroText.innerHTML = 
			"I'm a Digital Design Director, most recently at MediaMonks and TBWA, working with brands including Adidas, Netflix, Airbnb and Polaroid. My role involves a mix of art direction, hands on design, mentoring and improving team process. Currently freelance.";

		/*prelude div */
		heroWrapper.insertAdjacentHTML('beforeend', '<h4 class="prelude"></h4>');
		let preludeDiv = document.querySelector('.prelude');
		preludeDiv.innerHTML = "Prelude";

}


window.addEventListener('load', pageLoad);