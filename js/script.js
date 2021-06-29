const attack;
const defend;
const attackcharacter;
const attackerHP;
const attackerAP;
const attackerCAP;
const defendcharacter;
const defenderHP;
const defenderAP;
const defenderCAP;
const name;
const YourCharacter;
const YourDefender;
const myChar = "";
const myDef = "";

function reset() {	

    $("#picRow").show();
    
    $(".restart").hide();
    $(".attackButton").show();
    
    // reset myChar and myDef to equal nothing.
    const myChar = "";
    const myDef = "";
    
    
    
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
    $(".nameds").html(characters.DarVad.fullName);
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