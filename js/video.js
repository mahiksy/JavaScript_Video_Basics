var video = document.getElementById("player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay= false;
	video.loop= false;
	console.log(" the video is not looping and autoplay anymore")
});

document.querySelector("#play").addEventListener("click", function() {
	let slider = document.getElementById("slider").value;
	console.log(slider);
	let value =  document.getElementById("volume").innerHTML = slider;
	video.play();
	console.log("Play Video");
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
	console.log("Play Video");
});

document.querySelector("#slower").addEventListener("click", function() {
	if(video.playbackRate >= 0.2){
		video.playbackRate = video.playbackRate - 0.1;
	}
	else{
		video.playbackRate = video.playbackRate;
	}
	console.log(video.playbackRate);
});
document.querySelector("#faster").addEventListener("click", function() {
	if(video.playbackRate < 1.0){
		video.playbackRate = video.playbackRate + 0.1;
	}
	else{
		video.playbackRate = video.playbackRate;
	}
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    if (video.currentTime + 10 < video.duration) {
        video.currentTime += 10;
    } else {
        video.currentTime = 0;
    }
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
    if(video.muted == false){
		video.muted = true;
		console.log("muted")
	}
	else{
		video.muted = false;
		console.log("Unmuted")
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	let val = document.getElementById("slider");
	video.volume = val.value / 100;
	let value =  document.getElementById("volume").innerHTML = val.value;
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});

