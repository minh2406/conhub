let maxMainContentLength = 6;
let mainContentShow = maxMainContentLength;
let mainContentIndex = 0;
let subContentShow = 6;
let subContentIndex = 0;
var contentList = [
		{
			img: 'https://i.ytimg.com/vi/C7OQHIpDlvA/maxresdefault.jpg',
			name: 'The Wait',
			href: '/watch/1',
			description: `"The Wait" (Written & Directed by Nolt Vutthisak) tells the story of a lonely drummer (Kritthee Visitkitjakarn) during the self-distancing period in 2020, who has grown frustrated with the absence of his band. Killing time, the self-taught drummer must do something by his own imagination.`,
			src: 'https://www.youtube.com/embed/C7OQHIpDlvA?si=DCA_qpwjCrA8kuhk',
			author: `Nolt Vutthisak`,
			year: 2020,
		},
		{
			img: 'https://i.ytimg.com/vi/OrOYvVf6tIM/maxresdefault.jpg',
			name: 'Other Side of the Box',
			href: '/watch/2',
			description: `More About "Other Side of the Box" : 
			On a normal Winter night Ben and Rachel are called upon by their estranged friend Shawn, who has brought a gift. Things quickly escalate when they open the box and realize something is trying to get out.`,
			src: 'https://www.youtube.com/embed/OrOYvVf6tIM?si=DCA_qpwjCrA8kuhk',
			author: `Caleb J. Phillips`,
			year: 2020,
		},
		{
			img: 'https://i.ytimg.com/vi/mhazCS14Tas/maxresdefault.jpg',
			name: 'THE CHAIR',
			href: '/watch/3',
			description: `After Reese (Anthony Pavone) brings home an antique chair, a series of horrific events follow, leading him to question if it's a malevolent spirit the chair possesses or the darkness inside his own mind.`,
			src: 'https://www.youtube.com/embed/mhazCS14Tas?si=DCA_qpwjCrA8kuhk',
			author: `Curry Barker`,
			year: 2023,
		},
		{
			img: 'https://i.ytimg.com/vi/BI9fKfX5V68/maxresdefault.jpg',
			name: 'Portrait of God',
			href: '/watch/4',
			description: `A religious girl prepares a presentation about a painting titled "Portrait of God". What she sees challenges her beliefs.`,
			src: 'https://www.youtube.com/embed/BI9fKfX5V68?si=DCA_qpwjCrA8kuhk',
			author: `Dylan Clark`,
			year: 2022,
		},
		{
			img: 'https://i.ytimg.com/vi/IyhoT3smJEQ/maxresdefault.jpg',
			name: 'The Kid and the Camera',
			href: '/watch/5',
			description: `MA young boy named Cailen with a broken camera is visited by a sleep fairy called the Cipsneed, but he's never heard of a sleep fairy. Enjoy!`,
			src: 'https://www.youtube.com/embed/IyhoT3smJEQ?si=DCA_qpwjCrA8kuhk',
			author: `Braiden Ortiz`,
			year: 2023,
		},
		{
			img: 'https://i.ytimg.com/vi/thpF81-wrMs/maxresdefault.jpg',
			name: 'The Loop',
			href: '/watch/6',
			description: ``,
			src: 'https://www.youtube.com/embed/thpF81-wrMs?si=DCA_qpwjCrA8kuhk',
			author: `Sadiel Gomez`,
			year: 2024,
		},
		/*test*/
		{
			img: 'https://i.ytimg.com/vi/C7OQHIpDlvA/maxresdefault.jpg',
			name: 'The Wait',
			href: '/watch/1',
			description: `"The Wait" (Written & Directed by Nolt Vutthisak) tells the story of a lonely drummer (Kritthee Visitkitjakarn) during the self-distancing period in 2020, who has grown frustrated with the absence of his band. Killing time, the self-taught drummer must do something by his own imagination.`,
			src: 'https://www.youtube.com/embed/C7OQHIpDlvA?si=DCA_qpwjCrA8kuhk',
			author: `Nolt Vutthisak`,
			year: 2020,
		},
		{
			img: 'https://i.ytimg.com/vi/C7OQHIpDlvA/maxresdefault.jpg',
			name: 'The Wait',
			href: '/watch/1',
			description: `"The Wait" (Written & Directed by Nolt Vutthisak) tells the story of a lonely drummer (Kritthee Visitkitjakarn) during the self-distancing period in 2020, who has grown frustrated with the absence of his band. Killing time, the self-taught drummer must do something by his own imagination.`,
			src: 'https://www.youtube.com/embed/C7OQHIpDlvA?si=DCA_qpwjCrA8kuhk',
			author: `Nolt Vutthisak`,
			year: 2020,
		},
		{
			img: 'https://i.ytimg.com/vi/C7OQHIpDlvA/maxresdefault.jpg',
			name: 'The Wait',
			href: '/watch/1',
			description: `"The Wait" (Written & Directed by Nolt Vutthisak) tells the story of a lonely drummer (Kritthee Visitkitjakarn) during the self-distancing period in 2020, who has grown frustrated with the absence of his band. Killing time, the self-taught drummer must do something by his own imagination.`,
			src: 'https://www.youtube.com/embed/C7OQHIpDlvA?si=DCA_qpwjCrA8kuhk',
			author: `Nolt Vutthisak`,
			year: 2020,
		},
		{
			img: 'https://i.ytimg.com/vi/C7OQHIpDlvA/maxresdefault.jpg',
			name: 'The Wait',
			href: '/watch/1',
			description: `"The Wait" (Written & Directed by Nolt Vutthisak) tells the story of a lonely drummer (Kritthee Visitkitjakarn) during the self-distancing period in 2020, who has grown frustrated with the absence of his band. Killing time, the self-taught drummer must do something by his own imagination.`,
			src: 'https://www.youtube.com/embed/C7OQHIpDlvA?si=DCA_qpwjCrA8kuhk',
			author: `Nolt Vutthisak`,
			year: 2020,
		},
		{
			img: 'https://i.ytimg.com/vi/C7OQHIpDlvA/maxresdefault.jpg',
			name: 'The Wait',
			href: '/watch/1',
			description: `"The Wait" (Written & Directed by Nolt Vutthisak) tells the story of a lonely drummer (Kritthee Visitkitjakarn) during the self-distancing period in 2020, who has grown frustrated with the absence of his band. Killing time, the self-taught drummer must do something by his own imagination.`,
			src: 'https://www.youtube.com/embed/C7OQHIpDlvA?si=DCA_qpwjCrA8kuhk',
			author: `Nolt Vutthisak`,
			year: 2020,
		},
	];
var mainContentList = [
	contentList[0],
	contentList[1],
	contentList[2],
	contentList[3],
	contentList[4],
	contentList[5],
	contentList[2],
	contentList[3],
];
var subContentList = [
	
];
function loadContent() {
	/*reset*/
	clearContent();
	/*get page*/
	getPage();
	/*load main content*/
	loadMainContent();
	/*load sub content*/
	loadSubContent();
	/*load search content*/
	loadSearchContent();
}
function clearContent()
{
	let contentContainer = document.getElementsByClassName("content");
	for(var content of contentContainer)
	{
		content.style.display = "none";
	}
}
function loadMainContent(){
	let mainContent = document.getElementById("main-content");
	for (let i = mainContentIndex; i < mainContentShow; i++){
		let contentContainer = mainContent.getElementsByClassName("content");
		let imgContainer = contentContainer[i-mainContentIndex].getElementsByClassName("img-container");
		let contentImg = contentContainer[i-mainContentIndex].getElementsByClassName("content-img");
		let contentName = contentContainer[i-mainContentIndex].getElementsByClassName("name");
		contentContainer[i-mainContentIndex].style.display = "inline-block";
		imgContainer[0].href = `/watch/${mainContentList[i].id}`;
		contentImg[0].src = mainContentList[i].img;
		contentName[0].href = `/watch/${mainContentList[i].id}`;
		contentName[0].innerText = mainContentList[i].name;
	}
}
function loadSubContent(){
	let subContent = document.getElementById("sub-content");
	let i = 0;
	if(subContent)
	{
		for (var content of subContentList){
			let contentContainer = subContent.getElementsByClassName("content");
			let imgContainer = contentContainer[i].getElementsByClassName("img-container");
			let contentImg = contentContainer[i].getElementsByClassName("content-img");
			let contentName = contentContainer[i].getElementsByClassName("name");
			let author = contentContainer[i].getElementsByClassName("description");
			contentContainer[i].style.display = "block";
			imgContainer[0].href = `/watch/${subContentList[i].id}`;
			contentImg[0].src = content.img;
			contentName[0].href = `/watch/${subContentList[i].id}`;
			contentName[0].innerText = content.name;
			author[0].innerText = content.author;
			i++;
		}
	}
}
function getUserFavourite(user_favourite)
{
	let favList = [];
	let idFavourite = user_favourite.split("id=");
	for(var id of idFavourite)
	{
		for(var content of contentList)
		{
			if(content.id == id)
			{
				favList.unshift(content);
			}
		}
	}
	return favList;
}
function getPage()
{
	let page = window.location.href.split("page/")[1] != (NaN || undefined) ? window.location.href.split("page/")[1] : 1;
	if(page < 1){
		window.location.href = window.location.href.split("page/")[0] + "page/1";
	}
	if(page > contentList.length / maxMainContentLength + 1){
		window.location.href = window.location.href.split("page/")[0] + "page/" +Math.ceil(contentList.length / maxMainContentLength);
	}
	page = page <= 0 ? 1 : page;
	mainContentShow = page*maxMainContentLength;
	mainContentIndex = mainContentShow - maxMainContentLength;
	if(mainContentShow > mainContentList.length)
	{
		mainContentShow = mainContentList.length;
		mainContentIndex = mainContentShow - (mainContentList.length % maxMainContentLength) > 0 ? mainContentShow - (mainContentList.length % maxMainContentLength) : 0;
	}
	if(mainContentIndex < 0)
	{
		mainContentIndex = 0;
		mainContentShow = maxContentShow + maxMainContentLength < contentList.length ? maxContentShow + maxMainContentLength : contentList.length;
	}
	console.log(page, mainContentIndex, mainContentShow);
}
function mainPageContentLoad(dbData, user_favourite)
{
	contentList = sortData(JSON.parse(dbData));
	console.log(contentList);
	mainContentList = contentList;
	subContentList = getUserFavourite(user_favourite);
	loadContent();
	return;
}
function sortData(data)
{
	let tempData = data;
	for (let i = 0; i < tempData.length; i++){
		for (let j = i + 1; j < tempData.length; j++){
			if(tempData[i].id < tempData[j].id)
			{
				[tempData[i], tempData[j]] = [tempData[j], tempData[i]]
			}
		}
	}
	return tempData;
}
function nextContent(){
	var loc = window.location.href.split("/page/")[1] != (NaN || undefined) ? parseInt(window.location.href.split("page/")[1]) + 1 : 1;
	if(window.location.href[window.location.href.length-1] != '/'){
		window.location.href = window.location.href.split("/page/")[0] + "/page/" + loc;
	}
	else{
		window.location.href = window.location.href.split("/page/")[0] + "page/" + loc;
	}
}
function previousContent(){
	var loc = window.location.href.split("/page/")[1] != (NaN || undefined) ? parseInt(window.location.href.split("page/")[1]) - 1 : 1;
	if(window.location.href[window.location.href.length-1] != '/'){
		window.location.href = window.location.href.split("/page/")[0] + "/page/" + loc;
	}
	else{
		window.location.href = window.location.href.split("/page/")[0] + "page/" + loc;
	}
}
function checkFavourite(filmId, user_favourite)
{
	let favouriteList = getUserFavourite(user_favourite);
	console.log(favouriteList)
	for(var fav of favouriteList)
	{
		if(fav.id == filmId)
		{
			return true;
		}
	}
	return false;
}
function loadFilm(url, dbData, user_favourite){
	contentList = sortData(JSON.parse(dbData));
	loadSearchContent();
	let video = document.getElementById("video");
	let details = document.getElementById("details");
	let filmId = url.split('watch/')[1];
	let isFavourite = checkFavourite(filmId, user_favourite);
	for(var content of contentList)
	{
		if(content.id == filmId)
		{	if(!isFavourite)
			{
				video.src = content.src;
				details.innerHTML = `<h1 class="name film-name">${content.name}</h1>
					<form action="/fav" method="post" id="fav-form">
						<input type="text" id="fav_film" name="fav_film" style="display: none;" value=${content.id}>
						<button type="submit" class="fav-btn"><b>Theo dõi</b></button>
					</form>
					<p class="description">${content.description}</p>`;
					console.log("theo dõi");
			}
			else
			{
				video.src = content.src;
				details.innerHTML = `<h1 class="name film-name">${content.name}</h1>
					<form action="/unfav" method="post" id="fav-form">
						<input type="text" id="fav_film" name="fav_film" style="display: none;" value=${content.id}>
						<button type="submit" class="fav-btn"><b>Bỏ theo dõi</b></button>
					</form>
					<p class="description">${content.description}</p>`;
			}
		}
	}
}
function loadTitle(text){
	let mainContent = document.getElementById("main-content");
	let title = mainContent.getElementsByClassName("title");
	title[0].innerText = text;
}
function yearFilmContent(url, dbData){
	contentList = sortData(JSON.parse(dbData));
	let year = url.split('year/')[1];
	year = year.split("page/")[0];
	mainContentList = [];
	for (var content of contentList)
	{
		if(content.year == year)
		{
			mainContentList.push(content);
		}
	}
	if(maxMainContentLength > mainContentList.length)
	{
		mainContentShow = mainContentList.length;
	}
	loadTitle(`Phim năm ${year}`);
	loadContent();
	return;
}
function loadSearchContent()
{
	let searchContainer = document.getElementById("search-container");
	for (var content of contentList)
	{
		searchContainer.innerHTML += `<li  class="search-content">
						<a href="/watch/${content.id}">${content.name}</a>
						</li>`
	}
}
function search()
{
	var input, filter, a, txtValue, searchContentList;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    searchContentList = document.getElementsByClassName("search-content");
    for (let i = 0; i < searchContentList.length; i++) {
        a = searchContentList[i].getElementsByTagName("a")[0];
        txtValue = a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            searchContentList[i].style.display = "block";
        } else {
            searchContentList[i].style.display = "none";
        }
    }
}
function searchOn(){
	var searchContentList = document.getElementsByClassName("search-content");
	for (let i = 0; i < searchContentList.length; i++) {
        searchContentList[i].style.display = "block";
    }
}
function focusOff()
{
	var searchContentList = document.getElementsByClassName("search-content");
	for (let i = 0; i < searchContentList.length; i++) {
        searchContentList[i].style.display = "none";
    }
}
function searchOff(){
	setTimeout(focusOff, 200);
}