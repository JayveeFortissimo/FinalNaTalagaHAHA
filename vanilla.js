
const ToAppend = document.querySelector(".To-Append ul");
const See = document.querySelector(".To-Append");
const createList = document.createElement("li");
const createList1 = document.createElement("li");
const createList2 = document.createElement("li");
const createList3 = document.createElement("li");
const createDiv = document.createElement("div");

const Button = document.querySelectorAll(".BTNS button")

Button.forEach((element,index)=>{

element.addEventListener("click",(e)=>{
    e.preventDefault();

    See.style.visibility = "visible"
 
switch(index){

    case 0:

      createList.textContent = "React is extremely popular";
        createList1.textContent = "It makes building complex, interactive UIs a breeze";
        createList2.textContent = "It's powerful & flexible";
        createList3.textContent = "It has a very active and versatile ecosystem";
        ToAppend.append(createList,createList1,createList2,createList3);
        break;
    case 1:

    createList.textContent = "Components, JSX & Props";
    createList1.textContent = "State";
    createList2.textContent = "Hooks(e.g.. UseEffect()";
    createList3.textContent = "Dynamic rendering";
    ToAppend.append(createList,createList1,createList2,createList3);

    break;

    case 2:
        createList.textContent = "Official web Page";
        createList1.textContent = "INext js(fullStack Framework";
        createList2.textContent = "React Native(Build natime mobile appswith react)";
        ToAppend.append(createList,createList1,createList2);
    
    break;


}

    
});


element.addEventListener("mouseover",()=>{
    element.style.backgroundColor = 'yellow';
    element.style.color = 'black'
    
})


element.addEventListener("mouseout",()=>{
   
    element.style.backgroundColor = 'rgb(15, 15, 15)'
})



})





