const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.EXPO_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  
 
    export const GenerateTopicsAIModel = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Learn Python ::  As you are coaching teacher\n-user wants to learn about the topic\n-generate 7 to 9 course title for study (short)\n-make sure it is related to description\n-output will be array of strings in JSON format only\n-do not add any plain text in output,\n}"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"course_titles\": [\n    \"Python Fundamentals: A Beginner's Journey\",\n    \"Data Manipulation with Python's Pandas\",\n    \"Web Development with Python and Flask\",\n    \"Automate Tasks with Python Scripting\",\n    \"Python for Data Visualization: Telling Stories\",\n    \"Object-Oriented Programming in Python\",\n    \"Python for Machine Learning: A Practical Intro\"\n  ]\n}\n```"},
          ],
        },
      ],
    });


    export const GenerateCourseAIModel = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());
 