const promptBuilderContent = {
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
};

export default promptBuilderContent;
