const overlay = document.getElementById('contenidor-tres');
document.querySelectorAll('.contenidor-dos .images img').forEach((element) =>{
	const ruta = element.getAttribute('src');

	element.addEventListener('click', () =>{
		overlay.classList.add('actiu');
	});
});