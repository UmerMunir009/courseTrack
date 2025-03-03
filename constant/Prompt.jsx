import dedent from "dedent";

export default {
  IDEA: dedent` :As your are coaching teacher
    - User want to learn about the topic
    - Generate 7-9 Course title for study (3 to 4 words only)
    - Make sure it is releated to description
    - Output will be ARRAY of String in JSON like {'course_titles:[]'}
    - Do not add any plain text in output,
  `,
  
  // - Chapter Explain in HTML Form, (Code example if required), add line break if required
COURSE: dedent`: As you are coaching teacher
- User want to learn about all topics
- Create 2 Courses With Course Name, Description, and 3 Chapters in each course
- Make sure to add chapters with all learning material course wise
- Add CourseBanner Image from ('/banner1.png','/banner2.png','/banner3.png','/banner4.png')
- Explain the chapter content as detailed tutorial
- Generate 5 Quiz, 10 Flashcard and 5 Questions answer

- Output in JSON Format only
- "courses": [
{
"courseTitle": '<Intro to Python>',
"description": '',
"banner_image": "/banner1.png",
"chapters": [
  {
    chapterName: '',
    content: [
      {
        topic: '<Topic Name in 2 to 4 worlds ex.(Creating Variables)>',
        explain: '< Detailed Explaination tutorial>',
        code: '<Code example of required else null',
        example: '< example of required else null'
      }
    ]
  }
],
quiz:[
  {
    question:'',
    options:['a','b,c,d],
    correctAns:''
  }
],
flashcards:[
  {
    front:'',
    back:''
  }
],
qa:[
  {
    question:'',
    answer:''
  }
]
}
]
}
`,
};