let allNotes = [];
let completed = [];
let notCompleted = [];


let list = document.querySelector("#list");

function addNOte() {
    if(this.document.querySelector("#userInput").value != "")
    {
        allNotes.push(this.document.querySelector("#userInput").value);
        this.document.querySelector("#userInput").value = "";
        console.log(allNotes);
        
        list.innerHTML = "";
        for(let i = 0 ; i < allNotes.length; i++)
        {
            var a = document.createElement("li");
            a.innerText = allNotes[i];
            list.append(a);
        }
    }
}

function clearAll() {
    while(allNotes.length != 0)
    {
        allNotes.pop();
    }
    list.innerHTML = "";
}