box = document.getElementById("box");
options = document.getElementById("options");

var player = {inventory:{poops:0,keyboard:0,fedora:0}};
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
  var samsroom1=function(){};
  var samsroom2=function(){};
  var samsroom3=function(){};
    var fishtank=function(){};
    var sambath=function(){};
      var selfesteem=function(){};
      var samtub=function(){};
      var samtoilet=function(){};
var kitchen=function(){};
  var cupboard=function(){};
var livingroom=function(){};
  var livingtable=function(){};
  var livingsarah=function(){};
    var livingloving=function(){};
    var livingnailedit=function(){};
    var livingtrapped=function(){};
  var livingjack=function(){};
    var bladder=function(){};
    var lyreharp=function(){};
    var warmbox=function(){};
var backdoor=function(){};
var shed=function(){};
  var _monogram=function(){};
var foyerblank=function(){};
var basement=function(){};
var situps=function(){};
    var crunchpartner=function(){};
    var jssitups=function(){};
    var jjsitups=function(){};
    var situp=function(){};
    var nextset=function(){};

var bonezone=function(){};
var pasokon=function(){};
  var _steam=function(){};
  var _files=function(){};
  var _discord=function(){};

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

samsroom = new Encounter({
	name:"samsroom",
	title:"Sam\'s Room",
	boxed_text:"You complicate the decision tree as much as possible and cast your mortal frame against doors which, immediately upon impact, prove less sturdy by far than the hearty slab of maple with which you first engaged. The doors give way to a faint splintering sound, and you find yourself in a room with a huge window on the north side, a desk with a black laptop on it, and another door on the south side.",
	choices:["Look out the window.","Investigate the Laptop.","One more door, one more flunge.","Leave"],
	outcomes:[samsroom1,samsroom2,samsroom3,foyerblank],
	callback:function(){

	}
})

samsroom1 = new Encounter({
	name:"samsroom1",
	title:"Looking out Sam\'s Window",
	boxed_text:"St. Andrew\'s Episcopal Church, in all its glory, takes up the full of your periphery. You think you see a dude in a flannel with a beanie hat staring longingly at you from across the street, but you blink and see that it was just a conspicuously placed plastic bag. How beautiful.",
	choices:["Go back"],
	outcomes:[samsroom],
	callback:function(){

	}
})

samsroom2 = new Encounter({
	name:"samsroom2",
	title:"Laptop",
	boxed_text:"You try to look through the laptop, but everything\'s in spanish. In fact, it looks like it\'s in the middle of a zoom class, but the camera\'s off and it\'s muted. It dawns upon you that this is what passes for attendance these days. Pathetic.",
	choices:["Go back"],
	outcomes:[samsroom],
	callback:function(){

	}
})

samsroom3 = new Encounter({
	name:"samsroom3",
	title:"Sam\'s Corridor",
	boxed_text:"If you\'re going through, you\'re going through hard. The flimsy white door easily relents to a trashed hallway of cords and cleaning supplies. A bathroom door is already open to your right, a small alcove with a fishtank in it caves out to your left. The living room is visible at the end of the hallway, but the amassed junk makes traversing there right now impossible.",
	choices:["With unprecedented delicacy and grace, step into the bathroom.","Snoop around the fish tank.","This hallway is gross and you need have nothing to do with it."],
	outcomes:[sambath,fishtank,samsroom],
	callback:function(){

	}
})

fishtank = new Encounter({
	name:"fishtank",
	title:"The Fishtank",
	boxed_text:"You try and make sense of this lifeless, fishless, tragic looking thing in the alcove. It\'s full of more junk, but enough junk to conceivably hide in if you ever had to play hide and seek here. Noteworthy. That said, it was still probably a terrible idea to buy and store in this hallway. Like, what do we even do with the thing after we move out? Mercy mild...",
	choices:["Get all worked up over this.","Don\'t bother"],
	outcomes:[samsroom3,samsroom3],
	callback:function(){

	}
})

sambath = new Encounter({
	name:"sambath",
	title:"Sam\'s Bathroom",
	boxed_text:"So vile an intersection of plastic, hair, and dust has never presented itself before you. A sink and mirror fill the north side, a dustbowl bathtub the west side, and a toilet between them. ",
	choices:["Check yourself out, gorgeous.","Peer over the edge and into the bathtub.","Well, while you\'re here.","Leave"],
	outcomes:[selfesteem,samtub,samtoilet,samsroom3],
	callback:function(){

	}
})

selfesteem = new Encounter({
	name:"selfesteem",
	title:"Looking into the Mirror",
	boxed_text:"What you can see of yourself through the water stained glass looks really, I mean really, good.",
	choices:["Go back"],
	outcomes:[sambath],
	callback:function(){

	}
})

samtub = new Encounter({
	name:"samtub",
	title:"Gazing into the Abyss",
	boxed_text:"You sneak a glance into the effective Grand Canyon of what might have once been a place of hygiene. Dark, dry thoughts fill your head. Why did you come to this dark corner of 502? What forces of evil preside over this small pocket of an otherwise orderly and kind domain? The questions find no resolution.",
	choices:["Snap back to reality."],
	outcomes:[sambath],
	callback:function(){

	}
})

samtoilet = new Encounter({
	name:"samtoilet",
	title:"Dumptown USA",
	boxed_text:"Biology, baby. You handle your business, wash your hands, and leave the place only marginally dirtier than you entered it. Which, by this long-abandoned room\'s standards, is a thorough victory. ",
	choices:["Wash your hands."],
	outcomes:[sambath],
	callback:function(){
    player.inventory.poops-=1;
	}
})

kitchen = new Encounter({
	name:"kitchen",
	title:"The Kitchen",
	boxed_text:"Ah, the intersectional heart of the entirety of 502 Catherine. This clean, modest, dare I even call it quaint space allows you access to the living room, the basement, the foyer, the back door, and any ancient food reserves which may or may not have been abandoned to slowly curdle in dank cupboards. If ever you find yourself lost or confused amidst the throngs of weirdos and steep staircases, just wind your way back here. ",
	choices:["I want to live.","Go down to Goblin Town, where you hear a faint grunting.","They\'ll never see you leavin\' by the backdoor.","You\'re nasty hungry: get all up in those cupboards.","The place your story began. Your ancestral home. Trace your umbilicus back to that foyer."],
	outcomes:[livingroom,situps,backdoor,cupboard,foyerblank],
	callback:function(){

	}
})

foyerblank = new Encounter({
	name:"foyerblank",
	title:"Back in the Foyer",
	boxed_text:"You return to the foyer. Where do you want to go?",
	choices:["Kitchen"],
	outcomes:[kitchen],
	callback:function(){

	}
})

livingroom = new Encounter({
	name:"livingroom",
	title:"Into the Living Room",
	boxed_text:"You shuffle into the living room. Ahead of you, blocking the massive window on the west wall of the room, a TV balances precariously on a kitchen table. In the northwest corner, next to the TV, an armchair plays host to a raven-haired maiden, who sits looking at a tablet with her legs crossed. The North face of the room opens into a sub-room with a black table, at which a man sits intent upon his laptop, practicing a card trick. A sign reading \"Karl Skid\/Marx\" presides over the room, with a hammer and sickle drawn in red marker.",
	choices:["Fool around with the table because you lack social skills.","Entreat the attention of the raven-haired maiden.","See what, precisely is the deal with that funky card trick.","The land of the living is no kind host to your ilk."],
	outcomes:[livingtable,livingsarah,livingjack,kitchen],
	callback:function(){

	}
})

livingtable = new Encounter({
	name:"livingtable",
	title:"Living Room Table",
	boxed_text:"Ah, you\'re just casing the place first. Nothing wrong with that. On the table in front of the TV is a tube of Icy Hot, a bunch of stray essential oils without a diffuser, and a solved Rubik\'s cube. ",
	choices:["Make a silent, informed judgment about the kind of people that live here, and then work yourself up to the social encounters."],
	outcomes:[livingroom],
	callback:function(){

	}
})

livingsarah = new Encounter({
	name:"livingsarah",
	title:"Meeting Sarah",
	boxed_text:"You approach the raven-haired maiden henceforth known to you as Sarah. \"Hi, I\'m Sarah!\" she says. \"How\'s the house treating you?\" ",
	choices:["Lie and say you\'re loving it.","It\'s icy, It\'s hot, and it\'s totally tubular. It\'s got a great fragrance to it, too. It\'s complex, like a Rubik\'s Cube, but unthreatening, like a solved Rubik\'s Cube.","Honestly? Is there a way out of this whole thing because I just d--"],
	outcomes:[livingloving,livingnailedit,livingtrapped],
	callback:function(){

	}
})

livingloving = new Encounter({
	name:"livingloving",
	title:"Chatting with Sarah",
	boxed_text:"She totally buys it. \"I\'m really glad! The guys all get kinda stir crazy without company, so it\'ll be good to see a new face around. Be sure to check out the roof if you have the time!\"",
	choices:["Say that you definitely will with your fingers crossed, and move on without missing a beat.","Make a slightly longer eye contact than usual with her, and whisper \"Oh, I\'m getting to that roof.\" Then step back."],
	outcomes:[livingroom,livingroom],
	callback:function(){

	}
})

livingnailedit = new Encounter({
	name:"livingnailedit",
	title:"Chatting with Sarah",
	boxed_text:"Sarah\'s expression of polite joy deepens into one of understanding awe. \"I\'ve never heard it put so perfectly like that...Wow, you really have a good sense for this place. Welcome.\" You feel like if any supernatural governance kept track of how various housemates felt about you, they\'d see this response as a smashing success.",
	choices:["Dispel such silly agnosticism and get on with your day."],
	outcomes:[livingroom],
	callback:function(){

	}
})

livingtrapped = new Encounter({
	name:"livingtrapped",
	title:"Chatting with Sarah",
	boxed_text:"The music you hadn\'t even realized was playing faintly in the background cuts, as Sarah tilts her head in mild confusion. \"You aren\'t here to stay... forever?\" she asks. Then, breaking back into a smile, she continues \"Nah, if you wanna leave literally just go ahead.\" There was never any music playing: you\'re sure you don\'t know what you were thinking.",
	choices:["Figure yourself out and move on."],
	outcomes:[livingroom],
	callback:function(){

	}
})

livingjack = new Encounter({
	name:"livingjack",
	title:"What\'s Jack Pointing At?",
	boxed_text:"You can spin a pen through your fingers if you think really hard about it, you\'ve fallen into the purgatory of Penn and Teller\'s \'Fool Us\' on Youtube: you can probably talk to guys who do card tricks. Jack catches your eyes as you approach, and points imperatively to something behind you in the room before saying a word. You turn around to get what he was indicating, and see a range of things it could reasonably be: a water bladder, a lyre harp, and a warm box on the card table. ",
	choices:["Go after that ever-practical water bladder.","Finesse the funky lyre harp.","Acquire ye olde warm box on the card table"],
	outcomes:[bladder,lyreharp,warmbox],
	callback:function(){

	}
})

bladder = new Encounter({
	name:"bladder",
	title:"Water Bladder",
	boxed_text:"It\'s the coolest thing in the room, maybe the world, so of course you\'re going right for that water bladder. Problem is, as you grab it and turn back to Jack, he coolly shakes his head, and points again at that general zone of the room. Must not have been what he meant. ",
	choices:["His loss, man."],
	outcomes:[livingjack],
	callback:function(){

	}
})

lyreharp = new Encounter({
	name:"lyreharp",
	title:"The Lyre Harp",
	boxed_text:"It seems reasonable to you that during his political science zoom class, Jack might want to have one state-of-the-art 16 string lyre harp on hand. Only problem is, once you grab it and turn back to him, his yet inexpressive face turns into one of mild embafflement, with just a twinge of pity. Jack\'s eyebrows scrunch together, as if they might find in his glabella the faintest suggestion of an explanation for why you thought he meant the lyre harp. Wrong call.",
	choices:["I can\'t conceive of not wanting this, but very well."],
	outcomes:[livingjack],
	callback:function(){

	}
})

warmbox = new Encounter({
	name:"warmbox",
	title:"The Warm Box",
	boxed_text:"You trod over to that warm, beige box on the card table, which you realize upon getting close smells of potatoes and pepper. Looking back at Jack, he gives you a sure but casual thumbs up, as if to say \"Go at it, boss.\" He brought you lunch from the dining hall! What a real one. ",
	choices:["Do his delivery honor, and go completely bonobos on those fries."],
	outcomes:[livingroom],
	callback:function(){
    player.inventory.poops+=1
	}
})

backdoor = new Encounter({
	name:"backdoor",
	title:"Out the Back Door",
	boxed_text:"You step out of the bustling network of this college house to see what exists out the back door. The recycling bins get in your way a little bit, but you can step around them. There\'s a foam cutout of a cat mask pressed to the glass, but you can angle your sight past that too, and win your eyes out to that pebbled mudpit of a backyard. A meager garage stands to your left, with its plastic deathtrap of a door lockjawed shut. To the right, a blue car and a silver car rest parked at competing angles in the muck. The windfall light streams down and left through the wiry maple that overhangs most of the shed. Little moments like this don\'t cost or give you anything. But you\'ll remember them.",
	choices:["Realize that the front door is the way to leave, when you want to.","Enter the shed."],
	outcomes:[kitchen,shed],
	callback:function(){

	}
})

cupboard = new Encounter({
	name:"cupboard",
	title:"Checking the Cupboards",
	boxed_text:"Alas, that the voice of hunger should thrum through your gut, and draw you for even a moment away from this place with yet so many secrets. Oh well. You open the cupboard, and the sheer olfactory force of this nasty smell cripples every single one of your senses. A moment you uncertain stand in groty paralysis, before a pang of adrenaline compels you to shut the cupboard drawer, and not come back until you find some way to withstand whatever just happened here.",
	choices:["Go back"],
	outcomes:[kitchen],
	callback:function(){

	}
})

shed = new Encounter({
	name:"shed",
	title:"In the Shed",
	boxed_text:"You open the door to the shed to see a small dimly-lit room, which is mostly occupied by a black 2011 Lexus Hybrid CT200H.",
	choices:["Go back"],
	outcomes:[backdoor],
	callback:function(){
    if(player.inventory.fedora>0){
      this.choices.push("Don fedora");
      this.outcomes.push(_monogram);
    }
	}
})

//==============================================================================
//                                True Love, Presidents Edition
//==============================================================================
kakure.presidents={};
kakure.presidents.start=function(){};

_monogram = new Encounter({
	name:"_monogram",
	title:"Secret Mission",
	boxed_text:"As soon as you don the fedora, you notice that you are standing on a trapdoor. The trapdoor opens, and you slide down a long dark tube. After some time, you see a faint light ahead of you, which grows brighter until you slide out of the tube and into a wide open room.<br \/><br \/>You notice a number of gadgets and trinkets lining the walls as you make your way over to a red seat facing a large screen.<br \/><br \/>The blinks to life as you see the image of a man with a white buzzcut, a white mustache, and a unibrow wearing a green uniform monogrammed \"MM.\"<br \/><br \/>\"Agent P,\" he says, \"we have word that Dr. Doofenshmirtz is going to attack the former presidents of the USA. You are the only one who can stop him. Good luck, Agent P.\"",
	choices:["Tip your fedora, and hop into the nearby platypus-shaped hover car.","Try your luck crawling back up the tube."],
	outcomes:[kakure.presidents.start,shed],
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
reward_descriptions:["It\'s just an ordinary soul gem painted black.","Oghma Infinium is misspelled on the cover.","You open it and see wizard doodles covering the margins, but no new spells.","It\'s an acquired taste.","This reminds you of your college days at Winterhold.","It\'s amazing how long these stay fresh.","Who drew this? It\'s impossible to use.","You'll save this for later.","This will make a fine back scratcher. It may also have other uses.","Inside the bottle, you find only tomato sauce.","These must have some alchemical use but you're not willing to eat them to find out.","Well, you can never have too many forks.","You shake it to see if there's a soul inside. Nope.","You'll read this while on the throne.","Unfortunately, this is not a mushroom but the droppings of an imp.","Good luck figuring out which door this belongs to.","It\'s not something you\'d personally like to wear, but to each their own you suppose.","Embroidered on the bag are the words, I am sworn to carry your burdens.","Okay then.","You\'ll need to hone your craft at mining to make good use of this.","This must be some sort of mistake.","These could really extend your adventuring career.","You\'re well on your way to making soup.","You inspect the note. There\'s a bloody handprint and the words \"We know.\" We know what, you wonder?","You slip it on your finger and the ring turns invisible, not you. Novice enchanters. Sheesh.","This will no doubt be in your possession for a very long time.","Is this powerful wizardry or a mod item?","Wow, it\'s been years since you\'ve seen one of these.","It probably just belonged to a very large Nord.","Wait a second...this is stolen!","It looks nice, but let\'s be honest: you\'ll likely never complete the set.","It looks like the owner completed quite a few quests from the local tavern.","This looks like it might make a nice hat."],
dungeons:["Abandoned Fort","Dense Forest","Haunted Cave","Misty Mountain"],
traveling_messages:["You head out on the road. You steal a sweet roll while exploring, but feel guilty and return it to its rightful owner. After walking for a while, you arrive at a crossroads.",
"You head out on the road, with your possessions all conveniently stuffed into one big chest. Soon, you arrive at a crossroads.",
"You head out on the road. As you wander aimlessly, you start to wonder why so many people keep journals. It usually gets them into trouble. Eventually, you arrive at a crossroads.",
"You head out on the road and travel long into the night. Masser and Secunda fill the sky. After a time, you arrive at a crossroads.",
"After heading out on the road, you stop to transmute iron into gold several times, then blacksmith it into rings, enchant said rings with fortify sneak and sell them around town. You venture out again and arrive at a crossroads.",
"You head out on the road and stop to forge a large number of iron daggers. Satisfied with your work, you venture out and you arrive at a crossroads.",
"You head out on the road. After chasing butterflies for an embarrassing amount of time, you arrive at a crossroads.",
"You head out on the road. After stopping to create a useless potion from jazbay grapes and a chicken egg, you arrive at a crossroads.",
"After heading out on the road, you come across a guard who says, I got to thinking, maybe I\'m the Dragonborn and just don\'t know it yet. You promptly knock him over with your Thu\'um. Later, you arrive at a crossroads.",
"After heading out on the road, you stop to transmute iron into gold several times, then blacksmith it into rings, enchant said rings with fortify sneak and sell them around town. You venture out again and arrive at a crossroads."
]
}

function Quest(obj){
  this.npc={
    pronouns:Math.round(Math.random()) ? ["He","His","Him"] : ["She","Her","Her"],
    race:kakure.skyrim.races[Math.round(Math.random()*(kakure.skyrim.races.length-1))],
    profession:kakure.skyrim.professions[Math.round(Math.random()*(kakure.skyrim.professions.length-1))],
    relation:kakure.skyrim.relations[Math.round(Math.random()*(kakure.skyrim.relations.length-1))],
  }

  if(this.npc.race.indexOf("A")!==0&&this.npc.race.indexOf("E")!==0&&this.npc.race.indexOf("I")!==0&&this.npc.race.indexOf("O")!==0&&this.npc.race.indexOf("U")!==0){
    this.npc.article="a"
  } else {
    this.npc.article="an"
  }
  this.dungeon_index=Math.round(Math.random()*(kakure.skyrim.dungeons.length-1));
  this.dungeon=kakure.skyrim.dungeons[this.dungeon_index]
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
  if(this.reward.indexOf("A")!==0&&this.reward.indexOf("E")!==0&&this.reward.indexOf("I")!==0&&this.reward.indexOf("O")!==0&&this.reward.indexOf("U")!==0){
    this.reward_article="a"
  } else {
    this.reward_article="an"
  }
  if(this.item.indexOf("A")!==0&&this.item.indexOf("E")!==0&&this.item.indexOf("I")!==0&&this.item.indexOf("O")!==0){
    this.item_article="a"
  } else {
    this.item_article="an"
  }
  this.type=1//Math.round(Math.random()*3)
  this.start=""
  this.summary=""
  this.success=""
  this.finish=""
  switch(this.type){
    case 0://avenge relation
    this.start="Once at the "+this.landmark+", "+this.npc.article.toLowerCase()+" "+this.npc.race+" "+this.npc.profession+" greets you. "+this.npc.pronouns[0]+" looks quite sad. "+this.npc.pronouns[0]+" tells you "+this.npc.pronouns[1].toLowerCase()+" "+this.npc.relation.toLowerCase()+" was killed by a mysterious evil in "+this.dungeon_article.toLowerCase()+" "+this.dungeon+". Will you avenge "+this.npc.pronouns[1].toLowerCase()+" "+this.npc.relation+"?"
    this.summary="You agreed to help "+this.npc.article.toLowerCase()+" "+this.npc.race+" "+this.npc.profession+" by retrieving "+this.npc.pronouns[1].toLowerCase()+" "+this.item+" from "+this.npc.pronouns[1].toLowerCase()+" "+this.dungeon+"."
    this.success="You have successfully cleared the "+this.dungeon+" of its dangers making Skyrim a safer place for all.";
    this.finish="The "+this.npc.profession+" thanks you for bringing justice to such evil. "+this.npc.pronouns[0]+" hands you "+this.reward_article+" "+this.reward+"..."+this.reward_description;
      break;
    case 1://clear dungeon
      this.start="Once at the "+this.landmark+", "+this.npc.article.toLowerCase()+" "+this.npc.race+" "+this.npc.profession+" greets you. "+this.npc.pronouns[0]+" tells you of the terrible evil lurking in a nearby "+this.dungeon+" that has been terrorizing the "+this.landmark+". Will you lend your spell and steel to "+this.npc.pronouns[1].toLowerCase()+" cause?"
      this.summary="Ah, yes. You promised to help the people of the "+this.landmark+" by clearing the nearby "+this.dungeon+" of evil.";
      this.success="You have successfully cleared the "+this.dungeon+" of evil. This should earn you a generous reward.";
      this.finish= "The "+this.npc.race+" breathes a sigh of relief and thanks you for putting down every last one of those vile villains. They really had it coming. "+this.npc.pronouns[0]+" tosses you "+this.reward_article+" "+this.reward+"..."+this.reward_description;
      break;
    case 2:
      this.start="At the "+this.landmark+", "+this.npc.article.toLowerCase()+" "+this.npc.race+" "+this.npc.profession+" greets you. "+this.npc.pronouns[0]+" desperately needs you to retrieve "+this.item_article+" "+this.item+" from "+this.dungeon_article+" "+this.dungeon+". Will you help the "+this.npc.race+" "+this.npc.profession+"?";
      this.summary= "You scroll through your Journal menu for a refresher on your quest. You agreed to help "+this.npc.article.toLowerCase()+" "+this.npc.race+" "+this.npc.profession+" by retrieving "+this.npc.pronouns[1].toLowerCase()+" "+this.item+" from "+this.dungeon_article+" "+this.dungeon+".";
      this.success="You have successfully retrieved the "+this.item+". This should fetch a nice reward.";
      this.finish="The "+this.npc.profession+" looks at the "+this.item+", relieved. "+this.npc.pronouns[0]+" thanks you and rewards you with "+this.reward_article+" "+this.reward+"..."+this.reward_description;
      break;
    case 3:
      this.start="You meet "+this.npc.article.toLowerCase()+" "+this.npc.race+" "+this.npc.profession+" at the "+this.landmark+". "+this.npc.pronouns[0]+"\'s lost an item of great sentimental value—"+this.item_article+" "+this.item+". "+this.npc.pronoun[0]+" begs you to retrieve it for "+this.npc.pronouns[1].toLowerCase()+". Will you lend your aid to this desperate "+this.npc.profession+"?"
      this.summary= "You scroll through your Journal menu for a refresher on your quest. You agreed to help "+this.npc.article.toLowerCase()+" "+this.npc.race+" "+this.npc.profession+" by retrieving "+this.npc.pronouns[1].toLowerCase()+" "+this.item+" from "+this.dungeon_article+" "+this.dungeon+".";
      this.success="You pick up the "+this.item+", determined to return it to its rightful owner.";
      this.finish="The "+this.npc.race+" "+this.npc.profession+" thanks you for retrieving "+this.npc.pronouns[1].toLowerCase()+" "+this.item+". How could "+this.npc.pronouns[1].toLowerCase()+" live with it? As a reward, "+this.npc.pronouns[1].toLowerCase()+" gives you "+this.reward_article+" "+this.reward+"..."+this.reward_description;
  }

}

kakure.skyrim.encounters={};
kakure.skyrim.encounters.start=function(){}
kakure.skyrim.encounters.crossroads=function(){};
kakure.skyrim.encounters.q0=function(){};
kakure.skyrim.encounters.q1=function(){};
kakure.skyrim.encounters.accept=function(){};
kakure.skyrim.encounters.decline=function(){};
kakure.skyrim.xroads=[]
kakure.skyrim.encounters.crossroads = new Encounter({
  name:"kakure.skyrim.encounters.crossroads",
  title:"At the Crossroads",
  boxed_text:"",
  choices:["Do a sit-up"],
  outcomes:[situp],
  callback:function(){
    kakure.skyrim.xroads=[new Quest(), new Quest()];
    this.boxed_text=kakure.skyrim.traveling_messages[Math.round(Math.random()*(kakure.skyrim.traveling_messages.length-1))]+" In one direction is a "+kakure.skyrim.xroads[0].landmark+"; in the other is a "+kakure.skyrim.xroads[1].landmark+". Where would you like to go?";
    this.choices=[kakure.skyrim.xroads[0].landmark,kakure.skyrim.xroads[1].landmark];
    this.outcomes=[kakure.skyrim.encounters.q0,kakure.skyrim.encounters.q1];
  }
})

kakure.skyrim.encounters.start=kakure.skyrim.encounters.crossroads//FIX LATER

kakure.skyrim.encounters.q0=new Encounter({
  name:"kakure.skyrim.encounters.q0",
  title:"",
  boxed_text:"",
  choices:["Do a sit-up"],
  outcomes:[situp],
  callback:function(){
    kakure.skyrim.quest=kakure.skyrim.xroads[0]
    this.boxed_text=kakure.skyrim.quest.start;
    this.title="At the "+kakure.skyrim.quest.landmark
    this.choices=["Yes","No"];
    this.outcomes=[kakure.skyrim.encounters.accept,kakure.skyrim.encounters.crossroads]
  }
})

kakure.skyrim.encounters.q1=new Encounter({
  name:"kakure.skyrim.encounters.q1",
  title:"",
  boxed_text:"",
  choices:["Do a sit-up"],
  outcomes:[situp],
  callback:function(){
    kakure.skyrim.quest=kakure.skyrim.xroads[1]
    this.boxed_text=kakure.skyrim.quest.start;
    this.title="At the "+kakure.skyrim.quest.landmark
    this.choices=["Yes","No"];
    this.outcomes=[kakure.skyrim.encounters.accept,kakure.skyrim.encounters.crossroads]
  }
})
//==============================================================================
//                                Jim's Computer
//==============================================================================
pasokon = new Encounter({
	name:"pasokon",
	title:"Jim\'s Computer",
	boxed_text:"You inspect the computer, but you realize that there isn't a keyboard...",
	choices:["Go back"],
	outcomes:[bonezone],
	callback:function(){
      if(player.inventory.keyboard>0){
        this.boxed_text="You turn the TV on and plug your keyboard into the black box. You push some junk out of the way and sit down on the couch. What do you want to open?";
        this.choices=["Steam","Discord","File Explorer"];
        this.outcomes=[_steam,_discord,_files];
      }
	}
})

_steam = new Encounter({
	name:"_steam",
	title:"Steam",
	boxed_text:"You click the Steam icon on the desktop. Nothing happens. You open Task Manager and end Steam Client Bootstrapper. You click on the Steam icon again, and this time, it opens. You scroll through Jim\'s library, and The Elder Scrolls V: Skyrim catches your eye. Do you want to play Skyrim?",
	choices:["Play Skyrim","Don\'t Play Skyrim"],
	outcomes:[kakure.skyrim.encounters.crossroads,pasokon],
	callback:function(){

	}
})


frontdoor.gen()
