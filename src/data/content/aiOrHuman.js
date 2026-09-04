const aiOrHumanContent = {
  aiVsHuman: {
    instructions:
      "Guess whether this high school writing sample was written by AI or a human.",
    options: [
      {
        value: "ai",
        label: "AI",
      },
      {
        value: "human",
        label: "Human",
      },
    ],
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        statement:
          "Participating in student council taught me leadership, communication, and the importance of working with others to create positive change.",
        correctAnswer: "ai",
        feedback: {
          correct:
            "This sounds AI-like because it is polished, broad, and uses common application-style phrases without a specific moment.",
          incorrect:
            "A student could write this, but the generic phrasing and lack of lived detail lean AI.",
        },
        topic: "Generic achievement writing",
        concept:
          "AI writing often sounds polished but general. Watch for broad achievement language without a concrete story.",
      },
      {
        statement:
          "At the first student council meeting, I volunteered to take notes because nobody else raised their hand, then immediately spelled the principal's name wrong in front of everyone.",
        correctAnswer: "human",
        feedback: {
          correct:
            "This feels human because it includes a specific awkward moment, natural voice, and a detail that is not trying to sound perfect.",
          incorrect:
            "AI can invent anecdotes, but this has a messy, specific memory that feels more lived-in.",
        },
        topic: "Specific personal memory",
        concept:
          "Human writing often includes imperfect moments, small embarrassments, and details that do not sound optimized.",
      },
      {
        statement:
          "In conclusion, technology has both advantages and disadvantages for students in today's rapidly changing world.",
        correctAnswer: "ai",
        feedback: {
          correct:
            "This is a safe, balanced sentence that could fit almost any essay. That broadness is a common AI signal.",
          incorrect:
            "The sentence is not wrong, but it is vague and formulaic, with no specific argument or student voice.",
        },
        topic: "Formulaic essay language",
        concept:
          "AI text often defaults to balanced, low-risk statements that sound reasonable but do not say much.",
      },
      {
        statement:
          "I was going to argue that phones only distract us, but then I remembered I learned half the chemistry unit from videos my teacher posted when I was sick.",
        correctAnswer: "human",
        feedback: {
          correct:
            "This shows a change in thinking tied to a specific school experience, which feels like a person reflecting.",
          incorrect:
            "The sentence includes revision, memory, and personal context, which are strong human-style clues.",
        },
        topic: "Reflective revision",
        concept:
          "Human writing often shows how a person changed their mind or noticed an exception from real experience.",
      },
      {
        statement:
          "Dear Teacher, I am writing to respectfully request an extension due to unforeseen circumstances that affected my ability to complete the assignment on time.",
        correctAnswer: "ai",
        feedback: {
          correct:
            "This sounds like AI because it is formal and generic, with vague circumstances and no clear student context.",
          incorrect:
            "The tone is polite, but it feels template-like instead of specific to a real situation.",
        },
        topic: "Template wording",
        concept:
          "AI often produces polished templates. Useful writing usually needs the student's real context and honest details.",
      },
      {
        statement:
          "Hi Ms. Rivera, I finished the outline but got stuck turning my second source into evidence. Could I turn it in tomorrow after I revise that paragraph?",
        correctAnswer: "human",
        feedback: {
          correct:
            "This feels human because it names the specific problem, teacher, task, and realistic request.",
          incorrect:
            "The concrete details and direct ask make it feel more like an actual student message.",
        },
        topic: "Specific teacher email",
        concept:
          "Human writing often gives enough specific context to explain the real problem without sounding like a generic template.",
      },
      {
        statement:
          "Robotics club helped me develop teamwork, problem-solving abilities, and a passion for STEM innovation.",
        correctAnswer: "ai",
        feedback: {
          correct:
            "This sounds AI-like because it uses common resume-style phrases without showing what actually happened.",
          incorrect:
            "The sentence is plausible, but it is generic enough to fit thousands of students.",
        },
        topic: "Resume-style generality",
        concept:
          "AI writing often relies on impressive but interchangeable phrases. Specific evidence makes writing stronger.",
      },
      {
        statement:
          "For the first two weeks in robotics, my main job was holding wires and pretending I knew which sensor was which, but by competition day I could explain why the left motor kept drifting.",
        correctAnswer: "human",
        feedback: {
          correct:
            "This has growth, humor, and a concrete robotics detail, which makes it feel more human.",
          incorrect:
            "The sentence is specific and a little uneven in a believable way, which points toward human writing.",
        },
        topic: "Lived growth detail",
        concept:
          "Specific growth stories are stronger than generic skill claims because they show what changed.",
      },
    ],
  },
  patternPrediction: {
    instructions:
      "Guess whether this pattern explanation was written by AI or a human.",
    options: [
      {
        value: "ai",
        label: "AI",
      },
      {
        value: "human",
        label: "Human",
      },
    ],
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        statement:
          "The next number is probably 16 because the sequence doubles each time.",
        correctAnswer: "ai",
        feedback: {
          correct:
            "This is polished, direct, and confident in a way that often matches AI-generated pattern explanations.",
          incorrect:
            "A clean explanation can sound human, but this style is very typical of an AI response.",
        },
        concept:
          "AI answers often compress reasoning into a neat explanation, even when a human might show more hesitation or scratch work.",
      },
      {
        statement:
          "I think it goes 2, 4, 8, 16, but I always double-check because I mix up patterns like this.",
        correctAnswer: "human",
        feedback: {
          correct:
            "The self-correction and uncertainty make it feel more like a human thinking out loud.",
          incorrect:
            "Humans often include doubt or habits when explaining their reasoning.",
        },
        concept:
          "Metacognition is a useful clue: people often mention how they think, check, or get confused.",
      },
      {
        statement:
          "Each term increases by adding the next odd number, so the sequence follows a square-number pattern.",
        correctAnswer: "ai",
        feedback: {
          correct:
            "This is a compact textbook-style explanation, a common AI pattern when solving sequences.",
          incorrect:
            "The explanation is possible from a person, but its formal, compressed wording leans AI.",
        },
        concept:
          "A polished explanation is not proof by itself, but it is a signal to combine with tone, specificity, and confidence.",
      },
      {
        statement:
          "I got 21 because I added 3, then 5, then 7, but I might be seeing the pattern wrong.",
        correctAnswer: "human",
        feedback: {
          correct:
            "The answer shows working, uncertainty, and a possible mistake, which feels like a person reasoning in real time.",
          incorrect:
            "The uncertainty and scratch-work style are strong human clues.",
        },
        concept:
          "Imperfect reasoning can be informative. Humans often expose the path they took, including uncertainty or possible errors.",
      },
      {
        statement:
          "The sequence alternates between multiplying by 2 and subtracting 1; therefore, the next value is 23.",
        correctAnswer: "ai",
        feedback: {
          correct:
            "The explanation is concise and authoritative, and it states a rule without showing much exploratory thinking.",
          incorrect:
            "Formal confidence can make an answer sound convincing, but it may still be an AI-style explanation.",
        },
        concept:
          "Confidence is not the same as truth or humanness. AI-generated reasoning often presents a neat rule even when more checking is needed.",
      },
      {
        statement:
          "Wait, I first thought it was adding 4 each time, but that breaks on the third number, so I need another rule.",
        correctAnswer: "human",
        feedback: {
          correct:
            "This shows false starts and revision, which feels like a person working through the pattern.",
          incorrect:
            "The self-correction is a strong clue. People often reveal the messy path, not just the final answer.",
        },
        concept:
          "A visible thinking process can be more human than a perfect answer. Revision, hesitation, and checking are useful signals.",
      },
      {
        statement:
          "The pattern appears to be increasing by a consistent recursive relationship, so the next term is the most logical continuation.",
        correctAnswer: "ai",
        feedback: {
          correct:
            "This sounds AI-like because it is formal, vague, and confident without showing the actual pattern.",
          incorrect:
            "The wording feels polished, but it avoids concrete scratch work or a clear human checking process.",
        },
        concept:
          "AI explanations can sound sophisticated while staying vague. Watch for formal language that does not actually show the reasoning.",
      },
    ],
  },
  middleSchoolAiOrMe: {
    instructions:
      "Decide whether each short school response sounds more like AI or a middle school student.",
    options: [
      {
        value: "ai",
        label: "AI",
      },
      {
        value: "human",
        label: "Student",
      },
    ],
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        statement:
          "Our group should pick recycling because our cafeteria has blue bins, but half the time people throw regular trash in them.",
        correctAnswer: "human",
        feedback: {
          correct:
            "This sounds like a student because it includes a specific school place and a real problem they noticed.",
          incorrect:
            "AI can mention recycling, but the cafeteria detail and imperfect observation feel more lived-in.",
        },
        topic: "School-specific detail",
        concept:
          "Human writing often includes concrete details from a real place, not just a broad topic.",
      },
      {
        statement:
          "Teamwork is important because it helps everyone collaborate, communicate, and achieve success together.",
        correctAnswer: "ai",
        feedback: {
          correct:
            "This sounds AI-like because it is polished and general. It could fit almost any assignment.",
          incorrect:
            "The sentence is not wrong, but it does not show a specific person, class, or moment.",
        },
        topic: "Generic teamwork language",
        concept:
          "AI writing can sound smooth while staying very general. Specific examples make writing stronger.",
      },
      {
        statement:
          "I thought my volcano slide was done until Jayden asked where the lava actually comes from, and I realized I only had cool pictures.",
        correctAnswer: "human",
        feedback: {
          correct:
            "This feels human because it has a classmate, a specific project, and a moment of realizing something was missing.",
          incorrect:
            "The sentence has a natural mistake-and-fix pattern that feels like a real student reflection.",
        },
        topic: "Learning from feedback",
        concept:
          "Human responses often show a messy learning moment instead of sounding perfect from the start.",
      },
      {
        statement:
          "The water cycle is a fascinating natural process that plays a vital role in Earth's ecosystems.",
        correctAnswer: "ai",
        feedback: {
          correct:
            "This sounds AI-like because it is broad, formal, and does not explain anything specific yet.",
          incorrect:
            "A student could write this, but the wording feels like a safe opening sentence from a template.",
        },
        topic: "Formal science wording",
        concept:
          "AI often starts with polished overview sentences. Good learning checks what the sentence actually explains.",
      },
      {
        statement:
          "I picked the book because the cover looked spooky, but the mystery part was mostly people arguing in the cafeteria.",
        correctAnswer: "human",
        feedback: {
          correct:
            "This feels human because it gives a personal reason, an opinion, and a specific detail from the book.",
          incorrect:
            "The casual voice and specific reaction make it feel more like a student's own thinking.",
        },
        topic: "Personal reading reaction",
        concept:
          "Student voice often includes preferences, reactions, and small details that sound personally chosen.",
      },
      {
        statement:
          "In conclusion, kindness is a powerful quality that can positively impact individuals and communities.",
        correctAnswer: "ai",
        feedback: {
          correct:
            "This sounds AI-like because it is neat and vague. It says something agreeable without showing a real example.",
          incorrect:
            "The sentence is pleasant, but it is broad enough to fit almost any kindness essay.",
        },
        topic: "Vague conclusion",
        concept:
          "A sentence can be true but weak. Look for whether it includes evidence, voice, or a real situation.",
      },
    ],
  },
};

aiOrHumanContent.collegeVoice = {
  instructions:
    "Guess whether this college writing sample sounds AI-generated or personally human.",
  options: [
    {
      value: "ai",
      label: "AI",
    },
    {
      value: "human",
      label: "Human",
    },
  ],
  scoring: {
    correctScore: 40,
    retryCorrectScore: 25,
    incorrectScore: 10,
  },
  rounds: [
    {
      statement:
        "This course has broadened my understanding of urban inequality by highlighting the complex relationship between policy, community resources, and individual opportunity.",
      correctAnswer: "ai",
      feedback: {
        correct:
          "This sounds AI-like because it is polished and plausible but has no concrete class moment, reading, or personal observation.",
        incorrect:
          "A college student could write this, but the broad wording and lack of specificity lean AI.",
      },
      topic: "Generic reflection writing",
      concept:
        "College writing can sound impressive while still being vague. Look for specific evidence, readings, or moments of thinking.",
    },
    {
      statement:
        "I disagreed with the reading until our recitation discussion about the subway map example, where I realized I was treating access like distance instead of time, cost, and reliability.",
      correctAnswer: "human",
      feedback: {
        correct:
          "This feels human because it refers to a specific class setting, an example, and a real shift in thinking.",
        incorrect:
          "AI can imitate reflection, but this includes a concrete discussion detail and a specific conceptual correction.",
      },
      topic: "Specific academic reflection",
      concept:
        "Human academic voice often shows how a specific reading, class moment, or example changed the student's thinking.",
    },
    {
      statement:
        "I am excited to apply my interdisciplinary background, strong communication skills, and passion for innovation to contribute meaningfully to your organization.",
      correctAnswer: "ai",
      feedback: {
        correct:
          "This sounds AI-like because it leans on resume-style phrases without naming the role, project, or real experience.",
        incorrect:
          "The sentence is professional, but it is too reusable and generic to feel like a specific applicant.",
      },
      topic: "Generic career language",
      concept:
        "Career writing gets stronger when it replaces broad traits with specific roles, projects, skills, and outcomes.",
    },
    {
      statement:
        "During my first week at the clinic desk, I kept mixing up the intake forms, so I made a color-coded checklist and asked the coordinator to review it before I used it with patients.",
      correctAnswer: "human",
      feedback: {
        correct:
          "This feels human because it includes an imperfect moment, a specific fix, and a real workplace context.",
        incorrect:
          "The detail about mixing up forms and creating a checklist gives this a lived, non-generic quality.",
      },
      topic: "Concrete work experience",
      concept:
        "Specific mistakes, adjustments, and evidence of responsibility make writing feel more authentic than polished claims alone.",
    },
  ],
};
export default aiOrHumanContent;
