<?php
/*
session_start();
include("MySQL/db.php");
$page = $_SERVER['REQUEST_URI'];

if (isset($_SESSION['user'])){
    echo '<meta charset="UTF-8">Привет, '.$_SESSION['user']['login'].'!';
}else{
    switch ($page) {
        case "/login":
            include("login.php");
            break;
        case "/registration":
            include("registration.php");
            break;
        default:
            include("login.php");
            break;
    }
}
*/
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Game House | Интернет-магазин видеоигр</title>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" type="text/css" href="media-style.css">
    <link rel="stylesheet" type="text/css" href="fonts.css">
    <link rel="icon" href="images/icon-logo.png">
</head>
<body>
    <div class="wrapper">
        <header class="header">
            <div class="logo">
                <img src="images/Лого.png" alt="Логотип" title="Логотип">
            </div>
            <nav>
                <ul>
                    <li class="menu-active"><a href="">Каталог</a></li>
                    <li><a href="#">Акции</a></li>
                    <li><a href="#">Поиск</a></li>
                </ul>
            </nav>
            <div class="right-nav">
                <div>
                    <a href="#"><img src="images/Авторизация_03.png" alt="Авторизация" title="Авторизация"></a>
                </div>
                <div>
                    <a href="#"><img src="images/корзина_08.png" alt="Корзина" title="Корзина"></a>
                </div>
                <div>
                    <a href="#"><img src="images/Меню_11.png" alt="Меню" title="Меню"></a>
                </div>
            </div>
        </header>
        <main>
            <section class="afisha">
                <p>Столкнитесь с тяжелыми физическими и<br>
                эмоциональными последствиями действий Элли.</p>
                <h3>The Last of Us</h3>
                <span>Part II</span>
                <h4>Уже в продаже</h4>
            </section>
            <section class="content">
                <nav>
                    <h4>Категории</h4>
                    <a href="">Лидеры продаж</a>
                    <a href="">Скидки</a>
                    <a href="">Новинки</a>
                    <a href="">Скоро в продаже</a>
                    <div></div>
                    <h4>Жанры</h4>
                    <a href="">Приключение</a>
                    <a href="">Боевик</a>
                    <a href="">Ролевые игры</a>
                    <a href="">Многопользовательские игры</a>       
                </nav>
                <article>
                    <section class="cardProduct">
                        <div class="pometka">
                            <span>ХИТ</span>
                        </div>
                        <div class="imgProduct">
                            <img src="images/The Last Of Us part2.png" alt="The Last Of Us part 2" title="The Last Of Us part 2">
                        </div>
                        <div class="descriptionProduct">
                            <h5>The Last Of Us. Part II</h5>
                            <p>Спустя пять лет после страшного путешествия по охваченной
                            эпидемией Америке Элли и Джоэл осели в Джексоне, штат Вайоминг. Обос...</p>
                            <span>2020, Боевик, Приключение</span>
                        </div>
                        <div class="priceProduct">
                            <p class="active-price">4 499,00 Р</p>
                            <p class="old-price">4 999,00 Р</p>
                        </div>
                    </section>
                    <section class="cardProduct">
                        <div class="pometka">
                            <span>50%</span>
                        </div>
                        <div class="imgProduct">
                            <img src="images/SpiderMan.png" alt="Spider-Man" title="Spider-Man">
                        </div>
                        <div class="descriptionProduct">
                            <h5>Spider-Man</h5>
                            <p>В этой оригинальной и захватывающей истории сойдутся миры Питера Паркера и Человека-паука. Вас ждёт новая вселенная Че...</p>
                            <span>2018, Боевик, Приключение</span>
                        </div>
                        <div class="priceProduct">
                            <p class="active-price">1 350,00 Р</p>
                            <p class="old-price">2 590,00 Р</p>
                        </div>
                    </section>
                    <section class="cardProduct">
                        <div class="imgProduct">
                            <img src="images/The Witcher.png" alt="The Witcher 3: Wild Hunt" title="The Witcher 3: Wild Hunt">
                        </div>
                        <div class="descriptionProduct">
                            <h5>The Witcher 3: Wild Hunt</h5>
                            <p>Когда в Северных королевствах бушует война, вы заключаете
                            величайший контракт своей жизни - отыскать Дитя предназначения, живо...</p>
                            <span>2015, Ролевые игры</span>
                        </div>
                        <div class="priceProduct">
                            <p class="none-price">Нет в наличии</p>
                        </div>
                    </section>
                    <section class="cardProduct">
                        <div class="imgProduct">
                            <img src="images/BlackDesert.png" alt="Black Desert" title="Black Desert">
                        </div>
                        <div class="descriptionProduct">
                            <h5>Black Desert (RU)</h5>
                            <p>Откройте для себя огромный мир Black Desert, разрывающий все рамки жанра MMORPG. Потрясающая графика, захватывающие битвы ...</p>
                            <span>2014, Многопользовательские игры, Ролевые игры</span>
                        </div>
                        <div class="priceProduct">
                            <p class="active-price">350,00 Р</p>
                        </div>
                    </section>
                </article>
            </section>
        </main>
    </div>
        <footer>
            <div class="footerText">
                <h5>&copy; 2020 Radar Corporation. Все права защищены. Все торговые марки являются собственностью соответсвующих владельцев в США и других странах. НДС включён во все цены, где он применим.</h5>
                <ul>
                    <li><a href="">О Radar Corporation</a></li>
                    <li><a href="">Политика конфиденциальности</a></li>
                    <li><a href="">Вакансии</a></li>
                    <li><a href="">Возвраты</a></li>
                    <li><a href=""><img src="images/Фб_39.png" alt="facebook"></a></li>
                    <li><a href=""><img src="images/Вк_39.png" alt="ВКонтакте"></a></li>
                </ul>
            </div>
            <div class="footerImg">
                <img src="images/logo-footer.png" alt="">
            </div>
        </footer>
</body>
</html>