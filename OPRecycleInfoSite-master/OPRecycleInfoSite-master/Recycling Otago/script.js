var invalid;

function allowDrop(ev)
{
    ev.preventDefault();
}
function drag1(ev)
{
    invalid = "1";
    ev.dataTransfer.setData("Text", ev.target.id);
}
function drag2(ev)
{
    invalid = "2";
    ev.dataTransfer.setData("Text", ev.target.id);
}
function drag3(ev)
{
    invalid = "3";
    ev.dataTransfer.setData("Text", ev.target.id);
}
function drop2 (ev)
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");

    if(invalid != "2")
    {
        window.alert("That's not right. Try again!");
    }
    else
    {
        var two = document.getElementById("drag2");
        window.alert("Correct!");
        two.style.display = "none"
    }
    
}
function drop1 (ev)
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");

    if(invalid != "1")
    {
        window.alert("That's not right. Try again!");
    }
    else
    {
        var one = document.getElementById("drag1");
        window.alert("Correct!");
        one.style.display = "none";        
    }
    
}
function drop3 (ev)
{
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");

    if(invalid != "3")
    {
        window.alert("That's not right. Try again!");
    }
    else
    {
        var three = document.getElementById("drag3");
        window.alert("Correct!");
        three.style.display = "none"
    }
    
}
function reset(){
    var one = document.getElementById("drag1");
    var two = document.getElementById("drag2");
    var three = document.getElementById("drag3");
    one.style.display = "block";
    two.style.display = "block";
    three.style.display = "block";
}
function showhideanswers() {
    var hidden = document.getElementById("answers");
    if ( hidden.style.display === "block") {
        hidden.style.display = "none";
    } else {
        hidden.style.display = "block";
    }
}
