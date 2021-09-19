const newTask = document.getElementById("Task-input");
const newTaskBtn = document.getElementById("Add-task");
const addedTask = document.getElementById("added-tasks");

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

    NewDiv.setAttribute("class","linea line")
    NewDiv.setAttribute("id","task-line")
    new_checkbox.setAttribute("type","checkbox");
    new_checkbox.setAttribute("class","checkbox");
    NewTask.textContent = task;
    deleteBtn.setAttribute("class","button");
    deleteBtn.innerText="Delete task";

    addedTask.append(NewDiv);
    NewDiv.append(new_checkbox, NewTask, deleteBtn);

    deleteBtn.addEventListener("click", function(){
        NewDiv.remove();
    });
    new_checkbox.addEventListener("click",function(){
        
    })
}

// Events
newTaskBtn.addEventListener("click",function(){
    tasks.push(new task(newTask.value));
    console.log(tasks);
    console.log(tasks[count].task);
    showTask(tasks[count].task,tasks[count].status);
    newTask.value = "";
    count++;
});

function status_task(){
    task.status = Completed;
}