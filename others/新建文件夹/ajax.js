
var asd=new XMLHttpRequest();
asd.open('get','https://5a7bfd3b4c1e2d00124a5d8e.mockapi.io/api/v1/records',true);
asd.onreadystatechange=function(){
	if(asd.readyState==4&&asd.status==200){
		console.log(asd.responseText);
	}
}
asd.send();