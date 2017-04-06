
$(document).ready(function(){
	$(".nav-pills a").click(function(){
		$(this).tab('show');
	});
});



//$("#tab2content").hide();

//$("#tab3content").hide();
/*
$(document).ready(function(){
	$("#tab1").click(function(){
		$("#id1").show();
		$("#id2").hide();
		$("#id3").hide();
	});

	$("#tab2").click(function(){
		$("#id2").show();
		$("#id1").hide();
		$("#id3").hide();
	});

	$("#tab3").click(function()){
		$("#id3").show();
		$("#id1").hide();
		$("#id2").hide();
	}
});
$(document).ready(function(){

	$('ul.tabs li').click(function(){
		var tab_id=$(this).attr('data-tab');

		$('ul.tabs li').removeclass('current');
		$('.tab-content').removeclass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
});*/