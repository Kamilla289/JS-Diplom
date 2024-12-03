const slider = () => {
  const slides = document.querySelectorAll(".top-slider .item");
	const dotsContainer = document.createElement("ul");
	let currentSlideIndex = 0;
	const dots = document.querySelectorAll(".slick-dots li");

  dotsContainer.classList.add("slick-dots");
  
	slides.forEach((slide, index) => {
		const dot = document.createElement("li");
		dot.dataset.index = index;
		if (index === 0) dot.classList.add("slick-active");
		dotsContainer.appendChild(dot);
	});
	
	document.querySelector(".top-slider").appendChild(dotsContainer);

	function changeSlide(index) {
		slides.forEach((slide) => {
		  slide.classList.remove("active");
		});

	  slides[index].classList.add("active");

	
	  dots.forEach((dot, i) => {
		  if (i === index) {
			dot.classList.add("slick-active");
		  } else {
			dot.classList.remove("slick-active");
		  }
	  });
	}

	setInterval(() => {
		currentSlideIndex = (currentSlideIndex + 1) % slides.length;
		changeSlide(currentSlideIndex);
	}, 3000);

	dotsContainer.addEventListener("click", (e) => {
		if (e.target.tagName === "LI") {
		  currentSlideIndex = parseInt(e.target.dataset.index);
		  changeSlide(currentSlideIndex);
		}
	});

	changeSlide(currentSlideIndex);
}

export default slider;