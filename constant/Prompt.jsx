import dedent from "dedent";

export default {
  IDEA: dedent` :As your are coaching teacher
    - User want to learn about the topic
    - Generate 7-9 Course title for study (3 to 4 words only)
    - Make sure it is releated to description
    - Output will be ARRAY of String in JSON like {'course_titles:[]'}
    - Do not add any plain text in output,
  `,
  
  // Chapter Explain in HTML Form, (Code etc)
  COURSE: dedent` :As you are coaching teacher
    - User want to learn about all topics
    - Create 2 Courses With Course Name, Description
    - Make sure to add chapters with all terms
    - Add CourseBanner Image from ('/banner.png')
    - Explain the chapter content as detailed
    - Generate 5 Quizz, 10 Flashcard and 5 Questions
  `
};