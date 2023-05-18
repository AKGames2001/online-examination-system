const Data = [
  {
    fName: "Aditya",
    lName: "Kore",
    role: "student",
    email: "adityakore2001@gmail.com",
    contact: "+91-9892412782",
    activity: [
      {
        presence: 0,
        test: 0,
        exam: 0,
        thisWeek: 0,
      },
    ],
    tests: [
      {
        id: 1,
        name: "Biology",
        subject: "DNA & Molecules",
        given: false,
        score: 0,
        maxScore: 100,
      },
      {
        id: 2,
        name: "Physics",
        subject: "Quantum Mechanics",
        given: true,
        score: 60,
        maxScore: 80,
      },
      {
        id: 3,
        name: "Data Mining",
        subject: "Data Cleaning",
        given: false,
        score: 60,
        maxScore: 80,
      },
      {
        id: 4,
        name: "Cloud Computing",
        subject: "SaaS & PaaS",
        given: false,
        score: 60,
        maxScore: 80,
      },
      {
        id: 5,
        name: "Design & Analysis of Algorithms",
        subject: "Sorting Algorithms",
        given: false,
        score: 60,
        maxScore: 80,
      },
    ],
  },
];

export default Data;
