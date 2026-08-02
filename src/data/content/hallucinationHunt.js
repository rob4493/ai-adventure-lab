const hallucinationHuntContent = {
  australiaCapital: {
    instructions:
      "Detect whether the AI-generated fact is true or false.",
    options: [
      {
        value: true,
        label: "True",
      },
      {
        value: false,
        label: "False",
      },
    ],
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        fact: "For a U.S. history assignment, AI says: The Declaration of Independence was signed in 1776.",
        correctAnswer: true,
        feedback: {
          correct:
            "Correct. The Declaration of Independence was adopted in 1776, and this is a stable history fact.",
          incorrect:
            "This one is true. Good fact-checking means recognizing supported facts too.",
        },
        topic: "Stable history facts",
        concept:
          "Fact-checking is calibrated trust: verify claims, but do not assume every ordinary fact is false.",
      },
      {
        fact: "For an English presentation, AI says: Shakespeare wrote the novel Pride and Prejudice.",
        correctAnswer: false,
        feedback: {
          correct:
            "Correct. Pride and Prejudice was written by Jane Austen, not Shakespeare.",
          incorrect:
            "This is false. The answer uses a famous author name, but it connects that author to the wrong work.",
        },
        topic: "Familiar-name traps",
        concept:
          "AI can attach the right kind of famous name to the wrong fact. Check the exact claim, not just whether the name sounds familiar.",
      },
      {
        fact: "For biology homework, AI says: Mitochondria help cells release usable energy from food.",
        correctAnswer: true,
        feedback: {
          correct:
            "Correct. Mitochondria are involved in cellular respiration and energy production.",
          incorrect:
            "This is a standard biology fact. The wording is simplified, but the core idea is true.",
        },
        topic: "Science basics",
        concept:
          "Some simplified explanations are still accurate. The goal is to check the core claim and the level of precision needed.",
      },
      {
        fact: "For a college-planning question, AI says: The FAFSA deadline is the same for every state and never changes.",
        correctAnswer: false,
        feedback: {
          correct:
            "Correct. Financial aid deadlines can vary by federal, state, school, and year. Students should verify official FAFSA and college pages.",
          incorrect:
            "This is false. Deadlines and requirements can vary, so current official sources matter.",
        },
        topic: "Changing deadlines",
        concept:
          "High-stakes deadlines need current official sources. AI may sound confident while missing state, school, or year differences.",
      },
      {
        fact: "For a health-class project, AI says: Energy drinks are harmless for all teenagers because they are sold in stores.",
        correctAnswer: false,
        feedback: {
          correct:
            "Correct. Being sold in stores does not mean something is harmless for everyone. Caffeine and other ingredients can carry risks.",
          incorrect:
            "This is false and overconfident. Health claims need credible sources and caution.",
        },
        topic: "Health overconfidence",
        concept:
          "Health claims deserve extra caution. Availability, popularity, or confident wording does not prove safety.",
      },
      {
        fact: "For a current-events essay, AI says: An article from 2018 always proves what is happening today.",
        correctAnswer: false,
        feedback: {
          correct:
            "Correct. Old sources can be useful background, but current-event claims need current context and updates.",
          incorrect:
            "This is false. Dates matter when laws, policies, events, or statistics change.",
        },
        topic: "Source freshness",
        concept:
          "A source can be real but outdated. Current questions need current evidence.",
      },
      {
        fact: "For a statistics slide, AI says: A chart with no source, date, sample size, or method can still be treated as strong evidence if it looks professional.",
        correctAnswer: false,
        feedback: {
          correct:
            "Correct. Professional design does not replace source and method details.",
          incorrect:
            "This is false. Charts need source, date, sample, method, and context before they should be trusted.",
        },
        topic: "Chart evidence",
        concept:
          "Statistics need traceable evidence. Design can make weak claims look stronger than they are.",
      },
      {
        fact: "For a scholarship essay, AI says: You should verify quotes before using them, even if they sound like something a famous person would say.",
        correctAnswer: true,
        feedback: {
          correct:
            "Correct. Quotes should be checked against a reliable source before being used in school or application writing.",
          incorrect:
            "This one is true. A quote sounding believable is not enough evidence.",
        },
        topic: "Quote verification",
        concept:
          "Quotes need traceable sources. Style or familiarity cannot prove someone said something.",
      },
    ],
  },
  sourceScanner: {
    instructions:
      "Decide whether this source-checking move is reliable.",
    options: [
      {
        value: true,
        label: "Reliable",
      },
      {
        value: false,
        label: "Risky",
      },
    ],
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        fact: "The article lists an author, publication date, linked evidence, and matches two independent reliable sources.",
        correctAnswer: true,
        feedback: {
          correct:
            "Reliable. Those details give you several ways to verify the claim instead of trusting the page blindly.",
          incorrect:
            "This is a strong source-checking move because it looks at authorship, date, evidence, and independent support.",
        },
        concept:
          "Good source-checking combines multiple signals: who wrote it, when it was published, what evidence it gives, and whether other reliable sources agree.",
      },
      {
        fact: "A website ending in .org is automatically reliable.",
        correctAnswer: false,
        feedback: {
          correct:
            "Risky. Domain endings can provide context, but they do not guarantee accuracy or neutrality.",
          incorrect:
            "This is risky. Any domain can publish weak, outdated, biased, or misleading information.",
        },
        concept:
          "A source's domain is only one clue. Check author, purpose, evidence, date, and corroboration.",
      },
      {
        fact: "Two sources make the same claim, but one appears to copy the other and neither links evidence.",
        correctAnswer: false,
        feedback: {
          correct:
            "Risky. Repetition is not the same as independent confirmation.",
          incorrect:
            "This is risky because both pages may repeat the same unsupported claim.",
        },
        concept:
          "Corroboration is strongest when sources are independent and transparent about evidence.",
      },
      {
        fact: "The article is five years old, so you check whether newer information has changed the answer.",
        correctAnswer: true,
        feedback: {
          correct:
            "Reliable. Some facts stay stable, but many topics need a freshness check.",
          incorrect:
            "This is reliable because the date matters for topics that change over time.",
        },
        concept:
          "Source-checking depends on the topic. History may age slowly; science, laws, prices, and technology can change quickly.",
      },
      {
        fact: "The headline makes a shocking claim, but the article gives no named source, data, or links.",
        correctAnswer: false,
        feedback: {
          correct:
            "Risky. Big claims need visible support.",
          incorrect:
            "This is risky because emotional headlines can outrun evidence.",
        },
        concept:
          "Strong claims need strong support. Look for evidence before sharing or trusting a surprising claim.",
      },
    ],
  },
};

export default hallucinationHuntContent;
