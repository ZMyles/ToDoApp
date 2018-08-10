

function TodoController() {
  const vm = this;
  vm.toDoList = [ {
    task: "Walk the dog.",
    classes:{completed: false}
  },

  {
    task: "Go to the store.",
    classes:{completed: true}
  },

  {
    task: "Get gas.",
    classes:{completed: false}
  },

  {
    task: "Wash the car",
    classes:{completed: false}
  }

  ]

  // Creates line Through list -----------//
  vm.completed= (index) => {
    vm.toDoList[index].classes = {completed: true};
  }
  
}

//Finds the Module---//
angular
    .module("ToDoApp")
    .controller("TodoController", TodoController);
