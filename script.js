window.onload = () => {
	fetch("http://antihach.pythonanywhere.com/").then(res => console.log(res));
}


const data = [
	{
		price: 667310,
		mark: "Lada",
		model: "Vesta 1",
		carcaseType: "Седан",
		image: "https://s.auto.drom.ru/i24203/pubs/4/48737/gen340_2496764.jpg",
		speed: "Usual",
		roominess: "Usual",
		securityLevel: false,
		style: false,
		link: "https://auto.ru/cars/new/group/vaz/vesta/20417749-20417777/",
		sizeAuto: "Medium"
	},
	{
		price: 545500,
		mark: "Lada",
		model: "Granta 1 Restyling",
		carcaseType: "Седан",
		image: "https://s.auto.drom.ru/i24225/c/photos/generations/500x_lada_granta_g8847.jpg?840787",
		speed: "Usual",
		roominess: "Usual",
		securityLevel: false,
		style: false,
		link: "https://auto.ru/cars/new/group/vaz/granta/21377296-21377430/",
		sizeAuto: "Medium"
	},
	{
		price: 4317000,
		mark: "Audi",
		model: "Q5 II (FY) Restyling",
		carcaseType: "Внедорожник",
		image: "https://s.auto.drom.ru/i24246/c/photos/fullsize/audi/q5/audi_q5_959965.jpg",
		speed: "Fast",
		roominess: "Romy",
		securityLevel: true,
		style: true,
		link: "https://auto.ru/cars/new/group/audi/q5/22408434-22408501/",
		sizeAuto: "Big"
	},
	{
		price: 5585313,
		mark: "Audi",
		model: "A7 II",
		carcaseType: "Лифтбек",
		image: "http://avatars.mds.yandex.net/get-verba/216201/2a000001608fbdd8b70cf62c3e99488ea518/cattouchretcr",
		speed: "Fast",
		roominess: "Roomy",
		securityLevel: true,
		style: true,
		link: "https://auto.ru/cars/new/group/audi/a7/21134030-21134181/",
		sizeAuto: "Big"
	},
	{
		price: 8464400,
		mark: "BMW",
		model: "8 series II",
		carcaseType: "Купе",
		image: "https://s.auto.drom.ru/i24222/c/photos/fullsize/bmw/8-series/bmw_8-series_818882.jpg",
		speed: "VeryFast",
		roominess: "Usual",
		securityLevel: true,
		style: true,
		link: "https://auto.ru/cars/new/group/bmw/8er/21315985-21316042/",
		sizeAuto: "Big"
	},
	{
		price: 5585313,
		mark: "BMW",
		model: "X5 IV",
		carcaseType: "Внедорожник",
		image: "http://avatars.mds.yandex.net/get-verba/787013/2a00000163d68e1bc2da6042f7438f626da8/cattouchretcr",
		speed: "Fast",
		roominess: "Roomy",
		securityLevel: true,
		style: true,
		link: "https://auto.ru/cars/new/group/bmw/x5/21307931-21307996/",
		sizeAuto: "Big"
	},
	{
		price: 773900,
		mark: "Chevrolet",
		model: "Spark III",
		carcaseType: "Хэтчбек",
		image: "https://auto.ironhorse.ru/wp-content/uploads/2014/01/spark-ru-front.jpg",
		speed: "Usual",
		roominess: "Usual",
		securityLevel: false,
		style: false,
		link: "https://auto.ru/cars/new/group/chevrolet/spark/22422785-22422909/",
		sizeAuto: "Small"
	},
	{
		price: 14143381,
		mark: "Chevrolet",
		model: "Corvette C8",
		carcaseType: "Кабриолет",
		image: "https://images.drive.ru/i/0/60239331f1ca9765017879bf.jpg",
		speed: "VeryFast",
		roominess: "Usual",
		securityLevel: false,
		style: true,
		link: "https://auto.ru/cars/new/group/chevrolet/corvette/21775610-21776096/",
		sizeAuto: "Big"
	},
	{
		price: 12347396,
		mark: "Ford",
		model: "F-150",
		carcaseType: "Пикап",
		image: "https://lh3.googleusercontent.com/proxy/Ul8ZMumqYHXJnrEGDt2lt9RIdZccTdJz_9xBhrkF-kiBDXtdsrsThBLTAIZn_-BriKOT4XcXoSCNyth--rFyFCJVZRg",
		speed: "Fast",
		roominess: "VeryRoomy",
		securityLevel: true,
		style: true,
		link: "https://auto.ru/cars/new/group/ford/f_150/23072802/0/1105620505-3581a07e/?from=single_group_snippet_listing",
		sizeAuto: "VeryBig"
	},
	{
		price: 745500,
		mark: "Hyundai",
		model: "Solaris II Restyling",
		carcaseType: "Седан",
		image: "https://s.auto.drom.ru/i24206/c/photos/generations/500x_hyundai_solaris_g7440.jpg?677323",
		speed: "Usual",
		roominess: "Usual",
		securityLevel: false,
		style: false,
		link: "https://auto.ru/cars/new/group/hyundai/solaris/21796089-21796128/",
		sizeAuto: "Medium"
	},
	{
		price: 2499000,
		mark: "Hyundai",
		model: "H-1 II Restyling",
		carcaseType: "Минивэн",
		image: "https://s.auto.drom.ru/i24222/c/photos/fullsize/hyundai/h1/hyundai_h1_819397.jpg",
		speed: "Usual",
		roominess: "VeryRoomy",
		securityLevel: true,
		style: false,
		link: "https://auto.ru/cars/new/group/hyundai/h_1_starex/21193052-21193094/",
		sizeAuto: "VeryBig"
	},
	{
		price: 1649900,
		mark: "Kia",
		model: "K5 III",
		carcaseType: "Седан",
		image: "https://motor.ru/thumb/2250x0/filters:quality(75):no_upscale()/imgs/2020/07/20/10/4009865/aa930ff255d261fc8434a3d5d121f37b212b3c44.jpg",
		speed: "Usual",
		roominess: "Roomy",
		securityLevel: true,
		style: true,
		link: "https://auto.ru/cars/new/group/kia/k5/22462291-22462326/",
		sizeAuto: "Big"
	},
	{
		price: 716000,
		mark: "Kia",
		model: "Rio X IV Restyling",
		carcaseType: "Хэтчбек",
		image: "https://avtonovostidnya.ru/wp-content/uploads/2020/08/kia-rio-x-line-e1598879643590.jpg",
		speed: "Usual",
		roominess: "Usual",
		securityLevel: false,
		style: false,
		link: "https://auto.ru/cars/new/group/kia/rio/22500704-22646504/",
		sizeAuto: "Medium"
	},
	{
		price: 3660000,
		mark: "Mercedes-Benz",
		model: "C-class IV",
		carcaseType: "Седан",
		image: "https://avatars.mds.yandex.net/get-verba/787013/2a000001635d904e00dd9f390aab4c94eb59/cattouch",
		speed: "Usual",
		roominess: "Usual",
		securityLevel: true,
		style: true,
		link: "https://auto.ru/cars/new/group/mercedes/c_klasse/21291732-21291804/",
		sizeAuto: "Medium"
	},
	{
		price: 4435000,
		mark: "Mercedes-Benz",
		model: "E-class V",
		carcaseType: "Седан",
		image: "https://avatars.mds.yandex.net/get-verba/787013/2a000001635d904e00dd9f390aab4c94eb59/cattouch",
		speed: "Usual",
		roominess: "Roomy",
		securityLevel: true,
		style: true,
		link: "https://auto.ru/cars/new/group/mercedes/e_klasse/22284156-22284200/",
		sizeAuto: "Big"
	},
	{
		price: 1249000,
		mark: "Mitshubishi",
		model: "Outlander III Restyling 3",
		carcaseType: "Внедорожник",
		image: "https://auto.ironhorse.ru/wp-content/uploads/2015/04/outlander-new-3.jpg",
		speed: "Usual",
		roominess: "Roomy",
		securityLevel: true,
		style: false,
		link: "https://auto.ru/cars/new/group/mitsubishi/outlander/21397304-21397498/",
		sizeAuto: "Big"
	},
	{
		price: 1219601,
		mark: "Mitshubishi",
		model: "ASX I Restyling 3",
		carcaseType: "Внедорожник",
		image: "https://s.auto.drom.ru/i24230/c/photos/fullsize/mitsubishi/asx/mitsubishi_asx_878006.jpg",
		speed: "Usual",
		roominess: "Usual",
		securityLevel: true,
		style: false,
		link: "https://auto.ru/cars/new/group/mitsubishi/asx/21905869-21905949/",
		sizeAuto: "Medium"
	},
	{
		price: 1322000,
		mark: "Nissan",
		model: "Quashqai II Restyling",
		carcaseType: "Внедорожник",
		image: "http://ovod-pro.ru/images/1984615/43254852/original/a85b14fa2b09fa05e91c0ed639c08d41.jpg",
		speed: "Usual",
		roominess: "Roomy",
		securityLevel: true,
		style: false,
		link: "https://auto.ru/cars/new/group/nissan/qashqai/21060966-21061005/",
		sizeAuto: "Medium"
	},
	{
		price: 1500000,
		mark: "Nissan",
		model: "X-Trail III Restyling",
		carcaseType: "Внедорожник",
		image: "https://avatars.mds.yandex.net/get-verba/216201/2a000001605a09b10ccd07ca8f875e52bc21/cattouch",
		speed: "Usual",
		roominess: "Roomy",
		securityLevel: true,
		style: false,
		link: "https://auto.ru/cars/new/group/nissan/x_trail/21179303-21179355/",
		sizeAuto: "Medium"
	},
	{
		price: 1500000,
		mark: "Opel",
		model: "Combo PCMA",
		carcaseType: "Компактвэн",
		image: "https://avatars.mds.yandex.net/get-verba/1540742/2a00000178177d02c93be1d2202007458577/cattouch",
		speed: "Usual",
		roominess: "Roomy",
		securityLevel: false,
		style: false,
		link: "https://auto.ru/cars/new/group/opel/combo/22795616/22795893/1103899305-6195440f/",
		sizeAuto: "Medium"
	},
	{
		price: 2758000,
		mark: "Opel",
		model: "Zafira Life L I",
		carcaseType: "Минивэн",
		image: "https://s.auto.drom.ru/i24231/c/photos/fullsize/opel/zafira_life/opel_zafira_life_885020.jpg",
		speed: "Usual",
		roominess: "VeryRoomy",
		securityLevel: true,
		style: false,
		link: "https://auto.ru/cars/new/group/opel/zafira_life/21743369-21743458/",
		sizeAuto: "Big"
	},
	{
		price: 892000,
		mark: "Renault",
		model: "Duster II",
		carcaseType: "Внедорожник",
		image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/2018_Dacia_Duster_Comfort_1.6.jpg",
		speed: "Usual",
		roominess: "Roomy",
		securityLevel: false,
		style: false,
		link: "https://auto.ru/cars/new/group/renault/duster/22764257-22764313/",
		sizeAuto: "Medium"
	},
	{
		price: 447000,
		mark: "Renault",
		model: "Logan II Restyling",
		carcaseType: "Седан",
		image: "https://s.auto.drom.ru/i24223/c/photos/generations/500x_renault_logan_g8484.jpg?825622",
		speed: "Usual",
		roominess: "Usual",
		securityLevel: false,
		style: false,
		link: "https://auto.ru/cars/new/group/renault/logan/21335370-21335451/",
		sizeAuto: "Medium"
	},
	{
		price: 862000,
		mark: "Skoda",
		model: "Rapid II",
		carcaseType: "Лифтбек",
		image: "https://avatars.mds.yandex.net/get-verba/997355/2a0000016efea787dd46c599a439feb532c5/cattouchret",
		speed: "Usual",
		roominess: "Usual",
		securityLevel: false,
		style: false,
		link: "https://auto.ru/cars/new/group/skoda/rapid/21738448-21738487/",
		sizeAuto: "Medium"
	},
	{
		price: 1396000,
		mark: "Skoda",
		model: "Karoq I",
		carcaseType: "Внедорожник",
		image: "https://s.auto.drom.ru/i24236/c/photos/fullsize/skoda/karoq/skoda_karoq_910886.jpg",
		speed: "Usual",
		roominess: "Roomy",
		securityLevel: true,
		style: false,
		link: "https://auto.ru/cars/new/group/skoda/karoq/21010081-21010112/",
		sizeAuto: "Medium"
	},
	{
		price: 1986000,
		mark: "Toyota",
		model: "Camry VIII",
		carcaseType: "Седан",
		image: "https://avatars.mds.yandex.net/get-verba/1030388/2a000001786ab6d740f53ca6259ae80885c7/cattouch",
		speed: "Usual",
		roominess: "Roomy",
		securityLevel: true,
		style: true,
		link: "https://auto.ru/cars/new/group/toyota/camry/22813205-22813261/",
		sizeAuto: "Medium"
	},
	{
		price: 7870000,
		mark: "Toyota",
		model: "Land Cruiser 300",
		carcaseType: "Внедорожник",
		image: "https://img-optimize.toyota-europe.com/resize/tridion/768x432/ruru/LC300_ZX_city_CMYK_1600_tcm-3020-2313588.jpg",
		speed: "Fast",
		roominess: "VeryRoomy",
		securityLevel: true,
		style: true,
		link: "https://auto.ru/cars/new/group/toyota/land_cruiser/22905352-22905474/",
		sizeAuto: "Big"
	},
	{
		price: 895900,
		mark: "Volkswagen",
		model: "Polo VI",
		carcaseType: "Лифтбек",
		image: "https://s.auto.drom.ru/i24242/c/photos/fullsize/volkswagen/polo/volkswagen_polo_944905.jpg",
		speed: "Usual",
		roominess: "Usual",
		securityLevel: false,
		style: false,
		link: "https://auto.ru/cars/new/group/volkswagen/polo/22163516-21802416/",
		sizeAuto: "Medium"
	},
	{
		price: 5095000,
		mark: "Volkswagen",
		model: "Touareg III",
		carcaseType: "Внедорожник",
		image: "https://akppwiki.ru/wp-content/uploads/2019/01/1525802538_trete-pokolenie-krossovera-volkswagen-touareg-2019-2020.jpg",
		speed: "Fast",
		roominess: "Roomy",
		securityLevel: true,
		style: true,
		link: "https://auto.ru/cars/new/group/volkswagen/touareg/21276641-21276693/",
		sizeAuto: "Big"
	}
];

const buttonBegin = document.getElementById('buttonBegin');
const startPage = document.getElementById('startPage');
const mainPage = document.getElementById('mainPage');
buttonBegin.addEventListener('click', () => {
	startPage.classList.add('d-none');
	mainPage.classList.remove('d-none');
});


const carCardName = document.getElementById('carCardName');
const carCardImg = document.getElementById('carCardImg');
const carCardSpanPrice = document.getElementById('carCardSpanPrice');
// const carCardLink = document.getElementById('carCardLink');

const resultCarCardName = document.getElementById('resultCarCardName');
const resultCarCardImg = document.getElementById('resultCarCardImg');
const resultCarCardSpanPrice = document.getElementById('resultCarCardSpanPrice');
// const carCardLink = document.getElementById('carCardLink');


//Определяем базовые значения критериев
let price = 0;
let speed = '';
let style = false;
let size = '';

let weight = 0;
let resultRecomendation = '';
let actulRecomendation = '';
let explanationRecomendation = '';

const priceInput = document.getElementById('priceInput');
const priceBtn = document.getElementById('priceBtn');
const group1 = document.getElementById('group1');

const speedInput = document.getElementById('speedInput');
const speedBtn = document.getElementById('speedBtn');
const group2 = document.getElementById('group2');

const styleInput = document.getElementById('styleInput');
const styleBtn = document.getElementById('styleBtn');
const group3 = document.getElementById('group3');

const sizeInput = document.getElementById('sizeInput');
const sizeBtn = document.getElementById('sizeBtn');
const group4 = document.getElementById('group4');

const resultGroup = document.getElementById('resultGroup');
const resultRecomendationText = document.getElementById('resultRecomendationText');
const actualRecomendationGroup = document.getElementById('actualRecomendationGroup');
const actualRecomendationSpan = document.getElementById('actualRecomendationSpan');
const explanationRecomendationSpan = document.getElementById('explanationRecomendationSpan');
const reloadPageGroup = document.getElementById('reloadPageGroup');

//Промежуточные переменные
let tempCarArray = [];
let maxPrice = 0;



priceBtn.addEventListener('click', () => {
	price = priceInput.value;
	price = Number(price);

	//Отбор по самой высокой цене
	for (let i = 0; i < data.length; i++) {
		if (price > data[i].price) {
			tempCarArray.push(data[i]);
		}
	}
	if (tempCarArray.length != 0) 
		{
			for (let j = 0; j < tempCarArray.length; j++) {
				tempCarArray[j].weight = 0;
			if (tempCarArray.length > 0 && tempCarArray[j].price > maxPrice) 
			{
				maxPrice = tempCarArray[j].price;
			}
		}
	}
	else 
	{
		group1.classList.add('d-none');
		reloadPageGroup.classList.remove('d-none');
	}
	
	let actualCar = tempCarArray.find((el) => el.price === maxPrice);


	carCardName.innerText = actualCar.mark + ' ' + actualCar.model;
	carCardImg.src = `${actualCar.image}`;
	carCardSpanPrice.innerText = actualCar.price.toString().replace(/\B(?=(?:\d{3})*$)/g, ' ') + " рублей";
	// actualRecomendationSpan.innerText = actualCar.mark + ' ' + actualCar.model;
	// explanationRecomendationSpan.innerText = 'Данный автомобиль самый дорогой из тех, которые подходят под Ваш бюджет.';
	actualRecomendationGroup.classList.remove('d-none');


	group1.classList.add('d-none');
	group2.classList.remove('d-none');
});

speedBtn.addEventListener('click', () => {
	speed = speedInput.value;

	for (let i = 0; i < tempCarArray.length; i++) {
		if (tempCarArray[i].speed === speed) 
			{
				//Если критерий совпадает с выбранным, добавляем вес(+1) всем подходящим по цене автомобилям.
				tempCarArray[i].weight += 1;
				// weight = 1;
			}
	}

	maxPrice = 0;

	for (let j = 0; j < tempCarArray.length; j++) {
		//Пробегаемся по tempCarArray. Смотрим, где вес совпадает с 1. Если такого нет, выводим самый дорогой автомобиль с весом 0.
		if (tempCarArray[j].weight === 1 && tempCarArray[j].price > maxPrice) 
			{
				maxPrice = tempCarArray[j].price;
				actualCar = tempCarArray[j];
			}
	}

	//Если нет ни одного элемента с весом 1 - actualCar приравниваем к самому дорогому элементу с весом 0.
	if (maxPrice === 0) {
			for (let j = 0; j < tempCarArray.length; j++) {
			//Пробегаемся по tempCarArray. Смотрим, где вес совпадает с 1. Если такого нет, выводим самый дорогой автомобиль с весом 0.
			if (tempCarArray[j].weight === 0 && tempCarArray[j].price > maxPrice) 
				{
					maxPrice = tempCarArray[j].price;
					actualCar = tempCarArray[j];
				}
		}
	}

	carCardName.innerText = actualCar.mark + ' ' + actualCar.model;
	carCardImg.src = `${actualCar.image}`;
	carCardSpanPrice.innerText = actualCar.price.toString().replace(/\B(?=(?:\d{3})*$)/g, ' ') + " рублей";
	// actualRecomendationSpan.innerText = actualCar.mark + ' ' + actualCar.model;
	// explanationRecomendationSpan.innerText = 'Данный автомобиль самый дорогой из тех, которые подходят под Ваш бюджет и удовлетворяют выбранным критериям в количестве: ' + actualCar.weight;







	group2.classList.add('d-none');
	group3.classList.remove('d-none');
});

styleBtn.addEventListener('click', () => {
	style = styleInput.value;

	for (let i = 0; i < tempCarArray.length; i++) {
		if (tempCarArray[i].style == style) 
			{
				//Если критерий совпадает с выбранным, добавляем вес(+1) всем подходящим по цене автомобилям.
				tempCarArray[i].weight += 1;
				// weight = 2;
				
			}
	}

	maxPrice = 0;

	for (let j = 0; j < tempCarArray.length; j++) {
		//Пробегаемся по tempCarArray. Смотрим, где вес совпадает с 2. Если такого нет, выводим самый дорогой автомобиль с весом 0.
		if (tempCarArray[j].weight === 2 && tempCarArray[j].price > maxPrice) 
			{
				maxPrice = tempCarArray[j].price;
				actualCar = tempCarArray[j];
			}
	}

	if (maxPrice === 0) {
			for (let j = 0; j < tempCarArray.length; j++) {
			//Пробегаемся по tempCarArray. Смотрим, где вес совпадает с 1. Если такого нет, выводим самый дорогой автомобиль с весом 0.
			if (tempCarArray[j].weight === 1 && tempCarArray[j].price > maxPrice) 
				{
					maxPrice = tempCarArray[j].price;
					actualCar = tempCarArray[j];
				}
		}
	}

	if (maxPrice === 0) {
			for (let j = 0; j < tempCarArray.length; j++) {
			
			if (tempCarArray[j].weight === 0 && tempCarArray[j].price > maxPrice) 
				{
					maxPrice = tempCarArray[j].price;
					actualCar = tempCarArray[j];
				}
		}
	}

	carCardName.innerText = actualCar.mark + ' ' + actualCar.model;
	carCardImg.src = `${actualCar.image}`;
	carCardSpanPrice.innerText = actualCar.price.toString().replace(/\B(?=(?:\d{3})*$)/g, ' ') + " рублей";
	// actualRecomendationSpan.innerText = actualCar.mark + ' ' + actualCar.model;
	// explanationRecomendationSpan.innerText = 'Данный автомобиль самый дорогой из тех, которые подходят под Ваш бюджет и удовлетворяют выбранным критериям в количестве: ' + actualCar.weight;


	group3.classList.add('d-none');
	group4.classList.remove('d-none');
});

sizeBtn.addEventListener('click', () => {
	size = sizeInput.value;

	for (let i = 0; i < tempCarArray.length; i++) {
		if (tempCarArray[i].sizeAuto == size) 
			{
				//Если критерий совпадает с выбранным, добавляем вес(+1) всем подходящим по цене автомобилям.
				tempCarArray[i].weight += 1;
				// weight = 2;
			}
	}

	maxPrice = 0;

	for (let j = 0; j < tempCarArray.length; j++) {
		//Пробегаемся по tempCarArray. Смотрим, где вес совпадает с 2. Если такого нет, выводим самый дорогой автомобиль с весом 0.
		if (tempCarArray[j].weight === 3 && tempCarArray[j].price > maxPrice) 
			{
				maxPrice = tempCarArray[j].price;
				actualCar = tempCarArray[j];

				// alert(tempCarArray[j].mark + ' ' + tempCarArray[j].model + ' ' + tempCarArray[j].weight);
			}
	}

	if (maxPrice === 0) {
			for (let j = 0; j < tempCarArray.length; j++) {
			//Пробегаемся по tempCarArray. Смотрим, где вес совпадает с 1. Если такого нет, выводим самый дорогой автомобиль с весом 0.
			if (tempCarArray[j].weight === 2 && tempCarArray[j].price > maxPrice) 
				{
					maxPrice = tempCarArray[j].price;
					actualCar = tempCarArray[j];

					// alert(tempCarArray[j].mark + ' ' + tempCarArray[j].model + ' ' + tempCarArray[j].weight);
				}
		}
	}

	if (maxPrice === 0) {
			for (let j = 0; j < tempCarArray.length; j++) {
			//Пробегаемся по tempCarArray. Смотрим, где вес совпадает с 1. Если такого нет, выводим самый дорогой автомобиль с весом 0.
			if (tempCarArray[j].weight === 1 && tempCarArray[j].price > maxPrice) 
				{
					maxPrice = tempCarArray[j].price;
					actualCar = tempCarArray[j];

					// alert(tempCarArray[j].mark + ' ' + tempCarArray[j].model + ' ' + tempCarArray[j].weight);
				}
		}
	}

	if (maxPrice === 0) {
			for (let j = 0; j < tempCarArray.length; j++) {
			
			if (tempCarArray[j].weight === 0 && tempCarArray[j].price > maxPrice) 
				{
					maxPrice = tempCarArray[j].price;
					actualCar = tempCarArray[j];
				}
		}
	}

	// alert('Вес actualCar:' + actualCar.weight);


	carCardName.innerText = actualCar.mark + ' ' + actualCar.model;
	carCardImg.src = `${actualCar.image}`;
	carCardSpanPrice.innerText = actualCar.price;
	// actualRecomendationSpan.innerText = actualCar.mark + ' ' + actualCar.model;
	// explanationRecomendationSpan.innerText = 'Данный автомобиль самый дорогой из тех, которые подходят под Ваш бюджет и удовлетворяют выбранным критериям в количестве: ' + actualCar.weight;










	group4.classList.add('d-none');

	// resultRecomendationText.innerText = actualCar.mark + ' ' + actualCar.model;
	resultCarCardName.innerText = actualCar.mark + ' ' + actualCar.model;
	resultCarCardImg.src = `${actualCar.image}`;
	resultCarCardSpanPrice.innerText = actualCar.price.toString().replace(/\B(?=(?:\d{3})*$)/g, ' ') + " рублей";


	resultGroup.classList.remove('d-none');
	actualRecomendationGroup.classList.add('d-none');
});
