function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        // Get additional task details
        var deadline = prompt("Enter the deadline (YYYY-MM-DD):");
        var priority = prompt("Enter the priority (Low/Medium/High):");
        var labels = prompt("Enter labels (comma-separated):");

        var li = document.createElement("li");
        var titleSpan = document.createElement("span");
        var detailsDiv = document.createElement("div"); // Container for additional details
        var deadlineSpan = document.createElement("span");
        var prioritySpan = document.createElement("span");
        var labelsSpan = document.createElement("span");
        var deleteButton = document.createElement("button");

        // Set task title
        titleSpan.appendChild(document.createTextNode(taskInput.value));
        titleSpan.style.flex = "1"; // Equal spacing
        li.appendChild(titleSpan);

        // Set additional details
        deadlineSpan.appendChild(document.createTextNode(deadline));
        prioritySpan.appendChild(document.createTextNode(priority));
        labelsSpan.appendChild(document.createTextNode(labels));

        detailsDiv.appendChild(deadlineSpan);
        detailsDiv.appendChild(prioritySpan);
        detailsDiv.appendChild(labelsSpan);
        detailsDiv.style.display = "flex"; // Arrange details in a row
        detailsDiv.style.gap = "10px"; // Adjust the gap as needed

        li.appendChild(detailsDiv);

        // Add data attributes for task details
        li.setAttribute("data-deadline", deadline);
        li.setAttribute("data-priority", priority);
        li.setAttribute("data-labels", labels);

        deleteButton.appendChild(document.createTextNode("Delete"));
        deleteButton.setAttribute("class", "delete");
        deleteButton.setAttribute("onclick", "deleteTask(this)");

        li.appendChild(deleteButton);
        li.style.display = "flex"; // Arrange title and details in a column
        li.style.justifyContent = "space-between"; // Equal spacing between items
        li.style.alignItems = "center"; // Center content vertically
        li.style.borderBottom = "1px solid #eee"; // Add a border between tasks
        li.style.padding = "20px"; // Add padding for spacing
        li.style.marginBottom = "10px"; // Add margin between tasks horizontally

        taskList.appendChild(li);

        taskInput.value = "";
    }
}

function deleteTask(button) {
    var li = button.parentElement;
    li.remove();
}
