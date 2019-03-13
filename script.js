$(".ques1").click(function() {
    var placeholder= $(".name").val();
    $(".new").append("thank you for your response," +" "+ placeholder);
});


$(".ques2").click(function(){
    var movie= $(".movie").val();
    $(".new2").append("thank you for your response of" +" "+ movie);
});

$(".ques3").click(function(){
    var age= $(".age").val();
    $(".new3").append("thank you for your response of" +" " + age);
});

$(".ques4").click(function(){
    var times= $(".times").val();
    $(".new4").append("thank you for your response of" +" " + times);
});

$(".ques5").click(function(){
    var year= $(".year").val();
    $(".new5").append("thank you for your response of" +" " + year);
});

$("h2").click(function(){
    $(".5").hide();
    $("p").show();
    $("h3").show();
    $(".character").show();
    $("body").css("background","pink");
    var placeholder= $(".name").val();
    $(".oh").append(placeholder);
    var placeholder= $(".movie").val();
    $(".movies").append(placeholder);
    var placeholder= $(".age").val();
    $(".aging").append(parseInt(2060-placeholder));
    $(".three").append(parseInt(3000-placeholder));
    $(".center").hide();
    $(".corn").show();
   $("h3").show();
   $(".button4").show();

});

$("h2").click(function(){   
    var age= $(".age").val();
    var year= $(".year").val();
    $(".years").append(year);
    var times= $(".times").val();
    $(".time").append(parseInt([2060-year]*12*times));
});
    
    var randomNames =[
     'Tarzan',
     'Jack Dawson',
     'Darth Vader',
     'Harry Potter',
     'Hermione Granger',
     'Katniss Everdeen',
     'Percy Jackson',
     'Nemo',
     'Dory',
     'Batman',
     'Joker',
     'Spiderman',
     'Black Widow',
     'Voldemort'
       
]; 


$(".button4").click(function() {
    $(".one").show();
    var rand = Math.floor(Math.random() * randomNames.length);
    $(".one").text(randomNames[rand]);
   
});
