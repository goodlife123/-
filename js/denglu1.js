$(function(){
	$('input[type="button"]:nth-child(1)').on('click',function () {
	  var user = localStorage.getItem("username");
	  var pass = localStorage.getItem("password");
	  if ($('#username_input').val()==user&& $('#password').val()==pass) {
	  	alert('登陆成功！');
	  	$(".pingbao")[0].style.display = "none";
	  	$(".log_in_box")[0].style.display = "none";
	  	$("#play").attr('href','html/3.html')
	  }else{
	  	alert('账号或密码错误！请从新输入');
	  	$('#username_input').val()[0]="";
	  	$('#password').val()[0]="";
	  }	
	})
})