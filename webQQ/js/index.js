$(function(){
		
	$(".down").click(function(){
		if ($("#downcaidan").css("display")==("block")){
			$("#downcaidan").hide();
		}
		else 
			$("#downcaidan").show();

	});
	$("#myfriend").click(function(){
		if ($("#hideplace1").css("display")==("block")){
			$("#hideplace1").hide();
			$("#myfriend").removeClass("team1Pic2");
			$("#myfriend").addClass("team1Pic");
		}
		else{
			$("#myfriend").removeClass("team1Pic");
			$("#myfriend").addClass("team1Pic2");
			$("#hideplace1").show();

		} 
			



	});
	$("#midschool").click(function(){
		if ($("#hideplace2").css("display")==("block")){
			$("#hideplace2").hide();
			$("#midschool").removeClass("team1Pic2");
			$("#midschool").addClass("team1Pic");
		}
		else {
			$("#midschool").removeClass("team1Pic");
			$("#midschool").addClass("team1Pic2");
			$("#hideplace2").show();
		}
			

	});
	$("#family").click(function(){
		if ($("#hideplace3").css("display")==("block")){
			$("#hideplace3").hide();
			$("#family").removeClass("team1Pic2");
			$("#family").addClass("team1Pic");
		}
		else {
			$("#family").removeClass("team1Pic");
			$("#family").addClass("team1Pic2");
			$("#hideplace3").show();
		}
			

	});
	$("#bigschool").click(function(){
		if ($("#hideplace4").css("display")==("block")){
			$("#hideplace4").hide();
			$("#bigschool").removeClass("team1Pic2");
			$("#bigschool").addClass("team1Pic");
		}
		else {
			$("#bigschool").removeClass("team1Pic");
			$("#bigschool").addClass("team1Pic2");
			$("#hideplace4").show();
		}
			

	});
	$("#highschool").click(function(){
		if ($("#hideplace5").css("display")==("block")){
			$("#hideplace5").hide();
			$("#highschool").removeClass("team1Pic2");
			$("#highschool").addClass("team1Pic");
		}
		else {
			$("#highschool").removeClass("team1Pic");
			$("#highschool").addClass("team1Pic2");
			$("#hideplace5").show();
		}
			

	});

	$("#close").click(function(){
		$("#mainright").hide();
	});
	$("#foot1").click(function(){
		$("#hide2").hide();
		$("#hide3").hide();
		$("#hide4").hide();
		$(".lianxiren").removeClass("lianxirenPic2");
		$(".faxian").removeClass("faxianPic2");
		$(".shezhi").removeClass("shezhiPic2");
		$(".huihua").addClass("huihuaPic2");

		$("#foot2").removeClass("selected");
		$("#foot3").removeClass("selected");
		$("#foot4").removeClass("selected");
		$("#foot1").addClass("selected");
		$("#hide1").show();
	});
	$("#foot2").click(function(){
		$("#hide1").hide();
		$("#hide3").hide();
		$("#hide4").hide();
		$(".faxian").removeClass("faxianPic2");
		$(".shezhi").removeClass("shezhiPic2");
		$(".huihua").removeClass("huihuaPic2");
		$(".huihua").addClass("huihuaPic");
		$(".lianxiren").addClass("lianxirenPic2");

		$("#foot1").removeClass("selected");
		$("#foot3").removeClass("selected");
		$("#foot4").removeClass("selected");
		$("#foot2").addClass("selected");
		$("#hide2").show();
	});
	$("#foot3").click(function(){
		$("#hide1").hide();
		$("#hide2").hide();
		$("#hide4").hide();
		$(".shezhi").removeClass("shezhiPic2");
		$(".huihua").removeClass("huihuaPic2");
		$(".lianxiren").removeClass("lianxirenPic2");
		$(".huihua").addClass("huihuaPic");	
		$(".faxian").addClass("faxianPic2");

		$("#foot1").removeClass("selected");
		$("#foot2").removeClass("selected");
		$("#foot4").removeClass("selected");
		$("#foot3").addClass("selected");
		$("#hide3").show();
	});
	$("#foot4").click(function(){
		$("#hide1").hide();
		$("#hide2").hide();
		$("#hide3").hide();
		$(".huihua").removeClass("huihuaPic2");
		$(".lianxiren").removeClass("lianxirenPic2");	
		$(".faxian").removeClass("faxianPic2");
		$(".huihua").addClass("huihuaPic");
		$(".shezhi").addClass("shezhiPic2");

		$("#foot1").removeClass("selected");
		$("#foot2").removeClass("selected");	
		$("#foot3").removeClass("selected");
		$("#foot4").addClass("selected");
		$("#hide4").show();
	});
	$("#haoyouC").click(function(){
		$("#qun").hide();
		$("#taolunzu").hide();
		$("#haoyou").show();

		$("#qun").removeClass("haoyouCC");
		$("#taolunzu").removeClass("haoyouCC");
		$("#haoyou").addClass("haoyouCC");
		alert("dd");
		
	});
	$("#qunC").click(function(){
		$("#haoyou").hide();
		$("#taolunzu").hide();
		$("#qun").show();
	
	});
	$("#taolunzuC").click(function(){
		$("#qun").hide();
		$("#haoyou").hide();
		$("#taolunzu").show();

		$("#qun").removeClass("haoyouCC");
		$("#haoyou").removeClass("haoyouCC");
		$("#taolunzu").addClass("haoyouCC");
	});

});