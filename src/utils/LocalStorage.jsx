const employees = [
  {
    id: "emp001",
    email: "employee1@example.com",
    pass: "password1",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 1",
        description: "Description for task 1",
        category: "Category A",
        date: "2024-10-01",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 2",
        description: "Description for task 2",
        category: "Category B",
        date: "2024-10-02",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Task 3",
        description: "Description for task 3",
        category: "Category C",
        date: "2024-10-03",
      },
    ],
  },
  {
    id: "emp002",
    email: "employee2@example.com",
    pass: "password2",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 1",
        description: "Description for task 1",
        category: "Category A",
        date: "2024-10-01",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 2",
        description: "Description for task 2",
        category: "Category B",
        date: "2024-10-02",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Task 3",
        description: "Description for task 3",
        category: "Category C",
        date: "2024-10-03",
      },
    ],
  },
  {
    id: "emp003",
    email: "employee3@example.com",
    pass: "password3",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 1",
        description: "Description for task 1",
        category: "Category A",
        date: "2024-10-01",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 2",
        description: "Description for task 2",
        category: "Category B",
        date: "2024-10-02",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Task 3",
        description: "Description for task 3",
        category: "Category C",
        date: "2024-10-03",
      },
    ],
  },
  {
    id: "emp004",
    email: "employee4@example.com",
    pass: "password4",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 1",
        description: "Description for task 1",
        category: "Category A",
        date: "2024-10-01",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 2",
        description: "Description for task 2",
        category: "Category B",
        date: "2024-10-02",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Task 3",
        description: "Description for task 3",
        category: "Category C",
        date: "2024-10-03",
      },
    ],
  },
  {
    id: "emp005",
    email: "employee5@example.com",
    pass: "password5",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Task 1",
        description: "Description for task 1",
        category: "Category A",
        date: "2024-10-01",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Task 2",
        description: "Description for task 2",
        category: "Category B",
        date: "2024-10-02",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Task 3",
        description: "Description for task 3",
        category: "Category C",
        date: "2024-10-03",
      },
    ],
  },
];

const admin = [
  {
    id: "admin001",
    email: "admin@example.com",
    pass: "adminpassword",
  },
];


export const setLocalStorage =()=>{
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
    
}

export const getLocalStorage =()=>{
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));
    console.log(employees, admin);
};

