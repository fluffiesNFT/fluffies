
let playing_audio = false
let audio = new Audio('chiptune.mp3')
audio.loop = true
let x = 0

function play(btn) {
	icon = btn.children[0].classList
if(playing_audio) {
	btn.style.border = '2px solid white'
	icon.remove("bi-music-note-list")
	icon.add("bi-play")
	audio.pause()
	audio.currentTime = 0
	playing_audio = false
	clearInterval(x)
} else {
	icon.remove("bi-play")
	icon.add("bi-music-note-list")
	audio.play()
	playing_audio = true
	x = setInterval(dance, 333.33, btn)
}
}

let dancing = false
function dance(btn) {
	console.log(dancing)
	if(dancing) {
		btn.style.border = '2px solid white'
		dancing = false
	} else {
		btn.style.border = '3px solid white'
		dancing = true
	}
}

let date = new Date("Oct 1, 2021 21:00:00").getTime()

function countdown() {
	let distance = date - new Date().getTime()
	
	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let	hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
	let seconds = Math.floor((distance % (1000 * 60)) / 1000)
	
	document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s "
	if (distance < 0) {
		document.getElementById("countdown").innerHTML = "Mint is live!"
	}	
}

