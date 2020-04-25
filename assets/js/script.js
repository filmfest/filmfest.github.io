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
		$(".two").css("z-index","8")
		$(".button").css("display","flex");
		$(".button").css("justify-content","center");
		$(".button").css("align-items","center");

	});

	$(".bonhomie").click(function() {
		$(".daniel").fadeIn(800);
		$(".black").fadeIn(800);
		$(".button").fadeIn(800);
		$(".button").css("display","flex");
		$(".button").css("justify-content","center");
		$(".button").css("align-items","center");

	});

	$(".tectonic").click(function() {
		$(".grove").fadeIn(800);
		$(".black").fadeIn(800);
		$(".button").fadeIn(800);
		$(".button").css("display","flex");
		$(".button").css("justify-content","center");
		$(".button").css("align-items","center");

	});

//	$(".fruit").click(function() {
//		$(".moye").fadeIn(800);
//		$(".black").fadeIn(800);
//		$(".button").fadeIn(800);
//		$(".button").css("display","flex");
//		$(".button").css("justify-content","center");
//		$(".button").css("align-items","center");

//	});

	$(".koyo").click(function() {
		$(".quirus").fadeIn(800);
		$(".black").fadeIn(800);
		$(".button").fadeIn(800);
		$(".button").css("display","flex");
		$(".button").css("justify-content","center");
		$(".button").css("align-items","center");

	});

	$(".meditations").click(function() {
		$(".barach").fadeIn(800);
		$(".black").fadeIn(800);
		$(".button").fadeIn(800);
		$(".button").css("display","flex");
		$(".button").css("justify-content","center");
		$(".button").css("align-items","center");

	});

	$(".cue").click(function() {
		$(".boas").fadeIn(800);
		$(".black").fadeIn(800);
		$(".button").fadeIn(800);
		$(".button").css("display","flex");
		$(".button").css("justify-content","center");
		$(".button").css("align-items","center");

	});

	$(".inertia").click(function() {
		$(".minocha").fadeIn(800);
		$(".black").fadeIn(800);
		$(".button").fadeIn(800);
		$(".button").css("display","flex");
		$(".button").css("justify-content","center");
		$(".button").css("align-items","center");

	});

	$(".table").click(function() {
		$(".cheung").fadeIn(800);
		$(".black").fadeIn(800);
		$(".button").fadeIn(800);
		$(".button").css("display","flex");
		$(".button").css("justify-content","center");
		$(".button").css("align-items","center");

	});

	$(".bleed").click(function() {
		$(".chew").fadeIn(800);
		$(".black").fadeIn(800);
		$(".button").fadeIn(800);
		$(".button").css("display","flex");
		$(".button").css("justify-content","center");
		$(".button").css("align-items","center");

	});

	$(".discovering").click(function() {
		$(".turan").fadeIn(800);
		$(".black").fadeIn(800);
		$(".button").fadeIn(800);
		$(".button").css("display","flex");
		$(".button").css("justify-content","center");
		$(".button").css("align-items","center");

	});

	$(".secret").click(function() {
		$(".cameron").show();
		$(".black").fadeIn(800);
		$(".button").fadeIn(800);
		$(".button").css("display","flex");
		$(".button").css("justify-content","center");
		$(".button").css("align-items","center");

	});

	$(".button").click(function() {
		location.reload();
	});

//hover
	$(".table").hover(function() {
		$(".1").css("opacity","1");
		$(".greenstar").show();
		$(".greenstar").css("top",590);
		$(".greenstar").css("right",175);
		$(".lildot").show();
		$(".lildot").css("top",400);
		$(".lildot").css("right",250);

	}, function() {
		$(".1").css("opacity","0");
		$(".decal").hide();
	});

	$(".altar").hover(function() {
		$(".2").css("opacity","1");
		$(".bluehearts").show();
		$(".bluehearts").css("top",880);
		$(".bluehearts").css("right",822);
		$(".eyes").show();
		$(".eyes").css("top",690);
		$(".eyes").css("right",700);

	}, function() {
		$(".2").css("opacity","0");
		$(".decal").hide();
	});

	$(".discovering").hover(function() {
		$(".11").css("opacity","1");
		$(".bigdot").show();
		$(".bigdot").css("top",999);
		$(".bigdot").css("right",200);
		$(".exclamation").show();
		$(".exclamation").css("left",1100);
		$(".exclamation").css("top",1180);

	}, function() {
		$(".11").css("opacity","0");
		$(".decal").hide();

	});

//	$(".fruit").hover(function() {
//		$(".3").css("opacity","1");
//		$(".bigdot").show();
//		$(".bigdot").css("top",970);
//		$(".bigdot").css("left",970);
//		$(".exclamation").show();
//		$(".exclamation").css("left",1100);
//		$(".exclamation").css("top",1260);
//	}, function() {
//		$(".3").css("opacity","0");
//		$(".decal").hide();
//	});

	$(".tectonic").hover(function() {
		$(".4").css("opacity","1");
		$(".yellowstars").show();
		$(".yellowstars").css("left",800);
		$(".yellowstars").css("top",1320);
		$(".lildot").show();
		$(".lildot").css("left",600);
		$(".lildot").css("top",1490);
	}, function() {
		$(".4").css("opacity","0");
		$(".decal").hide();
	});	

	$(".meditations").hover(function() {
		$(".5").css("opacity","1");
		$(".pinkstars").show();
		$(".pinkstars").css("top",1790);
		$(".pinkstars").css("right",190);
		$(".yeux").show();
		$(".yeux").css("right",360);
		$(".yeux").css("top",1600);
	}, function() {
		$(".5").css("opacity","0");
		$(".decal").hide();
	});	

	$(".koyo").hover(function() {
		$(".6").css("opacity","1");
		$(".exclamation").show();
		$(".exclamation").css("left",690);
		$(".exclamation").css("top",1920);
		$(".greenstar").show();
		$(".greenstar").css("top",2130);
		$(".greenstar").css("left",780);
	}, function() {
		$(".6").css("opacity","0");
		$(".decal").hide();
	});	

	$(".cue").hover(function() {
		$(".7").css("opacity","1");
		$(".eyes").show();
		$(".eyes").css("right",100);
		$(".eyes").css("top",2450);
		$(".bluehearts").show();
		$(".bluehearts").css("top",2250);
		$(".bluehearts").css("right",240);
	}, function() {
		$(".7").css("opacity","0");
		$(".decal").hide();
	});	

	$(".bonhomie").hover(function() {
		$(".8").css("opacity","1");
		$(".pinkstars").show();
		$(".pinkstars").css("top",2600);
		$(".pinkstars").css("left",790);
		$(".lildot").show();
		$(".lildot").css("top",2720);
		$(".lildot").css("left",600);
	}, function() {
		$(".8").css("opacity","0");
		$(".decal").hide();
	});	

	$(".bleed").hover(function() {
		$(".9").css("opacity","1");
		$(".yellowstars").show();
		$(".yellowstars").css("top",2880);
		$(".yellowstars").css("right",80);
		$(".yeux").show();
		$(".yeux").css("right",300);
		$(".yeux").css("top",3060);
	}, function() {
		$(".9").css("opacity","0");
		$(".decal").hide();
	});	

	$(".i").hover(function() {
		$(".10").css("opacity","1");
		$(".greenstar").show();
		$(".greenstar").css("top",3370);
		$(".greenstar").css("left",700);
		$(".eyes").show();
		$(".eyes").css("top",3190);
		$(".eyes").css("left",780);

	}, function() {
		$(".10").css("opacity","0");
		$(".decal").hide();
	});

//old discovering
//	$(".discovering").hover(function() {
//		$(".11").css("opacity","1");
//		$(".bluehearts").show();
//		$(".bluehearts").css("top",3680);
//		$(".bluehearts").css("left",1110);
//		$(".bigdot").show();
//		$(".bigdot").css("top",3490);
//		$(".bigdot").css("left",610);
//	}, function() {
//		$(".11").css("opacity","0");
//		$(".decal").hide();
//	});	

		$(".inertia").hover(function() {
		$(".12").css("opacity","1");
		$(".pinkstars").show();
		$(".pinkstars").css("top",55);
		$(".pinkstars").css("left",780);
		$(".bigdot").show();
		$(".bigdot").css("top",280);
		$(".bigdot").css("left",790);

	}, function() {
		$(".12").css("opacity","0");
		$(".decal").hide();
	});	


});
