
const counters = document.querySelectorAll('.counter');
const speed = 300; 

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		const inc = target / speed;

		console.log(count);

		if (count < target) {
			
			counter.innerText = Math.round(count + inc);
			
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});



/* блок відео - початок*/

function init(){

	var btPlay = document.querySelector('.control');
	var video = document.getElementById('myMediaID');
	
	

	btPlay.addEventListener('click',function(evt){
		console.log(video.paused)
		if(!video.paused){
			video.pause();
			btPlay.classList.add('play');
			btPlay.classList.remove('pause');
		}else{
			video.play();
			btPlay.classList.add('pause');
			btPlay.classList.remove('play');
		}
	});

	
	

}
window.onload = function(){
	console.log('LOADS');
		
}
document.addEventListener("DOMContentLoaded", init);
/* блок відео - закінчення*/