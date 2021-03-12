function dasshutsu(str){
  var output = str
  output = output.replace(/\\/g,"\\\\")
  output = output.replace(/[\u2018\u2019]/g, "'")
  output = output.replace(/[\u201C\u201D]/g, '"');
  output = output.replace(/\"/g,"\\\"")
  output = output.replace(/\'/g,"\\\'")
  output = output.replace(/\//g,"\\\/")
  output = output.replace(/\&/g,"\\\&")
//  output = output.replace(/\n/g,"\\n")
  return output
}

var Name = document.getElementById("name")
var Title = document.getElementById("title")
var Boxtext = document.getElementById("boxtext")

var Codebox = document.getElementById("codebox")

var Choices = document.getElementById("choices")
var nC = 1

function write(){
  var Code = dasshutsu(Name.value)+" = new Encounter({\n"

  var kagi = ["name","title","boxed_text"]
  var elements = [Name,Title,Boxtext]

  for(i=0;i<kagi.length;i++){
    Code+="\t"+kagi[i]+":\""+dasshutsu(elements[i].value)+"\",\n"
  }

  var sentaku = "["
  var kekka = "["
    for(k=1;k<=nC;k++){
      sentaku+="\""+dasshutsu(document.getElementById("choice"+k).value)+"\","
      kekka+=dasshutsu(document.getElementById("outcome"+k).value)+","
      //Code+="\t"+kagi[i]+":\""+dasshutsu(elements[i].value)+"\",\n"
    }
  sentaku=sentaku.slice(0,-1)
  kekka=kekka.slice(0,-1)
  sentaku+="]"
  kekka+="]"
  Code+="\tchoices:"+sentaku+",\n"
  Code+="\toutcomes:"+kekka+",\n"
  Code+="\tcallback:function(){\n\n\t}\n"
//    Code+="\t"+kagi[kagi.length-1]+":\""+dasshutsu(elements[kagi.length-1].value)+"\"\n"

  Code+="})"
  Codebox.value = Code
}

function vetname(element){
    element.value=element.value.replace(/[.*+\'\"?^${}()|[\]\\]/g,"")
    element.value=element.value.replace(/ /g,"")
    for(j=0;j<10;j++){
      while(element.value.indexOf(j)==0){
        element.value=element.value.slice(1)
      }
    }
    element.value=element.value.toLowerCase()
}

function vetnames(){
    vetname(Name)
  for(k=1;k<=nC;k++){
    vetname(document.getElementById("outcome"+k))
  }
}

function addchoices(){
  for(k=1;k<=nC;k++){
    document.getElementById("choice"+k).innerHTML=document.getElementById("choice"+k).value
    document.getElementById("outcome"+k).innerHTML=document.getElementById("outcome"+k).value
  }
  nC++
  Choices.innerHTML+="<tr><td>"+nC+"</td><td><textarea cols=50 rows=2 id=\"choice"+nC+"\"></textarea></td><td><textarea id=\"outcome"+nC+"\"></textarea></td></tr>"
}


document.addEventListener("keyup",vetnames)
document.addEventListener("keyup",write)
document.getElementById("addchoice").addEventListener("click",addchoices)
