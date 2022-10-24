
var myTitle ;

var myFeature = document.getElementById("Feature");
var myBug = document.getElementById("Bug");
var myType;

var priority = document.getElementById("formSelectPriority");
var arr_Priority = Array.from(priority)
var myPriority;

var statuss =  document.getElementById("formSelectStatus");
var arr_Status = Array.from(statuss);
var myStatus;

var myDate
var myDescription

function createTask() {
    myTitle = document.getElementById("formTitle").value;

    if(myFeature.checked) {myType= document.getElementById("Feature").id}
    if(myBug.checked){myType= document.getElementById("Bug").id;}
    // myType = document.querySelector('input[name="flexRadioDefault"]:checked').value;

    arr_Priority.forEach(function(option){
        if(option.selected){
            myPriority = option.value
        }
    })
    
    arr_Status.forEach(function(option){
        if(option.selected){
            myStatus = option.value
        }
    })

    myDate=document.getElementById("endDate").value
    myDescription = document.getElementById("formTextarea").value

    tasks.push({
        title        : myTitle,
        type         : myType,
        priority     : myPriority,
        status       : myStatus,
        date         : myDate,
        description  : myDescription,
    })
    readTask()
    document.getElementById("form").reset() 
}


var index;


function readTask(){
    document.getElementById("to-do-tasks").innerHTML= '';
    document.getElementById("in-progress-tasks").innerHTML='';
    document.getElementById("done-tasks").innerHTML='';

    let to_do_count       = 0;
    let in_progress_count = 0;
    let done_count        = 0;
    
    for(let i = 0; i < tasks.length; i++){
        index = i;
        if( tasks[i].status === "To Do"){
            to_do_count++;
            document.getElementById("to-do-tasks-count").innerHTML = to_do_count;
            document.getElementById("to-do-tasks").innerHTML +=
            `<button id="edit-btn" type="button" data-bs-toggle="modal" data-bs-target="#modal-task-edit" class="w-100 border-0 mb-1 bg-white d-flex" onclick="editTask(${index})" >
                <div class="p-2">
                    <i class="bi bi-question-circle text-green-500 fs-4"></i> 
                </div>
                <div class="d-flex flex-column text-start py-2">
                    <div class="fw-bolder h5 mb-1 ">  ${tasks[i].title}</div>
                    <div class="d-flex flex-column text-start">
                        <div class="text-gray-600 mb-1">#1 created in  ${tasks[i].date}</div>
                        <div class="mb-2 text-truncate" style="max-width: 16rem;" title="${tasks[i].description}"> ${tasks[i].description}</div>
                    </div>
                    <div class="">
                        <span class="rounded px-2 py-1 text-white bg-cyan-600"> ${tasks[i].priority}</span>
                        <span class="btn btn-secondary px-2 py-1"> ${tasks[i].type}</span>
                    </div>
                </div>
            </button> `
        }
        if(tasks[i].status === "In Progress"){
            in_progress_count++;
            document.getElementById("in-progress-tasks-count").innerHTML = in_progress_count;
            document.getElementById("in-progress-tasks").innerHTML +=
            `<button id="edit-btn" type="button" data-bs-toggle="modal" data-bs-target="#modal-task-edit" class="w-100 border-0 mb-1 bg-white d-flex" onclick="editTask(${index})">
                <div class="p-2">
                    <i class="bi bi-question-circle text-green-500 fs-4"></i> 
                </div>
                <div class="d-flex flex-column text-start py-2">
                    <div class="fw-bolder h5 mb-1 ">  ${tasks[i].title}</div>
                    <div class="d-flex flex-column text-start">
                        <div class="text-gray-600 mb-1">#1 created in  ${tasks[i].date}</div>
                        <div class="mb-2 text-truncate" style="max-width: 16rem;" title="${tasks[i].description}"> ${tasks[i].description}</div>
                    </div>
                    <div class="">
                    <span class="rounded px-2 py-1 text-white bg-cyan-600"> ${tasks[i].priority}</span>
                    <span class="btn btn-secondary px-2 py-1"> ${tasks[i].type}</span>
                    </div>
                </div>
            </button> `
        }
        if(tasks[i].status === "Done" ){
            done_count++;
            document.getElementById("done-tasks-count").innerHTML = done_count;
            document.getElementById("done-tasks").innerHTML +=
            `<button id="edit-btn" type="button" data-bs-toggle="modal" data-bs-target="#modal-task-edit" class="w-100 border-0 mb-1 bg-white d-flex" onclick="editTask(${index})">
                <div class="p-2">
                    <i class="bi bi-question-circle text-green-500 fs-4"></i> 
                </div>
                <div class="d-flex flex-column text-start py-2">
                    <div class="fw-bolder h5 mb-1 ">  ${tasks[i].title}</div>
                    <div class="d-flex flex-column text-start">
                        <div class="text-gray-600 mb-1">#1 created in  ${tasks[i].date}</div>
                        <div class="mb-2 text-truncate" style="max-width: 16rem;" title="${tasks[i].description}">${tasks[i].description} </div>
                    </div>
                    <div class="">
                    <span class="rounded px-2 py-1 text-white bg-cyan-600"> ${tasks[i].priority}</span>
                    <span class="btn btn-secondary px-2 py-1"> ${tasks[i].type}</span>
                    </div>
                </div>
            </button> `
        }
    }
}


function editTask(index){
    document.getElementById("modal-task-edit").innerHTML = `
    <div class="modal-dialog">
        <form  class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add task</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div class="mb-3">
                <label  class="form-label">Title</label>
                <input type="text" class="form-control" id="formTitle-edit">
                <label  class="form-label mt-10px">Type</label>
                <div class="form-check ms-3">
                    <input class="form-check-input" type="radio" value="Feature" name="radio-edit" id="feature-edit" >
                    <label class="form-check-label" >Feature</label>
                </div>
                <div class="form-check ms-3">
                    <input class="form-check-input" type="radio" value="Bug" name="radio-edit" id="bug-edit">
                    <label class="form-check-label" >Bug</label>
                </div>
                <label class="form-label mt-1">Priority</label>
                <select class="form-select form-select-lg mb-3" id="formSelectPriority-edit" aria-label=".form-select-lg example">
                    <option  disabled selected>Please select</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                    <option value="Critical">Critical</option>
                </select>
                <label  class="form-label mt-1">Status</label>
                <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example" id="formSelectStatus-edit">
                    <option disabled selected>Please select</option>
                    <option value="To Do">To Do</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Done">Done</option>
                </select>
                <label  class="form-label mt-1">Date</label>
                <div>
                    <input type="date" id="endDate-edit" name="trip-start"
                    value="yyyy-MM-dd" class="form-control mb-3"
                    min="2021-01-01" max="2023-12-31">
                </div>
                <div class="mb-3">
                    <label class="form-label">Description</label>
                    <textarea class="form-control" id="formTextarea-edit" rows="3"></textarea>
                </div>
                <div class="modal-footer">
                    <button type="button"  class="btn btn-light text-dark" data-bs-dismiss="modal">Close</button>
                    <button type="button" id="update" onclick="updateTask(${index})" class="btn btn-success" data-bs-dismiss="modal">Update</button>
                    <button type="button" id="delete" onclick="deleteTask(${index})" class="btn btn btn-danger" data-bs-dismiss="modal">Delete</button>
                    </div>
                </div>
            </div>
        </form>
    </div>`
    document.getElementById("formTitle-edit").value          = (tasks[index].title);
    if(tasks[index].type === "Bug"){document.getElementById("bug-edit").checked = true};
    if(tasks[index].type === "Feature"){document.getElementById("feature-edit").checked = true};
    document.getElementById("formSelectPriority-edit").value = (tasks[index].priority);
    document.getElementById("formSelectStatus-edit").value   = tasks[index].status;
    document.getElementById("endDate-edit").value            = tasks[index].date;
    document.getElementById("formTextarea-edit").value       = tasks[index].description;
}


function updateTask(index) {
    tasks[index].title       = document.getElementById("formTitle-edit").value;
    tasks[index].type        = document.querySelector('input[name="radio-edit"]:checked').value;
    tasks[index].priority    = document.getElementById("formSelectPriority-edit").value;
    tasks[index].status      = document.getElementById("formSelectStatus-edit").value;
    tasks[index].date        = document.getElementById("endDate-edit").value;
    tasks[index].description = document.getElementById("formTextarea-edit").value;
    readTask()
}


function deleteTask(index) {
    tasks.splice(index, 1);
    readTask()
}
