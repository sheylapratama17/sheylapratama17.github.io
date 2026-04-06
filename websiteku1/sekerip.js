function validasi(){
	let dokumen=document.forms["formulirpembuka"]["isikan"].value;
	if(dokumen==""){
		alert("maaf kak, itunya masih kosong");
		return false;
	}
}