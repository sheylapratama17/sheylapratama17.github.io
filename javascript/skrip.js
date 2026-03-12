konten1=document.querySelector("#konten1");

let login = document.createElement("link");
login.rel = "stylesheet";
login.href = "../css/tahap2/login.css";
document.head.appendChild(login);

let animasi = document.createElement("link");
animasi.rel = "stylesheet";
animasi.href = "../css/animasi.css";
document.head.appendChild(animasi);

let file = "../txt/para1.txt";

fetch(file)
.then(x => x.text())
.then(y => document.querySelectorAll("#konten1 p")[1].innerHTML = y);



konten1.getElementsByTagName("p")[0].innerHTML="selamat datang";



teh=function(){
	ganti=document.getElementsByTagName("html");
	gantikonten=document.querySelector("#landing");
	ganti[0].className="login2";
	gantikonten.id="landing1a";
	munculkan_kontenlogin=document.querySelector("div.login");
	munculkan_kontenlogin.style.display="block";
}



