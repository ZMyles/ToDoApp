

function TodoController() {
  const vm = this;
  vm.toDoList = [ {
    task: "Walk the dog.",
    completed: false
  },

  {
    task: "Go to the store.",
    completed: true
  },

  {
    task: "Get gas.",
    completed: false
  },

  {
    task: "Wash the car",
    completed: false
  }

  ]
  
}


{
angular
    .module("ToDoApp")
    .controller("TodoController", TodoController);
}