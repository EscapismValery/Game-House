<?php

	if ($_POST['login']=='' || $_POST['password']==''){ echo 
		'<!DOCTYPE html>
			<html lang="ru">
			<head>
			    <meta charset="UTF-8">
			    <title>Авторизация</title>
			</head>
			<body>
			 
				<form action="login.php" method="POST">
					<p>логин
				    <input type="text" name="login" id="login"></p>
				    <p>пароль
				    <input type="password" name="password" id="password"></p>
				    <input type="submit" id="button" value="Войти">
				</form>
				<p><a href="registration.php">Регистрация</a> </p>
			                
			</body>
			</html>';
	 }else{
	 	$sql = "SELECT * FROM users WHERE login=:login AND password=:pass";
	 	$result = $pdo->prepare($sql);
	 	$result->bindvalue(':login', $_POST['login']);
	 	$result->bindvalue(':pass', md5(md5($_POST['password'])));
	 	$result->execute();
	 	$result  = $result->fetchAll();
	 }
	if (count($result)>0) {
		echo '<meta charset="UTF-8">Ура! Мы авторизировались!';
		$_SESSION['user'] = $result[0];
		# code...
	} else echo '<meta charset="UTF-8">Логин или пароль не верный или пользователь не существует';
	