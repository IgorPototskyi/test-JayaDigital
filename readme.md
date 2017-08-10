<h1>JayaDigital test task</h1>

<h3>1. SASS код для респонсивной сетки как у Bootstrap.</h3>

<p>
	<a href="https://github.com/IgorPototskyi/test-JayaDigital/blob/master/app/sass/_grid.sass"
	   target="_blank">Sass файл</a>
</p>
<p>
	Максимальное количество колонок - 12. Соответственно, чтобы получить 
	<ul>
		<li>2 колонки - класс col-xx-6</li>
		<li>3 колонки - класс col-xx-4</li>
		<li>4 колонки - класс col-xx-3</li>
		<li>6 колонок - класс col-xx-2</li>
		<li>12 колонок - класс col-xx-1</li>
	</ul>
</p>
<p>
	Breakpoints: 
	<ul>
		<li>xl : max 1500px</li>
		<li>lg : max 1200px</li>
		<li>md : max 960px</li>
		<li>sm : max 720px</li>
		<li>xs : max 480px</li>
	</ul>
</p>
<p>
	Изменить основные параметры можно изменив значения соответствующих переменных в начале sass-файла.
</p>

<h3>2. jQuery-плагин для реализации Parallax Scrolling.</h3>

<p>
	<a href="https://github.com/IgorPototskyi/test-JayaDigital/tree/master/app/libs/jquery/jquery.parallax.js"
	   target="_blank">Js файл</a>
</p>
<p>
	<a href="https://github.com/IgorPototskyi/test-JayaDigital/tree/master/app/libs/jquery/jquery.parallax.css"
	   target="_blank">Css файл</a>
</p>
<p>
	Инициализация: 
	<ul>
		<li>HTML: <div class="parallax" data-parallax-image="path_to_img"></li>
		<li>Js: $('.parallax').parallax({"speed" : "3" });
			<p>Speed в диапазоне от 1 до 5. По умолчанию 3</p>
		</li>
	</ul>
</p>
<p>
	<a href="https://igorpototskyi.github.io/test-JayaDigital/app/"
	   target="_blank">Пример</a>
</p>

