kakure.presidents={hearts:3};
kakure.presidents.start=function(){}
kakure.presidents.opening=function(){console.log("blank")};
kakure.presidents.library=function(){console.log("blank")};
kakure.presidents.mall=function(){console.log("blank")};
kakure.presidents.bar=function(){console.log("blank")};
kakure.presidents.obama=function(){console.log("blank")};
kakure.presidents.bushsr=function(){console.log("blank")};
kakure.presidents.bushjr=function(){console.log("blank")};
kakure.presidents.clinton=function(){console.log("blank")};

kakure.presidents.start= new Encounter({
 name:"kakure.presidents.start",
 title:"Going Undercover",
 boxed_text:"For this mission, you will need to go undercover.",
 choices:["Get into character"],
 outcomes:[kakure.presidents.opening],
 callback:function(){

 }
})

kakure.presidents.opening = new Encounter({
	name:"kakure.presidents.opening",
	title:"",
	boxed_text:"You are a 23-year-old college graduate. You\'ve been unemployed and living in your parents\' house in Washington, D.C. ever since you graduated with an advertising and marketing degree worth less than the paper its\' printed on.<br \/><br \/>You can\'t impress anybody with a pointless degree like that.<br \/><br \/>It looks like you\'ll have to set out today to find a job on your own!<br \/><br \/>Where do you want to go first?",
	choices:["The library","The mall","The bar"],
	outcomes:[kakure.presidents.library,kakure.presidents.mall,kakure.presidents.bar],
	callback:function(){

	}
})

kakure.presidents.library = new Encounter({
	name:"kakure.presidents.library",
	title:"",
	boxed_text:"You\'re not going to find any work HERE!<br \/><br \/>You did find a flyer announcing a presidential meet and greet at the mall, though.",
	choices:["Go to the mall"],
	outcomes:[kakure.presidents.mall],
	callback:function(){

	}
})

kakure.presidents.bar = new Encounter({
	name:"kakure.presidents.bar",
	title:"",
	boxed_text:"It\'s too early in the morning; the bar\'s closed.<br \/><br \/>You could try the mall or the library.",
	choices:["The mall","The library"],
	outcomes:[kakure.presidents.mall,kakure.presidents.library],
	callback:function(){

	}
})

kakure.presidents.mall = new Encounter({
	name:"kakure.presidents.mall",
	title:"",
	boxed_text:"You arrive at the mall.<br \/><br \/>You look around, and see a flyer announcing a presidential meet and greet.<br \/><br \/>You walk around, searching for the event.<br \/><br \/>You find the presidents in the food court.<br \/><br \/>Which one should you approach?",
	choices:["Obama","Bush Sr.","Bush Jr.","Clinton"],
	outcomes:[kakure.presidents.obama,kakure.presidents.bushsr,kakure.presidents.bushjr,kakure.presidents.clinton],
	callback:function(){

	}
})

bushsr = new Encounter({
	name:"bushsr",
	title:"",
	boxed_text:"\"Hello!\"<br \/><br \/>\"I see you\'re a woman...\"<br \/><br \/>\"Read my lips:\"<br \/><br \/>\"NO. NEW. SECRETARIES.\"<br \/><br \/>It looks like you\'ll have to try somebody else...<br \/><br \/>",
	choices:["Obama","Bush Jr.","Clinton"],
	outcomes:[kakure.presidents.obama,kakure.presidents.bushjr,kakure.presidents.clinton],
	callback:function(){

	}
})

_monogram = new Encounter({
	name:"_monogram",
	title:"Secret Mission",
	boxed_text:"As soon as you don the fedora, you notice that you are standing on a trapdoor. The trapdoor opens, and you slide down a long dark tube. After some time, you see a faint light ahead of you, which grows brighter until you slide out of the tube and into a wide open room.<br \/><br \/>You notice a number of gadgets and trinkets lining the walls as you make your way over to a red seat facing a large screen.<br \/><br \/>The blinks to life as you see the image of a man with a white buzzcut, a white mustache, and a unibrow wearing a green uniform monogrammed \"MM.\"<br \/><br \/>\"Agent P,\" he says, \"Former US President Donald Trump has been assassinated. We believe that this is the work of Dr. Doofenshmirtz. We have recieved a request from the secret service to run security detail at the presidential meet and greet today. You are the only one who can stop him. Good luck, Agent P.\"",
	choices:["Tip your fedora, and hop into the nearby platypus-shaped hover car.","Try your luck crawling back up the tube."],
	outcomes:[kakure.presidents.start,shed],
	callback:function(){

	}
})
