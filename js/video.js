var video;

window.addEventListener("load", pageload());
function pageload() {
	video = document.getElementById("player1");
	console.log("Good job opening the window");
	video.autoplay = false;
	console.log("Auto play is set to false");
	video.loop = false;
	console.log("Loop is set to false");
}


document.getElementById("play").addEventListener("click", playvideo);
function playvideo() {
	video.load();
	video.autoplay = true;
	let videovolume = video.volume*100 + "%";
	document.getElementById("volume").innerHTML = videovolume;
	console.log("Play video");
}

document.getElementById("pause").addEventListener("click", pausevideo);
function pausevideo() {
	video.pause();
	console.log("Pause video");
}

document.getElementById("slower").addEventListener("click", slowervideo);
function slowervideo() {
	var videospeedslow = video.playbackRate;
	video.playbackRate = 0.9*videospeedslow;
	console.log("Slow down video");
	console.log("Speed is " + video.playbackRate);
}

document.getElementById("faster").addEventListener("click", fastervideo);
function fastervideo() {
	var videospeedfast = video.playbackRate;
	video.playbackRate = videospeedfast/0.9;
	console.log("Speed up video");
	console.log("Speed is " + video.playbackRate);
}

document.getElementById("skip").addEventListener("click", skipvideo);
function skipvideo() {
	if (video.currentTime + 10 < video.duration){
		video.currentTime += 10;
	}
	else {
		video.currentTime = 0;
	}
	console.log("Skip ahead");
	console.log("Video current time is " + video.currentTime);
}

document.getElementById("mute").addEventListener("click", mutevideo);
function mutevideo() {
	if (video.muted === false) {
		video.muted = true;
		console.log("Mute");
		document.getElementById("mute").innerHTML = "Unmute";
	}
	else {
		video.muted = false;
		console.log("Unmute");
		document.getElementById("mute").innerHTML = "Mute";
	}
}

document.getElementById("slider").addEventListener("change", slidevideo);
function slidevideo(){
	var slidevolume = document.getElementById("slider").value;
	video.volume = slidevolume/100;
	document.getElementById("volume").innerHTML = slidevolume + "%";
	console.log("The current value is " + slidevolume/100);
}

document.getElementById("vintage").addEventListener("click", vintagevideo);
function vintagevideo() {
	video = document.getElementById("player1");
	video.classList.add("oldSchool");
}

document.getElementById("orig").addEventListener("click", origvideo);
function origvideo() {
	video = document.getElementById("player1");
	video.classList.remove("oldSchool");
}