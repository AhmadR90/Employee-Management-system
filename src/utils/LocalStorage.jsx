const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Complete Report",
        taskDescription: "Prepare the quarterly financial report.",
        taskDate: "2024-10-01",
        category: "Finance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Team Meeting",
        taskDescription: "Attend the team meeting for project updates.",
        taskDate: "2024-10-02",
        category: "Management",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Client Call",
        taskDescription: "Call the client to discuss contract renewals.",
        taskDate: "2024-10-05",
        category: "Sales",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Product Review",
        taskDescription: "Review the new product specifications.",
        taskDate: "2024-10-01",
        category: "Product",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Inventory Check",
        taskDescription: "Check the stock levels for the warehouse.",
        taskDate: "2024-10-03",
        category: "Operations",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Team Lunch",
        taskDescription: "Organize a team-building lunch for the staff.",
        taskDate: "2024-10-04",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Prepare Presentation",
        taskDescription: "Create a presentation for the annual meeting.",
        taskDate: "2024-10-06",
        category: "Management",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Server Maintenance",
        taskDescription: "Perform maintenance on company servers.",
        taskDate: "2024-10-02",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Security Audit",
        taskDescription: "Conduct the quarterly security audit.",
        taskDate: "2024-10-10",
        category: "Security",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Bug Fixes",
        taskDescription: "Fix bugs reported in the internal system.",
        taskDate: "2024-10-12",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed: true,
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Recruitment Drive",
        taskDescription: "Organize a recruitment drive for open positions.",
        taskDate: "2024-10-02",
        category: "HR",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Performance Reviews",
        taskDescription: "Conduct performance reviews for employees.",
        taskDate: "2024-10-05",
        category: "HR",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Marketing Campaign",
        taskDescription: "Plan and execute the new marketing campaign.",
        taskDate: "2024-10-01",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Content Creation",
        taskDescription: "Create content for the social media platforms.",
        taskDate: "2024-10-02",
        category: "Marketing",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Ad Performance Analysis",
        taskDescription: "Analyze the performance of online ads.",
        taskDate: "2024-10-07",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  }
];
export const  setLocalStorage=()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}
export const  getLocalStorage=()=>{
  const employees=JSON.parse(localStorage.getItem('employees'))
  const admin=JSON.parse(localStorage.getItem('admin'))
  return{employees,admin}
}
