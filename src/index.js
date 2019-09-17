document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submitButton = document.getElementById('create-task-form').querySelector("input[type=submit]")
  const taskDescription = document.getElementById('new-task-description')
  const tasks = document.getElementById('tasks')
 

  // allTasks = []

  submitButton.addEventListener("click", (event) => {
    event.preventDefault()
    const newTask = taskDescription.value
      const list = document.createElement('li')
      var textNode = document.createTextNode(newTask)
      list.appendChild(textNode)
      tasks.appendChild(list)
    
    
    // allTasks.push(newTask)
    // for (i = 0; i < allTasks.length; i++){
    //   const list = document.createElement('li')
    //   var textNode = document.createTextNode(allTasks[i])
    //   list.appendChild(textNode)
    //   tasks.appendChild(list)
    // }
  
  // console.log(allTasks);

  })
});