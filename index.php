
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link rel="stylesheet" href="gayalaman1.css">
		<link rel="preconnect" href="https://fonts.googleapis.com">
		<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
		<title>Pemuatan1</title>
	</head>

	<body>
		<div id="konten1">
			<h1>내 페이지에 오신 것을 환영합니다</h1>
			<p>masukan nama kamu disini</p>
			<form name="formulirpembuka" method="post" onsubmit="return validasi()">
				<input type="text" name="isikan" id="inputan_text">
				<button id="tombol_submit" type="submit">Masuk</button>
			</form>
			<div id="tanda">
				<?php
					try {
						if(isset($_POST["isikan"])){
							$cokiey_nama=$_POST["isikan"];
							$cokiey_bagianNama=preg_replace("/\s/", "_", $cokiey_nama);
							setcookie($cokiey_bagianNama, $cokiey_nama, time()+5000, "/");
							echo "halo ".$cokiey_nama." selamat datang";
						} 
					} catch(Exception $e){
						echo "ada error";
					}
				?>
			</div>
		</div>
		
		<script src="sekerip.js"></script>
	</body>
</html>