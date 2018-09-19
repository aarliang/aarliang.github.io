// JavaScript Document
$(document).ready(function(){
	$("#menu_open").click(function(){
		$("#menu_open").hide();
    	$("#menu_close").show();
		$("#menu_background").show();
		$("#menu_background").animate({
				"width" : "100%",
				"height" : "949px",
				"background-size" : "1903px"}, 500);
	});
	
	$("#menu_close").click(function(){
		$("#menu_close").hide();
    	$("#menu_open").show();
		$("#menu_background").animate({
				"width" : "0px",
				"height" : "0px",
				"background-size" : "0%"}, 500);
	});
	
	$("#about_section").mouseover(function(){
        $("#about_section").css("color", "grey");
    });
	$("#about_section").mouseout(function(){
		$("#about_section").css("color", "white");
    });
	
	$("#projects_section").mouseover(function(){
        $("#projects_section").css("color", "grey");
    });
	$("#projects_section").mouseout(function(){
		$("#projects_section").css("color", "white");
    });
	
	$("#contact_section").mouseover(function(){
        $("#contact_section").css("color", "grey");
    });
	$("#contact_section").mouseout(function(){
		$("#contact_section").css("color", "white");
    });
	
	$("#about_section").click(function(){
		$("#menu_background").hide();
		$("#menu_background").animate({
				"width" : "0px",
				"height" : "0px",
				"background-size" : "0%"}, 500);
		$("#menu_close").hide();
    	$("#menu_open").show();
	});
	
	$("#projects_section").click(function(){
		$("#menu_background").hide();
		$("#menu_background").animate({
				"width" : "0px",
				"height" : "0px",
				"background-size" : "0%"}, 500);
		$("#menu_close").hide();
    	$("#menu_open").show();
	});
	
	$("#contact_section").click(function(){
		$("#menu_background").hide();
		$("#menu_background").animate({
				"width" : "0px",
				"height" : "0px",
				"background-size" : "0%"}, 500);
		$("#menu_close").hide();
    	$("#menu_open").show();
	});
	
	setInterval(function(){
		if ($(window).scrollTop() <= 475)
		{
			$("#section_1").animate({
				"margin-top" : "427px",
				"margin-left" : "0px",
				"width" : "24px",
				"height" : "24px",
				"-moz-border-radius": "12px",
				"-webkit-border-radius" : "12px",
				"border-radius" : "12px"}, 1);
		}
		else
		{
			$("#section_1").animate({
				"margin-top" : "439px",
				"margin-left" : "6px",
				"width" : "12px",
				"height" : "12px",
				"-moz-border-radius": "6px",
				"-webkit-border-radius" : "6px",
				"border-radius" : "6px"}, 1);
		}
		
		if (($(window).scrollTop() > 475) && ($(window).scrollTop() <= 3563))
		{
			$("#section_2").animate({
				"margin-top" : "24px",
				"margin-left" : "0px",
				"width" : "24px",
				"height" : "24px",
				"-moz-border-radius": "12px",
				"-webkit-border-radius" : "12px",
				"border-radius" : "12px"}, 1);
		}
		else
		{
			$("#section_2").animate({
				"margin-top" : "36px",
				"margin-left" : "6px",
				"width" : "12px",
				"height" : "12px",
				"-moz-border-radius": "6px",
				"-webkit-border-radius" : "6px",
				"border-radius" : "6px"}, 1);
		}
		
		if ($(window).scrollTop() > 3563)
		{
			$("#section_3").animate({
				"margin-top" : "24px",
				"margin-left" : "0px",
				"width" : "24px",
				"height" : "24px",
				"-moz-border-radius": "12px",
				"-webkit-border-radius" : "12px",
				"border-radius" : "12px"}, 1);
		}
		else
		{
			$("#section_3").animate({
				"margin-top" : "35px",
				"margin-left" : "6px",
				"width" : "12px",
				"height" : "12px",
				"-moz-border-radius": "6px",
				"-webkit-border-radius" : "6px",
				"border-radius" : "6px"}, 1);
		}
	}, 63);
	
	$("#painting").mouseover(function(){
        $("#painting_circle_background").show();
		$("#painting_text").show();
    });
	$("#painting").mouseout(function(){
		$("#painting_text").hide();
        $("#painting_circle_background").hide();
    });
	
	$("#disney").mouseover(function(){
        $("#disney_circle_background").show();
		$("#disney_text").show();
    });
	$("#disney").mouseout(function(){
		$("#disney_text").hide();
        $("#disney_circle_background").hide();
    });
	
	$("#money").mouseover(function(){
        $("#money_circle_background").show();
		$("#money_text").show();
    });
	$("#money").mouseout(function(){
		$("#money_text").hide();
        $("#money_circle_background").hide();
    });
	
	$("#slideshow > img:gt(0)").hide();
	
	setInterval(function(){
		$('#slideshow > img:first')
			.fadeOut(2000)
			.next()
			.fadeIn(2000)
			.end()
			.appendTo('#slideshow');
	},  5000);
});