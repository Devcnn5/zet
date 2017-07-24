$(document).ready(function(){

$.ajax({
		type:"get",
		url:"/getUsers"
	}).done((data)=>{

		console.log(data);
		if(data.length){



		
		for (var i =0;i< data.length; i++) {
			var add='<tr><td>';
			add+=data[i].first;
			add+='</td><td>';
			add+=data[i].last;
			add+='</td><td><input type="password" >';
			add+='</td><td><button class="btn btn-primary login">Login</button></td></tr>';

			$("#tbody").append(add);
		}
		
		}
	}).fail((reason)=>console.log(reason));




$("#create").on("click",function(){
	let obj={};
	obj.first=$("#first").val();
	obj.last=$("#last").val();
	obj.email=$("#mail").val();
	obj.number=$("#number").val();
	obj.pwd=$("#pwd").val();

	$.ajax({
		type:"post",
		url:"/saveUser",
		data:obj
	}).done((data)=>console.log(data)).fail((reason)=>console.log(reason));





});

$("#tbody").delegate(".login","click",function(){
	$.ajax({
		type:"get",
		url:"/getUser",
		data:obj
	}).done((data)=>console.log(data)).fail((reason)=>console.log(reason));

});

});

