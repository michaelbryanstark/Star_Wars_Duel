var attack;
var defend;
var attackcharacter;
var attackerHP;
var attackerAP;
var attackerCAP;
var defendcharacter;
var defenderHP;
var defenderAP;
var defenderCAP;
var name;
var YourCharacter;
var YourDefender;
var myChar = "";
var myDef = "";

function reset() {	

    $("#picRow").show();
    
    $(".restart").hide();
    $(".attackButton").show();
    
    // reset myChar and myDef to equal nothing.
    var myChar = "";
    var myDef = "";
    
    
    
    // reset health 
    characters.ObiWan.healthPoints = 120;
    characters.LukeSky.healthPoints = 100;
    characters.DarVad.healthPoints = 150;
    characters.DarMaul.healthPoints = 180;
    
    // reset attack 
    characters.ObiWan.attackPower = 8;
    characters.LukeSky.attackPower = 10;
    characters.DarVad.attackPower = 10;
    characters.DarMaul.attackPower = 12;
    
    // delete all text.
    $(".youAttacked").empty();
    $(".attackedBack").empty();
    $(".youDefeated").empty();
    $(".youWon").empty();
    $(".youLose").empty();
    $(".noEnemy").empty();
    
    
    $(".nameo").html(characters.ObiWan.fullName);
    $(".namel").html(characters.LukeSky.fullName);
    $(".namedv").html(characters.DarVad.fullName);
    $(".namedm").html(characters.DarMaul.fullName);
    
    //add picture
    $("#darthV").appendTo("#picRow");
    $("#darthM").appendTo("#picRow");
    $("#luke").appendTo("#picRow");
    $("#obi").appendTo("#picRow");
    
    //writing health to html
    $(".ob1hp").html(characters.ObiWan.healthPoints);
    $(".lukehp").html(characters.LukeSky.healthPoints);
    $(".darthvhp").html(characters.DarVad.healthPoints);
    $(".darthmhp").html(characters.DarMaul.healthPoints);

    
    
};

var characters = { 

    ObiWan: {
        name: "ObiWan",
        visual: 'assets/images/obi_wan.jpeg',
        healthPoints: 120,
        attackPower: 8,
        fullName: "Obi-Wan Kenobi",
        counterAttackPower: 24
        },
        
    LukeSky:{
        name: "LukeSky",
        visual: 'assets/images/luke.jpg',
        healthPoints: 100,
        attackPower: 10,
        fullName: "Luke Skywalker",
        counterAttackPower: 5
        },
        
    DarVad:{ 
        name: "DarVad",
        visual: 'assets/images/Darth_Vader.jpg',
        healthPoints: 150,
        attackPower: 10,
        fullName: "Darth Vader",
        counterAttackPower: 20
        },
        
    DarMaul:{ 
        name: "DarMaul",
        visual: 'assets/images/DarthMaul.jpg',
        healthPoints: 180,
        attackPower: 12,
        fullName: "Darth Maul",
        counterAttackPower: 25
        }
};
        
$(document).ready(function(){
    reset();
    
    
    $(".firstRow").click(function(){
            
       if (myChar == "") {
       console.log(this);	       
       $(this).appendTo("#yourChar");
       myChar = $(this);
       YourCharacter = $(myChar).attr("value");
          }
       if (YourCharacter == characters.ObiWan.name) {
               attackerHP = characters.ObiWan.healthPoints;
               attackerAP = characters.ObiWan.attackPower;
               attackerCAP = characters.ObiWan.counterAttackPower;
               attackerFN = characters.ObiWan.fullName;
               attack = characters.ObiWan;
       }
       else if (YourCharacter == characters.LukeSky.name){
               attackerHP = characters.LukeSky.healthPoints;
               attackerAP = characters.LukeSky.attackPower;
               attackerCAP = characters.LukeSky.counterAttackPower;
               attackerFN = characters.LukeSky.fullName;
               attack = characters.LukeSky;
       }
       else if (YourCharacter == characters.DarVad.name){
               attackerHP = characters.DarVad.healthPoints;
               attackerAP = characters.DarVad.attackPower;
               attackerCAP = characters.DarVad.counterAttackPower;
               attackerFN = characters.DarVad.fullName;
               attack = characters.DarVad;
       }
       else if (YourCharacter == characters.DarMaul.name){
               attackerHP = characters.DarMaul.healthPoints;
               attackerAP = characters.DarMaul.attackPower;
               attackerCAP = characters.DarMaul.counterAttackPower;
               attackerFN = characters.DarMaul.fullName;
               attack = characters.DarMaul;
       }
             
       for (var i = 0; i < 4; i++) {
           $("._" + [i]).not(myChar).appendTo("#enemies" + [i]);
    
          
           $("._" + [i]).not(myChar).css({"background-color": "green", "outline-color": "black", 
               "border-width": "3px", "outline-style": "solid", "border-color": "black", "outline-width": "1px"});
    
    
       }
               
       //clears top
       $("#picRow").hide();
      
    });
    
    
    $(".move").click(function(){
         $(this).appendTo("#defender");
         myDef = $(this);
         YourDefender = $(myDef).children().attr("value");
         $(".youDefeated").empty();
    
       if (YourDefender == characters.ObiWan.name) {
               defenderHP = characters.ObiWan.healthPoints;
               defenderAP = characters.ObiWan.attackPower;
               defenderCAP = characters.ObiWan.counterAttackPower;
               defenderFN = characters.ObiWan.fullName;
               defend = characters.ObiWan;
           
           }
           else if (YourDefender == characters.LukeSky.name){
               defenderHP = characters.LukeSky.healthPoints;
               defenderAP = characters.LukeSky.attackPower;
               defenderCAP = characters.LukeSky.counterAttackPower;
               defenderFN = characters.LukeSky.fullName;
               defend = characters.LukeSky;
               
       }
       else if (YourDefender == characters.DarVad.name){
               defenderHP = characters.DarVad.healthPoints;
               defenderAP = characters.DarVad.attackPower;
               defenderCAP = characters.DarVad.counterAttackPower;
               defenderFN = characters.DarVad.fullName;
               defend = characters.DarVad;
               
       }
       else if (YourDefender == characters.DarMaul.name){
               defenderHP = characters.DarMaul.healthPoints;
               defenderAP = characters.DarMaul.attackPower;
               defenderCAP = characters.DarMaul.counterAttackPower;
               defenderFN = characters.DarMaul.fullName;
               defend = characters.DarMaul;
               
       }
    
    
    });

//attack function
$(".attackButton").click(function(){

    if ($("#defender").children().length == 0) {
        $(".noEnemy").html("No enemy here.");
    }

    if (!(attackerHP < 1) || !(defenderHP < 1)) {
    attackerHP = (attackerHP - defenderCAP);
    $("." + YourCharacter).html(attackerHP);

    $(".youAttacked").html("You attacked " + defenderFN + " for " + attackerAP + " damage.");

    defenderHP = (defenderHP - attackerAP);

    $(".attackedBack").html(defenderFN + " attacked you back for " + defenderCAP + " damage.");

   $("." + YourDefender).html(defenderHP);

} 
   
    if (defenderHP <= 0) {

        $(".youAttacked").empty();
        $(".attackedBack").empty();
        $(".youDefeated").html("You have defeated " + defenderFN + ", you can choose to fight another enemy.");

        $("#defender").empty();

        console.log(attackerAP);
        attackerAP = (attackerAP + 10);

        attack.attackPower = attackerAP;
        console.log(attackerAP);

    }
    
    if ($(".move").children().length == 0){

     $(".youAttacked").empty();
     $(".attackedBack").empty();
     $(".youDefeated").empty();
     $(".noEnemy").empty();
     $(".youWon").html("You Won!!!! GAME OVER!!!"); 

     $(".restart").show();

     $(".restart").click(function(){
         location.reload(true);
     })
                      
    }

    if (attackerHP <= 0) {

        $(".restart").show();

        $(".attackButton").hide();

        // lose
        $(".youAttacked").empty();
         $(".attackedBack").empty();
        $(".youDefeated").empty();
        $(".youLose").html("You've been defeated...GAME OVER!!!")

         //new game
         $(".restart").click(function(){
             location.reload(true);
         });

    }      
    
});

});    