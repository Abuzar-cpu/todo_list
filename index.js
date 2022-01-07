let allNotes = [];
let completed = [];
let notCompleted = [];


let list = document.querySelector("#list");

function addNote() {
    if(this.document.querySelector("#userInput").value != "")
    {
        allNotes.push(this.document.querySelector("#userInput").value);
        notCompleted.push(this.document.querySelector("#userInput").value);
        this.document.querySelector("#userInput").value = "";
        // console.log(allNotes);
        
        list.innerHTML = "";
        for(let i = 0 ; i < allNotes.length; i++)
        {
            var a = document.createElement("li");
            a.setAttribute("id", "item");
            a.setAttribute("onClick", "markAsCompleted(this)")
            a.innerText = allNotes[i];
            list.append(a);
        }
    }
}

function clearAll() {
    let answer = confirm("All notes will be deleted");

    if(answer)
    {
        while(allNotes.length != 0)
        {
            allNotes.pop();
        }

        while(notCompleted.length != 0)
        {
            notCompleted.pop();
        }
        list.innerHTML = "";
    }
}

function showAll() {
    list.innerHTML = "";
    for(let i = 0 ; i < allNotes.length; i++)
    {
        var a = document.createElement("li");
        a.setAttribute("id", "item");
        a.setAttribute("onClick", "markAsCompleted(this)")
        a.innerText = allNotes[i];
        list.append(a);
    }
}

function showCompleted() {
    list.innerHTML = "";
    for(let i = 0 ; i < completed.length; i++)
    {
        var a = document.createElement("li");
        a.setAttribute("id", "item");
        a.setAttribute("style", "text-decoration: line-through; background-color: grey; color: #fff;")
        a.innerText = completed[i];
        list.append(a);
    }
}

function showNotCompleted() {
    list.innerHTML = "";
    for(let i = 0 ; i < notCompleted.length; i++)
    {
        var a = document.createElement("li");
        a.setAttribute("id", "item");
        a.setAttribute("onClick", "markAsCompleted(this)")
        a.innerText = notCompleted[i];
        list.append(a);
    }
}

function markAsCompleted(element) {
    let completedNow = notCompleted.pop(element.innerText);
    // console.log(completedNow);
    if(completedNow != undefined)
    {
        completed.push(completedNow);
        element.setAttribute("style", "text-decoration: line-through; background-color: grey; color: #fff;")
    }
}


//TODO: Complete this task using the code belows

// function addNote() {
//     if(this.document.querySelector("#userInput").value != "")
//     {
//         allNotes.push(this.document.querySelector("#userInput").value);
//         this.document.querySelector("#userInput").value = "";
//         // console.log(allNotes);
        
//         list.innerHTML = "";
//         for(let i = 0 ; i < allNotes.length; i++)
//         {
//             var a = document.createElement("li");

//             var cardBorder = document.createElement("div");
//             cardBorder.setAttribute("class", "card border-primary mb-auto mt-5");
//             cardBorder.setAttribute("style", "width: 50vw;");

//             var cardHeader = document.createElement("div");
//             cardHeader.setAttribute("class", "card-header");

//             var cardBody = document.createElement("div");
//             cardBody.setAttribute("class", "card-body text-primary");

//             var h5 = document.createElement("h5");
//             h5.setAttribute("class", "card-title");

//             var p = document.createElement("p");
//             h5.setAttribute("class", "card-text");

//             cardBody.appendChild(p);
//             cardBody.appendChild(h5);
//             cardBorder.appendChild(cardHeader);
//             cardBorder.appendChild(cardBody);

//             a.append(cardBorder);
//             a.innerText = allNotes[i];
//             list.append(a);
//         }
//     }
// }