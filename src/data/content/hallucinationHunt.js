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
        fact: "AI says: The Declaration of Independence was signed in 1776.",
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
        fact: "AI says: Shakespeare wrote the novel Pride and Prejudice.",
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
        fact: "AI says: Mitochondria help cells release usable energy from food.",
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
        fact: "AI says: The FAFSA deadline is the same for every state and never changes.",
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
        fact: "AI says: Energy drinks are harmless for all teenagers because they are sold in stores.",
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
        fact: "AI says: An article from 2018 always proves what is happening today.",
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
        fact: "AI says: A chart with no source, date, sample size, or method can still be treated as strong evidence if it looks professional.",
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
        fact: "AI says: You should verify quotes before using them, even if they sound like something a famous person would say.",
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
  middleSchoolFactOrFake: {
    instructions:
      "Decide whether the AI-style claim is true or false. Watch for confident mistakes.",
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
        fact: "AI says: The Moon makes its own light like the Sun.",
        correctAnswer: false,
        feedback: {
          correct:
            "Correct. The Moon reflects sunlight. It does not make its own light like the Sun.",
          incorrect:
            "This is false. The wording sounds simple and confident, but the claim is wrong.",
        },
        topic: "Science misconceptions",
        concept:
          "AI can repeat a common misconception. Check the exact science claim before using it.",
      },
      {
        fact: "AI says: California is a state in the United States.",
        correctAnswer: true,
        feedback: {
          correct:
            "Correct. This is a basic, stable geography fact.",
          incorrect:
            "This one is true. Fact-checking also means recognizing ordinary facts that are supported.",
        },
        topic: "Stable facts",
        concept:
          "Good AI judgment is not assuming everything is wrong. It is checking whether the claim fits known evidence.",
      },
      {
        fact: "AI says: Charlotte's Web was written by Dr. Seuss.",
        correctAnswer: false,
        feedback: {
          correct:
            "Correct. Charlotte's Web was written by E. B. White, not Dr. Seuss.",
          incorrect:
            "This is false. AI can connect a famous children's author to the wrong book.",
        },
        topic: "Familiar-name traps",
        concept:
          "A name can sound familiar and still be attached to the wrong fact. Check the exact match.",
      },
      {
        fact: "AI says: You should ask a trusted adult or medical professional before following health advice from AI.",
        correctAnswer: true,
        feedback: {
          correct:
            "Correct. Health advice should be checked with a trusted adult or qualified professional.",
          incorrect:
            "This is true. AI can help you learn, but health choices need real-world support.",
        },
        topic: "Health caution",
        concept:
          "For health or safety topics, AI should not be the final authority.",
      },
      {
        fact: "AI says: If a quote sounds like Abraham Lincoln, it is safe to use without checking.",
        correctAnswer: false,
        feedback: {
          correct:
            "Correct. Quotes should be verified before they go into schoolwork.",
          incorrect:
            "This is false. A quote sounding old or famous does not prove who said it.",
        },
        topic: "Quote checking",
        concept:
          "Quotes need a source. Style and confidence are not enough evidence.",
      },
      {
        fact: "AI says: Weather forecasts can change, so it is smart to check a current weather source.",
        correctAnswer: true,
        feedback: {
          correct:
            "Correct. Weather changes quickly, so current sources matter.",
          incorrect:
            "This is true. Some questions need up-to-date information instead of a remembered answer.",
        },
        topic: "Changing information",
        concept:
          "Current information can change. Dates and live sources matter for weather, events, schedules, and safety.",
      },
    ],
  },
};

hallucinationHuntContent.collegeAcademicClaims = {
  instructions:
    "Read the student prompt and decide whether the AI response is true or false before trusting it.",
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
      studentPrompt:
        "I found a peer-reviewed article. Can I trust an AI summary of it for my research paper?",
      aiResponse:
        "Yes. If the article is peer reviewed, the summary can be trusted without checking the study's sample size, method, or limitations.",
      prompt: "Is the AI response true or false?",
      correctAnswer: false,
      feedback: {
        correct:
          "Correct. Peer review is a good signal, but students still need to check the study's sample, method, and limitations.",
        incorrect:
          "This response is false. Source quality matters, but a summary can still misrepresent what the article actually studied.",
      },
      topic: "Research limitations",
      concept:
        "College-level source checking includes asking what the source actually studied, not just whether the source sounds academic.",
    },
    {
      studentPrompt:
        "Can you give me a research finding proving AI tutoring dramatically improves college grades?",
      aiResponse:
        "The 2021 Stanford Journal of Digital Learning proved that AI tutoring doubles every college student's GPA in one semester.",
      prompt: "Is the AI response true or false?",
      correctAnswer: false,
      feedback: {
        correct:
          "Correct. This has fake-specific signals: a sweeping result, a suspiciously neat effect, and a citation that needs verification.",
        incorrect:
          "This is risky. A claim that says every student doubles their GPA should trigger source and evidence checks.",
      },
      topic: "Fake citation signals",
      concept:
        "Academic-sounding titles and precise years can hide invented or exaggerated claims. Verify the citation before relying on it.",
    },
    {
      studentPrompt:
        "My friend said our university allows AI for assignments. Does that mean it is allowed in all my classes?",
      aiResponse:
        "University policies about AI use can vary by course, professor, assignment, and semester, so you should check the syllabus or ask the instructor.",
      prompt: "Is the AI response true or false?",
      correctAnswer: true,
      feedback: {
        correct:
          "Correct. AI-use rules are local and can change, so the syllabus or professor's instructions matter most.",
        incorrect:
          "This is true. College AI policies are not universal, even inside the same school.",
      },
      topic: "Course policy variation",
      concept:
        "When academic integrity is involved, the current course policy is more important than generic AI advice.",
    },
    {
      studentPrompt:
        "I found an article in Google Scholar. Can I use it to prove my argument?",
      aiResponse:
        "Yes. If an article appears in Google Scholar, it automatically supports the exact claim you want to make.",
      prompt: "Is the AI response true or false?",
      correctAnswer: false,
      feedback: {
        correct:
          "Correct. A source can be real and scholarly but still not support the specific claim.",
        incorrect:
          "This is false. You still need to check the article's argument, evidence, and relevance.",
      },
      topic: "Evidence relevance",
      concept:
        "Research quality includes fit. A real source is only useful if it actually supports the point being made.",
    },
  ],
};
export default hallucinationHuntContent;
