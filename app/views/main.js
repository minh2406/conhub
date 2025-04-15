let maxMainContentLength = 8; // How many content to show in main
let mainContentShow = maxMainContentLength; // Show content to
let mainContentIndex = 0; // Show content from
let subContentShow = 8; // How many content to show in sub
let subContentIndex = 0; // Sub content start
// Storage all film
var contentList = [
		// {
		// 	img: 'https://i.ytimg.com/vi/C7OQHIpDlvA/maxresdefault.jpg',
		// 	name: 'The Wait',
		// 	href: '/watch/1',
		// 	description: `"The Wait" (Written & Directed by Nolt Vutthisak) tells the story of a lonely drummer (Kritthee Visitkitjakarn) during the self-distancing period in 2020, who has grown frustrated with the absence of his band. Killing time, the self-taught drummer must do something by his own imagination.`,
		// 	src: 'https://www.youtube.com/embed/C7OQHIpDlvA?si=DCA_qpwjCrA8kuhk',
		// 	author: `Nolt Vutthisak`,
		// 	year: 2020,
		// },
		// {
		// 	img: 'https://i.ytimg.com/vi/OrOYvVf6tIM/maxresdefault.jpg',
		// 	name: 'Other Side of the Box',
		// 	href: '/watch/2',
		// 	description: `More About "Other Side of the Box" : 
		// 	On a normal Winter night Ben and Rachel are called upon by their estranged friend Shawn, who has brought a gift. Things quickly escalate when they open the box and realize something is trying to get out.`,
		// 	src: 'https://www.youtube.com/embed/OrOYvVf6tIM?si=DCA_qpwjCrA8kuhk',
		// 	author: `Caleb J. Phillips`,
		// 	year: 2020,
		// },
		// {
		// 	img: 'https://i.ytimg.com/vi/mhazCS14Tas/maxresdefault.jpg',
		// 	name: 'THE CHAIR',
		// 	href: '/watch/3',
		// 	description: `After Reese (Anthony Pavone) brings home an antique chair, a series of horrific events follow, leading him to question if it's a malevolent spirit the chair possesses or the darkness inside his own mind.`,
		// 	src: 'https://www.youtube.com/embed/mhazCS14Tas?si=DCA_qpwjCrA8kuhk',
		// 	author: `Curry Barker`,
		// 	year: 2023,
		// },
		// {
		// 	img: 'https://i.ytimg.com/vi/BI9fKfX5V68/maxresdefault.jpg',
		// 	name: 'Portrait of God',
		// 	href: '/watch/4',
		// 	description: `A religious girl prepares a presentation about a painting titled "Portrait of God". What she sees challenges her beliefs.`,
		// 	src: 'https://www.youtube.com/embed/BI9fKfX5V68?si=DCA_qpwjCrA8kuhk',
		// 	author: `Dylan Clark`,
		// 	year: 2022,
		// },
		// {
		// 	img: 'https://i.ytimg.com/vi/IyhoT3smJEQ/maxresdefault.jpg',
		// 	name: 'The Kid and the Camera',
		// 	href: '/watch/5',
		// 	description: `MA young boy named Cailen with a broken camera is visited by a sleep fairy called the Cipsneed, but he's never heard of a sleep fairy. Enjoy!`,
		// 	src: 'https://www.youtube.com/embed/IyhoT3smJEQ?si=DCA_qpwjCrA8kuhk',
		// 	author: `Braiden Ortiz`,
		// 	year: 2023,
		// },
		// {
		// 	img: 'https://i.ytimg.com/vi/thpF81-wrMs/maxresdefault.jpg',
		// 	name: 'The Loop',
		// 	href: '/watch/6',
		// 	description: ``,
		// 	src: 'https://www.youtube.com/embed/thpF81-wrMs?si=DCA_qpwjCrA8kuhk',
		// 	author: `Sadiel Gomez`,
		// 	year: 2024,
		// },
		// /*test*/
		// {
		// 	img: 'https://i.ytimg.com/vi/C7OQHIpDlvA/maxresdefault.jpg',
		// 	name: 'The Wait',
		// 	href: '/watch/1',
		// 	description: `"The Wait" (Written & Directed by Nolt Vutthisak) tells the story of a lonely drummer (Kritthee Visitkitjakarn) during the self-distancing period in 2020, who has grown frustrated with the absence of his band. Killing time, the self-taught drummer must do something by his own imagination.`,
		// 	src: 'https://www.youtube.com/embed/C7OQHIpDlvA?si=DCA_qpwjCrA8kuhk',
		// 	author: `Nolt Vutthisak`,
		// 	year: 2020,
		// },
		// {
		// 	img: 'https://i.ytimg.com/vi/C7OQHIpDlvA/maxresdefault.jpg',
		// 	name: 'The Wait',
		// 	href: '/watch/1',
		// 	description: `"The Wait" (Written & Directed by Nolt Vutthisak) tells the story of a lonely drummer (Kritthee Visitkitjakarn) during the self-distancing period in 2020, who has grown frustrated with the absence of his band. Killing time, the self-taught drummer must do something by his own imagination.`,
		// 	src: 'https://www.youtube.com/embed/C7OQHIpDlvA?si=DCA_qpwjCrA8kuhk',
		// 	author: `Nolt Vutthisak`,
		// 	year: 2020,
		// },
		// {
		// 	img: 'https://i.ytimg.com/vi/C7OQHIpDlvA/maxresdefault.jpg',
		// 	name: 'The Wait',
		// 	href: '/watch/1',
		// 	description: `"The Wait" (Written & Directed by Nolt Vutthisak) tells the story of a lonely drummer (Kritthee Visitkitjakarn) during the self-distancing period in 2020, who has grown frustrated with the absence of his band. Killing time, the self-taught drummer must do something by his own imagination.`,
		// 	src: 'https://www.youtube.com/embed/C7OQHIpDlvA?si=DCA_qpwjCrA8kuhk',
		// 	author: `Nolt Vutthisak`,
		// 	year: 2020,
		// },
		// {
		// 	img: 'https://i.ytimg.com/vi/C7OQHIpDlvA/maxresdefault.jpg',
		// 	name: 'The Wait',
		// 	href: '/watch/1',
		// 	description: `"The Wait" (Written & Directed by Nolt Vutthisak) tells the story of a lonely drummer (Kritthee Visitkitjakarn) during the self-distancing period in 2020, who has grown frustrated with the absence of his band. Killing time, the self-taught drummer must do something by his own imagination.`,
		// 	src: 'https://www.youtube.com/embed/C7OQHIpDlvA?si=DCA_qpwjCrA8kuhk',
		// 	author: `Nolt Vutthisak`,
		// 	year: 2020,
		// },
		// {
		// 	img: 'https://i.ytimg.com/vi/C7OQHIpDlvA/maxresdefault.jpg',
		// 	name: 'The Wait',
		// 	href: '/watch/1',
		// 	description: `"The Wait" (Written & Directed by Nolt Vutthisak) tells the story of a lonely drummer (Kritthee Visitkitjakarn) during the self-distancing period in 2020, who has grown frustrated with the absence of his band. Killing time, the self-taught drummer must do something by his own imagination.`,
		// 	src: 'https://www.youtube.com/embed/C7OQHIpDlvA?si=DCA_qpwjCrA8kuhk',
		// 	author: `Nolt Vutthisak`,
		// 	year: 2020,
		// },
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
	// loadSubContent();
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
	mainContent.innerHTML = '<h1 class="title">Phim mới</h1>';
	for (let i = 1; i <= maxMainContentLength && i <= mainContentShow - mainContentIndex; i++){
		mainContent.innerHTML += `<span class="content">
				<a class="img-container" href="/watch#1"><img src="https://i.ytimg.com/vi/C7OQHIpDlvA/maxresdefault.jpg"
						class="content-img"></a>
				<a class="name" href="/watch#1">The Wait</a>
			</span>`;
	}
	mainContent.innerHTML += `<div class="button-container">
				<button class="previousButton" id="previousButton" onclick="previousContent()">Trước</button>
				<button class="nextButton" id="nextButton" onclick="nextContent()">Sau</button>
			</div>`;
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
// function loadSubContent(){
// 	let subContent = document.getElementById("sub-content");
// 	if(subContent) // If sub content exist
// 	{
// 		for (let i = subContentIndex; i < subContentShow && i < subContentList.length; i++){
// 			// Get page content
// 			let contentContainer = subContent.getElementsByClassName("content");
// 			let imgContainer = contentContainer[i].getElementsByClassName("img-container");
// 			let contentImg = contentContainer[i].getElementsByClassName("content-img");
// 			let contentName = contentContainer[i].getElementsByClassName("name");
// 			let author = contentContainer[i].getElementsByClassName("description");
// 			// Load page content
// 			contentContainer[i].style.display = "block";
// 			imgContainer[0].href = `/watch/${subContentList[i].id}`;
// 			contentImg[0].src = subContentList[i].img;
// 			contentName[0].href = `/watch/${subContentList[i].id}`;
// 			contentName[0].innerText = subContentList[i].name;
// 			author[0].innerText = subContentList[i].author;
// 		}
// 	}
	
// }
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
	let logout = document.getElementById("logout");
	if(username.innerText != "")
	{
		login.style.display = "none";
	}
	else
	{
		logout.style.display = "none";
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
function mainPageContentLoad(dbData) {
    checkLogin();
    // Parse and filter verified films
    contentList = sortData(JSON.parse(dbData)).filter(film => film.verified === "true");
    console.log(contentList);
    mainContentList = contentList; // Assign verified films to main content
    // checkSub(user_name);
    loadContent(); // Load content
    return;
}
function subPageContentLoad(dbData) {
    checkLogin();
    // Parse and filter verified films
    contentList = sortData(JSON.parse(dbData)).filter(film => film.verified === "true");
    loadSearchContent(); // Load search content
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
	var loc = window.location.href.split("/page/")[1] != (NaN || undefined) ? parseInt(window.location.href.split("page/")[1]) + 1 : 1 + 1;
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
function loadFilm(url, dbData, user_favourite) {
    checkLogin();
    // Get data
    contentList = sortData(JSON.parse(dbData));
    // Load search content
    loadSearchContent();
    // Get page content
    let video = document.getElementById("video");
    let filmName = document.getElementById("film-name");
    let filmDescription = document.getElementById("film-description");
    let uploadTime = document.getElementById("film-upload-time");
    let downloadBtn = document.getElementById("download-btn");
    let filmId = url.split('watch/')[1];
    let fav_film = document.getElementById("fav_film");
    let fav_btn = document.getElementById("fav-btn");
    let filmForm = document.getElementById("fav-form");
    let isFavourite = checkFavourite(filmId, user_favourite); // check if favourited
	let authorName = document.getElementById("author-name");

    // load film base on id
    for (var content of contentList) {
        if (content.id == filmId && content.verified !== "deleted") {
            // Set video source
            video.src = content.src;
            // Set download l
            downloadBtn.href = content.download;
            // Set upload time
            uploadTime.innerText = new Date(content.time).toLocaleString('vi-VN', { dateStyle: 'medium', timeStyle: 'short' });
            // Update details
            if (!isFavourite) {
                filmName.innerText = content.name;
                filmDescription.innerText = content.description;
                fav_film.value = content.id;
                filmForm.action = "/fav";
                fav_btn.innerText = "Thích";
				authorName.innerText = content.author;
				authorName.href = `/user/${content.author}`;
            } else {
                filmName.innerText = content.name;
                filmDescription.innerText = content.description;
                fav_film.value = content.id;
                filmForm.action = "/unfav";
                fav_btn.innerText = "Bỏ thích";
				authorName.innerText = content.author;
				authorName.href = `/user/${content.author}`;
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
// function yearFilmContent(url, dbData){
// 	checkLogin();
// 	contentList = sortData(JSON.parse(dbData));
// 	let year = url.split('year/')[1];
// 	year = year.split("/page/")[0];
// 	mainContentList = [];
// 	// Check year if right add to main content list
// 	for (var content of contentList)
// 	{
// 		if(content.year == year)
// 		{
// 			mainContentList.push(content);
// 		}
// 	}
// 	if(maxMainContentLength > mainContentList.length)
// 	{
// 		mainContentShow = mainContentList.length;
// 	}
// 	loadTitle(`Phim năm ${year}`);
// 	loadContent();
// 	return;
// }
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
	var input, filter, a, txtValue, searchContentList, searchContainer;
	searchContainer = document.getElementById("search-container");
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
//change to search page
function searchPage()
{
	search = document.getElementById("search");
	location.href = "/search/" + "value=" + search.value; 	
}
//so sanh xau
function compareStrings(a, b) {
    // Split strings into words
    const wordsA = a.split(' ');
    const wordsB = b.split(' ');

    let totalScore = 0;
	let wordCount = 0;

    // Compare each word in `a` with each word in `b`
    for (const wordA of wordsA) {
        let maxWordScore = 0;
		wordCount++;

        for (const wordB of wordsB) {
            // Use dynamic programming to calculate the maximum score
            const dp = Array(wordA.length + 1)
                .fill(0)
                .map(() => Array(wordB.length + 1).fill(0));
			let maxCharacterScore = 0;
            for (let i = 1; i <= wordA.length; i++) {
                for (let j = 1; j <= wordB.length; j++) {
                    if (wordA[i - 1] === wordB[j - 1]) {
                        dp[i][j] = dp[i - 1][j - 1] + 1; // Characters match
						maxCharacterScore = Math.max(maxCharacterScore, dp[i][j]);
                    } else {
                        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j-1]); // Skip a character
                    }
                }
            }
            // Calculate the number of correct matches
            const correct = maxCharacterScore;

            // Calculate the number of wrong characters
            const wrong = wordA.length - correct;

            // Calculate the score for this word pair
            let score = (correct) / wordA.length;
			if(wrong >= correct) score = 0;

            // Update the maximum score for this word in `wordsA`
            maxWordScore = Math.max(maxWordScore, score);
			//console.log(correct, wrong, score, maxWordScore);
        }	
		if(maxWordScore <= 0.5) maxWordScore = 0;
        // Add the maximum score for this word to the total score
        totalScore += maxWordScore;
    }
	totalScore = totalScore / wordCount;
	//console.log("a: ", a, "b: ", b, "score: ", totalScore);
    // if(totalScore <= 0.5) totalScore = 0;
	return totalScore;
}
// console.log('a: ', compareStrings('thac dz 2', 'thac dz 2')); // test
//searchpage
function searchContent(url, dbData) {
    checkLogin();
    contentList = sortData(JSON.parse(dbData));
    mainContentList = [];

    // Extract the search value from the URL
    let input = url.substring(
        url.indexOf("value=") + 6,
        url.lastIndexOf("/page") !== -1 ? url.lastIndexOf("/page") : url.length
    );
    input = decodeURIComponent(input);
    console.log(input);

    const filter = input.toUpperCase();
    const scoredContent = [];

    // Compare filter with each content name and calculate the score
    for (let i = 0; i < contentList.length; i++) {
        const content = contentList[i];
        const txtValue = content.name.toUpperCase();
        const score = compareStrings(filter, txtValue); // Calculate the score

        if (score > 0) {
            scoredContent.push({ content, score }); // Add content and its score to the list
        }
    }

    // Sort the scored content by score in descending order
    scoredContent.sort((a, b) => b.score - a.score);

    // Add the sorted content to the main content list
    for (const item of scoredContent) {
        mainContentList.push(item.content);
    }

    // Update the title and load the content
    loadTitle(`Kết quả tìm kiếm của: ${input}`);
    loadContent();
}
//Search bat len khi click
function searchOn(){
	var searchContentList = document.getElementsByClassName("search-content");
	var searchContainer = document.getElementById("search-container");
	for (let i = 0; i < searchContentList.length; i++) {
        searchContentList[i].style.display = "block";
		searchContainer.style.display = "block";
    }
}

//Search tat khi click ra
function focusOff()
{
	var searchContentList = document.getElementsByClassName("search-content");
	var searchContainer = document.getElementById("search-container");
	for (let i = 0; i < searchContentList.length; i++) {
        searchContentList[i].style.display = "none";
		searchContainer.style.display = "none";
    }
}
function searchOff(){
	setTimeout(focusOff, 200);
}
// favourite content
function favouriteContent(dbData, user_favourite) {
    checkLogin();
    // checkSub(user_name);
    // Parse and filter verified films
    contentList = sortData(JSON.parse(dbData)).filter(film => film.verified === "true");
    subContentList = getUserFavourite(user_favourite); // Assign user favorites
    mainContentList = subContentList; // Assign to main content
    loadContent(); // Load content
    loadTitle(`Phim yêu thích`);
}
document.addEventListener('DOMContentLoaded', () => {
    // Validate thumbnail file type
    const thumbnailInput = document.getElementById('url');
    const thumbnailFileName = document.getElementById('thumbnail-file-name');

    thumbnailInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
            if (!allowedTypes.includes(file.type)) {
                alert('File không hợp lệ. Vui lòng đăng tải file PNG, JPEG hoặc JPG.');
                thumbnailInput.value = ''; // Clear the input
                thumbnailFileName.textContent = '';
                return;
            }
            thumbnailFileName.textContent = `Đã chọn: ${file.name}`;
        } else {
            thumbnailFileName.textContent = '';
        }
    });

    // Validate video file type
    const videoInput = document.getElementById('source');
    const videoFileName = document.getElementById('video-file-name');

    videoInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const allowedTypes = ['video/mp4', 'video/mkv', 'video/avi'];
            if (!allowedTypes.includes(file.type)) {
                alert('File không hợp lệ. Vui lòng đăng tải file MP4, MKV hoặc AVI.');
                videoInput.value = ''; // Clear the input
                videoFileName.textContent = '';
                return;
            }
            videoFileName.textContent = `Đã chọn: ${file.name}`;
        } else {
            videoFileName.textContent = '';
        }
    });
});
// Get time when submit film
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('film-upload-form');
    const uploadTimeInput = document.getElementById('upload-time');

    form.addEventListener('submit', () => {
        const now = new Date();
        const formattedTime = now.toISOString(); // Format as ISO string (e.g., "2025-04-13T12:34:56.789Z")
        uploadTimeInput.value = formattedTime;
        console.log(`Upload time set to: ${formattedTime}`);
    });
});
/* side bar*/
function w3_open() {
	document.getElementById("mySidebar").style.display = "block";
	document.getElementById("menuButton").style.display = "none";

}

function w3_close() {
	document.getElementById("mySidebar").style.display = "none";
	document.getElementById("menuButton").style.display = "block";
}
function loadPage()
{
	checkLogin();
    loadSearchContent();
}
function toggleDeleteForm() {
	const deleteForm = document.getElementById('delete-form');
	if (deleteForm.style.display === 'none' || deleteForm.style.display === '') {
		deleteForm.style.display = 'block';
	} else {
		deleteForm.style.display = 'none';
	}
}
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('film-upload-form');
	const deleteForm = document.getElementById('delete-form');

	if (form) {
    form.addEventListener('submit', () => {
			document.getElementById('loading').style.display = 'flex';
			document.getElementById('loading').style.display = 'flex';
    });
	}
	if (deleteForm) {
		deleteForm.addEventListener('submit', () => {
			document.getElementById('loading').style.display = 'flex';
			document.getElementById('loading').style.display = 'flex';
		});
	}
});