{
  // Union Types

  type User = {
    name: string;
    email: string;
    phone: string;
    gender: "Male" | "female";
    bloodGroup: "O+" | "A+" | "AB+" | "O-";
  };

  const user1: User = {
    name: "Akhtar",
    email: "akhtar@gmail.com",
    phone: "0123456789",
    gender: "Male",
    bloodGroup: "O+",
  };

  // Intersection Types
  type FrontEndDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontEndDeveloper & BackendDeveloper;

  const user2: FullStackDeveloper = {
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "React",
      "Redux",
      "Express.js",
      "Node.js",
    ],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };

  //
}
