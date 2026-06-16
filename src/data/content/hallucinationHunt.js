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
    ],
  },
};

export default hallucinationHuntContent;
