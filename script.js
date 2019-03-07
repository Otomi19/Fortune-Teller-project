$(".calculate").click(function(){
    var placeholder1 = $(".place1").val();
    var placeholder2 = $(".place2").val();
    var placeholder3 = $(".place3").val();
    var placeholder4 = $(".place4").val();
    var multiplier = 6;
    var solution = placeholder2 * multiplier ;
    $("p").text(placeholder4 + " would have scored "+solution +" goals" +" for "+  placeholder1+ " by 2025");
    $(".final").show();
    $(".entire").hide(); 
    $("img").show();
});