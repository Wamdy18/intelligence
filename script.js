// Описание критериев:
// 1) price - цена автомобиля. Основной критерий. Пользователь вводит бюджет, которым он располагает. 
// Автомобили прежде всего отбираются по цене, не привышающей введёную пользователем.
// 2) mark - марка автомобиля. ПОКА НЕ ВЫВОДИТЬ, НЕ ДАВАТЬ ПОЛЬЗОВАТЕЛЮ ВЫБИРАТЬ МАРКУ. 
//  ----------------------------------------------------------------------------------------------------- Пользователь может выбрать "Не имеет значения" или выбрать любую интересующую его.
// 3) model - модель автомобиля. ПОКА НЕ ВЫВОДИТЬ, НЕ ДАВАТЬ ПОЛЬЗОВАТЕЛЮ ВЫБИРАТЬ МОДЕЛЬ.
// 4) carcaseType - тип кузова. Типы: Седан, Купе, Хэтчбек, Внедорожник, Минивэн, Лифтбек, Кабриолет, 
// Пикап, Компактвэн, Универсал (пока нет)
// 5) image - ссылка на изображение автомобиля.
// 6) speed - скорость автомобиля:
// Usual - до 199 л.с.
// Fast - от 200 л.с. до 449 л.с.
// VeryFast - от 450 л.с. до 1000 л.с.
// 7) roominess - вместительность: Usual, Roomy, VeryRoomy 
// 8) securityLevel - уровень безопасности: true/false (обычный/более безопасный)
// 9) style - стильный внешний вид автомобиля: true/false (обычный/стильный)
// 10) link - ссылка на подборку новых данных автомобилей на auto.ru 
// 11) sizeAuto - габариты автомобиля: Small, Medium, Big, VeryBig


// Описание алгоритма: 
// 1. Пользователь вводит бюджет. 
// Автомобили отбираются по бюджету, не превышающий введённый. 
// 2. Пользователь выбирает остальные критерии в порядке: (МАРКУ ПОКА ТОЖЕ НЕ ВЫВОДИМ) 
// Тип кузова, Скорость, Вместительность, Безопасность, Стильный внешний вид, Габариты автомобиля.
// ??? - (Тут хз, пока можно не делать) К каждому критерию добавить вариант "Не имеет значения"

// Дальше 2 варианта алгоритма, но нам больше подходит второй:
// 1) Выводить самый дорогой автомобиль (в соответствии с введенным бюджетом), который подходит по всем критериям.
// 2) Ссоздать какой-нибудь массив/счетчик, который считает совпадения. Максимум - 6 совпадений. Если у нас 
// нет автомобиля, который подходит по всем критерий, показываем тот, где совпадает больше всего критериев.

// Например: Lada Vesta 1
// 		price: 667310,
// 		mark: "Lada",
// 		model: "Vesta 1",
// 		carcaseType: "Седан",
// 		speed: "Usual",
// 		roominess: "Usual",
// 		securityLevel: false,
// 		style: false,
// 		sizeAuto: "Medium"

// Пользователь вводит: 
//  Тип кузова: Не имеет значения (тоже добавляет счет в счетчик)
//  Скорость: Обычная (Usual)
//  Вместительность: Обычная (Usual)
//  Безопасность: Более безопасный (true)
//  Стильный внешний вид: Обычный (false)
//  Габариты автомобиля: Средние (Medium)

// Совпадений по критериям: 5

// Но, так как, других более совпадающих авто нет (может и есть, хз, тут как пример), выводим это


// Описание вывода:
// Та же карточка, что и была + кнопка [Посмотреть автомобили] со ссылкой link.


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
	
	// priceDiv.classList.add('display-none');
	// markDiv.classList.remove('display-none');

	for (let i = 0; i < data.length; i++) {
		if (price > data[i].price) {
			result.push(data[i]);
		}
	}
	if (result.length != 0) {
		for (let j = 0; j < result.length; j++) {
		if (result.length > 0 && result[j].price > maxPrice) {
			maxPrice = result[j].price;
		}
	}
	
	let actualCar = result.find((el) => el.price === maxPrice);

	card.querySelector('img').src = `${actualCar.image}`;
	card.querySelector('h1').textContent = `${actualCar.mark} ${actualCar.model}`;
	card.querySelector('p').textContent = `Тип кузова: ${actualCar.carcaseType}`;
	priceRef = actualCar.price.toString().replace(/\B(?=(?:\d{3})*$)/g, ' ') + " рублей";
	card.querySelector('h3').textContent = `Цена: ${priceRef}`;

	priceDiv.classList.add('display-none');
	cardContainer.classList.remove('display-none');
	
	}
	else {
		alert('Автомобилей не найдено!');
	}
	

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

