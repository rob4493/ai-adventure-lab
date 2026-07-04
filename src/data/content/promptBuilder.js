const promptBuilderContent = {
  promptFoundations: {
    instructions:
      "Build a complete prompt by choosing the strongest block from each section.",
    submitLabel: "Score Prompt",
    placeholder: "Choose blocks to see the prompt take shape.",
    rounds: [
      {
        goal: "Create a prompt that explains dogs for young learners.",
        concept:
          "A strong basic prompt names the helper role, topic, audience, amount, style, and output shape.",
        categories: [
          {
            id: "role",
            label: "Role",
            options: [
              {
                id: "kid-friendly-teacher",
                label: "Kid-friendly teacher",
                text: "Act as a friendly teacher for kids.",
                points: 15,
                feedback:
                  "This role sets the right audience and tone from the start.",
              },
              {
                id: "expert-only",
                label: "Expert only",
                text: "Act as a technical animal expert.",
                points: 5,
                feedback:
                  "This role may be accurate, but it could become too advanced for kids.",
              },
            ],
          },
          {
            id: "task",
            label: "Task",
            options: [
              {
                id: "explain-dogs",
                label: "Explain dogs",
                text: "Explain 5 simple facts about dogs.",
                points: 20,
                feedback:
                  "The task is specific and gives the AI a clear amount to produce.",
              },
              {
                id: "tell-dogs",
                label: "Tell me",
                text: "Tell me about dogs.",
                points: 6,
                feedback:
                  "This is related, but it is too broad to guide a strong answer.",
              },
            ],
          },
          {
            id: "context",
            label: "Context",
            options: [
              {
                id: "young-learner",
                label: "Young learner",
                text: "The reader is new to the topic and needs easy vocabulary.",
                points: 15,
                feedback:
                  "Audience context helps the AI choose an appropriate level.",
              },
              {
                id: "no-context",
                label: "No context",
                text: "Make it good.",
                points: 3,
                feedback:
                  "This does not explain what good means for the user.",
              },
            ],
          },
          {
            id: "constraints",
            label: "Constraints",
            options: [
              {
                id: "simple-friendly",
                label: "Simple and friendly",
                text: "Use simple language and a friendly tone.",
                points: 15,
                feedback:
                  "These constraints make the answer easier for the learner to use.",
              },
              {
                id: "long",
                label: "Long",
                text: "Make it very long.",
                points: 4,
                feedback:
                  "Length alone does not make a prompt more useful.",
              },
            ],
          },
          {
            id: "format",
            label: "Format",
            options: [
              {
                id: "bullets",
                label: "Bullets",
                text: "Use a short bullet list.",
                points: 20,
                feedback:
                  "A bullet list makes the answer easy to scan.",
              },
              {
                id: "wall",
                label: "Wall of text",
                text: "Write one big paragraph.",
                points: 5,
                feedback:
                  "One big paragraph is harder for a beginner to use.",
              },
            ],
          },
          {
            id: "example",
            label: "Example",
            options: [
              {
                id: "fact-example",
                label: "Fact example",
                text: "Example style: Dogs use their noses to learn about the world.",
                points: 15,
                feedback:
                  "The example shows the simple style you want.",
              },
              {
                id: "none",
                label: "No example",
                text: "No example needed.",
                points: 5,
                feedback:
                  "Examples are optional, but they help shape the output.",
              },
            ],
          },
        ],
      },
      {
        goal: "Create a prompt that helps someone study ecosystems.",
        concept:
          "Study prompts work best when they ask for active practice, answer support, and a clear subject.",
        categories: [
          {
            id: "role",
            label: "Role",
            options: [
              {
                id: "study-coach",
                label: "Study coach",
                text: "Act as a patient study coach.",
                points: 15,
                feedback:
                  "A study coach role fits the learning goal.",
              },
              {
                id: "announcer",
                label: "Announcer",
                text: "Act as a sports announcer.",
                points: 3,
                feedback:
                  "This role adds energy, but not much learning support.",
              },
            ],
          },
          {
            id: "task",
            label: "Task",
            options: [
              {
                id: "quiz",
                label: "Create quiz",
                text: "Create a 10-question science quiz about ecosystems.",
                points: 20,
                feedback:
                  "This asks for active recall instead of passive reading.",
              },
              {
                id: "help",
                label: "Help me",
                text: "Help me study.",
                points: 4,
                feedback:
                  "This is too vague to produce a focused study activity.",
              },
            ],
          },
          {
            id: "context",
            label: "Context",
            options: [
              {
                id: "test-tomorrow",
                label: "Test tomorrow",
                text: "I have a quiz tomorrow and need to check what I remember.",
                points: 15,
                feedback:
                  "This context helps the AI make the quiz practical.",
              },
              {
                id: "school",
                label: "School",
                text: "It is for school.",
                points: 6,
                feedback:
                  "This is true, but it does not say what kind of help is needed.",
              },
            ],
          },
          {
            id: "constraints",
            label: "Constraints",
            options: [
              {
                id: "answers",
                label: "Include answers",
                text: "Include an answer key and one-sentence explanations.",
                points: 15,
                feedback:
                  "Answers and explanations turn the quiz into feedback.",
              },
              {
                id: "no-answers",
                label: "No answers",
                text: "Do not include answers.",
                points: 5,
                feedback:
                  "No-answer quizzes are harder to learn from alone.",
              },
            ],
          },
          {
            id: "format",
            label: "Format",
            options: [
              {
                id: "numbered",
                label: "Numbered list",
                text: "Format the quiz as a numbered list.",
                points: 20,
                feedback:
                  "Numbered questions make the activity easy to follow.",
              },
              {
                id: "story",
                label: "Story",
                text: "Write it as a story.",
                points: 5,
                feedback:
                  "A story is less useful for a quiz task.",
              },
            ],
          },
          {
            id: "example",
            label: "Example",
            options: [
              {
                id: "question-example",
                label: "Question example",
                text: "Example question: What role do decomposers play in an ecosystem?",
                points: 15,
                feedback:
                  "The example shows the type of question to create.",
              },
              {
                id: "none",
                label: "No example",
                text: "No example needed.",
                points: 5,
                feedback:
                  "The prompt can still work, but examples improve consistency.",
              },
            ],
          },
        ],
      },
      {
        goal: "Create a prompt that helps plan a homework morning.",
        concept:
          "Planning prompts improve when they include time, real tasks, breaks, and a usable schedule format.",
        categories: [
          {
            id: "role",
            label: "Role",
            options: [
              {
                id: "planning-coach",
                label: "Planning coach",
                text: "Act as a practical planning coach.",
                points: 15,
                feedback:
                  "The role matches the scheduling task.",
              },
              {
                id: "poet",
                label: "Poet",
                text: "Act as a poet.",
                points: 3,
                feedback:
                  "A poetic role does not help much with a practical plan.",
              },
            ],
          },
          {
            id: "task",
            label: "Task",
            options: [
              {
                id: "schedule",
                label: "Make schedule",
                text: "Create a morning homework schedule.",
                points: 20,
                feedback:
                  "This clearly asks for a schedule instead of general advice.",
              },
              {
                id: "plan-day",
                label: "Plan day",
                text: "Plan my day.",
                points: 6,
                feedback:
                  "This is broad and does not name the main task.",
              },
            ],
          },
          {
            id: "context",
            label: "Context",
            options: [
              {
                id: "two-hours",
                label: "Two hours",
                text: "I have two hours before lunch and need to finish math and reading.",
                points: 15,
                feedback:
                  "Time and task context makes the schedule realistic.",
              },
              {
                id: "sometime",
                label: "Sometime",
                text: "I have some time.",
                points: 4,
                feedback:
                  "This does not give enough detail to build a schedule.",
              },
            ],
          },
          {
            id: "constraints",
            label: "Constraints",
            options: [
              {
                id: "breaks",
                label: "Breaks",
                text: "Include short breaks and put the hardest task first.",
                points: 15,
                feedback:
                  "Breaks and priority rules make the plan more useful.",
              },
              {
                id: "no-breaks",
                label: "No breaks",
                text: "No breaks allowed.",
                points: 5,
                feedback:
                  "No-break plans are usually harder to follow.",
              },
            ],
          },
          {
            id: "format",
            label: "Format",
            options: [
              {
                id: "table",
                label: "Table",
                text: "Use a table with time, task, and goal.",
                points: 20,
                feedback:
                  "Tables are clear for schedules.",
              },
              {
                id: "paragraph",
                label: "Paragraph",
                text: "Write one paragraph.",
                points: 5,
                feedback:
                  "A paragraph makes a schedule harder to follow.",
              },
            ],
          },
          {
            id: "example",
            label: "Example",
            options: [
              {
                id: "row",
                label: "Row example",
                text: "Example row: 9:00-9:25, math, finish 5 practice problems.",
                points: 15,
                feedback:
                  "The example shows the level of detail expected.",
              },
              {
                id: "none",
                label: "No example",
                text: "No example needed.",
                points: 5,
                feedback:
                  "Examples reduce ambiguity in structured outputs.",
              },
            ],
          },
        ],
      },
    ],
    starThresholds: [
      {
        minPercent: 85,
        stars: 3,
      },
      {
        minPercent: 50,
        stars: 2,
      },
      {
        minPercent: 1,
        stars: 1,
      },
    ],
  },
  blockBuilder: {
    instructions:
      "Build a strong prompt by choosing one block from each section.",
    submitLabel: "Score Prompt",
    placeholder: "Choose blocks to build your prompt.",
    rounds: [
      {
        goal: "Create a prompt that helps a student learn photosynthesis.",
        concept:
          "Strong learning prompts define the teacher role, target learner, task, constraints, and output format.",
        categories: [
          {
            id: "role",
            label: "Role",
            options: [
              {
                id: "science-tutor",
                label: "Science tutor",
                text: "Act as a patient middle-school science tutor.",
                points: 15,
                feedback:
                  "A clear role helps the AI choose the right tone and depth.",
              },
              {
                id: "comedian",
                label: "Comedian",
                text: "Act as a stand-up comedian.",
                points: 5,
                feedback:
                  "A fun role can help, but it does not directly support the learning goal.",
              },
            ],
          },
          {
            id: "task",
            label: "Task",
            options: [
              {
                id: "explain-quiz",
                label: "Explain and quiz",
                text: "Explain photosynthesis, then ask 3 quick check questions.",
                points: 20,
                feedback:
                  "This combines explanation with retrieval practice.",
              },
              {
                id: "facts",
                label: "List facts",
                text: "List facts about plants.",
                points: 8,
                feedback:
                  "This is related, but it is less focused than asking for an explanation and questions.",
              },
            ],
          },
          {
            id: "context",
            label: "Context",
            options: [
              {
                id: "grade-level",
                label: "Grade level",
                text: "The learner is in 7th grade and gets confused by chemistry words.",
                points: 15,
                feedback:
                  "Learner context helps the AI avoid explanations that are too advanced.",
              },
              {
                id: "no-context",
                label: "No context",
                text: "Make it good.",
                points: 3,
                feedback:
                  "Vague context gives the AI little guidance.",
              },
            ],
          },
          {
            id: "constraints",
            label: "Constraints",
            options: [
              {
                id: "simple-analogy",
                label: "Simple analogy",
                text: "Use simple language and one everyday analogy.",
                points: 15,
                feedback:
                  "Constraints shape the answer without overloading it.",
              },
              {
                id: "very-long",
                label: "Very long",
                text: "Make the answer as long as possible.",
                points: 4,
                feedback:
                  "Length is not the same as usefulness.",
              },
            ],
          },
          {
            id: "format",
            label: "Format",
            options: [
              {
                id: "sections",
                label: "Sections",
                text: "Use short sections with headings and a final mini-quiz.",
                points: 20,
                feedback:
                  "A format request makes the output easier to scan and use.",
              },
              {
                id: "paragraph",
                label: "Paragraph",
                text: "Write one big paragraph.",
                points: 6,
                feedback:
                  "A single paragraph can work, but it is harder for a learner to use.",
              },
            ],
          },
          {
            id: "example",
            label: "Example",
            options: [
              {
                id: "sample-question",
                label: "Sample question",
                text: "Example check question: What gas do plants take in?",
                points: 15,
                feedback:
                  "Examples show the AI the exact kind of output you want.",
              },
              {
                id: "no-example",
                label: "No example",
                text: "No example needed.",
                points: 5,
                feedback:
                  "Skipping examples is okay, but examples often improve consistency.",
              },
            ],
          },
        ],
      },
      {
        goal: "Create a prompt that helps plan a weekend study schedule.",
        concept:
          "Planning prompts improve when they include a role, real constraints, priorities, and a usable output format.",
        categories: [
          {
            id: "role",
            label: "Role",
            options: [
              {
                id: "study-coach",
                label: "Study coach",
                text: "Act as a practical study coach.",
                points: 15,
                feedback:
                  "The study coach role fits the planning task.",
              },
              {
                id: "movie-critic",
                label: "Movie critic",
                text: "Act as a movie critic.",
                points: 2,
                feedback:
                  "This role does not match the task.",
              },
            ],
          },
          {
            id: "task",
            label: "Task",
            options: [
              {
                id: "schedule",
                label: "Build schedule",
                text: "Build a weekend study schedule for math, science, and reading.",
                points: 20,
                feedback:
                  "The task names the outcome and subjects.",
              },
              {
                id: "motivate",
                label: "Motivate me",
                text: "Motivate me to study.",
                points: 6,
                feedback:
                  "Motivation can help, but it does not produce a plan.",
              },
            ],
          },
          {
            id: "context",
            label: "Context",
            options: [
              {
                id: "time",
                label: "Available time",
                text: "I have 3 hours Saturday and 2 hours Sunday.",
                points: 15,
                feedback:
                  "Time limits make the plan realistic.",
              },
              {
                id: "someday",
                label: "Sometime",
                text: "I can study sometime.",
                points: 4,
                feedback:
                  "Loose timing makes the schedule harder to build.",
              },
            ],
          },
          {
            id: "constraints",
            label: "Constraints",
            options: [
              {
                id: "breaks",
                label: "Breaks",
                text: "Include 10-minute breaks and put hardest work first.",
                points: 15,
                feedback:
                  "Constraints help the AI make a plan that respects energy and focus.",
              },
              {
                id: "no-breaks",
                label: "No breaks",
                text: "Do not include breaks.",
                points: 5,
                feedback:
                  "No-break plans are usually less realistic.",
              },
            ],
          },
          {
            id: "format",
            label: "Format",
            options: [
              {
                id: "table",
                label: "Table",
                text: "Format it as a table with time, subject, task, and goal.",
                points: 20,
                feedback:
                  "Tables are excellent for schedules because they make the plan actionable.",
              },
              {
                id: "story",
                label: "Story",
                text: "Write it like a story.",
                points: 5,
                feedback:
                  "A story is more entertaining than useful for scheduling.",
              },
            ],
          },
          {
            id: "example",
            label: "Example",
            options: [
              {
                id: "row-example",
                label: "Row example",
                text: "Example row: 9:00 - 9:30, Math, review fractions, finish 10 problems.",
                points: 15,
                feedback:
                  "A sample row tells the AI exactly how detailed each plan item should be.",
              },
              {
                id: "no-example",
                label: "No example",
                text: "No example needed.",
                points: 5,
                feedback:
                  "Examples are optional, but they reduce ambiguity.",
              },
            ],
          },
        ],
      },
      {
        goal: "Create a prompt that helps write a respectful feedback message to a teammate.",
        concept:
          "Feedback prompts are strongest when they define the relationship, goal, tone, boundaries, and example wording.",
        categories: [
          {
            id: "role",
            label: "Role",
            options: [
              {
                id: "communication-coach",
                label: "Communication coach",
                text: "Act as a supportive communication coach.",
                points: 15,
                feedback:
                  "This role fits because the task is about tone, clarity, and relationships.",
              },
              {
                id: "strict-judge",
                label: "Strict judge",
                text: "Act as a strict judge.",
                points: 4,
                feedback:
                  "This role may make the message harsher than the situation needs.",
              },
            ],
          },
          {
            id: "task",
            label: "Task",
            options: [
              {
                id: "draft-feedback",
                label: "Draft feedback",
                text: "Draft a short message giving feedback about missed group project deadlines.",
                points: 20,
                feedback:
                  "The task is specific about the message type and the problem.",
              },
              {
                id: "complain",
                label: "Complain",
                text: "Write a complaint about my teammate.",
                points: 5,
                feedback:
                  "This may vent frustration, but it does not guide a useful response.",
              },
            ],
          },
          {
            id: "context",
            label: "Context",
            options: [
              {
                id: "school-project",
                label: "School project",
                text: "We are classmates working on a school project due Friday.",
                points: 15,
                feedback:
                  "Context helps the AI keep the message age-appropriate and practical.",
              },
              {
                id: "someone",
                label: "Someone",
                text: "Someone did something annoying.",
                points: 3,
                feedback:
                  "This is too vague to produce specific, helpful feedback.",
              },
            ],
          },
          {
            id: "constraints",
            label: "Constraints",
            options: [
              {
                id: "respectful-specific",
                label: "Respectful and specific",
                text: "Keep it respectful, specific, and focused on what needs to happen next.",
                points: 15,
                feedback:
                  "These constraints reduce blame and focus the message on action.",
              },
              {
                id: "angry",
                label: "Angry",
                text: "Make it sound angry so they know I am serious.",
                points: 4,
                feedback:
                  "Anger may escalate the situation and weaken the message.",
              },
            ],
          },
          {
            id: "format",
            label: "Format",
            options: [
              {
                id: "message-options",
                label: "Message options",
                text: "Give me 2 message options: direct and softer.",
                points: 20,
                feedback:
                  "Multiple options help the user choose a tone that fits the situation.",
              },
              {
                id: "essay",
                label: "Essay",
                text: "Write a long essay about teamwork.",
                points: 6,
                feedback:
                  "An essay does not match the practical message-writing task.",
              },
            ],
          },
          {
            id: "example",
            label: "Example",
            options: [
              {
                id: "sentence-starter",
                label: "Sentence starter",
                text: "Example tone: I noticed we missed the last deadline, and I want us to get back on track.",
                points: 15,
                feedback:
                  "A sentence starter models the respectful tone you want.",
              },
              {
                id: "no-example",
                label: "No example",
                text: "No example needed.",
                points: 5,
                feedback:
                  "The AI can still answer, but an example would anchor the tone.",
              },
            ],
          },
        ],
      },
    ],
    starThresholds: [
      {
        minPercent: 85,
        stars: 3,
      },
      {
        minPercent: 50,
        stars: 2,
      },
      {
        minPercent: 1,
        stars: 1,
      },
    ],
  },
  askBetterQuestions: {
    instructions:
      "Build a prompt that asks useful questions before giving advice.",
    submitLabel: "Score Prompt",
    placeholder: "Choose blocks to build your question-first prompt.",
    rounds: [
      {
        goal: "Create a prompt that helps decide what to ask next before giving advice.",
        concept:
          "When a situation is unclear, a strong prompt asks the AI to gather missing context before recommending action.",
        categories: [
          {
            id: "role",
            label: "Role",
            options: [
              {
                id: "decision-coach",
                label: "Decision coach",
                text: "Act as a thoughtful decision coach who asks clarifying questions first.",
                points: 15,
                feedback:
                  "This role supports careful thinking before advice.",
              },
              {
                id: "fortune-teller",
                label: "Fortune teller",
                text: "Act as a fortune teller and tell me what will happen.",
                points: 3,
                feedback:
                  "This encourages guessing instead of asking for needed context.",
              },
            ],
          },
          {
            id: "task",
            label: "Task",
            options: [
              {
                id: "ask-next",
                label: "Ask next",
                text: "Ask the next 4 most important questions before suggesting what I should do.",
                points: 20,
                feedback:
                  "The task makes question-asking the first step instead of rushing to advice.",
              },
              {
                id: "quick-answer",
                label: "Quick answer",
                text: "Give me a quick answer right away.",
                points: 5,
                feedback:
                  "Quick answers can miss important context.",
              },
            ],
          },
          {
            id: "context",
            label: "Context",
            options: [
              {
                id: "unclear-choice",
                label: "Unclear choice",
                text: "I am choosing between two options, but I have not explained my goal or limits yet.",
                points: 15,
                feedback:
                  "This context tells the AI why questions are needed.",
              },
              {
                id: "everything",
                label: "Everything",
                text: "Everything is complicated.",
                points: 4,
                feedback:
                  "This is relatable, but too vague to guide useful questions.",
              },
            ],
          },
          {
            id: "constraints",
            label: "Constraints",
            options: [
              {
                id: "question-focus",
                label: "Question focus",
                text: "Questions should cover my goal, deadline, available resources, risks, and who is affected.",
                points: 15,
                feedback:
                  "These constraints steer the AI toward practical decision factors.",
              },
              {
                id: "no-questions",
                label: "No questions",
                text: "Do not ask me any questions.",
                points: 2,
                feedback:
                  "This blocks the learning goal of gathering missing context.",
              },
            ],
          },
          {
            id: "format",
            label: "Format",
            options: [
              {
                id: "numbered-questions",
                label: "Numbered questions",
                text: "Use a numbered list, then wait for my answers before making a recommendation.",
                points: 20,
                feedback:
                  "This format creates a real back-and-forth instead of a one-shot answer.",
              },
              {
                id: "paragraph",
                label: "Paragraph",
                text: "Write one long paragraph with advice.",
                points: 5,
                feedback:
                  "A paragraph gives advice too early and is harder to respond to.",
              },
            ],
          },
          {
            id: "example",
            label: "Example",
            options: [
              {
                id: "question-example",
                label: "Question example",
                text: "Example question: What outcome matters most to you, and what tradeoff are you trying to avoid?",
                points: 15,
                feedback:
                  "The example models a useful question that reveals priorities and tradeoffs.",
              },
              {
                id: "no-example",
                label: "No example",
                text: "No example needed.",
                points: 5,
                feedback:
                  "The prompt can still work, but an example makes the question style clearer.",
              },
            ],
          },
        ],
      },
      {
        goal: "Create a prompt that helps an AI tutor respond when a student is stuck.",
        concept:
          "Good tutoring prompts ask what the learner tried, where they got stuck, and what kind of hint would help.",
        categories: [
          {
            id: "role",
            label: "Role",
            options: [
              {
                id: "patient-tutor",
                label: "Patient tutor",
                text: "Act as a patient tutor who guides me with questions before explaining.",
                points: 15,
                feedback:
                  "This role encourages support without jumping straight to the answer.",
              },
              {
                id: "answer-machine",
                label: "Answer machine",
                text: "Act as an answer machine.",
                points: 4,
                feedback:
                  "This role pushes the AI toward answers instead of learning support.",
              },
            ],
          },
          {
            id: "task",
            label: "Task",
            options: [
              {
                id: "diagnose-stuck",
                label: "Diagnose stuck point",
                text: "Ask me what I tried, where I got stuck, and what part feels confusing.",
                points: 20,
                feedback:
                  "These questions help locate the learning problem before giving a hint.",
              },
              {
                id: "solve-it",
                label: "Solve it",
                text: "Solve the problem for me.",
                points: 5,
                feedback:
                  "Solving it may be fast, but it can skip the learning moment.",
              },
            ],
          },
          {
            id: "context",
            label: "Context",
            options: [
              {
                id: "math-homework",
                label: "Math homework",
                text: "I am working on math homework and want to understand the method, not just copy the answer.",
                points: 15,
                feedback:
                  "This context tells the AI the real goal is learning.",
              },
              {
                id: "need-answer",
                label: "Need answer",
                text: "I just need it done.",
                points: 4,
                feedback:
                  "This context encourages shortcutting instead of understanding.",
              },
            ],
          },
          {
            id: "constraints",
            label: "Constraints",
            options: [
              {
                id: "hint-first",
                label: "Hint first",
                text: "Give hints one at a time and ask me to try the next step before revealing the full solution.",
                points: 15,
                feedback:
                  "This creates an interactive learning loop.",
              },
              {
                id: "full-solution",
                label: "Full solution",
                text: "Give the full solution immediately.",
                points: 4,
                feedback:
                  "A full solution can be useful later, but it skips question-first support.",
              },
            ],
          },
          {
            id: "format",
            label: "Format",
            options: [
              {
                id: "question-hint",
                label: "Question then hint",
                text: "Format the response as one question, one small hint, and a check-in.",
                points: 20,
                feedback:
                  "This format keeps the interaction focused and manageable.",
              },
              {
                id: "lecture",
                label: "Lecture",
                text: "Write a long lecture.",
                points: 5,
                feedback:
                  "A lecture may overwhelm someone who is already stuck.",
              },
            ],
          },
          {
            id: "example",
            label: "Example",
            options: [
              {
                id: "hint-example",
                label: "Hint example",
                text: "Example hint: What operation would undo multiplication in this step?",
                points: 15,
                feedback:
                  "The example shows the AI how to guide without giving everything away.",
              },
              {
                id: "no-example",
                label: "No example",
                text: "No example needed.",
                points: 5,
                feedback:
                  "The prompt can still work, but examples help shape the interaction.",
              },
            ],
          },
        ],
      },
    ],
    starThresholds: [
      {
        minPercent: 85,
        stars: 3,
      },
      {
        minPercent: 50,
        stars: 2,
      },
      {
        minPercent: 1,
        stars: 1,
      },
    ],
  },
  privacyShield: {
    instructions:
      "Build a useful prompt that protects private information.",
    submitLabel: "Score Prompt",
    placeholder: "Choose safe blocks to build a privacy-aware prompt.",
    rounds: [
      {
        goal: "Create a safe bio prompt for a school club page.",
        concept:
          "Privacy-aware prompts keep the useful goal while removing identity, location, and routine details.",
        categories: [
          {
            id: "role",
            label: "Role",
            options: [
              {
                id: "privacy-editor",
                label: "Privacy editor",
                text: "Act as a privacy-aware writing helper.",
                points: 15,
                feedback:
                  "This role tells the AI to care about safe sharing.",
              },
              {
                id: "publicist",
                label: "Publicist",
                text: "Act as a publicist who shares as much detail as possible.",
                points: 3,
                feedback:
                  "This role pushes in the wrong direction for privacy.",
              },
            ],
          },
          {
            id: "task",
            label: "Task",
            options: [
              {
                id: "safe-bio",
                label: "Safe bio",
                text: "Write a friendly short bio for a school club page.",
                points: 20,
                feedback:
                  "The task keeps the useful writing goal clear.",
              },
              {
                id: "full-profile",
                label: "Full profile",
                text: "Write a detailed profile about me.",
                points: 6,
                feedback:
                  "This is too broad and may invite oversharing.",
              },
            ],
          },
          {
            id: "context",
            label: "Context",
            options: [
              {
                id: "safe-context",
                label: "Safe context",
                text: "Use only my hobbies and club interests.",
                points: 15,
                feedback:
                  "Hobbies and interests are safer context than identifying details.",
              },
              {
                id: "private-context",
                label: "Private context",
                text: "Use my full name, school, address, and schedule.",
                points: 2,
                feedback:
                  "This includes identifying and location-based information.",
              },
            ],
          },
          {
            id: "constraints",
            label: "Constraints",
            options: [
              {
                id: "avoid-identifiers",
                label: "Avoid identifiers",
                text: "Do not include full name, address, exact schedule, or contact details.",
                points: 15,
                feedback:
                  "These constraints name the details that should stay out.",
              },
              {
                id: "include-identifiers",
                label: "Include identifiers",
                text: "Include details that make it easy to find me.",
                points: 2,
                feedback:
                  "This creates unnecessary safety risk.",
              },
            ],
          },
          {
            id: "format",
            label: "Format",
            options: [
              {
                id: "two-sentences",
                label: "Two sentences",
                text: "Keep it to two sentences.",
                points: 20,
                feedback:
                  "A short format reduces the chance of unnecessary personal details.",
              },
              {
                id: "long",
                label: "Long version",
                text: "Make it as long as possible.",
                points: 5,
                feedback:
                  "Longer outputs often invite extra details.",
              },
            ],
          },
          {
            id: "example",
            label: "Example",
            options: [
              {
                id: "safe-example",
                label: "Safe example",
                text: "Example: I enjoy robotics, art, and helping plan club events.",
                points: 15,
                feedback:
                  "The example models useful but non-identifying information.",
              },
              {
                id: "no-example",
                label: "No example",
                text: "No example needed.",
                points: 5,
                feedback:
                  "An example helps show what safe sharing looks like.",
              },
            ],
          },
        ],
      },
      {
        goal: "Create a safe planning prompt without revealing a private routine.",
        concept:
          "You can ask for help planning without sharing exact addresses, routes, or daily patterns.",
        categories: [
          {
            id: "role",
            label: "Role",
            options: [
              {
                id: "safe-planner",
                label: "Safe planner",
                text: "Act as a safety-aware planning coach.",
                points: 15,
                feedback:
                  "This role fits a planning task with privacy concerns.",
              },
              {
                id: "tracker",
                label: "Tracker",
                text: "Act as someone tracking my exact routine.",
                points: 2,
                feedback:
                  "This is the opposite of a privacy-safe role.",
              },
            ],
          },
          {
            id: "task",
            label: "Task",
            options: [
              {
                id: "weekly-plan",
                label: "Weekly plan",
                text: "Help me make a weekly study and activity plan.",
                points: 20,
                feedback:
                  "The task is useful without requiring private location details.",
              },
              {
                id: "track-me",
                label: "Track me",
                text: "Track where I will be each day.",
                points: 3,
                feedback:
                  "This asks for sensitive routine information.",
              },
            ],
          },
          {
            id: "context",
            label: "Context",
            options: [
              {
                id: "general-time",
                label: "General time",
                text: "Use general time blocks like morning, afternoon, and evening.",
                points: 15,
                feedback:
                  "General timing gives enough context without exact tracking.",
              },
              {
                id: "exact-time",
                label: "Exact time",
                text: "Use my exact route and exact arrival times.",
                points: 2,
                feedback:
                  "Exact routes and times can expose private routines.",
              },
            ],
          },
          {
            id: "constraints",
            label: "Constraints",
            options: [
              {
                id: "no-location",
                label: "No location",
                text: "Do not include my address, route, school name, or private routine details.",
                points: 15,
                feedback:
                  "These constraints remove the highest-risk details.",
              },
              {
                id: "full-location",
                label: "Full location",
                text: "Include my exact address and route.",
                points: 2,
                feedback:
                  "This creates avoidable privacy risk.",
              },
            ],
          },
          {
            id: "format",
            label: "Format",
            options: [
              {
                id: "safe-table",
                label: "Safe table",
                text: "Use a table with time block, task, and priority.",
                points: 20,
                feedback:
                  "This keeps the plan useful without revealing location.",
              },
              {
                id: "map",
                label: "Map",
                text: "Create a map of where I go.",
                points: 4,
                feedback:
                  "A map is not needed for this planning task.",
              },
            ],
          },
          {
            id: "example",
            label: "Example",
            options: [
              {
                id: "safe-row",
                label: "Safe row",
                text: "Example row: Afternoon, review science notes, high priority.",
                points: 15,
                feedback:
                  "The example shows useful planning without private specifics.",
              },
              {
                id: "none",
                label: "No example",
                text: "No example needed.",
                points: 5,
                feedback:
                  "A safe example makes the desired format clearer.",
              },
            ],
          },
        ],
      },
    ],
    starThresholds: [
      {
        minPercent: 85,
        stars: 3,
      },
      {
        minPercent: 50,
        stars: 2,
      },
      {
        minPercent: 1,
        stars: 1,
      },
    ],
  },
  biasLens: {
    instructions:
      "Build a fairer prompt by choosing evidence-based blocks.",
    submitLabel: "Score Prompt",
    placeholder: "Choose fair criteria to build the prompt.",
    rounds: [
      {
        goal: "Create a prompt for comparing candidates fairly.",
        concept:
          "Fair prompts use the same relevant criteria for everyone and avoid personal traits that do not belong in the decision.",
        categories: [
          {
            id: "role",
            label: "Role",
            options: [
              {
                id: "fair-reviewer",
                label: "Fair reviewer",
                text: "Act as a fair reviewer who uses consistent criteria.",
                points: 15,
                feedback:
                  "This role makes fairness part of the task.",
              },
              {
                id: "guessing-judge",
                label: "Guessing judge",
                text: "Act as a judge who guesses based on first impressions.",
                points: 2,
                feedback:
                  "First impressions can invite bias.",
              },
            ],
          },
          {
            id: "task",
            label: "Task",
            options: [
              {
                id: "compare-candidates",
                label: "Compare candidates",
                text: "Compare the candidates for a class project role.",
                points: 20,
                feedback:
                  "This names the decision without asking for an unfair shortcut.",
              },
              {
                id: "pick-best",
                label: "Pick best",
                text: "Pick the best person from their photo and name.",
                points: 2,
                feedback:
                  "Photos and names are weak and potentially biased evidence.",
              },
            ],
          },
          {
            id: "context",
            label: "Context",
            options: [
              {
                id: "project-skills",
                label: "Project skills",
                text: "The role needs communication, reliability, and research skills.",
                points: 15,
                feedback:
                  "This context names skills that relate to the decision.",
              },
              {
                id: "vibes",
                label: "Vibes",
                text: "I just want whoever seems like a good fit.",
                points: 4,
                feedback:
                  "Vague fit can hide inconsistent standards.",
              },
            ],
          },
          {
            id: "constraints",
            label: "Constraints",
            options: [
              {
                id: "same-criteria",
                label: "Same criteria",
                text: "Use the same job-related criteria for every candidate and avoid personal traits.",
                points: 15,
                feedback:
                  "Consistent relevant criteria reduce unfair comparison.",
              },
              {
                id: "personal-traits",
                label: "Personal traits",
                text: "Use personality guesses and appearance.",
                points: 2,
                feedback:
                  "Those signals are not fair evidence for the role.",
              },
            ],
          },
          {
            id: "format",
            label: "Format",
            options: [
              {
                id: "criteria-table",
                label: "Criteria table",
                text: "Use a table with criteria, evidence, and missing information.",
                points: 20,
                feedback:
                  "This format makes the reasoning visible and checkable.",
              },
              {
                id: "one-winner",
                label: "One winner",
                text: "Give only the winner's name.",
                points: 5,
                feedback:
                  "A name without reasoning hides whether the process was fair.",
              },
            ],
          },
          {
            id: "example",
            label: "Example",
            options: [
              {
                id: "criteria-example",
                label: "Criteria example",
                text: "Example criterion: submitted research notes on time.",
                points: 15,
                feedback:
                  "The example shows observable evidence rather than assumptions.",
              },
              {
                id: "none",
                label: "No example",
                text: "No example needed.",
                points: 5,
                feedback:
                  "An example helps anchor what fair evidence looks like.",
              },
            ],
          },
        ],
      },
      {
        goal: "Create a prompt that checks whose perspectives are missing.",
        concept:
          "Bias checks often ask who is represented, who is missing, and whether the evidence supports the conclusion.",
        categories: [
          {
            id: "role",
            label: "Role",
            options: [
              {
                id: "bias-checker",
                label: "Bias checker",
                text: "Act as a careful bias checker.",
                points: 15,
                feedback:
                  "This role focuses the AI on representation and limits.",
              },
              {
                id: "hype-writer",
                label: "Hype writer",
                text: "Act as a hype writer.",
                points: 4,
                feedback:
                  "Hype can make weak evidence sound stronger than it is.",
              },
            ],
          },
          {
            id: "task",
            label: "Task",
            options: [
              {
                id: "review-quotes",
                label: "Review quotes",
                text: "Review these student quotes before summarizing what students think.",
                points: 20,
                feedback:
                  "This asks the AI to inspect the evidence before generalizing.",
              },
              {
                id: "generalize",
                label: "Generalize",
                text: "Tell me what all students think from these three quotes.",
                points: 3,
                feedback:
                  "Three quotes may not represent all students.",
              },
            ],
          },
          {
            id: "context",
            label: "Context",
            options: [
              {
                id: "limited-sample",
                label: "Limited sample",
                text: "The quotes come from only three students in one class.",
                points: 15,
                feedback:
                  "This context warns the AI not to overgeneralize.",
              },
              {
                id: "enough",
                label: "Enough",
                text: "Assume the quotes are enough.",
                points: 3,
                feedback:
                  "Assuming enough evidence can lead to unfair conclusions.",
              },
            ],
          },
          {
            id: "constraints",
            label: "Constraints",
            options: [
              {
                id: "missing-voices",
                label: "Missing voices",
                text: "Identify whose perspectives are missing and avoid overgeneralizing.",
                points: 15,
                feedback:
                  "This directly asks for a representation check.",
              },
              {
                id: "ignore-gaps",
                label: "Ignore gaps",
                text: "Do not mention missing viewpoints.",
                points: 2,
                feedback:
                  "Ignoring gaps makes the summary less fair.",
              },
            ],
          },
          {
            id: "format",
            label: "Format",
            options: [
              {
                id: "summary-limits",
                label: "Summary and limits",
                text: "Use two sections: What the quotes show and What they do not prove.",
                points: 20,
                feedback:
                  "This format separates evidence from limits.",
              },
              {
                id: "headline",
                label: "Headline",
                text: "Write a bold headline.",
                points: 5,
                feedback:
                  "A headline can oversimplify the evidence.",
              },
            ],
          },
          {
            id: "example",
            label: "Example",
            options: [
              {
                id: "limit-example",
                label: "Limit example",
                text: "Example limit: These quotes do not show what students from other grades think.",
                points: 15,
                feedback:
                  "The example models a fair limit statement.",
              },
              {
                id: "none",
                label: "No example",
                text: "No example needed.",
                points: 5,
                feedback:
                  "Examples help the AI phrase limits clearly.",
              },
            ],
          },
        ],
      },
    ],
    starThresholds: [
      {
        minPercent: 85,
        stars: 3,
      },
      {
        minPercent: 50,
        stars: 2,
      },
      {
        minPercent: 1,
        stars: 1,
      },
    ],
  },
};

promptBuilderContent.blockBuilder = {
  ...promptBuilderContent.blockBuilder,
  instructions:
    "Build strong prompts by choosing the best block from each section.",
  rounds: [
    promptBuilderContent.promptFoundations.rounds[0],
    promptBuilderContent.blockBuilder.rounds[0],
    promptBuilderContent.promptFoundations.rounds[1],
    promptBuilderContent.blockBuilder.rounds[1],
    promptBuilderContent.promptFoundations.rounds[2],
    promptBuilderContent.blockBuilder.rounds[2],
  ],
};

export default promptBuilderContent;
