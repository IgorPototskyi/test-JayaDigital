# JayaDigital test task

## 1. SASS код для респонсивной сетки как у Bootstrap.

[Sass файл](https://github.com/IgorPototskyi/test-JayaDigital/blob/master/app/sass/_grid.sass)

Максимальное количество колонок - 12. Соответственно, чтобы получить:
- 2 колонки - класс col-xx-6
- 3 колонки - класс col-xx-4
- 4 колонки - класс col-xx-3
- 6 колонок - класс col-xx-2
- 12 колонок - класс col-xx-1

Breakpoints: 
- xl : max 1500px
- lg : max 1200px
- md : max 960px
- sm : max 720px
- xs : max 480px

Изменить основные параметры можно изменив значения соответствующих переменных в начале sass-файла.

## 2. jQuery-плагин для реализации Parallax Scrolling.

[Js файл](https://github.com/IgorPototskyi/test-JayaDigital/tree/master/app/libs/jquery/jquery.parallax.js)

[Css файл](https://github.com/IgorPototskyi/test-JayaDigital/tree/master/app/libs/jquery/jquery.parallax.css)

Инициализация: 
- HTML: `<div class="parallax" data-parallax-image="path_to_img"></div>`
- Js: 
```
	$('.parallax').parallax({
		"speed" : "3" 
	});
```
Speed в диапазоне от 1 до 5. По умолчанию 3.

[Пример](https://igorpototskyi.github.io/test-JayaDigital/app/)