const quizScoring = {
  correctScore: 40,
  retryCorrectScore: 25,
  incorrectScore: 10,
};

const trueFalseOptions = [
  { value: true, label: "Matches" },
  { value: false, label: "Doesn't Match" },
];

const elementaryChoiceLabels = {
  aiResponseLabel: "What AI Said",
  conceptLabel: "Remember",
  initialPromptLabel: "What The Student Asked",
  scenarioLabel: "What Happened?",
};

// Grades 3-5 content uses short situations, one clear decision, and concrete feedback.
const elementaryContent = {
  meetAi: {
    steps: [
      {
        icon: "brain",
        eyebrow: "First Things First",
        heading: "What is AI?",
        body:
          "AI is a computer tool that creates answers by finding patterns in examples. You can type a question, and it creates a reply.",
        points: [
          "AI is a tool, not a person.",
          "It does not think or feel the way people do.",
          "Its answers can be helpful, partly right, or wrong.",
        ],
      },
      {
        icon: "help",
        eyebrow: "Ways It Can Help",
        heading: "AI can be a learning helper",
        body:
          "AI can explain an idea, suggest examples, help you practice, or give you a few starting ideas.",
        points: [
          "Ask for an explanation when something is confusing.",
          "Ask for a practice question or a helpful hint.",
          "Use ideas as a starting point, then do your own thinking.",
        ],
      },
      {
        icon: "limits",
        eyebrow: "Important Limits",
        heading: "AI does not know everything",
        body:
          "AI can sound very sure even when it is missing information or giving the wrong answer.",
        points: [
          "It cannot see your classroom or know every school rule.",
          "It cannot know what another person is thinking or feeling.",
          "Important facts should be checked with a trusted source or adult.",
        ],
      },
      {
        icon: "people",
        eyebrow: "Your Most Important Job",
        heading: "People stay in charge",
        body:
          "You choose what to ask, what to check, and what advice to use. AI should help people think, not make important choices for them.",
        points: [
          "Pause before using the first answer.",
          "Check facts and ask whether the idea makes sense.",
          "Ask a trusted adult about safety, health, rules, or private information.",
        ],
      },
    ],
    practice: {
      heading: "Maya's class is thinking about getting a class pet.",
      studentPrompt: "What would be an exciting class pet?",
      aiResponse: "A tiger would be the most exciting choice.",
      prompt: "What should Maya do with this answer?",
      correctAnswer: "check-realistic-ideas",
      options: [
        {
          id: "first-answer",
          label: "Use the first answer because AI sounded sure.",
          feedback:
            "Sounding sure does not make an answer safe or realistic. Try the choice that keeps people in charge.",
        },
        {
          id: "most-popular",
          label: "Ask which pet is most popular and choose that one.",
          feedback:
            "Popularity does not tell Maya whether a pet is safe, allowed, or possible to care for.",
        },
        {
          id: "check-realistic-ideas",
          label:
            "Ask for a few realistic ideas, then check them with the teacher and class.",
          feedback:
            "Exactly. AI can suggest ideas, while people check safety, school rules, allergies, cost, and care needs.",
        },
      ],
      remember:
        "AI can help you make a list of ideas. People still check the ideas and make the real decision.",
    },
  },

  factCheckQuest: {
    alwaysShowGuidance: true,
    conceptLabel: "Remember",
    guidanceLabel: "Detective Clue",
    guidedFirstRound: true,
    instructions:
      "Use the fact-check clue to decide whether the AI answer matches.",
    studentPromptLabel: "What The Student Asked",
    aiResponseLabel: "What AI Said",
    options: trueFalseOptions,
    scoring: quizScoring,
    rounds: [
      {
        studentPrompt: "What planet do people live on?",
        aiResponse: "People live on planet Earth.",
        guidance:
          "Earth is the planet where people live.",
        guidanceSource: "Classroom Science Book",
        prompt: "Does the AI answer match the fact-check clue?",
        correctAnswer: true,
        feedback: {
          correct:
            "Correct. The AI answer and the classroom clue both say that people live on Earth.",
          incorrect:
            "Look at both statements again. They agree that people live on Earth, so the answer matches.",
        },
        topic: "Comparing a claim",
        concept:
          "Fact-checking means comparing the exact AI answer with information from a trusted source.",
      },
      {
        studentPrompt: "How many sides does a triangle have?",
        aiResponse: "A triangle has four sides.",
        guidance:
          "A triangle is a shape with three sides.",
        guidanceSource: "Classroom Math Lesson",
        prompt: "Does the AI answer match the fact-check clue?",
        correctAnswer: false,
        feedback: {
          correct:
            "Correct. The AI says four sides, but the math clue says three. They do not match.",
          incorrect:
            "Compare the numbers. Four sides does not match the clue that a triangle has three sides.",
        },
        topic: "Finding a mismatch",
        concept:
          "A small difference can make an AI answer wrong. Compare the exact details, not just the topic.",
      },
      {
        studentPrompt: "How many legs does a spider have?",
        aiResponse: "A spider has six legs.",
        guidance:
          "Spiders have eight legs.",
        guidanceSource: "Trusted Animal Guide",
        prompt: "Does the AI answer match the fact-check clue?",
        correctAnswer: false,
        feedback: {
          correct:
            "Correct. Six legs does not match the trusted guide's answer of eight legs.",
          incorrect:
            "The AI says six, while the trusted guide says eight. Those answers do not match.",
        },
        topic: "Checking a number",
        concept:
          "Numbers are easy for AI to get wrong. Check the number against a trusted learning source.",
      },
      {
        studentPrompt: "Do green plants use sunlight to help make food?",
        aiResponse: "Most green plants use sunlight to help make food.",
        guidance:
          "Most green plants use sunlight, water, and air to help make food.",
        guidanceSource: "Classroom Plant Lesson",
        prompt: "Does the AI answer match the fact-check clue?",
        correctAnswer: true,
        feedback: {
          correct:
            "Correct. Both the AI answer and the classroom clue say that most green plants use sunlight to help make food.",
          incorrect:
            "Read the clue once more. It supports the AI answer about most green plants using sunlight.",
        },
        topic: "Recognizing support",
        concept:
          "A fact check can show that an AI answer is supported. The goal is to compare, not to assume AI is always wrong.",
      },
    ],
  },

  askItClearly: {
    ...elementaryChoiceLabels,
    guidance:
      "Look for the choice that clearly says the topic, the goal, and what kind of help the student wants.",
    guidedFirstRound: true,
    instructions:
      "Replace the unclear prompt with one that tells AI what help the student needs.",
    initialPromptLabel: "What The Student Asked",
    scoring: quizScoring,
    successTitle: "Clear Prompt!",
    rounds: [
      {
        scenario:
          "Lena needs three facts for a short report about sea turtles.",
        initialPrompt: "Tell me about turtles.",
        aiResponse:
          "Turtles are reptiles with shells. There are many kinds of turtles.",
        prompt: "Which prompt would give Lena more useful help?",
        correctAnswer: "sea-turtle-facts",
        options: [
          {
            id: "all-turtles",
            label: "Tell me everything about every turtle.",
            feedback:
              "This is still too broad for Lena's short sea turtle report.",
          },
          {
            id: "sea-turtle-facts",
            label:
              "Give me three kid-friendly facts about sea turtles: where they live, what they eat, and one danger they face.",
            feedback:
              "Correct. The prompt names the topic, amount, reading level, and facts needed.",
          },
          {
            id: "write-report",
            label: "Write my whole sea turtle report for me.",
            feedback:
              "That asks AI to do the assignment instead of helping Lena learn.",
          },
        ],
        betterResponse:
          "1. Sea turtles live in oceans around the world. 2. Different kinds eat foods such as seagrass, jellyfish, or crabs. 3. Plastic trash and fishing gear can hurt them. Check these facts in a trusted animal source before using them.",
        topic: "Prompt details",
        concept:
          "A clear prompt names the exact topic, the amount of help, and the details needed.",
      },
      {
        scenario:
          "Marcus understands the top number in a fraction but is confused by the bottom number.",
        initialPrompt: "Help with fractions.",
        aiResponse: "Fractions show parts of a whole.",
        prompt: "Which replacement prompt is strongest?",
        correctAnswer: "denominator-example",
        options: [
          {
            id: "give-answer",
            label: "Give me all the fraction answers.",
            feedback:
              "Answers alone would not explain the part Marcus finds confusing.",
          },
          {
            id: "hard-fractions",
            label: "Tell me hard things about fractions.",
            feedback:
              "This does not explain which part Marcus needs help understanding.",
          },
          {
            id: "denominator-example",
            label:
              "Explain what the bottom number in a fraction means using a pizza cut into 8 equal slices, then give me one practice question.",
            feedback:
              "Correct. It names the confusing part, requests an example, and asks for practice.",
          },
        ],
        betterResponse:
          "The bottom number is the denominator. It tells how many equal pieces make the whole. If a pizza has 8 equal slices, the denominator is 8. Practice: If 3 slices are left, what fraction of the pizza is left?",
        topic: "Learning context",
        concept:
          "Tell AI what you understand, what is confusing, and what kind of example would help.",
      },
      {
        scenario:
          "Sofia wants ideas for a story about a lost robot, but she wants to write the story herself.",
        initialPrompt: "Write a robot story.",
        aiResponse:
          "Once upon a time, a robot got lost in a large city and tried to find its home.",
        prompt: "Which prompt keeps Sofia in charge of her story?",
        correctAnswer: "idea-starters",
        options: [
          {
            id: "idea-starters",
            label:
              "Give me three possible problems a lost robot could face. Do not write the story. I will choose one and write it myself.",
            feedback:
              "Correct. AI supplies a few ideas while Sofia keeps the creative work.",
          },
          {
            id: "full-story",
            label: "Write a finished lost-robot story with my name on it.",
            feedback:
              "That gives the main creative work to AI instead of Sofia.",
          },
          {
            id: "better-story",
            label: "Make the robot story better.",
            feedback:
              "This is vague and still does not explain the kind of help Sofia wants.",
          },
        ],
        betterResponse:
          "Here are three problems you could choose from: the robot cannot read the city's signs, its battery is almost empty, or it follows the wrong map. Pick one and decide how your robot responds.",
        topic: "Creative ownership",
        concept:
          "A strong prompt can ask for idea starters without asking AI to create the student's finished work.",
      },
      {
        scenario:
          "Owen is making a poster that explains why weather forecasts can change.",
        initialPrompt: "Explain weather.",
        aiResponse:
          "Weather includes rain, snow, wind, clouds, and sunshine.",
        prompt: "Which prompt best matches Owen's poster goal?",
        correctAnswer: "forecast-change",
        options: [
          {
            id: "weather-list",
            label: "List every kind of weather.",
            feedback:
              "A list does not explain why a forecast can change.",
          },
          {
            id: "forecast-change",
            label:
              "Explain in four short sentences why a weather forecast can change. Use words a fourth grader can understand.",
            feedback:
              "Correct. The prompt states the exact question, length, and reading level.",
          },
          {
            id: "make-poster",
            label: "Make my whole weather poster for me.",
            feedback:
              "That asks AI to complete the project instead of helping Owen understand it.",
          },
        ],
        betterResponse:
          "Forecasts use information about air, clouds, wind, and temperature. That information keeps changing. New measurements can show a storm moving faster or slower than expected. Meteorologists update forecasts when they get better information.",
        topic: "Prompt format",
        concept:
          "Useful prompts describe the exact goal, an appropriate length, and who the answer is for.",
      },
    ],
  },

  learnDontCopy: {
    ...elementaryChoiceLabels,
    guidance:
      "Look for help that lets the student think, practice, or revise instead of receiving finished work to copy.",
    guidedFirstRound: true,
    instructions:
      "Choose the prompt that helps the student learn while keeping the student's work their own.",
    initialPromptLabel: "What The Student Asked",
    scoring: quizScoring,
    successTitle: "Learning Choice!",
    rounds: [
      {
        scenario:
          "Jay has read a book and needs to plan a paragraph about how the main character changes.",
        initialPrompt: "Write my paragraph about the character.",
        aiResponse:
          "The main character changes by becoming braver and learning to believe in himself.",
        prompt: "Which prompt would help Jay do his own thinking?",
        correctAnswer: "planning-questions",
        options: [
          {
            id: "copy-paragraph",
            label: "Make the paragraph longer so I can turn it in.",
            feedback:
              "That would continue asking AI to produce Jay's assignment.",
          },
          {
            id: "planning-questions",
            label:
              "Ask me three questions about what the character was like at the beginning, what happened, and how the character changed. I will use my answers to plan my paragraph.",
            feedback:
              "Correct. The questions help Jay remember evidence and form his own idea.",
          },
          {
            id: "guess-book",
            label: "Guess which book I read and write about it.",
            feedback:
              "AI cannot use evidence from Jay's book if it does not know the title or details.",
          },
        ],
        betterResponse:
          "Think about these questions: What was the character like at the beginning? What event challenged the character? What did the character say or do later that shows a change? Use details from your book in your own paragraph.",
        topic: "Original schoolwork",
        concept:
          "AI can ask planning questions, but the student should choose the evidence and write the final answer.",
      },
      {
        scenario:
          "Nia is stuck on 48 divided by 6 and wants to understand the steps.",
        initialPrompt: "What is 48 divided by 6?",
        aiResponse: "48 divided by 6 is 8.",
        prompt: "Which prompt would help Nia learn the method?",
        correctAnswer: "show-method",
        options: [
          {
            id: "more-answers",
            label: "Give me the answers to the rest of my worksheet too.",
            feedback:
              "More answers would not help Nia practice the division method.",
          },
          {
            id: "trust-answer",
            label: "Tell me that 8 is correct so I do not need to check.",
            feedback:
              "A student should understand and check the steps, not only trust an answer.",
          },
          {
            id: "show-method",
            label:
              "Show how to solve 48 divided by 6 using equal groups, then give me a similar problem to try by myself.",
            feedback:
              "Correct. Nia gets an explanation and a chance to practice independently.",
          },
        ],
        betterResponse:
          "Imagine putting 48 counters into 6 equal groups. Each group gets 8 because 6 times 8 equals 48. Now try 42 divided by 6 using the same idea.",
        topic: "Math learning",
        concept:
          "Ask AI to explain a method and provide practice, not only reveal an answer.",
      },
      {
        scenario:
          "Ben wrote his own science explanation and wants help making it clearer.",
        initialPrompt: "Fix this for me.",
        aiResponse: "Please share what you want me to fix.",
        prompt: "Which prompt gives useful boundaries?",
        correctAnswer: "feedback-only",
        options: [
          {
            id: "feedback-only",
            label:
              "Read my explanation and point out one confusing sentence. Ask me a question that will help me rewrite it myself.",
            feedback:
              "Correct. Ben asks for focused feedback while keeping the rewriting work.",
          },
          {
            id: "replace-work",
            label: "Replace my explanation with a perfect one.",
            feedback:
              "That would replace Ben's thinking instead of helping him improve it.",
          },
          {
            id: "add-big-words",
            label: "Add big science words so it sounds smarter.",
            feedback:
              "Harder words do not automatically make an explanation clearer or more accurate.",
          },
        ],
        betterResponse:
          "One sentence is hard to follow because it includes two different ideas. What happened first in your experiment, and what happened because of it? Use your answers to split the sentence and rewrite it.",
        topic: "Revision support",
        concept:
          "AI feedback should help a student revise their own work instead of replacing it.",
      },
      {
        scenario:
          "Zoe is studying vocabulary and wants to know whether she understands the words.",
        initialPrompt: "Do my vocabulary homework.",
        aiResponse:
          "Send me the words and I can write the definitions and sentences for you.",
        prompt: "Which prompt turns AI into a study helper?",
        correctAnswer: "quiz-me",
        options: [
          {
            id: "definitions",
            label: "Write every definition and sentence for me.",
            feedback:
              "That completes the homework without showing what Zoe understands.",
          },
          {
            id: "quiz-me",
            label:
              "Quiz me on one vocabulary word at a time. Let me answer first, then explain anything I miss.",
            feedback:
              "Correct. Zoe practices recalling each word and receives help where she needs it.",
          },
          {
            id: "easy-grade",
            label: "Make the homework easy enough that I finish fast.",
            feedback:
              "Finishing quickly is not the same as learning the vocabulary.",
          },
        ],
        betterResponse:
          "Let's study one word at a time. What does your first word mean? Try answering from memory, and then I will help you check and improve your answer.",
        topic: "Study practice",
        concept:
          "AI can quiz students and explain mistakes while students still do the remembering and answering.",
      },
    ],
  },

  privacyPower: {
    ...elementaryChoiceLabels,
    guidance:
      "Look for the choice that removes names, addresses, passwords, school details, private messages, and routines.",
    guidedFirstRound: true,
    instructions:
      "Choose the way to ask for help without sharing private information.",
    scoring: quizScoring,
    successTitle: "Privacy Protected!",
    rounds: [
      {
        scenario:
          "Sam wants AI to create a fun username for an online game.",
        initialPrompt:
          "Make a username using my full name, birthday, and school mascot.",
        aiResponse: "Try SamRivera2016LincolnLions.",
        prompt: "Which request protects Sam's private information?",
        correctAnswer: "interests-only",
        options: [
          {
            id: "full-details",
            label: "Add my street name too so the username is unique.",
            feedback:
              "A username should not reveal a child's name, birthday, school, or location.",
          },
          {
            id: "interests-only",
            label:
              "Suggest usernames inspired by space and soccer. Do not use my real name, age, birthday, school, or location.",
            feedback:
              "Correct. Interests can inspire a username without identifying Sam.",
          },
          {
            id: "password-too",
            label: "Use those details to make a password too.",
            feedback:
              "Passwords and identifying details should never be shared with an AI chat.",
          },
        ],
        betterResponse:
          "Here are some usernames that do not use private details: OrbitKicker, CometGoal, and GalaxyStriker. Ask a trusted adult to help you choose one that follows the game's rules.",
        topic: "Identifying information",
        concept:
          "Usernames should not reveal a child's real name, birthday, school, address, or location.",
      },
      {
        scenario:
          "Priya wants help writing a birthday invitation and starts typing her home address into AI.",
        initialPrompt:
          "Write an invitation for my party at 24 Oak Street on Saturday.",
        aiResponse:
          "Come celebrate at 24 Oak Street this Saturday! Everyone is invited.",
        prompt: "What is the safer prompt?",
        correctAnswer: "placeholder",
        options: [
          {
            id: "more-details",
            label: "Add my last name and phone number.",
            feedback:
              "That would share even more identifying information.",
          },
          {
            id: "public-post",
            label: "Make it exciting so I can post the address for everyone.",
            feedback:
              "A home address should not be placed in an AI chat or public post.",
          },
          {
            id: "placeholder",
            label:
              "Write a cheerful birthday invitation using [PLACE], [DATE], and [ADULT CONTACT] as blanks.",
            feedback:
              "Correct. Priya can add private details later with a trusted adult outside the AI chat.",
          },
        ],
        betterResponse:
          "You're invited to a birthday celebration at [PLACE] on [DATE]! Please ask [ADULT CONTACT] for the private event details. I left identifying information as blanks for a trusted adult to complete.",
        topic: "Location privacy",
        concept:
          "Use placeholders instead of putting a home address or contact information into an AI tool.",
      },
      {
        scenario:
          "Leo wants AI to explain a disagreement from a private group chat with friends.",
        initialPrompt: "Here are everyone's names and all their private messages.",
        aiResponse:
          "Paste the full conversation and I will decide who is wrong.",
        prompt: "How can Leo ask more safely?",
        correctAnswer: "general-summary",
        options: [
          {
            id: "general-summary",
            label:
              "Describe the problem without names or copied messages, then ask for calm ways to talk it out.",
            feedback:
              "Correct. Leo can ask for general advice without sharing other people's private messages.",
          },
          {
            id: "paste-chat",
            label: "Paste the whole chat because AI will keep every secret.",
            feedback:
              "Private messages belong to other people too and should not be pasted into AI.",
          },
          {
            id: "share-contacts",
            label: "Include everyone's phone number so AI knows who said what.",
            feedback:
              "Phone numbers are private and are not needed for general advice.",
          },
        ],
        betterResponse:
          "You can describe the disagreement without names or copied messages. I can suggest calm phrases, but I cannot decide what each person meant. A trusted adult can help if the problem feels serious or unsafe.",
        topic: "Other people's privacy",
        concept:
          "Protect friends' privacy too. Summarize a situation without names, contact details, or copied private messages.",
      },
      {
        scenario:
          "Emma wants AI to help plan a walk home after an activity.",
        initialPrompt:
          "I leave Lincoln Elementary at 4:15 and walk alone to 18 Pine Road. What route should I take?",
        aiResponse:
          "Tell me nearby landmarks and your usual route so I can make a detailed plan.",
        prompt: "Which choice is safest?",
        correctAnswer: "trusted-adult-plan",
        options: [
          {
            id: "send-map",
            label: "Send a map showing Emma's school and home.",
            feedback:
              "That reveals a child's regular location and travel routine.",
          },
          {
            id: "trusted-adult-plan",
            label:
              "Do not share the route. Make the plan with a parent, guardian, teacher, or other trusted adult.",
            feedback:
              "Correct. A child's location and daily routine should stay private, and a trusted adult should help plan safety.",
          },
          {
            id: "more-routine",
            label: "Tell AI which days Emma walks and when nobody is home.",
            feedback:
              "That shares highly private details about Emma's routine and home.",
          },
        ],
        betterResponse:
          "Please do not share your school, home address, or regular route here. Ask a parent, guardian, teacher, or trusted adult to help make a safe travel plan with you.",
        topic: "Routine privacy",
        concept:
          "Children should not share their school, home address, live location, or daily routine with AI.",
      },
    ],
  },
};

export default elementaryContent;
