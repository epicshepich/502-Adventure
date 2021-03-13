box = document.getElementById("box");
options = document.getElementById("options");

var player = {inventory:{poops:0}};
var kakure = {};
var queue = {queue:[],supress:false,pointer:-1,
  add:function(enc){
  if(!queue.supress){queue.pointer++
    queue.queue.push(enc)
  } else{
    queue.supress=false;
  }
  },
  previous:function(){queue.queue.pop();queue.pointer-=1;queue.supress=true;queue.queue[queue.pointer].gen()}
};

//==============================================================================
//                            Encounter Class
//==============================================================================
function Encounter(argument){
  for(key in argument){
    this[key]=argument[key]
  }

  this.gen = function(){
      if(this.callback){
        this.callback();
      }
      queue.add(this)
    if(this.title){
      document.getElementById("title").innerHTML=this.title;
        document.getElementById("Title").innerHTML=this.title;
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
//                               Encounters
//==============================================================================
var diarrhea=function(){};
var carrots=function(){};
var frontdoor=function(){};
var foyer1=function(){};
var foyer2a=function(){};
var foyer2b=function(){};
var samsroom=function(){};
var kitchen=function(){};
var situps=function(){};
var crunchpartner=function(){};
var basement=function(){};
var jssitups=function(){};
var jjsitups=function(){};
var situp=function(){};
var nextset=function(){};

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
        break;
      case 1:
        frontdoor.boxed_text="One with your maker, you throw your weight into the glass, and feel the door budge a little, but remain shut."
        break;
      case 2:
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

//==============================================================================
//                                SIT UPS
//==============================================================================
kakure.situps={reps:0,sets:0}

situps = new Encounter({
	name:"situps",
	title:"Sit Ups",
	boxed_text:"You walk down the dilapidated stairs leading into the musty concrete basement. You hear a rhythmic thumping and labored breathing. You make your way over to the mats to see Josh and Jim doing sit-ups.<br><br>\"Hey, you\'re just in time. Do you want to join us?\"",
	choices:["Yes","No"],
	outcomes:[crunchpartner,basement],
	callback:function(){

	}
})

crunchpartner = new Encounter({
	name:"crunchpartner",
	title:"Sit Up Partner",
	boxed_text:"\"Okay. One of us will pair off with you. Who do you want to do sit ups with?\"",
	choices:["Josh","Jim"],
	outcomes:[jjsitups,jssitups],
	callback:function(){

	}
})

jssitups = new Encounter({
	name:"jssitups",
	title:"Sit-Ups with Jim",
	boxed_text:"\"Cool. Alright, I\'ll go first. Just hold my knees down,\" Jim says as he proceeds to do 40 situps.<br><br>\"Alright, it\'s your turn. I\'ll put on this ominous singing bowl track to help you focus.\"",
	choices:["Do a sit-up"],
	outcomes:[situp],
	callback:function(){
    kakure.situps.partner="Jim";
	}
})

jjsitups = new Encounter({
	name:"jjsitups",
	title:"Sit-Ups with Josh",
	boxed_text:"\"Great! Go ahead first, I gotta let this Dragon's Milk settle.\"",
	choices:["Do a sit-up"],
	outcomes:[situp],
	callback:function(){
    kakure.situps.partner="Josh";
	}
})

situp = new Encounter({
	name:"situp",
	title:"Sit-Ups",
	boxed_text:"",
  bowl: new Audio('audio/bowl.mp3'),
  fart: new Audio('audio/fart.mp3'),
	choices:["Do another sit-up"],
	outcomes:[situp],
	callback:function(){
      kakure.situps.reps+=1
      this.title="Sit-Ups ("+kakure.situps.reps+")"
      if(kakure.situps.partner=="Jim"){
        if(kakure.situps.sets==0&kakure.situps.reps==5){
          this.boxed_text="\"Wait for it...\""
        } else {
          this.boxed_text="";
        }
        if(kakure.situps.sets==0&kakure.situps.reps==8){
          this.bowl.play()
        }
        if(kakure.situps.sets==0&kakure.situps.reps==10){
          this.boxed_text="\"There it is!\""
        }
        if(Math.random()*50>49&&(kakure.situps.sets>0||kakure.situps.reps>10)){
          this.bowl.play()
        }
      } else if(kakure.situps.partner=="Josh"){
        if(Math.random()*240>239){
          this.fart.play()
          this.title="Fart"
          this.boxed_text="Josh lets rip a loud fart.<br /><br />\"This one\'s bad. We gotta run!\""
          this.choices=["Evacuate"]
          this.outcomes=[kitchen]
        }
      }

      if(kakure.situps.reps>=39){
        this.outcomes[0]=nextset;
        kakure.situps.reps=0;
        kakure.situps.sets+=1;
      } else if (kakure.situps.reps <=1){
        this.outcomes[0]=situp;
      }
	}
})

nextset = new Encounter({
	name:"nextset",
	title:"Breather",
	boxed_text:"",
	choices:["Do a sit-up"],
	outcomes:[situp],
	callback:function(){
    if(kakure.situps.partner=="Jim"){
      switch(kakure.situps.sets){
        case 1:
          this.boxed_text="\"Good work. One set down, one set to go. Alright, tag me in,\" Jim says as he gets down and does another set of 40 sit-ups."
          break;
        case 2:
          this.boxed_text="\"Your masters trained you well. But did they train you well enough?!\" Jim begs of you as he does his next set."
          break;
        case 3:
          this.boxed_text="\"HAAAAAH! 120! Let\'s take a little bit of a break before we grind out the last 80.\" Jim explains, before sitting down and breathing."
          break;
        case 4:
          this.boxed_text="\"That set seemed to go much better than the last one.\" Jim says matter-of-factly, pointing to the ceiling as he exclaims. \"One more.\" Jim says, as he struggles through his last set."
          break;
        case 5:
          this.boxed_text="\"Congratulations. You\'re definitely, totally jacked.\" He reassures you. You did all 200 sit-ups!"
          break;
      }

    } else {
      switch(kakure.situps.sets){
        case 1:
          this.boxed_text="\"Hot guac, you\'re startin\' like a Spartan.\" Josh says as he swaps and does his first set."
          break;
        case 2:
          this.boxed_text="\"Oh yeah, your dogs are barking today. Keep to\'t!\" Josh insists as he swaps and does his 40."
          break;
        case 3:
          this.boxed_text="Josh tags in and does his next set. \"Hooooooly hampockets, I\'m gonna have to tap out for a minute after that one. Let\'s rest for a minute.\" Josh gasps."
          break;
        case 4:
          this.boxed_text="\"I\'m really feeling it! One last push.\" Josh explains, putting in his 40. Last set."
          break;
        case 5:
          this.boxed_text="Josh swaps in for his last set. \"The feeling of liberation and release. You\'re a free bird now, Charlie brown. Madre de dios...\" Josh begins to descend into idioms before collapsing, exhausted, onto the mats. You did all 200 sit-ups!"
          break;
      }
    }

    if(kakure.situps.sets==3){
      options.style.visibility="hidden";
      setTimeout(function(){options.style.visibility="visible"}, 30000);
    }
    if(kakure.situps.sets==5){
      this.choices=["Return"];
      this.outcomes=["basement"];
    }
	}
})

//==============================================================================
//                                SKYRIM
//==============================================================================
kakure.skyrim={
  landmarks:["Abandoned Tower","Ancient Standing Stone","Bustling Tavern",
  "Busy Trading Post","Daedric Shrine","Dusty Old Wood Mill","Fishing Camp",
  "Foggy Dock","Fortified Town","Isolated Shack","Nord Village","Quaint Farm","Small Hamlet","Spooky Lighthouse"],
  races:["Altmer","Argonian","Breton","Dark Elf","Imperial","Khajiit","Nord","Orc","Redguard","Wood Elf"],
  professions:["Adventurer","Alchemist","Apothecary","Armorer","Baker","Bard","Beekeeper","Beggar",
"Blacksmith","Butcher","Candlemaker","Carpenter","City Guard","Companion","Explorer","Farmer",
"Fisher","Forester","House Carl","Hunter","Innkeeper","Mage","Mercenary","Messenger",
"Miner","Priest","Shopkeeper","Sailor","Scholar","Thieves Guild Fence","Trader","Vigilant of Stendarr"],
  relations:["Apprentice","Barber","Brother","Childhood Friend","Cobbler","Cousin","Father","Former Lover",
"Friend","Lover","Mentor","Mother","Old Fishing Buddy","Partner","Personal Chef","Servant","Sister","Uncle"],
  items:["Ancestral Weapon",
"Black Soul Gem","Book of Conjuration Spells","Bottle of Cheap Wine","Box of Rare Ingredients","Broken Soulgem","Ceremonial Blade",
"Childhood Toy","Collection of Orcish Poetry","Detailed Map of Skyrim","Diary Full of Secrets","Enchanted Scroll",
"Family Heirloom","Family Tree Tapestry","Finely Aged Cheese Wheel","Gift from the Mad God, Sheogorath",
"Golden Chalice","Helmet With Pointy Horns","Leather-Bound Tome","Left Boot","Lock of Scamp Hair","Mace of Molag Bal",
"Mysterious Dwemer Cube","Mountain Flower","Offering to the Nine Divines","Old Shield","Perfectly-Tuned Lute","Piece of String",
"Priceless Work of Art","Rare Book","Recipe for Boiled Cream Treats","Replica of the Soup Spoon of Ysgramor",
"Sack of Damning Evidence","Set of Silver Candlesticks","Secret Sweet Roll Recipe","Statue of Talos",
"Star of Azura","Useless Bauble","Weather Worn Journal","Wedding Band","Well-Aged Bottle of Skooma",
],
  rewards:[
"Black Soul Gem","Book Bound in Human Skin","Book of Magic","Bottle of Argonian Ale","Bottle of Skooma","Cheese Wheel",
"Confusing Treasure Map","Copy of the Lusty Argonian Maid","Coral Dragon Claw","Counterfeit Healing Potion",
"Dremora Fingernail Clippings","Fork","Greater Soul Gem","Guide to Sitting Like a Jarl","Imp Stool","Iron Key","Khajiit Costume Tail",
"Large Leather Sack","Mysterious Burlap Sack","Notched Pickaxe","Nuka Cola","Pair of Steel Knee Pads","Re-Gifted Note",
"Radish","Ring of Invisibility","Ruby Dragon Claw","Sack of Infinite Holding","Scroll of Lockpicking",
"Small Giant\'s Toe","Statue of Dibella","Stone of Barenziah","Weathered Journal","Wooden Bucket"],
reward_descriptions:["It\'s just an ordinary soul gem painted black.","Oghma Infinium is misspelled on the cover.","You open it and see wizard doodles covering the margins, but no new spells.","It\'s an acquired taste.","This reminds you of your college days at Winterhold.","It\'s amazing how long these stay fresh.","Who drew this? It\'s impossible to use.","You'll save this for later.","This will make a fine back scratcher. It may also have other uses.","Inside the bottle, you find only tomato sauce.","These must have some alchemical use but you're not willing to eat them to find out.","Well, you can never have too many forks.","You shake it to see if there's a soul inside. Nope.","You'll read this while on the throne.","Unfortunately, this is not a mushroom but the droppings of an imp.","Good luck figuring out which door this belongs to.","It\'s not something you\'d personally like to wear, but to each their own you suppose.","Embroidered on the bag are the words, I am sworn to carry your burdens.","Okay then.","You\'ll need to hone your craft at mining to make good use of this.","This must be some sort of mistake.","These could really extend your adventuring career.","You\'re well on your way to making soup.","You inspect the note. There\'s a bloody handprint and the words \"We know.\" We know what, you wonder?","You slip it on your finger and the ring turns invisible, not you. Novice enchanters. Sheesh.","This will no doubt be in your possession for a very long time.","Is this powerful wizardry or a mod item?","Wow, it\'s been years since you\'ve seen one of these.","It probably just belonged to a very large Nord.","Wait a second...this is stolen!","It looks nice, but let\'s be honest: you\'ll likely never complete the set.","It looks like the owner completed quite a few quests from the local tavern.","This looks like it might make a nice hat."]
}

function Quest(obj){
  this.npc={
    pronouns:Math.round(Math.random()) ? ["He","Him"] : ["She","Her"],
    race:kakure.skyrim.races[Math.round(Math.random()*(kakure.skyrim.races.length-1))],
    profession:kakure.skyrim.professions[Math.round(Math.random()*(kakure.skyrim.professions.length-1))],
    relation:kakure.skyrim.relations[Math.round(Math.random()*(kakure.skyrim.relations.length-1))],
  }

  if(this.npc.race.indexOf("A")!==0&&this.npc.race.indexOf("E")!==0&&this.npc.race.indexOf("I")!==0&&this.npc.race.indexOf("O")!==0&&this.npc.race.indexOf("U")!==0){
    this.npc.article="a"
  } else {
    this.npc.article="an"
  }
  this.dungeon=kakure.skyrim.dungeons[Math.round(Math.random()*(kakure.skyrim.dungeons.length-1))]
  if(this.dungeon.indexOf("A")!==0&&this.dungeon.indexOf("E")!==0&&this.dungeon.indexOf("I")!==0&&this.dungeon.indexOf("O")!==0&&this.dungeon.indexOf("U")!==0){
    this.dungeon_article="a"
  } else {
    this.dungeon_article="an"
  }
  this.landmark=kakure.skyrim.landmarks[Math.round(Math.random()*(kakure.skyrim.landmarks.length-1))];
  this.item=kakure.skyrim.items[Math.round(Math.random()*(kakure.skyrim.items.length-1))];
  this.reward_index=Math.round(Math.random()*(kakure.skyrim.rewards.length-1));
  this.reward=kakure.skyrim.rewards[this.reward_index];
  this.reward_description=kakure.skyrim.reward_descriptions[this.reward_index];
  this.type=0//Math.round(Math.random()*3)
  this.start=""
  this.summary=""
  this.success=""
  this.finish=""
  switch(this.type){
    case 0:
    this.start="Once at the "+this.landmark+", "+this.npc.article+" "+this.npc.race+" "+this.npc.profession+" greets you. "+this.npc.pronouns[0]+" looks quite sad. "+this.npc.pronouns[0]+" tells you "+this.npc.pronouns[1].toLowerCase()+" "+this.npc.relation.toLowerCase()+" was killed by a mysterious evil in [a/an] <Dungeon>. Will you avenge "+this.npc.pronouns[1].toLowerCase()+" "+this.npc.relation+"?"
      break;
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
  }


}




situps.gen()
