$(document).ready(function() {


//films
	$(".altar").click(function() {
		$(".papias").fadeIn(800);
		$(".black").fadeIn(800);
		$(".button").fadeIn(800);
		$(".button").css("display","flex");
		$(".button").css("justify-content","center");
		$(".button").css("align-items","center");
	});

	$(".i").click(function() {
		$(".lister").fadeIn(800);
		$(".black").fadeIn(800);
		$(".button").fadeIn(800);

	});

	$(".bonhomie").click(function() {
		$(".daniel").fadeIn(800);
		$(".black").fadeIn(800);
		$(".button").fadeIn(800);

	});

	$(".tectonic").click(function() {
		$(".grove").fadeIn(800);
		$(".black").fadeIn(800);
		$(".button").fadeIn(800);

	});

	$(".fruit").click(function() {
		$(".moye").fadeIn(800);
		$(".black").fadeIn(800);
		$(".button").fadeIn(800);

	});

	$(".koyo").click(function() {
		$(".quirus").fadeIn(800);
		$(".black").fadeIn(800);
		$(".button").fadeIn(800);

	});

	$(".button").click(function() {
		location.reload();
	});

//hover
	$(".table").hover(function() {
		$(".1").css("opacity","1");
		$(".greenstar").show();
		$(".greenstar").css("top",250);
		$(".greenstar").css("left",1105);
		$(".lildot").show();
		$(".lildot").css("top",66);
		$(".lildot").css("left",610);

	}, function() {
		$(".1").css("opacity","0");
		$(".decal").hide();
	});

	$(".altar").hover(function() {
		$(".2").css("opacity","1");
		$(".bluehearts").show();
		$(".bluehearts").css("top",420);
		$(".bluehearts").css("left",1090);
		$(".eyes").show();
		$(".eyes").css("top",340);
		$(".eyes").css("left",1470);

	}, function() {
		$(".2").css("opacity","0");
		$(".decal").hide();
	});

	$(".fruit").hover(function() {
		$(".3").css("opacity","1");
		$(".bigdot").show();
		$(".bigdot").css("top",660);
		$(".bigdot").css("left",970);
		$(".exclamation").show();
		$(".exclamation").css("left",1100);
		$(".exclamation").css("top",900);
	}, function() {
		$(".3").css("opacity","0");
		$(".decal").hide();
	});

	$(".tectonic").hover(function() {
		$(".4").css("opacity","1");
		$(".yellowstars").show();
		$(".yellowstars").css("left",1150);
		$(".yellowstars").css("top",1240);
		$(".lildot").show();
		$(".lildot").css("left",1610);
		$(".lildot").css("top",1150);
	}, function() {
		$(".4").css("opacity","0");
		$(".decal").hide();
	});	

	$(".meditations").hover(function() {
		$(".5").css("opacity","1");
		$(".pinkstars").show();
		$(".pinkstars").css("top",1600);
		$(".pinkstars").css("left",880);
		$(".yeux").show();
		$(".yeux").css("left",700);
		$(".yeux").css("top",1250);
	}, function() {
		$(".5").css("opacity","0");
		$(".decal").hide();
	});	

	$(".koyo").hover(function() {
		$(".6").css("opacity","1");
		$(".exclamation").show();
		$(".exclamation").css("left",1410);
		$(".exclamation").css("top",1908);
		$(".greenstar").show();
		$(".greenstar").css("top",1690);
		$(".greenstar").css("left",1100);
	}, function() {
		$(".6").css("opacity","0");
		$(".decal").hide();
	});	

	$(".cue").hover(function() {
		$(".7").css("opacity","1");
		$(".eyes").show();
		$(".eyes").css("left",1105);
		$(".eyes").css("top",2150);
		$(".bluehearts").show();
		$(".bluehearts").css("top",1950);
		$(".bluehearts").css("left",600);
	}, function() {
		$(".7").css("opacity","0");
		$(".decal").hide();
	});	

	$(".bonhomie").hover(function() {
		$(".8").css("opacity","1");
		$(".pinkstars").show();
		$(".pinkstars").css("top",2183);
		$(".pinkstars").css("left",1420);
		$(".lildot").show();
		$(".lildot").css("top",2510);
		$(".lildot").css("left",1250);
	}, function() {
		$(".8").css("opacity","0");
		$(".decal").hide();
	});	

	$(".bleed").hover(function() {
		$(".9").css("opacity","1");
		$(".yellowstars").show();
		$(".yellowstars").css("top",2510);
		$(".yellowstars").css("left",995);
		$(".yeux").show();
		$(".yeux").css("left",740);
		$(".yeux").css("top",2820);
	}, function() {
		$(".9").css("opacity","0");
		$(".decal").hide();
	});	

	$(".i").hover(function() {
		$(".10").css("opacity","1");
		$(".greenstar").show();
		$(".greenstar").css("top",3100);
		$(".greenstar").css("left",1090);
		$(".eyes").show();
		$(".eyes").css("top",2822);
		$(".eyes").css("left",1280);

	}, function() {
		$(".10").css("opacity","0");
		$(".decal").hide();
	});

	$(".discovering").hover(function() {
		$(".11").css("opacity","1");
		$(".bluehearts").show();
		$(".bluehearts").css("top",3385);
		$(".bluehearts").css("left",1110);
		$(".bigdot").show();
		$(".bigdot").css("top",3300);
		$(".bigdot").css("left",610);
	}, function() {
		$(".11").css("opacity","0");
		$(".decal").hide();
	});	

});
