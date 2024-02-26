<?php
//Создаем переменную с данными для подключения к БД
    $connect = mysqli_connect('localhost', 'root', 'root', 'gameweb');
//Проверка подключения
    if (!$connect) {
        die('Error connect to DataBase');
    }