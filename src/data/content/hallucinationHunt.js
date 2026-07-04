const hallucinationHuntContent = {
  australiaCapital: {
    instructions:
      "Detect whether the AI-generated fact is true or false.",
    options: [
      {
        value: true,
        label: "True",
        className: "bg-emerald-500 hover:bg-emerald-600",
      },
      {
        value: false,
        label: "False",
        className: "bg-red-500 hover:bg-red-600",
      },
    ],
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        fact: "Sydney is the capital city of Australia.",
        correctAnswer: false,
        feedback: {
          correct:
            "Correct. Canberra is the capital of Australia, even though Sydney is larger and more famous.",
          incorrect:
            "This is a classic hallucination trap: Sydney is well known, but Canberra is the capital.",
        },
        concept:
          "Fame is not the same as accuracy. When an answer names the most familiar option, slow down and verify.",
      },
      {
        fact: "The Great Wall of China is visible from the Moon with the unaided eye.",
        correctAnswer: false,
        feedback: {
          correct:
            "Correct. This popular claim is misleading; it is not visible from the Moon to the naked eye.",
          incorrect:
            "This sounds familiar, which is why it is a useful hallucination example, but it is false.",
        },
        concept:
          "Repeated claims can feel true. AI can reproduce common myths unless you check against reliable facts.",
      },
      {
        fact: "Water freezes at 0 degrees Celsius at standard atmospheric pressure.",
        correctAnswer: true,
        feedback: {
          correct:
            "Correct. This is a reliable basic science fact, assuming standard atmospheric pressure.",
          incorrect:
            "This one is true. Pressure can change freezing behavior, but the standard reference point is 0 degrees Celsius.",
        },
        concept:
          "Good fact-checking means rejecting false claims without becoming suspicious of every ordinary true statement.",
      },
      {
        fact: "Albert Einstein won the Nobel Prize for his theory of relativity.",
        correctAnswer: false,
        feedback: {
          correct:
            "Correct. Einstein won the Nobel Prize for his explanation of the photoelectric effect, not relativity.",
          incorrect:
            "Relativity is his most famous work, which makes the false claim sound believable.",
        },
        concept:
          "A fact can attach the right person to the wrong reason. Check the exact claim, not just whether the names sound related.",
      },
      {
        fact: "The human heart has four chambers.",
        correctAnswer: true,
        feedback: {
          correct:
            "Correct. The heart has two atria and two ventricles.",
          incorrect:
            "This is a standard biology fact: two upper chambers and two lower chambers.",
        },
        concept:
          "Fact-checking includes recognizing stable, well-supported facts. The goal is calibrated trust, not blanket doubt.",
      },
      {
        fact: "A confident AI answer should be trusted more than a cautious answer.",
        correctAnswer: false,
        feedback: {
          correct:
            "Correct. Confidence in wording is not proof of accuracy.",
          incorrect:
            "This is false. AI can sound confident while being wrong or incomplete.",
        },
        concept:
          "Do not grade AI answers by tone alone. Check evidence, uncertainty, and whether the claim can be verified.",
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
        className: "bg-emerald-500 hover:bg-emerald-600",
      },
      {
        value: false,
        label: "Risky",
        className: "bg-red-500 hover:bg-red-600",
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
