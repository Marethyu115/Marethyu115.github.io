var themeButton = document.getElementById("themeButton")       //gets the theme button
var fontUpButton = document.getElementById("fontUpButton")     //gets the font up button
var fontDownButton = document.getElementById("fontDownButton") //gets the font down button
var ss = document.styleSheets[0]                               //gets the first stylesheet, which is style.css
var themeChange = ss.rules[0]                                  //gets the first rule of style.css, for theme change
var fontSizeChange = ss.rules[1]                               //gets the second rule kf style.css, for font change
    
var i=0                                                        //index for color array
var color =["#efefef","#7fdbff","#d5f5e3","#d7bde2","#fcf3cf","#fcacac"]    //color array
var fontPercent = 100                                          //numeric value for font-size percentage
var fontPercentIn                                              //value to be inputted in the css via js

if (localStorage.getItem("ival") !== null){
	themeChange.style.background = color[localStorage.getItem("ival")]
	i = localStorage.getItem("ival")
} 

themeButton.addEventListener("click",                          //changes the background color to the color with the index number in array onclick
    function(){
    i=i < color.length ? ++i :0                                //increments i every click and resets i to 0 if its value exceeds the length value of the array
    themeChange.style.background = color[i]                    //sets the background to color[i]
	localStorage.setItem("ival", i)
})

if (localStorage.getItem("fontSize") !== null){
	fontSizeChange.style.fontSize = localStorage.getItem("fontSize")
	fontPercentIn = localStorage.getItem("fontSize")
}

fontUpButton.addEventListener("click",                         //increments the font size by 10% per click
    function(){
    fontPercent = fontPercent + 10                             //adds numeric value
    fontPercentIn = fontPercent + "%"                          //places the percent sign as a string
    fontSizeChange.style.fontSize = fontPercentIn              //sets the value of the font size to the new size
	localStorage.setItem("fontSize", fontPercentIn)
})

fontDownButton.addEventListener("click",                       //decrements the font size by 10% per click
    function(){
    fontPercent = fontPercent - 10                             //subtracts numeric value
    fontPercentIn = fontPercent + "%"                          //places the percent sign as a string
    fontSizeChange.style.fontSize = fontPercentIn              //sets the value of the font size to the new size
	localStorage.setItem("fontSize", fontPercentIn)
}) 












