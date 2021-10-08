const newTask = document.getElementById("Task-input");
const newTaskBtn = document.getElementById("Add-task");
const addedTask = document.getElementById("added-tasks");
const search = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const Tasks_div = document.getElementById("Tasks"); 
const cancelBtn = document.getElementById("return-button");
const selector = document.getElementById("selector");
let tasks = [];
let count = 0;

// Functions
function task(task) {
    this.task = task;
    this.status = "Uncompleted";
  }
function showTask(task,status){
    const NewDiv = document.createElement("div");
    const new_checkbox = document.createElement("input");
    const NewTask = document.createElement("p");
    var deleteBtn = document.createElement("button");
    NewDiv.setAttribute("class","uncompleted linea line");
    NewDiv.setAttribute("id","task-line" + count);
    new_checkbox.setAttribute("type","checkbox");
    new_checkbox.setAttribute("class","checkbox");
    NewTask.textContent = task;
    deleteBtn.setAttribute("class","button");
    deleteBtn.setAttribute("id",count);
    deleteBtn.innerText="Delete task";
    addedTask.append(NewDiv);
    NewDiv.append(new_checkbox, NewTask, deleteBtn);
    console.log(tasks);

    deleteBtn.addEventListener("click", function(){
        NewDiv.remove();
        count--;
        tasks.splice(parseInt(deleteBtn.id),1);
        console.log(tasks);
    });
    new_checkbox.addEventListener("click",function(){
        if(new_checkbox.checked){
            NewDiv.setAttribute("class", "completed linea line");
        } else{
            NewDiv.setAttribute("class", "uncompleted linea line");
        }
    });
}
function status_task(){
    task.status = Completed;
}
function search_task(){
    let find = search.value;
    if(tasks.find(x => x.task == find)){
        for(let i = 0; i<tasks.length; i++){
            let obj = tasks[i];
            if(find !== obj.task){
                // Solucionar error hideDive = null
                // id task-line se elimina por lo que se salta numeros
                // y ya no existe, por eso es el null
                // Se necesita cambiar lógica de oculatmiento, quizá 
                // cambiar el ciclo
                console.log("i= " + i);
                let hideDiv = document.getElementById("task-line" + i);
                hideDiv.style.display = "none";
            }
        }
    }else{
        alert("Task doesn't exist");
    }
}
function show_all_tasks(){
    for (let i = 0; i<tasks.length; i++){
        const shownTask = document.getElementById("task-line" + i);
        shownTask.style.display = "flex";
    }
}
function filter(){
    let option = selector.selectedIndex;
    const completed_array = document.getElementsByClassName('completed');
    const completed_arr = Array.prototype.slice.call(completed_array);
    const uncompleted_array = document.getElementsByClassName('uncompleted');
    const uncompleted_arr = Array.prototype.slice.call(uncompleted_array);

    switch(option){
        case 1:
            console.log("Completed");
            completed_arr.forEach(element =>  {
                element.style.display="flex";
            });
            uncompleted_arr.forEach(element =>  {
                element.style.display="none";
            });
            break;
        case 2:
            console.log("Uncompleted");
            uncompleted_arr.forEach(element =>  {
                element.style.display="flex";
            });
            completed_arr.forEach(element =>  {
                element.style.display="none";
            });
            break;
        case 3:
            console.log("All");
            completed_arr.forEach(element =>  {
                element.style.display="flex";
            });
            uncompleted_arr.forEach(element =>  {
                element.style.display="flex";
            });
            break;

    }

}

// Events
newTaskBtn.addEventListener("click",function(){
    tasks.push(new task(newTask.value));
    showTask(tasks[count].task,tasks[count].status);
    newTask.value = "";
    count++;
});
searchBtn.addEventListener("click",function(){
    search_task();
});
cancelBtn.addEventListener("click", function(){
    show_all_tasks();
})
selector.addEventListener("input",function(){
    filter();
})



