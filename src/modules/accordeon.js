const accordeon = () => {
  document.addEventListener('DOMContentLoaded', () => {
		const accordeon = document.querySelector('.accordeon'); 
		const elements = accordeon.querySelectorAll('.element'); 

		elements.forEach((element) => {
			const title = element.querySelector('.title'); 
			const content = element.querySelector('.element-content'); 

			title.addEventListener('click', () => {

			const isActive = element.classList.contains('active');

			elements.forEach((el) => {
				el.classList.remove('active');
				el.querySelector('.element-content').style.maxHeight = '0';
			});

			if (!isActive) {
				element.classList.add('active');
				content.style.maxHeight = content.scrollHeight + 'px';
			}
			});
		});
	});
}

export default accordeon