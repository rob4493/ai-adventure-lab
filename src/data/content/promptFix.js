const promptFixContent = {
  dogPrompt: {
    missionLabel: "Mission",
    placeholder: "Write your improved prompt...",
    rounds: [
      {
        instructions: "Improve this vague AI prompt:",
        originalPrompt: "Tell me about dogs.",
        examplePrompt:
          "Explain 5 simple facts about dogs for kids in a friendly tone.",
        concept:
          "A stronger prompt defines the audience, amount, style, and topic so the AI knows what useful output looks like.",
        criteria: [
          {
            phrase: "for kids",
            points: 10,
            label: "Names the audience",
          },
          {
            phrase: "5",
            points: 10,
            label: "Requests a specific amount",
          },
          {
            phrase: "simple",
            points: 10,
            label: "Sets the writing style",
          },
          {
            phrase: "dogs",
            points: 10,
            label: "Keeps the topic clear",
          },
        ],
      },
      {
        instructions: "Make this prompt more useful and specific:",
        originalPrompt: "Help me study.",
        examplePrompt:
          "Create a 10-question science quiz with answers to help me study ecosystems.",
        concept:
          "Study prompts work better when they name the subject, activity, length, and answer format.",
        criteria: [
          {
            phrase: "science",
            points: 10,
            label: "Adds a subject",
          },
          {
            phrase: "quiz",
            points: 10,
            label: "Requests an active study format",
          },
          {
            phrase: "10",
            points: 10,
            label: "Sets a clear length",
          },
          {
            phrase: "answers",
            points: 10,
            label: "Asks for answer support",
          },
        ],
      },
      {
        instructions: "Improve this prompt so the AI knows the output format:",
        originalPrompt: "Plan my day.",
        examplePrompt:
          "Create a morning schedule for homework with breaks, using times and short task descriptions.",
        concept:
          "Format constraints turn a vague request into something the AI can structure and prioritize.",
        criteria: [
          {
            phrase: "schedule",
            points: 10,
            label: "Specifies the format",
          },
          {
            phrase: "morning",
            points: 10,
            label: "Includes part of the day",
          },
          {
            phrase: "homework",
            points: 10,
            label: "Adds a real task",
          },
          {
            phrase: "breaks",
            points: 10,
            label: "Adds a helpful constraint",
          },
        ],
      },
      {
        instructions: "Add useful context and constraints to this prompt:",
        originalPrompt: "Write an email.",
        examplePrompt:
          "Write a polite email to my teacher asking for an extension on my history project because I was sick for 2 days.",
        concept:
          "Communication prompts improve when they name the audience, tone, purpose, and situation.",
        criteria: [
          {
            phrase: "teacher",
            points: 10,
            label: "Names the audience",
          },
          {
            phrase: "polite",
            points: 10,
            label: "Sets the tone",
          },
          {
            phrase: "extension",
            points: 10,
            label: "States the purpose",
          },
          {
            phrase: "sick",
            points: 10,
            label: "Adds helpful context",
          },
        ],
      },
      {
        instructions: "Turn this broad request into a specific creative prompt:",
        originalPrompt: "Give me ideas.",
        examplePrompt:
          "Give me 6 creative ideas for a school recycling project, with one sentence explaining why each idea could work.",
        concept:
          "Creative prompts work better when they define the topic, number of ideas, audience, and evaluation style.",
        criteria: [
          {
            phrase: "6",
            points: 10,
            label: "Requests a specific number",
          },
          {
            phrase: "school",
            points: 10,
            label: "Adds the setting",
          },
          {
            phrase: "recycling",
            points: 10,
            label: "Names the topic",
          },
          {
            phrase: "why",
            points: 10,
            label: "Asks for reasoning",
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

export default promptFixContent;
