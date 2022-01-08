let completed = [];
let notCompleted = [];
let allTabs = ["All notes", "Completed", "Not completed"];
let activeTab = 0;

let list = document.querySelector("#list");

alert("Please add a new note to use features");

/*Adds new note as not completed*/
function addNote() {
    if(this.document.querySelector("#userInput").value != "")
    {
        notCompleted.push(this.document.querySelector("#userInput").value);
        this.document.querySelector("#userInput").value = "";
        
        if(activeTab === 0)
        {
            showAll();
            return;
        }
        else if(activeTab === 1)
        {
            showCompleted();
            return;
        }
        
        showNotCompleted();
        return;
    }
}
/**End of add note */

/**Clears all notes
 * NO EXCEPTION 
 */
function clearAll() {
    let answer = confirm("All notes will be deleted");

    if(answer)
    {
        while(completed.length != 0)
        {
            completed.pop();
        }

        while(notCompleted.length != 0)
        {
            notCompleted.pop();
        }
        list.innerHTML = "";
    }
}
/**End of clear all */

/**Shows all notes
 * Order: not completed first, then completed tasks
 */
function showAll() {
    list.innerHTML = "";
    for(let i = notCompleted.length - 1 ; i >= 0; i--)
    {
        var a = document.createElement("li");
        a.setAttribute("id", "item");
        a.setAttribute("onClick", "markAsCompleted(this)");
        a.classList.add("notCompleted");
        a.innerText = notCompleted[i];
        list.append(a);
    }

    for(let i = 0 ; i < completed.length; i++)
    {
        var a = document.createElement("li");
        a.setAttribute("id", "item");
        a.setAttribute("onClick", "markAsCompleted(this)");
        a.classList.add("completed");
        // a.setAttribute("style", "text-decoration: line-through; background-color: grey; color: #fff;")
        a.innerText = completed[i];
        list.append(a);
    }
}
/**End of show all */

/**Show completed method
 * Shows all completed tasks
 * iterating through completed list of tasks
 * works when user clicks on completed button
 */
function showCompleted() {
    list.innerHTML = "";
    for(let i = 0 ; i < completed.length; i++)
    {
        var a = document.createElement("li");
        a.setAttribute("id", "item");
        a.setAttribute("onClick", "markAsCompleted(this)");
        a.classList.add("completed");
        // a.setAttribute("style", "text-decoration: line-through; background-color: grey; color: #fff;")
        a.innerText = completed[i];
        list.append(a);
    }
}
/**End of showCompleted */

/**Show not completed method */
function showNotCompleted() {
    list.innerHTML = "";
    for(let i = notCompleted.length - 1 ; i >= 0; i--)
    {
        var a = document.createElement("li");
        a.setAttribute("id", "item");
        a.classList.add("notCompleted");
        a.setAttribute("onClick", "markAsCompleted(this)")
        a.innerText = notCompleted[i];
        list.append(a);
    }
}
/**End of show not completed */

/**Mark as completed
 * Currently under development
 * changes the status of task
 * and its appearance based on status
 */
function markAsCompleted(element) {

    let txt = element.innerText;
    if(completed.indexOf(txt) != -1)
    {
        notCompleted.push(txt);
        completed.splice(completed.indexOf(txt), 1);
    }
    else
    {
        completed.push(txt);
        notCompleted.splice(notCompleted.indexOf(txt), 1);
    }
    if(activeTab === 0)
    {
        showAll();
        return;
    }
    else if(activeTab === 1)
    {
        showCompleted();
        return;
    }
    
    showNotCompleted();
    return;

}
/**End of mark as completed */

/**Change tab method
 * Changes the appearance of active tab
 */
function changeTab(tab) {
    let tabs = document.getElementsByClassName("nav-link");
    for(let i = 0; i < tabs.length; i++)
    {
        tabs[i].setAttribute("style", "border: none");
    }

    tab.setAttribute("style", "border: 1px solid red;");
    activeTab = allTabs.indexOf(tab.innerText);
}
/**End of change tab method */

changeTab(document.getElementsByClassName("nav-link")[0]);
