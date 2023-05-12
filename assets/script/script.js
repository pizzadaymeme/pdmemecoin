var gifs = ['https://media.giphy.com/media/syGHYCgsScysM/giphy.gif', 'https://media.giphy.com/media/3oEduXWSTEroC5U7aE/giphy.gif ', 'https://media.giphy.com/media/26xBtRnYfs2mYF4vS/giphy.gif', 'https://68.media.tumblr.com/a0177022ac5d6a56302f572382217236/tumblr_mtm7pm0s2M1qmk3pno1_400.gif', 'https://68.media.tumblr.com/852942ed6ec838a3ffe4a8d443f50632/tumblr_mnvsg08z6I1rkb1ywo1_400.gif', 'https://media.giphy.com/media/yoJC2EyuKmTUgjlTgY/giphy.gif', 'https://media.giphy.com/media/mMlQIWBCiaLNm/giphy.gif', 'https://media.giphy.com/media/4jUv5WgsH8waA/giphy.gif', 'https://media.giphy.com/media/qszkiEv7YcqCA/giphy.gif', 'https://media.giphy.com/media/ERHjRf12yMGC4/giphy.gif', 'https://media.giphy.com/media/rD5Z2jab2CcKs/giphy.gif', 'https://68.media.tumblr.com/a8fdfd2f4d49bf0a05e3aecd9f67cbc2/tumblr_mna0j4URQU1ratk55o1_500.gif', 'https://media.giphy.com/media/iWTLeWNSyvJUk/giphy.gif', 'https://media.giphy.com/media/iJa6kOfJ3qN7a/giphy.gif', 'https://media.giphy.com/media/Kstf0uu1By6yc/giphy.gif', 'https://media.giphy.com/media/j7LWINWXSiAx2/200.gif', 'https://media.giphy.com/media/fcTGy1cfmisFO/giphy.gif', 'https://68.media.tumblr.com/tumblr_m19f5mrD6u1qh0vhjo1_250.gif', 'https://media.giphy.com/media/MCPLmUyk9dbDW/giphy.gif', 'https://media.giphy.com/media/LxgG70UrRnEWs/giphy.gif', 'https://media.giphy.com/media/jaew8U9a2fywg/giphy.gif', 'https://media.giphy.com/media/yarTdzAdCLfwY/200.gif', 'https://media.giphy.com/media/jCphtO2RIogog/giphy.gif', 'https://media.giphy.com/media/13MmYjQPkWScQ8/giphy.gif', 'https://media.giphy.com/media/zuqZd7biqQR0I/giphy.gif', 'https://media.giphy.com/media/119yYldJ8IJteg/giphy.gif', 'https://media.giphy.com/media/i4CmjXdzTvoME/giphy.gif', 'https://media.giphy.com/media/A2m6fhZkxeRCo/giphy.gif', 'https://media.giphy.com/media/OrTqfH24gxa5G/giphy.gif', 'https://media.giphy.com/media/115HAgOHLtAroQ/giphy.gif', 'https://media.giphy.com/media/A0U9aoy8cVltK/giphy.gif', 'https://media.giphy.com/media/72hLVmgkfhAqY/giphy.gif', 'https://media.giphy.com/media/SuttTIYHMXg40/giphy.gif', 'https://media.giphy.com/media/106Ka0bkuCt2Eg/giphy.gif', 'https://media.giphy.com/media/JjgFagXURIIne/giphy.gif', 'https://media.giphy.com/media/3HQdFZC48A8co/giphy.gif', 'https://media.giphy.com/media/AOQON3Z6kZUZ2/giphy.gif', 'https://media.giphy.com/media/KBuMnwY9AboMU/giphy.gif', 'https://media.giphy.com/media/ykXMAlDInVh1m/giphy.gif', 'https://media.giphy.com/media/Ek00b0WtMLiCs/giphy.gif', 'https://media.giphy.com/media/12SgVag3n0Ow4U/giphy.gif', 'https://media.giphy.com/media/8nFLBzhEWLYty/giphy.gif', 'https://media.giphy.com/media/Oi17nysP1JHgI/giphy.gif', 'https://media.giphy.com/media/bX5ebAYPUJjgs/giphy.gif', 'https://media.giphy.com/media/ECWGIo8YDc3Xq/giphy.gif', 'https://media.giphy.com/media/11R2XfWlTaBu2Q/giphy.gif', 'https://media.giphy.com/media/Ok6hqlXkasGfS/giphy.gif', 'https://media.giphy.com/media/KEjnp4SX4lH2w/giphy.gif', 'https://media.tenor.co/images/46f2e85a42843dacf114dfc730fe4364/tenor.gif', 'https://media.giphy.com/media/KP5J5Ss9moWaI/giphy.gif', 'https://media.giphy.com/media/e3TLGPeH9qvO8/giphy.gif', 'https://media.giphy.com/media/4KiLdVFPOKo6s/giphy.gif', 'https://media.giphy.com/media/GczmkmOD3HEc/giphy.gif', 'https://media.giphy.com/media/IxJmV9ufxurT2/giphy.gif', 'https://media.giphy.com/media/idLFuhrQ9VD3y/giphy.gif', 'https://media.giphy.com/media/wmZkcJkPAXMnC/giphy.gif', 'https://media.giphy.com/media/e2AKpOvx2MREY/giphy.gif', 'https://media.giphy.com/media/zKPcZ2aToEiVa/giphy.gif', 'https://media.giphy.com/media/BPnUBMlGXnE9W/giphy.gif', 'https://media.giphy.com/media/bguSbMBFt3JHa/giphy.gif', 'https://media.giphy.com/media/QIghDKst8OMko/giphy.gif', 'https://media.giphy.com/media/V5lokvq0Bmdpu/giphy.gif', 'https://media.giphy.com/media/Oi0l1tQEqUyBy/giphy.gif', 'https://media.giphy.com/media/3o7TKyL3QqrRb2I9UI/giphy.gif', 'https://media.giphy.com/media/r2WlBRizt9A9q/giphy.gif', 'https://media.giphy.com/media/N6BvsHxlTjco8/giphy.gif', 'https://media.giphy.com/media/xTiTnm91V79U92CeuQ/giphy.gif', 'https://media.giphy.com/media/6yuYfTApCMV7G/giphy.gif', 'https://media.giphy.com/media/14ogxQkxY0uCeQ/giphy.gif', 'https://media.giphy.com/media/bgjtWAUKOttkY/giphy.gif', 'https://media.giphy.com/media/lXkBQXCqZ9YEo/giphy.gif', 'https://media.giphy.com/media/xsBP0RdvxJfhu/giphy.gif'];

var l = gifs.length,
	wrapper = document.body,
	lastNum = 0;
console.log(l);
//MAKE IT RAIN 💵💴💷💶
(window.gifRain = function() {

	var gif = document.createElement('div');

	var randomNum = Math.floor((Math.random() * l) + 0);

	//Randon top/left
	var randomTop = (Math.floor(Math.random() * (document.body.clientHeight - 200)) + 200) * -1,
		randomLeft = Math.floor(Math.random() * (document.body.clientWidth - 300)) + 1;

	//Random width/height and random transition time
	var wANDh = (Math.floor(Math.random() * 200) + 75),
		seconds = (Math.floor(Math.random() * 5) + 5);

	//When equal I use the giphy api to return a random #pizza gif.
	if (lastNum == randomNum) {
		console.log(randomNum)
		q = "pizza"; // search query

		request = new XMLHttpRequest;
		request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + q, true);

		request.onload = function() {
			if (request.status >= 200 && request.status < 400) {
				data = JSON.parse(request.responseText).data.image_url;
				console.log(data + ' ' + 'random gif loaded');
				gif.style.backgroundImage = 'url(' + data + ')';
				gif.classList += 'gif random';
				gif.style.left = randomLeft + 'px';
				gif.style.top = randomTop + 'px';
				gif.style.width = wANDh + 'px';
				gif.style.height = wANDh + 'px';
				gif.style.transition = "transform " + seconds + 's linear';

				lastNum = randomNum;
				wrapper.appendChild(gif);

				//Set top to trigger animation
				setTimeout(function() {
					gif.style.transform = "translateY(" + (document.body.clientHeight * 2) + 'px)';
				}, 100)

				//Remove old gifs
				setTimeout(function() {
					wrapper.removeChild(gif);
				}, seconds * 1000);
			} else {
				console.log('reached giphy, but API returned an error');
			}
		};

		request.onerror = function() {
			console.log('connection error');
		};

		request.send();
	} else {

		gif.style.backgroundImage = 'url(' + gifs[randomNum] + ')';
		gif.classList += 'gif';
		gif.style.left = randomLeft + 'px';
		gif.style.top = randomTop + 'px';
		gif.style.width = wANDh + 'px';
		gif.style.height = wANDh + 'px';
		gif.style.transition = "transform " + seconds + 's linear';

		lastNum = randomNum;
		wrapper.appendChild(gif);

		//Set top to trigger animation
		setTimeout(function() {
			gif.style.transform = "translateY(" + (document.body.clientHeight * 3.5) + 'px)';
		}, 100)

		//Remove old gifs
		setTimeout(function() {
			//wrapper.removeChild(gif);
		}, seconds * 1000);
	}

})();

//Rain em down baby
setInterval(function() {
	gifRain();
}, 500);
/////////////////////////////////////////////
const menu = document.querySelector(".menu");
const navmenu = document.querySelector(".nav-ul");

menu.addEventListener("click", () => {
  navmenu.classList.toggle("open-nav");
});

const audio = document.querySelector("#audio");
const readyBtn = document.querySelector("#ready");
const loadingSec = document.querySelector("#loading");

readyBtn.addEventListener("click", () => {
  loadingSec.style.display = "none";
  audio.play();
});
