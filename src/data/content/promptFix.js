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
  privacyShield: {
    missionLabel: "Safety Check",
    placeholder: "Write a safer prompt...",
    rounds: [
      {
        instructions: "Rewrite this prompt to avoid sharing private details:",
        originalPrompt:
          "Write a post about me using my full name, school, address, and after-school schedule.",
        examplePrompt:
          "Write a friendly short bio for a school club page using only my hobbies, no full name, no address, and no schedule.",
        concept:
          "Privacy-aware prompts tell the AI what personal details to avoid, especially identifying or location-based information.",
        criteria: [
          {
            phrase: "short bio",
            points: 10,
            label: "Defines a safe output",
          },
          {
            phrase: "hobbies",
            points: 10,
            label: "Uses safer context",
          },
          {
            phrase: "no full name",
            points: 10,
            label: "Protects identity",
          },
          {
            phrase: "no address",
            points: 10,
            label: "Avoids location details",
          },
        ],
      },
      {
        instructions: "Make this chatbot prompt safer:",
        originalPrompt:
          "Help me plan my week. I live at 22 Pine Street and walk home alone at 4 PM.",
        examplePrompt:
          "Help me plan my week using general time blocks, no address, no exact route, and no private routine details.",
        concept:
          "A safer prompt can keep the useful goal while removing identifying routines and location details.",
        criteria: [
          {
            phrase: "general time blocks",
            points: 10,
            label: "Keeps planning useful",
          },
          {
            phrase: "no address",
            points: 10,
            label: "Removes location",
          },
          {
            phrase: "no exact route",
            points: 10,
            label: "Protects movement",
          },
          {
            phrase: "private routine",
            points: 10,
            label: "Names the safety risk",
          },
        ],
      },
      {
        instructions: "Rewrite this prompt so it avoids exposing someone else:",
        originalPrompt:
          "Summarize my friend's problem and include her name, phone number, and private messages.",
        examplePrompt:
          "Summarize the situation anonymously, remove phone number, remove private messages, and focus on general advice.",
        concept:
          "Privacy also applies to other people. A good prompt removes details they did not agree to share.",
        criteria: [
          {
            phrase: "anonymously",
            points: 10,
            label: "Protects identity",
          },
          {
            phrase: "remove phone number",
            points: 10,
            label: "Removes contact info",
          },
          {
            phrase: "remove private messages",
            points: 10,
            label: "Protects consent",
          },
          {
            phrase: "general advice",
            points: 10,
            label: "Keeps the useful goal",
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
    missionLabel: "Fairness Check",
    placeholder: "Write a fairer prompt...",
    rounds: [
      {
        instructions: "Rewrite this prompt so it uses fair criteria:",
        originalPrompt:
          "Pick the best person for the job based on their photo and name.",
        examplePrompt:
          "Compare the candidates using the same job-related criteria, avoid personal traits, and explain any missing information needed for a fair decision.",
        concept:
          "Fairness prompts should define consistent criteria and ask what information is missing before making a judgment.",
        criteria: [
          {
            phrase: "same",
            points: 10,
            label: "Uses consistent comparison",
          },
          {
            phrase: "job-related",
            points: 10,
            label: "Focuses on relevant criteria",
          },
          {
            phrase: "avoid personal traits",
            points: 10,
            label: "Reduces bias risk",
          },
          {
            phrase: "missing information",
            points: 10,
            label: "Asks what else is needed",
          },
        ],
      },
      {
        instructions: "Improve this prompt so it checks representation:",
        originalPrompt:
          "Tell me what students think about AI from these three quotes.",
        examplePrompt:
          "Summarize the quotes, identify whose perspectives are missing, avoid overgeneralizing, and suggest what additional voices to include.",
        concept:
          "Bias checks often start by asking who is represented, who is missing, and whether the evidence supports the conclusion.",
        criteria: [
          {
            phrase: "summarize",
            points: 10,
            label: "Uses the evidence",
          },
          {
            phrase: "missing",
            points: 10,
            label: "Checks gaps",
          },
          {
            phrase: "avoid overgeneralizing",
            points: 10,
            label: "Limits claims",
          },
          {
            phrase: "additional voices",
            points: 10,
            label: "Improves representation",
          },
        ],
      },
      {
        instructions: "Rewrite this prompt to avoid unfair assumptions:",
        originalPrompt:
          "Guess which students are good at coding based on their hobbies.",
        examplePrompt:
          "Evaluate coding readiness using the same skills-based criteria, ignore stereotypes, ask for project examples, and explain uncertainty.",
        concept:
          "Fair prompts avoid stereotypes and focus on evidence that actually relates to the decision.",
        criteria: [
          {
            phrase: "skills-based",
            points: 10,
            label: "Uses relevant evidence",
          },
          {
            phrase: "ignore stereotypes",
            points: 10,
            label: "Reduces bias",
          },
          {
            phrase: "project examples",
            points: 10,
            label: "Asks for evidence",
          },
          {
            phrase: "uncertainty",
            points: 10,
            label: "Avoids overclaiming",
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
