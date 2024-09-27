function addTask() {
    var taskInput = document.getElementById("taskinput");
    var taskList = document.getElementById("tasklist");

    if (!taskInput.value.trim()) {
        return alert("TODO LIST CON'T BE EMPTY!");

    };
    
    var li = document.createElement('li');
    li.textContent = taskInput.value;

    var removeButton = document.createElement('button');
    removeButton.textContent = 'DELETE';
    removeButton.className = 'remove-btn';
    removeButton.onclick = function () {
        taskList.removeChild(li);

    };   
        
        li.onclick = function() {
            li.classList.toggle('completed');

    };

    li.appendChild(removeButton);
    taskList.appendChild(li);
    taskInput.value = '';    
    
};

    


