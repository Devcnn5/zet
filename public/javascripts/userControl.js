$(document).ready(function(){
	var first=$("id").text.split(' ')[1];
	var last=$("id").text.split(' ')[2];

$.ajax({
		type:"get",
		url:"/getPhotos",
		data:{first:first,last:last}
	}).done((data)=>{

		console.log(data);
		if(data.length){



		
		for (var i =0;i< data.length; i++) {
			var add='<div>';
			add+=data[i].name;
			add+=data[i].url;
			add+='</div';


			$("#photos").append(add);
		}
		
		}
	}).fail((reason)=>console.log(reason));


$.ajax({
		type:"get",
		url:"/getAlbums",
		data:{first:first,last:last}
	}).done((data)=>{

		console.log(data);
		if(data.length){



		
		for (var i =0;i< data.length; i++) {
			var add='<div>';
			add+=data[i].name;
			add+=data[i].url;
			add+='</div';



			$("#albums").append(add);
		}
		
		}
	}).fail((reason)=>console.log(reason));




$("#addPhoto").on("click",function(){
	
	var ur=$("link").val();
	var name=$("#name").val();

	$.ajax({
		type:"post",
		url:"/saveUser",
		data:{name:name,ur:ur}
	}).done((data)=>console.log(data)).fail((reason)=>console.log(reason));





});

$("#addAlbum").on("click",function(){
	
	var ur=$("albumLink").val();
	var name=$("#album").val();
	ur=ur.split(';');
	
	$.ajax({
		type:"post",
		url:"/saveUser",
		data:{name:name,ur:ur}
	}).done((data)=>console.log(data)).fail((reason)=>console.log(reason));





});



});

