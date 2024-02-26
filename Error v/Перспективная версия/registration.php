<?php
    if ($_POST['login']=='' || $_POST['password']=='') {
        echo '
            <!DOCTYPE html>
            <html lang="ru">
            <head>
                <meta charset="UTF-8">
                <title>Регистрация</title>
            </head>
            <body>
             
                <form action="registration.php" method="POST">
                    <p>логин
                    <input type="text" name="login" id="login"></p>
                    <p>пароль
                    <input type="password" name="password" id="password"></p>
                    <p>имя
                    <input type="text" name="name" id="name"></p>
                    <p>Фамилия
                    <input type="text" name="lastname" id="lastname"></p>
                    <p>Дата рождения
                    <input type="date" name="birthday" id="birthday"></p>
                    <p>Почта
                    <input type="text" name="mail" id="mail"></p>
                    <p>Номер телефона
                    <input type="number" name="phonenumber" id="phonenumber" placeholder="7(900)034-00-00"></p>
                    <input type="submit" id="button" value="Зарегистрироваться">
                </form>
                <p><a href="login.php">Авторизация</a> </p>
                            
            </body>
            </html>';
    }else{
        try{
            $sql = "INSERT INTO 'users' ('id', 'login', 'password', 'name', 'lastname', 'birthday', 'mail', 'phonenumber') VALUES (NULL, :login, :pass, :name, :lastname, :birthday, :mail, :phonenumber);";
            $result = $pdo->prepare($sql);
            $result->bindvalue(':login', $_POST['login']);
            $result->bindvalue(':pass', md5(md5($_POST['password'])));
            $result->bindvalue(':name', $_POST['name']);
            $result->bindvalue(':lastname', $_POST['lastname']);
            $result->bindvalue(':birthday', $_POST['birthday']);
            $result->bindvalue(':mail', $_POST['mail']);
            $result->bindvalue(':phonenumber', $_POST['phonenumber']);
            $result->execute();
            echo 'meta charset="UTF-8">Регистрация успешна!';
        }catch(PDOException $e){
            $Log_File = "log.txt";
            file_put_contents($Log_File, date("Y-m-d H:i:s")." -//- ".$e->getMessage().PHP_EOL, FILE_APPEND | LOCK_EX);
            echo '<meta charset="UTF-8">Ошибка регистрации';
        }
    }