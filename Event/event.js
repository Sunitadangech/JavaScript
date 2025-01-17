let button=document.getElementById("btn");
button.addEventListener("click",()=>{
    let head=document.createElement("h1")
    document.body.appendChild(head)
    
    let text=document.createTextNode("Hello World Good MOrning!!!!!")
    head.appendChild(text);
})