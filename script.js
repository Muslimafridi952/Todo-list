function addTask() {
    var taskInput = document.getElementById("taskinput");
    var taskList = document.getElementById("tasklist");

    if (!taskInput.value.trim()) {
        return alert("TODO CONNOT BE EMPTY!");

    }
    
    var li = document.createElement('li');
    li.textContent = taskInput.value;

   


} 