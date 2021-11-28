const data = [
	{
		price: 667310,
		mark: "Lada",
		model: "Vesta 1",
		carcaseType: "Седан",
		image: "https://s.auto.drom.ru/i24203/pubs/4/48737/gen340_2496764.jpg"
	},
	{
		price: 545500,
		mark: "Lada",
		model: "Granta 1 Restyling",
		carcaseType: "Седан",
		image: "https://s.auto.drom.ru/i24225/c/photos/generations/500x_lada_granta_g8847.jpg?840787"
	},
	{
		price: 4317000,
		mark: "Audi",
		model: "Q5 II (FY) Restyling",
		carcaseType: "Внедорожник",
		image: "https://s.auto.drom.ru/i24246/c/photos/fullsize/audi/q5/audi_q5_959965.jpg"
	},
	{
		price: 5585313,
		mark: "Audi",
		model: "A7 II",
		carcaseType: "Лифтбек",
		image: "http://avatars.mds.yandex.net/get-verba/216201/2a000001608fbdd8b70cf62c3e99488ea518/cattouchretcr"
	},
	{
		price: 8464400,
		mark: "BMW",
		model: "8 series II",
		carcaseType: "Купе",
		image: "https://s.auto.drom.ru/i24222/c/photos/fullsize/bmw/8-series/bmw_8-series_818882.jpg"
	},
	{
		price: 5585313,
		mark: "BMW",
		model: "X5 IV",
		carcaseType: "Внедорожник",
		image: "http://avatars.mds.yandex.net/get-verba/787013/2a00000163d68e1bc2da6042f7438f626da8/cattouchretcr"
	},
	{
		price: 773900,
		mark: "Chevrolet",
		model: "Spark III",
		carcaseType: "Хэтчбек",
		image: "https://auto.ironhorse.ru/wp-content/uploads/2014/01/spark-ru-front.jpg"
	},
	{
		price: 14143381,
		mark: "Chevrolet",
		model: "Corvette C8",
		carcaseType: "Кабриолет",
		image: "https://images.drive.ru/i/0/60239331f1ca9765017879bf.jpg"
	},
	{
		price: 12347396,
		mark: "Ford",
		model: "F-150",
		carcaseType: "Пикап",
		image: "https://lh3.googleusercontent.com/proxy/Ul8ZMumqYHXJnrEGDt2lt9RIdZccTdJz_9xBhrkF-kiBDXtdsrsThBLTAIZn_-BriKOT4XcXoSCNyth--rFyFCJVZRg"
	},
	{
		price: 745500,
		mark: "Hyundai",
		model: "Solaris II Restyling",
		carcaseType: "Седан",
		image: "https://s.auto.drom.ru/i24206/c/photos/generations/500x_hyundai_solaris_g7440.jpg?677323"
	},
	{
		price: 2499000,
		mark: "Hyundai",
		model: "H-1 II Restyling",
		carcaseType: "Минивэн",
		image: "https://s.auto.drom.ru/i24222/c/photos/fullsize/hyundai/h1/hyundai_h1_819397.jpg"
	},
	{
		price: 1649900,
		mark: "Kia",
		model: "K5 III",
		carcaseType: "Седан",
		image: "https://motor.ru/thumb/2250x0/filters:quality(75):no_upscale()/imgs/2020/07/20/10/4009865/aa930ff255d261fc8434a3d5d121f37b212b3c44.jpg"
	},
	{
		price: 716000,
		mark: "Kia",
		model: "Rio X IV Restyling",
		carcaseType: "Хэтчбек",
		image: "https://avtonovostidnya.ru/wp-content/uploads/2020/08/kia-rio-x-line-e1598879643590.jpg"
	},
	{
		price: 3660000,
		mark: "Mercedes-Benz",
		model: "C-class IV",
		carcaseType: "Седан",
		image: "https://avatars.mds.yandex.net/get-verba/787013/2a000001635d904e00dd9f390aab4c94eb59/cattouch"
	},
	{
		price: 4435000,
		mark: "Mercedes-Benz",
		model: "E-class V",
		carcaseType: "Седан",
		image: "https://avatars.mds.yandex.net/get-verba/787013/2a000001635d904e00dd9f390aab4c94eb59/cattouch"
	},
	{
		price: 1249000,
		mark: "Mitshubishi",
		model: "Outlander III Restyling 3",
		carcaseType: "Внедорожник",
		image: "https://auto.ironhorse.ru/wp-content/uploads/2015/04/outlander-new-3.jpg"
	},
	{
		price: 1219601,
		mark: "Mitshubishi",
		model: "ASX I Restyling 3",
		carcaseType: "Внедорожник",
		image: "https://s.auto.drom.ru/i24230/c/photos/fullsize/mitsubishi/asx/mitsubishi_asx_878006.jpg"
	},
	{
		price: 1322000,
		mark: "Nissan",
		model: "Quashqai II Restyling",
		carcaseType: "Внедорожник",
		image: "http://ovod-pro.ru/images/1984615/43254852/original/a85b14fa2b09fa05e91c0ed639c08d41.jpg"
	},
	{
		price: 1500000,
		mark: "Nissan",
		model: "X-Trail III Restyling",
		carcaseType: "Внедорожник",
		image: "https://avatars.mds.yandex.net/get-verba/216201/2a000001605a09b10ccd07ca8f875e52bc21/cattouch"
	},
	{
		price: 1500000,
		mark: "Opel",
		model: "Combo PCMA",
		carcaseType: "Компактвэн",
		image: "https://avatars.mds.yandex.net/get-verba/1540742/2a00000178177d02c93be1d2202007458577/cattouch"
	},
	{
		price: 2758000,
		mark: "Opel",
		model: "Zafira Life L I",
		carcaseType: "Минивэн",
		image: "https://s.auto.drom.ru/i24231/c/photos/fullsize/opel/zafira_life/opel_zafira_life_885020.jpg"
	},
	{
		price: 892000,
		mark: "Renault",
		model: "Duster",
		carcaseType: "Внедорожник",
		image: "https://upload.wikimedia.org/wikipedia/commons/c/c2/2018_Dacia_Duster_Comfort_1.6.jpg"
	},
	{
		price: 447000,
		mark: "Renault",
		model: "Logan II Restyling",
		carcaseType: "Седан",
		image: "https://s.auto.drom.ru/i24223/c/photos/generations/500x_renault_logan_g8484.jpg?825622"
	},
	{
		price: 862000,
		mark: "Skoda",
		model: "Rapid II",
		carcaseType: "Лифтбек",
		image: "https://avatars.mds.yandex.net/get-verba/997355/2a0000016efea787dd46c599a439feb532c5/cattouchret"
	},
	{
		price: 1396000,
		mark: "Skoda",
		model: "Karoq I",
		carcaseType: "Внедорожник",
		image: "https://s.auto.drom.ru/i24236/c/photos/fullsize/skoda/karoq/skoda_karoq_910886.jpg"
	},
	{
		price: 1986000,
		mark: "Toyota",
		model: "Camry VIII",
		carcaseType: "Седан",
		image: "https://avatars.mds.yandex.net/get-verba/1030388/2a000001786ab6d740f53ca6259ae80885c7/cattouch"
	},
	{
		price: 7870000,
		mark: "Toyota",
		model: "Land Cruiser 300",
		carcaseType: "Внедорожник",
		image: "https://img-optimize.toyota-europe.com/resize/tridion/768x432/ruru/LC300_ZX_city_CMYK_1600_tcm-3020-2313588.jpg"
	},
	{
		price: 5095000,
		mark: "Volkswagen",
		model: "Polo VI",
		carcaseType: "Лифтбек",
		image: "https://s.auto.drom.ru/i24242/c/photos/fullsize/volkswagen/polo/volkswagen_polo_944905.jpg"
	},
	{
		price: 5095000,
		mark: "Volkswagen",
		model: "Touareg III",
		carcaseType: "Внедорожник",
		image: "https://akppwiki.ru/wp-content/uploads/2019/01/1525802538_trete-pokolenie-krossovera-volkswagen-touareg-2019-2020.jpg"
	}
];

const priceInput = document.getElementById('priceInput');
const markInput = document.getElementById('markInput');
const modelInput = document.getElementById('modelInput');
const carcaseTypeInput = document.getElementById('carcaseTypeInput');

let price;
let mark;
let model;
let carcase;

const priceInputBtn = document.getElementById('priceInputBtn');
const markInputBtn = document.getElementById('markInputBtn');
const modelInputBtn = document.getElementById('modelInputBtn');
const carcaseTypeInputBtn = document.getElementById('carcaseTypeInputBtn');

const priceDiv = document.getElementById('priceDiv');
const markDiv = document.getElementById('markDiv');
const modelDiv = document.getElementById('modelDiv');
const carcaseTypeDiv = document.getElementById('carcaseTypeDiv');

let result = [];
let maxPrice = 0;
let card = document.getElementById('card');
let cardContainer = document.getElementById('cardContainer');

priceInputBtn.addEventListener('click', () => {
	price = priceInput.value;
	price = Number(price);
	
	priceDiv.classList.add('display-none');
	markDiv.classList.remove('display-none');

	// for (let i = 0; i < data.length; i++) {
	// 	if (price > data[i].price) {
	// 		result.push(data[i]);
	// 	}
	// }
	// if (result.length != 0) {
	// 	for (let j = 0; j < result.length; j++) {
	// 	if (result.length > 0 && result[j].price > maxPrice) {
	// 		maxPrice = result[j].price;
	// 	}
	// }
	
	// let actualCar = result.find((el) => el.price === maxPrice);

	// card.querySelector('img').src = `${actualCar.image}`;
	// card.querySelector('h1').textContent = `${actualCar.mark} ${actualCar.model}`;
	// card.querySelector('p').textContent = `Тип кузова: ${actualCar.carcaseType}`;
	// priceRef = actualCar.price.toString().replace(/\B(?=(?:\d{3})*$)/g, ' ') + " рублей";
	// card.querySelector('h3').textContent = `Цена: ${priceRef}`;

	// priceDiv.classList.add('display-none');
	// cardContainer.classList.remove('display-none');
	
	// }
	// else {
	// 	alert('Автомобилей не найдено!');
	// }
	

});

// markInputBtn.addEventListener('click', () => {
// 	mark = markInput.value;
// 	markDiv.classList.add('display-none');
// 	modelDiv.classList.remove('display-none');
// });

// modelInputBtn.addEventListener('click', () => {
// 	model = modelInput.value;
// 	modelDiv.classList.add('display-none');
// 	carcaseTypeDiv.classList.remove('display-none');
// });

// carcaseTypeInputBtn.addEventListener('click', () => {
// 	carcase = carcaseTypeInput.value;
// 	alert(price + ' \n' + mark + ' \n' + model + ' \n' + carcase);

// 	for (var i=0; i < data.length; i++) {
// 		if (data[i].price < price) {
// 			result.push(data[i].mark + ' ' + data[i].model);
// 		}
// 	}

// 	for (var j=0; j < result.length; j++) {
// 		alert(result[j]);
// 	}

// });

const beginDiv = document.getElementById('beginDiv');
const buttonBegin = document.getElementById('buttonBegin');

buttonBegin.addEventListener('click', () => {
	beginDiv.classList.add('display-none');
	priceDiv.classList.remove('display-none');
});

