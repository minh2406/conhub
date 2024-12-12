let maxMainContentLength = 6; // How many content to show in main
let mainContentShow = maxMainContentLength; // Show content to
let mainContentIndex = 0; // Show content from
let subContentShow = 6; // How many content to show in sub
let subContentIndex = 0; // Sub content start
// Storage all film
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
// Store main content film
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
// Store sub content film
var subContentList = [
	
];
// Load content
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
// Clear all film
function clearContent()
{
	let contentContainer = document.getElementsByClassName("content");
	for(var content of contentContainer)
	{
		content.style.display = "none";
	}
}
// Load main Film
function loadMainContent(){
	let mainContent = document.getElementById("main-content");
	for (let i = mainContentIndex; i < mainContentShow; i++){
		// Get page content
		let contentContainer = mainContent.getElementsByClassName("content");
		let imgContainer = contentContainer[i-mainContentIndex].getElementsByClassName("img-container");
		let contentImg = contentContainer[i-mainContentIndex].getElementsByClassName("content-img");
		let contentName = contentContainer[i-mainContentIndex].getElementsByClassName("name");
		// Load page content
		contentContainer[i-mainContentIndex].style.display = "inline-block";
		imgContainer[0].href = `/watch/${mainContentList[i].id}`;
		contentImg[0].src = mainContentList[i].img;
		contentName[0].href = `/watch/${mainContentList[i].id}`;
		contentName[0].innerText = mainContentList[i].name;
	}
}
// Load sub Film
function loadSubContent(){
	let subContent = document.getElementById("sub-content");
	if(subContent) // If sub content exist
	{
		for (let i = subContentIndex; i < subContentShow && i < subContentList.length; i++){
			// Get page content
			let contentContainer = subContent.getElementsByClassName("content");
			let imgContainer = contentContainer[i].getElementsByClassName("img-container");
			let contentImg = contentContainer[i].getElementsByClassName("content-img");
			let contentName = contentContainer[i].getElementsByClassName("name");
			let author = contentContainer[i].getElementsByClassName("description");
			// Load page content
			contentContainer[i].style.display = "block";
			imgContainer[0].href = `/watch/${subContentList[i].id}`;
			contentImg[0].src = subContentList[i].img;
			contentName[0].href = `/watch/${subContentList[i].id}`;
			contentName[0].innerText = subContentList[i].name;
			author[0].innerText = subContentList[i].author;
		}
	}
	
}
// Turn database infor to list
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
// Load page base on URL
function getPage()
{
	let page = window.location.href.split("page/")[1] != (NaN || undefined) ? window.location.href.split("page/")[1] : 1;
	if(page < 1){
		window.location.href = window.location.href.split("page/")[0] + "page/1";
	}
	if(page > mainContentList.length / maxMainContentLength + 1){
		window.location.href = window.location.href.split("page/")[0] + "page/" +Math.ceil(mainContentList.length / maxMainContentLength);
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
// Check login
function checkLogin()
{
	let username = document.getElementById("user_name");
	let login = document.getElementById("login");
	if(username.innerText != "")
	{
		login.style.display = "none";
	}
}
//check sub content
function checkSub(user_name)
{
	if(user_name == "")
	{
		let subText = document.getElementById("sub-text");
		subText.style.display = "block";
	}
}
// Load index
function mainPageContentLoad(dbData, user_favourite, user_name)
{
	checkLogin();
	contentList = sortData(JSON.parse(dbData)); // Sort theo phim moi
	console.log(contentList);
	mainContentList = contentList; // Truyen gia tri cho main content
	subContentList = getUserFavourite(user_favourite); // Truyen gia tri cho sub content
	checkSub(user_name);
	loadContent(); // Load content
	return;
}
function subPageContentLoad(dbData, user_favourite)
{
	checkLogin();
	contentList = sortData(JSON.parse(dbData));
	loadSearchContent();
}
// Sort id from high to low
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
// Load next page
function nextContent(){
	// Get current page
	var loc = window.location.href.split("/page/")[1] != (NaN || undefined) ? parseInt(window.location.href.split("page/")[1]) + 1 : 1;
	// Change page
	// vd truong hop localhost/ va localhost/page/
	if(window.location.href[window.location.href.length-1] != '/'){
		window.location.href = window.location.href.split("/page/")[0] + "/page/" + loc;
	}
	else{
		window.location.href = window.location.href.split("/page/")[0] + "page/" + loc;
	}
}
// Load previous page
function previousContent(){
	// Get current page
	var loc = window.location.href.split("/page/")[1] != (NaN || undefined) ? parseInt(window.location.href.split("page/")[1]) - 1 : 1;
	// Change page
	// vd truong hop localhost/ va localhost/page/
	if(window.location.href[window.location.href.length-1] != '/'){
		window.location.href = window.location.href.split("/page/")[0] + "/page/" + loc;
	}
	else{
		window.location.href = window.location.href.split("/page/")[0] + "page/" + loc;
	}
}
// Check the film has been favourited or not
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
//Load film
function loadFilm(url, dbData, user_favourite){
	checkLogin();
	// Get data
	contentList = sortData(JSON.parse(dbData));
	// Load search content
	loadSearchContent();
	// Get page content
	let video = document.getElementById("video");
	let details = document.getElementById("details");
	let filmId = url.split('watch/')[1];
	let isFavourite = checkFavourite(filmId, user_favourite); // check if favourited
	// load film base on id
	for(var content of contentList)
	{
		if(content.id == filmId)
		{	
			// Khong favourited
			if(!isFavourite)
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
			// Favourited
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
// Load Title main content
function loadTitle(text){
	let mainContent = document.getElementById("main-content");
	let title = mainContent.getElementsByClassName("title");
	title[0].innerText = text;
}
// Load year page
function yearFilmContent(url, dbData){
	checkLogin();
	contentList = sortData(JSON.parse(dbData));
	let year = url.split('year/')[1];
	year = year.split("page/")[0];
	mainContentList = [];
	// Check year if right add to main content list
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
//Load search content
function loadSearchContent()
{
	//Load all list content to search
	let searchContainer = document.getElementById("search-container");
	for (var content of contentList)
	{
		searchContainer.innerHTML += `<li  class="search-content">
						<a href="/watch/${content.id}">${content.name}</a>
						</li>`
	}
}
//Search
function search()
{
	var input, filter, a, txtValue, searchContentList;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    searchContentList = document.getElementsByClassName("search-content");
    for (let i = 0; i < searchContentList.length; i++) {
        a = searchContentList[i].getElementsByTagName("a")[0];
        txtValue = a.innerText;
		idValue = a.href.split("watch/")[1];
        if (txtValue.toUpperCase().indexOf(filter) > -1 || idValue.toUpperCase().indexOf(filter) > -1) {
            searchContentList[i].style.display = "block"; // Neu dung search
        } else {
            searchContentList[i].style.display = "none"; // Neu sai search
        }
    }
}
//Search bat len khi click
function searchOn(){
	var searchContentList = document.getElementsByClassName("search-content");
	for (let i = 0; i < searchContentList.length; i++) {
        searchContentList[i].style.display = "block";
    }
}
//Search tat khi click ra
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
// favourite content
function favouriteContent(dbData, user_favourite, user_name)
{
	checkLogin();
	checkSub(user_name);
	contentList = sortData(JSON.parse(dbData));
	subContentList = getUserFavourite(user_favourite);
	mainContentList = subContentList;
	loadContent();
	loadTitle(`Phim yêu thích`);
}