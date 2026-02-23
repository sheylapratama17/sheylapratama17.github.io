trms=document.querySelector("#bawah img");
trms.src="../gambar/logo2.png";
trms.style.width="8%";

async function getText(fileku) {
  let myObject = await fetch(fileku);
  let myText = await myObject.text();
  document.getElementById("tentangku1").innerHTML = myText;
}
getText("../txt/ucapan.txt");
angsa=document.getElementById("tentangku1");
angsa.style.width="100%";
angsa.style.margin="0px auto";
angsa.style.textAlign="justify";
angsa.style.fontFamily="font3, sans-serif";
angsa.style.fontSize="1.3em";

let kereta = 0;

konten1=document.getElementById("konten1");
konten1.style.width="50%";
konten1.style.margin="0em auto";
konten1.style.padding="0.5em 1em";
konten1.style.overflow="auto";

ucapan=document.getElementById("ucapan");
ucapan.innerHTML="sambutan";

gambarLogo=document.querySelector("#atas img");
gambarLogo.src="../gambar/logo.png";
gambarLogo.style.margin="0px";

diriku=document.querySelector("#ling #diriku");
klg=document.querySelector("#ling #keluarga");
klg.innerHTML="keluarga";

diriku.innerHTML="diriku";
