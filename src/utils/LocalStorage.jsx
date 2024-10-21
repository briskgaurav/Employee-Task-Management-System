
const employees = [
  {
    id: "emp001",
    email: "employee1@example.com",
    pass: "123",
    firstname: "Aarav",
    taskcount: {
      active: 3,
      failed: 1,
      completed: 2,
      newTask: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Design Website Mockup",
        description: "Create a detailed mockup for the new website layout, focusing on user experience and aesthetic appeal. The mockup should include key pages such as the homepage, product pages, and contact forms to provide a comprehensive overview of the design direction.",
        category: "Design",
        date: "2024-10-01",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Implement Landing Page",
        description: "Develop and deploy the landing page based on the approved mockup. Ensure that the page is responsive, optimized for SEO, and contains all necessary elements such as call-to-action buttons, images, and user-friendly navigation.",
        category: "Development",
        date: "2024-10-02",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Conduct User Testing",
        description: "Perform user testing on the new website to gather feedback from real users. This process involves setting up testing sessions, observing user interactions, and compiling results to identify areas for improvement before the official launch.",
        category: "Testing",
        date: "2024-10-03",
      },
    ],
  },
  {
    id: "emp002",
    email: "employee2@example.com",
    pass: "123",
    firstname: "Vivaan",
    taskcount: {
      active: 2,
      failed: 2,
      completed: 1,
      newTask: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Research Competitor Strategies",
        description: "Conduct a thorough analysis of competitors' marketing strategies, focusing on their strengths and weaknesses. This research will help us identify opportunities for differentiation and guide our approach to capturing market share.",
        category: "Research",
        date: "2024-10-01",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Prepare Marketing Presentation",
        description: "Create a comprehensive presentation for the upcoming marketing meeting. The presentation should include key findings from recent campaigns, proposed strategies moving forward, and actionable insights to engage the team and stakeholders.",
        category: "Marketing",
        date: "2024-10-02",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Evaluate Marketing Channels",
        description: "Assess the effectiveness of our current marketing channels by analyzing performance metrics. This evaluation will help determine which channels yield the best ROI and identify areas for potential investment or adjustment.",
        category: "Analysis",
        date: "2024-10-03",
      },
    ],
  },
  {
    id: "emp003",
    email: "employee3@example.com",
    pass: "123",
    firstname: "Reyansh",
    taskcount: {
      active: 1,
      failed: 1,
      completed: 3,
      newTask: 2,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Write Blog Post",
        description: "Draft an engaging blog post that covers the latest trends in our industry. The post should be informative, well-researched, and optimized for SEO to attract traffic and establish our authority in the field.",
        category: "Content Creation",
        date: "2024-10-01",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Update Social Media Strategy",
        description: "Revise the current social media strategy to enhance engagement and follower growth. This includes analyzing past performance, identifying successful content types, and proposing new initiatives to better connect with our audience.",
        category: "Social Media",
        date: "2024-10-02",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Analyze Web Traffic",
        description: "Review and analyze website analytics to gain insights into visitor behavior and traffic sources. This analysis will provide a clearer understanding of user engagement and help inform future content and marketing strategies.",
        category: "Analytics",
        date: "2024-10-03",
      },
    ],
  },
  {
    id: "emp004",
    email: "employee4@example.com",
    pass: "123",
    firstname: "Aditya",
    taskcount: {
      active: 2,
      failed: 1,
      completed: 2,
      newTask: 2,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Create Training Materials",
        description: "Develop comprehensive training materials for the upcoming session, ensuring they are clear, engaging, and tailored to the audience's needs. The materials should cover all key topics and include interactive elements to facilitate learning.",
        category: "Training",
        date: "2024-10-01",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Conduct Team Meeting",
        description: "Lead a team meeting to discuss ongoing projects, challenges faced, and next steps. The agenda should encourage participation and collaboration, ensuring that all voices are heard and valued in the decision-making process.",
        category: "Management",
        date: "2024-10-02",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Collect Feedback from Trainees",
        description: "Gather feedback from trainees after the training session to evaluate its effectiveness. This feedback will be crucial for refining future training programs and ensuring that they meet the needs of participants.",
        category: "Evaluation",
        date: "2024-10-03",
      },
    ],
  },
  {
    id: "emp005",
    email: "employee5@example.com",
    pass: "123",
    firstname: "Krishna",
    taskcount: {
      active: 1,
      failed: 2,
      completed: 3,
      newTask: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Plan Team Building Event",
        description: "Organize a team-building event aimed at enhancing collaboration and communication among team members. The event should include activities that foster teamwork and help strengthen interpersonal relationships within the team.",
        category: "Event Planning",
        date: "2024-10-01",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        title: "Budget Review",
        description: "Conduct a thorough review of the current budget to ensure that all expenses are accounted for and that we are on track to meet financial goals for the upcoming quarter. Adjustments may be necessary based on performance metrics.",
        category: "Finance",
        date: "2024-10-02",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Assess Team Performance",
        description: "Evaluate the team's performance against established objectives to identify strengths and areas for improvement. This assessment will help inform future development initiatives and ensure that the team remains aligned with company goals.",
        category: "Performance Review",
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
   return {employees,admin}
};

