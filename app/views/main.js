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
	/*load main content*/
	loadMainContent();
	/*load sub content*/
	loadSubContent();
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
	subContentList = [
		contentList[3],
		contentList[2],
		contentList[1],
		contentList[4],
		contentList[0],
	];
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
function mainPageContentLoad(dbData)
{
	contentList = sortData(JSON.parse(dbData));
	mainContentList = contentList;
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
	if(mainContentShow + maxMainContentLength < mainContentList.length)
	{
		mainContentShow += maxMainContentLength;
		mainContentIndex = mainContentShow - maxMainContentLength;
		loadContent();
	}
	else if(mainContentIndex + maxMainContentLength < mainContentList.length)
	{
		mainContentShow = mainContentList.length;
		mainContentIndex += maxMainContentLength;
		loadContent();
	}
}
function previousContent(){
	if(mainContentIndex - maxMainContentLength > 0)
	{
		mainContentShow -= maxMainContentLength;
		mainContentIndex = mainContentShow - maxMainContentLength;
		loadContent();
	}
	else if(mainContentIndex != 0)
	{
		mainContentShow = maxMainContentLength;
		mainContentIndex = 0;
		loadContent();
	}
}
function loadFilm(url){
	let video = document.getElementById("video");
	let details = document.getElementById("details");
	let filmId = url.split('watch/')[1];
	video.src = contentList[filmId - 1].src;
	details.innerHTML = `<h1 class="name">${contentList[filmId - 1].name}</h1>
			<p class="description">${contentList[filmId - 1].description}</p>`;
}
function loadTitle(text){
	let mainContent = document.getElementById("main-content");
	let title = mainContent.getElementsByClassName("title");
	title[0].innerText = text;
}
function yearFilmContent(url, dbData){
	contentList = sortData(JSON.parse(dbData));
	let year = url.split('year/')[1];
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