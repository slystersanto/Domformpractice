function createlabels(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML=content;
return ele;

}

function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}

function linebreak(tagname){
    var ele=document.createElement(tagname);
    return ele;


}

var label=createlabels("label","for","fname","FirstName");
var br1=linebreak("br");
var input=createinput("input","type","text","id","fname");
var br2=linebreak("br");


var label1=createlabels("label","for","mname","MiddleName");
var br3=linebreak("br");
var input1=createinput("input","type","text","id","mname");
var br4=linebreak("br");


var label2=createlabels("label","for","lname","LastName");
var br5=linebreak("br");
var input2=createinput("input","type","text","id","lname");
var br6=linebreak("br");


var label3=createlabels("label","for","email","E-Mail");
var br7=linebreak("br");
var input3=createinput("input","type","text","id","email");
var br8=linebreak("br");


document.body.append(label,br1,input,br2,label1,br3,input1,br4,label2,br5,input2,br6,label3,br7,input3,br8);




