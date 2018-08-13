

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
  vm.completed= (index, completed) => {
    vm.toDoList[index].classes = {completed: true};
  }
  //--Removes Listed item ---//
  vm.removeTask= (index) => {
    vm.toDoList.splice(index, 1);
  }
  //-- Adds Item to list ----//
  vm.addTask= (newTask) => {
    vm.toDoList.push({
      task: newTask,
      classes:{completed: false}
    });
    
  }
}

//Finds the Module---//
angular
    .module("ToDoApp")
    .controller("TodoController", TodoController);
