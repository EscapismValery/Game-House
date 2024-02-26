let iconClear = document.querySelector('.nav__img');

let lider = document.querySelector('.lider');
let sale = document.querySelector('.sale');
let newgame = document.querySelector('.newgame');
let skoro = document.querySelector('.skoro');
let prikl = document.querySelector('.prikl');
let boevik = document.querySelector('.boevik');
let rol = document.querySelector('.rol');
let online = document.querySelector('.online');

let theLastOfUs = document.querySelector('.theLastOfUs');
let spiderMan = document.querySelector('.spiderMan');
let theWitcher3 = document.querySelector('.theWitcher3');
let blackDesert = document.querySelector('.blackDesert');

// Сброс фильтрации

iconClear.onclick = function() {
	lider.classList.remove('buttonActive');
	sale.classList.remove('buttonActive');
	skoro.classList.remove('buttonActive');
	newgame.classList.remove('buttonActive');
	prikl.classList.remove('buttonActive');
	boevik.classList.remove('buttonActive');
	rol.classList.remove('buttonActive');
	online.classList.remove('buttonActive');

	theLastOfUs.classList.remove('cardProductNONE');
	spiderMan.classList.remove('cardProductNONE');
	theWitcher3.classList.remove('cardProductNONE');
	blackDesert.classList.remove('cardProductNONE');
}

// Функция фильтрации, вызываемая при нажатии на категорию или жанр

function filtr(KatOrJanr) {
		KatOrJanr.classList.add('buttonActive');
		theLastOfUs.classList.remove('cardProductNONE');
		spiderMan.classList.remove('cardProductNONE');
		theWitcher3.classList.remove('cardProductNONE');
		blackDesert.classList.remove('cardProductNONE');
		switch (KatOrJanr) {
			case lider:
				sale.classList.remove('buttonActive');
				skoro.classList.remove('buttonActive');
				newgame.classList.remove('buttonActive');				 
				spiderMan.classList.add('cardProductNONE');
				theWitcher3.classList.add('cardProductNONE');
				blackDesert.classList.add('cardProductNONE');
				if ((rol.classList.contains('buttonActive')) || 
					(online.classList.contains('buttonActive'))) {
					theLastOfUs.classList.add('cardProductNONE');
				}
				break;
			case sale:
				lider.classList.remove('buttonActive');
				skoro.classList.remove('buttonActive');
				newgame.classList.remove('buttonActive');
				theWitcher3.classList.add('cardProductNONE');
				blackDesert.classList.add('cardProductNONE');
				if ((rol.classList.contains('buttonActive')) || 
					(online.classList.contains('buttonActive'))) {
					theLastOfUs.classList.add('cardProductNONE');
					spiderMan.classList.add('cardProductNONE');
				}
				break;
			case newgame:
				lider.classList.remove('buttonActive');
				sale.classList.remove('buttonActive');
				skoro.classList.remove('buttonActive');
				spiderMan.classList.add('cardProductNONE');
				theWitcher3.classList.add('cardProductNONE');
				blackDesert.classList.add('cardProductNONE');
				if ((rol.classList.contains('buttonActive')) || 
					(online.classList.contains('buttonActive'))) {
					theLastOfUs.classList.add('cardProductNONE');
				}
				break;
			case skoro:
				lider.classList.remove('buttonActive');
				sale.classList.remove('buttonActive');
				newgame.classList.remove('buttonActive');
				spiderMan.classList.add('cardProductNONE');
				theLastOfUs.classList.add('cardProductNONE');
				blackDesert.classList.add('cardProductNONE');
				if ((boevik.classList.contains('buttonActive')) || 
					(online.classList.contains('buttonActive')) ||
					(prikl.classList.contains('buttonActive'))) {
					theWitcher3.classList.add('cardProductNONE');
				}
				break;
			case prikl:
				boevik.classList.remove('buttonActive');
				rol.classList.remove('buttonActive');
				online.classList.remove('buttonActive');
				theWitcher3.classList.add('cardProductNONE');
				blackDesert.classList.add('cardProductNONE');
				if ((lider.classList.contains('buttonActive')) || 
					(newgame.classList.contains('buttonActive'))) {
					spiderMan.classList.add('cardProductNONE');
				}
				else if (skoro.classList.contains('buttonActive')) {
					spiderMan.classList.add('cardProductNONE');
					theLastOfUs.classList.add('cardProductNONE');
				}
				break;
			case boevik:
				prikl.classList.remove('buttonActive');
				rol.classList.remove('buttonActive');
				online.classList.remove('buttonActive');
				theWitcher3.classList.add('cardProductNONE');
				blackDesert.classList.add('cardProductNONE');
				if ((lider.classList.contains('buttonActive')) || 
					(newgame.classList.contains('buttonActive'))) {
					spiderMan.classList.add('cardProductNONE');
				}
				else if (skoro.classList.contains('buttonActive')) {
					spiderMan.classList.add('cardProductNONE');
					theLastOfUs.classList.add('cardProductNONE');
				}
				break;
			case rol:
				prikl.classList.remove('buttonActive');
				boevik.classList.remove('buttonActive');
				online.classList.remove('buttonActive');
				theLastOfUs.classList.add('cardProductNONE');
				spiderMan.classList.add('cardProductNONE');
				if ((lider.classList.contains('buttonActive')) || 
					(newgame.classList.contains('buttonActive')) ||
					(sale.classList.contains('buttonActive'))) {
					theWitcher3.classList.add('cardProductNONE');
					blackDesert.classList.add('cardProductNONE');
				}
				else if (skoro.classList.contains('buttonActive')) {
					blackDesert.classList.add('cardProductNONE');
				}
				break;
			case online:
				prikl.classList.remove('buttonActive');
				boevik.classList.remove('buttonActive');
				rol.classList.remove('buttonActive');
				theLastOfUs.classList.add('cardProductNONE');
				spiderMan.classList.add('cardProductNONE');
				theWitcher3.classList.add('cardProductNONE');
				if ((lider.classList.contains('buttonActive')) || 
					(newgame.classList.contains('buttonActive')) ||
					(sale.classList.contains('buttonActive')) ||
					(skoro.classList.contains('buttonActive'))) {
					blackDesert.classList.add('cardProductNONE');
				}
				break;
		}
}

// Фильтрация Категорий

lider.onclick = function() {
	filtr(lider);
}
sale.onclick = function() {
	filtr(sale);
}
newgame.onclick = function() {
	filtr(newgame);
}
skoro.onclick = function() {
	filtr(skoro);
}

// Фильтрация Жанров

prikl.onclick = function() {
	filtr(prikl);
}
boevik.onclick = function() {
	filtr(boevik);
}
rol.onclick = function() {
	filtr(rol);
}
online.onclick = function() {
	filtr(online);
}

// Корзина

let korzina = document.querySelector('.korzina');
let korzinaWindow = document.querySelector('.korzinaWindow');
//появление и скрытие окна корзины по нажатию на иконку корзины
korzina.onclick = function() {
	korzinaWindow.classList.toggle('korzinaWindow_on');
}
//скрытие окна по нажатию на иконку крестика
let korzinaWindowExit = document.querySelector('.korzinaWindow_exit');
korzinaWindowExit.onclick = function() {
	korzinaWindow.classList.remove('korzinaWindow_on');
}

// Добавление игр в корзину

let cardProductAdd = document.querySelector('.cardProduct_add');

let addTheLast = document.querySelector('.cardProduct_addTheLast');
let addSpider = document.querySelector('.cardProduct_addSpider');
let addTheWitcher = document.querySelector('.cardProduct_addTheWitcher');
let addBlackDesert = document.querySelector('.cardProduct_addBlackDesert');

let korzinaWindowClear = document.querySelector('.korzinaWindow_clear');
let korzinaWindowButton = document.querySelector('.korzinaWindow_button');
let korzinaProductDelete = document.querySelector('.korzina__product_delete');

let korzinaTheLast = document.querySelector('.korzina__theLast');
let korzinaSpider = document.querySelector('.korzina__spider');
let korzinaTheWitcher = document.querySelector('.korzina__theWitcher');
let korzinaBlackDesert = document.querySelector('.korzina__blackDesert');
//появление и удаление красной точки, текста о пустой корзине и кнопки оформить
function korzinaAdd() {
	if ((addTheLast.classList.contains('cardProduct_addActive')) ||
	(addSpider.classList.contains('cardProduct_addActive')) ||
	(addTheWitcher.classList.contains('cardProduct_addActive')) ||
	(addBlackDesert.classList.contains('cardProduct_addActive'))) {
		korzinaWindowButton.classList.add('korzinaWindow_buttonOn');
		korzina.classList.add('korzinaBefore');
		korzinaWindowClear.classList.add('korzinaWindow_clearNone');
	} else {
		korzinaWindowButton.classList.remove('korzinaWindow_buttonOn');
		korzina.classList.remove('korzinaBefore');
		korzinaWindowClear.classList.remove('korzinaWindow_clearNone');
	}
}

addTheLast.onclick = function() {
	addTheLast.classList.toggle('cardProduct_addActive');
	korzinaTheLast.classList.toggle('korzina__productOn');
	korzinaAdd();
}
addSpider.onclick = function() {
	addSpider.classList.toggle('cardProduct_addActive');
	korzinaSpider.classList.toggle('korzina__productOn');
	korzinaAdd();
}
addTheWitcher.onclick = function() {
	addTheWitcher.classList.toggle('cardProduct_addActive');
	korzinaTheWitcher.classList.toggle('korzina__productOn');
	korzinaAdd();
}
addBlackDesert.onclick = function() {
	addBlackDesert.classList.toggle('cardProduct_addActive');
	korzinaBlackDesert.classList.toggle('korzina__productOn');
	korzinaAdd();
}
korzinaTheLast.querySelector('.korzina__product_delete').onclick = function() {
	addTheLast.classList.remove('cardProduct_addActive');
	korzinaTheLast.classList.remove('korzina__productOn');
	korzinaAdd();
}
korzinaSpider.querySelector('.korzina__product_delete').onclick = function() {
	addSpider.classList.remove('cardProduct_addActive');
	korzinaSpider.classList.remove('korzina__productOn');
	korzinaAdd();
}
korzinaTheWitcher.querySelector('.korzina__product_delete').onclick = function() {
	addTheWitcher.classList.remove('cardProduct_addActive');
	korzinaTheWitcher.classList.remove('korzina__productOn');
	korzinaAdd();
}
korzinaBlackDesert.querySelector('.korzina__product_delete').onclick = function() {
	addBlackDesert.classList.remove('cardProduct_addActive');
	korzinaBlackDesert.classList.remove('korzina__productOn');
	korzinaAdd();
}

