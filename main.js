box = document.getElementById("box");
options = document.getElementById("options");

var player = {inventory:{poops:0}};
var kakure = {};

//==============================================================================
//Definition of Encounter Class
//==============================================================================
function Encounter(argument){
  for(key in argument){
    this[key]=argument[key]
  }

  this.gen = function(){
      if(this.callback){
        this.callback();
      }
    if(this.title){
      document.getElementById("title").innerHTML=this.title;
    }
    box.innerHTML = this.boxed_text;
    options.innerHTML = "<ul>";
    for(k=0;k<this.choices.length;k++){
      options.innerHTML+="<li><a id=option"+k+" onclick=\""+this.outcomes[k].name+".gen()\">"+this.choices[k]+"</a></li>";
      //console.log(this.outcomes[k])
    }
    options.innerHTML+="</ul>"
  }
}
//==============================================================================
//Encounters
//==============================================================================
var diarrhea=function(){};
var carrots=function(){};
var frontdoor=function(){};
var foyer1=function(){};
var foyer2a=function(){};
var foyer2b=function(){};
var samsroom=function(){};
var kitchen=function(){};

var diarrhea = new Encounter({
  name:"diarrhea",
  title:"The Runs",
  boxed_text:"I have diarrhea real bad. What should I do?",
  choices:["go","don't go"],
  outcomes:[carrots,diarrhea]
})

var carrots = new Encounter({
  name:"carrots",
  title:"Tasty Treat",
  boxed_text:"I go to the bathroom. Should I eat carrots?",
  choices:["Yes"],
  outcomes:[diarrhea],
  callback: function(){player.inventory.poops+=1}
})

kakure.bashcounter = -1
var frontdoor = new Encounter({
	name:"frontdoor",
	title:"Front Door",
	boxed_text:"Travelling along the downhill grade of Catherine street, you finally take a sharp left turn to avert your gaze from the holy glow St. Andrew\'s Episcopal Church, only to witness the ramshackle white columns and billowing porch-hammock of 502 Catherine Street. You make your way up the stairs and try the front door, finding it unlocked, but still somehow impossible to open.",
	choices:["Make peace with your god and heave your entire frame against the door. ","Scream \"Fire, Fire!!!\" until someone comes to let you in."],
	outcomes:[frontdoor,foyer1],
  callback:function(){
    kakure.bashcounter++
    switch(kakure.bashcounter){
      case 0:
        frontdoor.boxed_text="One with your maker, you throw your weight into the glass, and feel the door budge a little, but remain shut."
        break;
      case 1:
        frontdoor.boxed_text="Persistent and devout, you get a little runup this time, and mildly concuss yourself. But the door does budge a little more."
        frontdoor.outcomes[0]=foyer1
        break;
    }
  }
})

foyer1 = new Encounter({
	name:"foyer1",
	title:"Enter the Foyer",
	boxed_text:"\"Hello, Traveler. Excuse me: my vision seems to be failing me... Are you a boy or a girl?\"",
	choices:["\"Yes\"","\"No\"","Heave your frame against the set of double doors to your right, thoroughly avoiding the question. "],
	outcomes:[foyer2a,foyer2b,samsroom],
	callback:function(){
      if(kakure.bashcounter>0){
        foyer1.boxed_text="True to your beliefs of living and not learning, you choose your hill to die on, and yeet yourself into the yet unswinging door. With a mighty crash, you sprawl onto a sea of mismatched shoes and unread mail. Looking up, you see a black-haired man in khakis sitting at a card table, in the middle of eating honeycombs, staring at you with wide eyes.<br /><br />"+foyer1.boxed_text
      } else {
        foyer1.boxed_text="You throw your head back and exercise your first amendment right as loudly as you can. After the brief sound of shuffling shoes, and muttered curses just out of earshot, the door opens to reveal a black-haired man in a blue shirt and khakis.<br /><br />"+foyer1.boxed_text
      }
	}
})

foyer2a = new Encounter({
	name:"foyer2a",
	title:"In the Foyer",
	boxed_text:"The man looks for a flashing second irked by the petty semantics of your response, but doesn\'t press the matter further. \"Welcome to 502! You caught me in the middle of breakfast, but showing a new guest around is worth the soggy honeycombs. Let me show you to the kitchen!",
	choices:["\"Yes please Sir Jim, lead me to your kitchen.\""],
	outcomes:[kitchen],
	callback:function(){

	}
})

foyer2b = new Encounter({
	name:"foyer2b",
	title:"In the Foyer",
	boxed_text:"The steel-trap mentality of this lad takes your unorthodox semantics in stride. \"Fair enough. Whelp, I\'ll have to leave for the lab soon, but I have to at least show a houseguest around the first floor. Come with me to the kitchen, would you?",
	choices:["\"Yes please Sir Jim, lead me to your kitchen.\""],
	outcomes:[kitchen],
	callback:function(){

	}
})






frontdoor.gen()
