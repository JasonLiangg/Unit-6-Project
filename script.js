$(".button1").click(function() {
	$(".house").show();
    $(".clue1").show();
    $(".Lambo").hide();
    $(".button1").hide();
    $(".button2").hide();
	$(".title").hide();
    $(".h1").hide();
});
$(".house").hide();
$(".button2").click(function() {
	$(".coffin").show();
    $(".Lambo").hide();
     $(".button1").hide();
    $(".button2").hide();

});
$(".coffin").hide();
$(".clue1").hide();
$(".clue2").hide();
$(".skull").hide();
$(".clue3").hide();
$(".clue1").click(function() {
    $(".house").hide();
});
$(".coffin").click(function() {
    $(".skull").show();
    $(".coffin").hide();
});
$(".clue1").click(function() {
    $(".clue1").hide();
    $(".clue3").show();
});
    