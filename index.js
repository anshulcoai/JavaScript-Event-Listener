a=document.getElementById("para1")
b=document.getElementById("para2")
c=document.getElementById("btn1")
c.addEventListener
(
    "click",
    function()
    {
    a1=(window.getComputedStyle(b).display)
    b.style.display="block"
    a.style.display="none"
    }
)


d=document.getElementById("div1")
e=document.getElementById("btn2")
e.addEventListener
(
  "mouseover",
  function()
  {
    a2=(window.getComputedStyle(d).backgroundColor)
    d.style.backgroundColor="yellow"
  }

)


a3=document.getElementById("div1")
f=document.getElementById("btn2")
f.addEventListener
(
    "mouseout",
    function()
    {
        a3.style.backgroundColor="white"
    }
)


y=document.getElementById("btn3")
y.addEventListener
(
  "click",
  function()
  {
    x=document.getElementById("inp3").value
    alert(`You Entered : ${x}`);
  }

)

x1=document.getElementById("div2")
y1=document.getElementById("btn4")
y1.addEventListener
(
  "click",
  function()
  {
   if (x1.style.display=="none")
   {
     x1.style.display="block"
   }
   else
   {
    x1.style.display="none"
   }

  }
)

x2=document.getElementById("img1")
y2=document.getElementById("img2")
x2.addEventListener
(
  "mouseover",
  function()
  {
   y2.style.display="block"
   x2.style.display="none"
   y2.style.transitionDuration="2s"
  }
)


x3=document.getElementById("img1")
y3=document.getElementById("img2")
y3.addEventListener
(
  "mouseout",
  function()
  {
   y2.style.display="none"
   x2.style.display="block"
   x2.style.transitionDuration="2s"
  }
)

function dollar(event)
{
  x4= event.key
  alert(`You pressed : ${x4} `)  
}

x5=document.getElementById("link1")
x5.addEventListener
(
   "click",
   function(event)
   {
    event.preventDefault()
    alert("You Can't open the link")
   }

)


x6=document.getElementById("btn5")
x7=document.getElementById("btn6")
y6=document.getElementById("para3")
y7=document.getElementById("para4")
x6.addEventListener
(
  "dblclick",
  function()
  {
    y6.style.display="none"
    x6.style.display="none"
    y7.style.display="block"
    x7.style.display="block"
  }
)

x7.addEventListener
(
  "click",
  function()
  {
    y6.style.display="block"
    x7.style.display="none"
    x6.style.display="block"
    y7.style.display="none"
  }
)

aa=document.getElementById("btn7")
aa.addEventListener
(
  "click",
  function()
  {
    aa.style.display="none"
  }
)


an1=document.getElementById("btn8")
an1.addEventListener
(
  "click",
  function()
  {
   console.log("First Listener")
  }
)

sh1=document.getElementById("btn8")
sh1.addEventListener
(
  "click",
  function()
  {
   console.log("Second Listener")
  }
)

hu=document.getElementById("btn9")
hu.addEventListener
(
  "click",
  function()
  {
    f5=document.getElementById("div9")
    f5.style.backgroundColor="black"
  }

)

jk=document.getElementById("inp8")
jk.addEventListener
(
  "keydown",
  function(event)
  {
    x=event.key
    alert(`you pressed :${x}`)
  }
)


l1=document.getElementById("div9")
l1.addEventListener
(
  "mouseover",
   function()
  {
    ko=document.getElementById("div9")
    ko.style.backgroundColor="red"
  }
)

j1=document.getElementById("div9")
j1.addEventListener
(
  "mouseout",
   function()
  {
    y1=document.getElementById("div9")
    y1.style.backgroundColor="green"
  }
)

e2=document.getElementById("btn10")
e2.addEventListener
(
  "click",
  function()
  {
    p9=document.getElementById("para8").innerHTML="How Are You??"
  }
)