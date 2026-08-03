const questionChoiceContent = {
  askBetterQuestions: {
    instructions:
      "Choose the best next question before giving advice.",
    successTitle: "Good Question!",
    retryTitle: "Try a Sharper Question",
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        scenario:
          "A high school student says: I need a topic for my argumentative essay about technology.",
        aiResponse:
          "Write about how phones are bad for teens. That topic is easy and teachers understand it.",
        betterResponse:
          "I can help narrow it down. What class is this for, what does the rubric require, what technology issues interest you, and do you need sources from a database or class list?",
        prompt: "What should you ask next?",
        topic: "Essay requirements",
        correctAnswer: "rubric",
        options: [
          {
            id: "rubric",
            label:
              "What does the rubric require, what interests you, and what source rules do you have?",
            feedback:
              "Correct. A strong topic depends on assignment rules, student interest, and source requirements.",
          },
          {
            id: "write-it",
            label: "Do you want me to write the essay for you?",
            feedback:
              "That skips the student's thinking and encourages misuse.",
          },
          {
            id: "easy",
            label: "Do you want the easiest topic possible?",
            feedback:
              "Ease can matter, but the first step is understanding the assignment and the student's angle.",
          },
        ],
        concept:
          "High school essay help should start with the rubric, source rules, topic interests, and assignment goal.",
      },
      {
        scenario:
          "A student says: My teacher said we can use AI for our history assignment, but I am not sure how much is allowed.",
        aiResponse:
          "Paste the prompt and I will write a complete answer that sounds like you.",
        betterResponse:
          "What does the teacher allow AI to do, and what part do you want help with? I can explain the topic, help plan, quiz you, or give feedback without writing the final submission.",
        prompt: "Which question best supports responsible AI use?",
        topic: "Academic integrity",
        correctAnswer: "allowed",
        options: [
          {
            id: "fastest",
            label: "What is the fastest way to get the answer?",
            feedback:
              "Speed is tempting, but it can lead to shortcutting the learning goal.",
          },
          {
            id: "allowed",
            label:
              "What does your teacher allow, and what part are you trying to understand?",
            feedback:
              "This question checks both rules and learning purpose before giving advice.",
          },
          {
            id: "copy",
            label: "Do you want a final answer to copy?",
            feedback:
              "This encourages misuse and avoids the learning question.",
          },
        ],
        concept:
          "Responsible school AI use starts by checking teacher rules and focusing on learning support, not copied final answers.",
      },
      {
        scenario:
          "A student says: I do not know if I should take AP Biology next year or choose an easier science class.",
        aiResponse:
          "Take AP Biology. Harder classes look better for college.",
        betterResponse:
          "What are your goals, current workload, science interest, other commitments, and what does your counselor or teacher recommend? We can compare tradeoffs instead of assuming harder is always better.",
        prompt: "What is the best next question?",
        topic: "Course planning tradeoffs",
        correctAnswer: "tradeoff",
        options: [
          {
            id: "tradeoff",
            label:
              "What are your goals, workload, interest level, and other commitments?",
            feedback:
              "This reveals both motivation and constraint, which makes later advice more useful.",
          },
          {
            id: "yes",
            label: "Can I just tell you yes?",
            feedback:
              "That gives advice too soon without understanding the decision.",
          },
          {
            id: "popular",
            label: "Will the harder class impress people?",
            feedback:
              "Impressing people is less useful than understanding fit, workload, and goals.",
          },
        ],
        concept:
          "Course decisions should consider goals, workload, interest, support, and tradeoffs before recommending.",
      },
      {
        scenario:
          "A student says: I have three tests next week and do not know how to study.",
        aiResponse:
          "Study everything for five hours every night. That is the safest plan.",
        betterResponse:
          "What subjects are the tests, when are they, what topics feel weakest, and how much time do you realistically have each day? I can help build a balanced study plan.",
        prompt: "Which question should come before advice?",
        topic: "Study planning",
        correctAnswer: "schedule",
        options: [
          {
            id: "schedule",
            label:
              "What subjects, dates, weak topics, and available study time are you working with?",
            feedback:
              "Correct. A realistic study plan needs timing, priorities, and weak areas.",
          },
          {
            id: "all-night",
            label: "Can you stay up all night before each test?",
            feedback:
              "All-night plans are usually unrealistic and can hurt learning.",
          },
          {
            id: "favorite",
            label: "Which teacher gives the easiest tests?",
            feedback:
              "That does not identify what the student needs to learn or how to plan time.",
          },
        ],
        concept:
          "Study help should ask about deadlines, weak topics, and realistic time before making a plan.",
      },
      {
        scenario:
          "A student says: I am stuck on this algebra problem and have to show my work.",
        aiResponse:
          "Here is the answer. Copy this into your worksheet.",
        betterResponse:
          "What have you tried so far, and which step confused you? I can give a hint, explain the next move, or check your work without doing the whole problem for you.",
        prompt: "Which question helps without taking over?",
        topic: "Tutoring without taking over",
        correctAnswer: "tried",
        options: [
          {
            id: "answer",
            label: "Do you want the answer immediately?",
            feedback:
              "That may solve the task, but it does not support learning.",
          },
          {
            id: "tried",
            label: "What have you tried, and where did you get stuck?",
            feedback:
              "This helps locate the confusion so the next hint can be useful.",
          },
          {
            id: "hard",
            label: "Is math always hard for you?",
            feedback:
              "This is too broad and may make the student feel judged.",
          },
        ],
        concept:
          "Question-first tutoring helps the learner continue thinking instead of just receiving an answer.",
      },
      {
        scenario:
          "A student asks AI: Can you help me improve my science fair idea about phone use and sleep?",
        aiResponse:
          "Sure. Say phones ruin sleep. That will be easy to prove.",
        betterResponse:
          "I can help turn it into a testable question. What can you measure safely, what variables can you compare, and what does your teacher require for the experiment?",
        prompt: "What should AI ask before suggesting an idea?",
        topic: "Project requirements",
        correctAnswer: "requirements",
        options: [
          {
            id: "requirements",
            label:
              "What can you measure safely, what variables can you compare, and what are the project rules?",
            feedback:
              "This asks about interest, constraints, and requirements before giving advice.",
          },
          {
            id: "flashy",
            label: "Do you want the flashiest project possible?",
            feedback:
              "Flashiness may be tempting, but it does not check the learning goal or project rules.",
          },
          {
            id: "poster",
            label: "Should I design the poster first?",
            feedback:
              "The poster comes later. The first step is understanding the project question and constraints.",
          },
        ],
        concept:
          "Useful AI help often starts by clarifying the goal, rules, resources, and constraints.",
      },
      {
        scenario:
          "A student asks AI: I felt dizzy after soccer practice and have a bad headache. What should I do?",
        aiResponse:
          "Drink water and take pain medicine. You probably just need rest.",
        betterResponse:
          "I can share general information, but dizziness with a bad headache after practice can sometimes be serious. Did you hit your head, feel confused, have vision changes, weakness, vomiting, chest pain, or symptoms that are severe or getting worse? Tell a trusted adult, coach, nurse, or medical professional right away if any warning signs are present.",
        prompt: "What should AI ask or say before giving advice?",
        topic: "Health urgency",
        correctAnswer: "check-urgency",
        options: [
          {
            id: "check-urgency",
            label:
              "Ask about severity, warning signs, and whether they need urgent medical help.",
            feedback:
              "Correct. Health advice should check for urgency and avoid acting like a diagnosis.",
          },
          {
            id: "simple-fix",
            label:
              "Suggest water, rest, and pain medicine right away.",
            feedback:
              "That might sound helpful, but it skips warning signs and could minimize a serious situation.",
          },
          {
            id: "diagnose",
            label: "Name the most likely diagnosis confidently.",
            feedback:
              "AI should not pretend to diagnose from a short message, especially when symptoms could be urgent.",
          },
        ],
        concept:
          "High school health questions need caution. AI should check warning signs and point students toward trusted adults or medical help when symptoms could be serious.",
      },
      {
        scenario:
          "A student asks AI to help write a cover letter for a part-time job after school.",
        aiResponse:
          "Sure. What is the job title? I can write a polished letter for you.",
        betterResponse:
          "I can help draft or improve it. What job are you applying for, what experience from school, clubs, volunteering, or past work should I highlight, what tone do you want, and what private details should I leave out?",
        prompt: "What should AI ask next?",
        topic: "Part-time job context",
        correctAnswer: "job-context",
        options: [
          {
            id: "job-context",
            label:
              "Ask about the role, relevant experience, tone, and any private details to leave out.",
            feedback:
              "Correct. Career help is stronger when the AI understands the target role and privacy boundaries.",
          },
          {
            id: "salary",
            label: "Ask how much money they want to make.",
            feedback:
              "Salary goals can matter later, but they do not give enough context for a strong cover letter.",
          },
          {
            id: "generic",
            label: "Ask if they want it to sound impressive.",
            feedback:
              "That is too vague. Good writing help needs specific evidence and a clear audience.",
          },
        ],
        concept:
          "Career prompts for students improve when AI asks about the role, relevant experience, tone, and privacy boundaries.",
      },
    ],
  },
  sourceScanner: {
    instructions:
      "Decide whether the AI's source response is reliable or risky.",
    successTitle: "Good Source Check!",
    retryTitle: "Scan the Details",
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        scenario:
          "A student asks AI for a source about whether school start times affect teen sleep.",
        aiResponse:
          "Here is a link about teen sleep: school-sleep-facts.example.com. It says later start times help students.",
        betterResponse:
          "Here is a stronger source: American Academy of Pediatrics, titled: School Start Times for Adolescents, published in: Pediatrics, author: Adolescent Sleep Working Group, date: 2014. It explains evidence and recommendations about later school start times and teen sleep.",
        prompt: "Is this source response reliable or risky?",
        topic: "Weak citation details",
        correctAnswer: "risky",
        options: [
          {
            id: "reliable",
            label: "Reliable",
            feedback:
              "A link alone is not enough. The AI did not identify the author, organization, date, or why the source should be trusted.",
          },
          {
            id: "risky",
            label: "Risky",
            feedback:
              "Correct. The claim may be true, but the source response is weak because it gives almost no verifiable details.",
          },
        ],
        concept:
          "A useful source response should make verification easier, not just hand over a link.",
      },
      {
        scenario:
          "A student asks AI for evidence about teen screen time and sleep for a health-class presentation.",
        aiResponse:
          "Here is a source from the Journal of Adolescent Health, titled: Screen Media Use and Sleep in Adolescents, published in: 2023, author: the study researchers listed on the article, link type: DOI or journal page. It reviews evidence about screen timing and sleep quality.",
        betterResponse:
          "This is the right pattern: source name, article title, publication year, author information, DOI or journal link, and a short summary of what the source actually supports.",
        prompt: "Is this source response reliable or risky?",
        topic: "Verifiable source details",
        correctAnswer: "reliable",
        options: [
          {
            id: "reliable",
            label: "Reliable",
            feedback:
              "Correct. It gives enough source details to verify the claim instead of relying only on AI's wording.",
          },
          {
            id: "risky",
            label: "Risky",
            feedback:
              "This response still needs checking, but it provides strong verification details like authors, publication, date, and DOI.",
          },
        ],
        concept:
          "Reliable does not mean blindly trust it. It means the AI gave you enough details to verify the source yourself.",
      },
      {
        scenario:
          "A student asks AI for a source about current college application deadlines.",
        aiResponse:
          "This article from 2019 explains application deadlines, so it should answer your question.",
        betterResponse:
          "Here is a better source type: the college's official admissions page, titled: Application Deadlines, published by: [college admissions office], updated for: the current application cycle. It should list the deadline, term, and application type.",
        prompt: "Is this source response reliable or risky?",
        topic: "Source freshness",
        correctAnswer: "risky",
        options: [
          {
            id: "reliable",
            label: "Reliable",
            feedback:
              "For fast-changing topics like products and technology, an old source may not match the current question.",
          },
          {
            id: "risky",
            label: "Risky",
            feedback:
              "Correct. The source may be real, but it is too old to confidently answer a question about a new phone.",
          },
        ],
        concept:
          "Source quality depends on the topic. Dates matter more when deadlines, policies, or requirements change.",
      },
      {
        scenario:
          "A student asks AI whether an energy drink claim is safe to use in a health presentation.",
        aiResponse:
          "This fitness blog proves energy drinks are harmless. The author says doctors exaggerate the risks, but the post does not list studies, medical organizations, dates, or named experts.",
        betterResponse:
          "Here is a stronger source pattern: a CDC, NIH, Mayo Clinic, or peer-reviewed medical source, titled: [energy drink or caffeine topic], published by: a named health organization or journal, updated on: the listed review date, author: medical or expert review team. It should summarize evidence and safety guidance.",
        prompt: "Is this source response reliable or risky?",
        topic: "High-stakes evidence",
        correctAnswer: "risky",
        options: [
          {
            id: "reliable",
            label: "Reliable",
            feedback:
              "A dramatic claim without named evidence, dates, or credible support is not a reliable source response.",
          },
          {
            id: "risky",
            label: "Risky",
            feedback:
              "Correct. Big claims need clear evidence, especially for health topics.",
          },
        ],
        concept:
          "The bigger or riskier the claim, the more important it is to check evidence, expertise, and independent confirmation.",
      },
      {
        scenario:
          "A student asks AI for a source proving a quote was said by Frederick Douglass.",
        aiResponse:
          "According to History Archive Weekly, article title: 'Forgotten Speeches of Frederick Douglass,' author: Dr. Elena Morris, published April 12, 2021. I could not find a working link or independent references to this article.",
        betterResponse:
          "Here is a better source path: use a primary source archive, Library of Congress item, museum archive, university press, or reputable encyclopedia entry, titled: [speech/document title], author: Frederick Douglass or named historian/institution, date: listed publication or archive date, link: working archive or catalog page. It should show where the quote appears.",
        prompt: "Is this source response reliable or risky?",
        topic: "Unverifiable citations",
        correctAnswer: "risky",
        options: [
          {
            id: "reliable",
            label: "Reliable",
            feedback:
              "Specific details can look convincing, but if the source cannot be found or independently checked, it is risky.",
          },
          {
            id: "risky",
            label: "Risky",
            feedback:
              "Correct. AI can produce citation-like details that sound real but are not verifiable.",
          },
        ],
        concept:
          "A detailed citation is not automatically real. If you cannot verify it, do not treat it as evidence.",
      },
      {
        scenario:
          "A student asks AI for sources about whether homework improves learning for a debate.",
        aiResponse:
          "Here are three sources: education-study.net, homeworktruths.blog, and learnbetter-fast.info. They all say homework works.",
        betterResponse:
          "Here is a stronger source pattern: an education journal article or research organization report, titled: [study/report title], author: named researcher or organization, date: listed publication year, link: DOI or official report page. It should summarize what kind of homework, age group, and outcome were studied.",
        prompt: "Is this source response reliable or risky?",
        topic: "Link-list quality",
        correctAnswer: "risky",
        options: [
          {
            id: "reliable",
            label: "Reliable",
            feedback:
              "Several links are not enough if they are vague, low-context, or possibly not independent.",
          },
          {
            id: "risky",
            label: "Risky",
            feedback:
              "Correct. The response gives link-like names but no authors, dates, publications, or evidence details.",
          },
        ],
        concept:
          "A list of links can still be weak. Reliable source help should explain what each source is and why it supports the claim.",
      },
      {
        scenario:
          "A student asks AI for a source about AI use in classrooms for a school board speech.",
        aiResponse:
          "According to The 2024 Global AI Classroom Report by Dr. Melissa Grant, published by the International Learning Council, 92% of schools improved grades with AI. I cannot provide a working link.",
        betterResponse:
          "I cannot verify that citation, so I should not use it as evidence. A stronger response would provide a traceable source, titled: [real report or article title], published by: [organization or journal], author: [named author or organization], published on: [date], link or DOI: [working source]. It should briefly summarize what was studied and what the evidence actually supports.",
        prompt: "Is this source response reliable or risky?",
        topic: "Fake citations",
        correctAnswer: "risky",
        options: [
          {
            id: "reliable",
            label: "Reliable",
            feedback:
              "The details sound official, but a citation that cannot be verified should not be treated as reliable.",
          },
          {
            id: "risky",
            label: "Risky",
            feedback:
              "Correct. AI can invent citation-like details, so a working source trail matters.",
          },
        ],
        concept:
          "Citation-like details can be fabricated. If the source cannot be found, treat it as unverified.",
      },
      {
        scenario:
          "A student asks whether a viral claim about recycling is reliable enough for an environmental science project.",
        aiResponse:
          "Here are three links, and they all say the same thing. The pages use similar wording and none list authors, dates, or original data.",
        betterResponse:
          "I would look for independent sources, such as a city recycling department page, an environmental agency report, or a named research organization. A stronger source would include title, author or organization, publication or update date, link, and a short summary of the original evidence.",
        prompt: "Is this source response reliable or risky?",
        topic: "Independent confirmation",
        correctAnswer: "risky",
        options: [
          {
            id: "reliable",
            label: "Reliable",
            feedback:
              "Multiple pages can repeat the same unsupported claim. Similar wording is a warning sign.",
          },
          {
            id: "risky",
            label: "Risky",
            feedback:
              "Correct. Strong verification looks for independent sources and original evidence.",
          },
        ],
        concept:
          "Three repeating links are not the same as independent evidence.",
      },
    ],
  },
  privacyShield: {
    instructions:
      "Choose the safest useful prompt or response.",
    successTitle: "Safe Choice!",
    retryTitle: "Protect More Privacy",
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        scenario:
          "You want AI to help write an email to your teacher about missing class.",
        aiResponse:
          "Include your full name, home address, phone number, and exact medical reason so the email sounds convincing.",
        betterResponse:
          "You can write: I missed class for a personal reason. Could you please let me know what I should review or make up?",
        prompt: "Which prompt protects privacy best?",
        topic: "Identifying details",
        correctAnswer: "general",
        options: [
          {
            id: "full-details",
            label:
              "Write my teacher an email. My full name is Maya Chen, I was at 14 Pine Street, and my phone is 555-0148.",
            feedback:
              "This includes personal details the AI does not need to write a useful email.",
          },
          {
            id: "general",
            label:
              "Help me write a respectful email to my teacher saying I missed class for a personal reason and asking how to catch up.",
            feedback:
              "This keeps the request useful while avoiding names, addresses, phone numbers, and private details.",
          },
          {
            id: "medical",
            label:
              "Explain my exact medical issue to my teacher and make it sound urgent.",
            feedback:
              "This shares sensitive health information and asks the AI to reveal more than needed.",
          },
        ],
        concept:
          "A safer prompt gives the AI enough context to help without including private identifying details.",
      },
      {
        scenario:
          "A friend sends you screenshots of a private group chat and asks you to summarize them with AI.",
        aiResponse:
          "Upload the screenshots as-is. The names and exact messages will help me make the summary more accurate.",
        betterResponse:
          "Ask permission first. If a summary is still needed, remove names and private details, then summarize only the specific issue.",
        prompt: "What is the safest move?",
        topic: "Consent and private messages",
        correctAnswer: "remove-identifiers",
        options: [
          {
            id: "upload-all",
            label:
              "Upload the screenshots exactly as they are so the AI has full context.",
            feedback:
              "That may expose names, messages, usernames, and private conversation details.",
          },
          {
            id: "remove-identifiers",
            label:
              "Ask permission first, then remove names and private details before summarizing only the needed issue.",
            feedback:
              "This respects consent and reduces exposure before using AI on someone else's messages.",
          },
          {
            id: "post-summary",
            label:
              "Summarize it with AI, then post the summary publicly without names.",
            feedback:
              "Removing names helps, but public posting can still reveal private context or harm people involved.",
          },
        ],
        concept:
          "Privacy is not only about names. Consent, context, and where the result goes all matter.",
      },
      {
        scenario:
          "You want AI to plan a walking route from school to your house.",
        aiResponse:
          "Send me your school name, home address, daily schedule, and the exact time you walk home.",
        betterResponse:
          "For privacy, avoid exact addresses or routines. I can give general pedestrian safety tips and route-planning advice.",
        prompt: "Which choice is safer?",
        topic: "Location and routines",
        correctAnswer: "nearby",
        options: [
          {
            id: "exact-route",
            label:
              "Give AI my school name, home address, daily schedule, and the exact time I walk home.",
            feedback:
              "This combines location and routine details, which can be sensitive and risky.",
          },
          {
            id: "nearby",
            label:
              "Ask for general pedestrian safety tips and route-planning advice without sharing exact addresses or routines.",
            feedback:
              "This gets helpful guidance without exposing precise location or schedule information.",
          },
          {
            id: "friends",
            label:
              "Add my friends' addresses too so the AI can plan a group route.",
            feedback:
              "This shares other people's private location details without a clear need or consent.",
          },
        ],
        concept:
          "Exact locations, routines, and other people's addresses deserve extra caution.",
      },
      {
        scenario:
          "A form asks you to paste a customer support email into AI so it can write a reply.",
        aiResponse:
          "Paste the full thread, including account numbers, email addresses, order IDs, and any temporary passwords.",
        betterResponse:
          "Remove names, account numbers, email addresses, order IDs, and credentials. Then ask for a polite reply template.",
        prompt: "Which version is best to share?",
        topic: "Customer data redaction",
        correctAnswer: "redacted",
        options: [
          {
            id: "redacted",
            label:
              "Remove the customer's name, account number, email, and order ID, then ask for a polite reply template.",
            feedback:
              "This keeps the communication goal while removing identifiers the AI does not need.",
          },
          {
            id: "raw",
            label:
              "Paste the full email thread with names, account numbers, and order details.",
            feedback:
              "That shares private customer information and creates unnecessary exposure.",
          },
          {
            id: "password",
            label:
              "Include the temporary password so AI can write exact login steps.",
            feedback:
              "Passwords and login credentials should not be pasted into AI tools.",
          },
        ],
        concept:
          "Redaction means removing sensitive details while keeping enough context to complete the task.",
      },
      {
        scenario:
          "You want AI to help make a birthday invitation.",
        aiResponse:
          "Send the full guest list, home address, phone numbers, and the exact time everyone will be away after the party.",
        betterResponse:
          "I can create a friendly invitation template with placeholders for the date, time, location, and RSVP details.",
        prompt: "Which prompt is safest and still useful?",
        topic: "Placeholders for personal events",
        correctAnswer: "safe-invite",
        options: [
          {
            id: "safe-invite",
            label:
              "Create a friendly birthday invitation template with placeholders for date, time, and location.",
            feedback:
              "Placeholders let you get useful writing help without sharing private event details.",
          },
          {
            id: "guest-list",
            label:
              "Use my full guest list, home address, and everyone's phone numbers to make the invitation.",
            feedback:
              "This shares personal contact and location information for many people.",
          },
          {
            id: "public",
            label:
              "Write a public post with my address and the time nobody will be home after the party.",
            feedback:
              "This reveals location and schedule details publicly, which is not safe.",
          },
        ],
        concept:
          "Templates and placeholders are often the safest way to get AI help for personal events.",
      },
      {
        scenario:
          "You want AI to help you write a post about a class field trip.",
        aiResponse:
          "Include your school name, teacher's name, bus pickup time, and photos of classmates so the post feels personal.",
        betterResponse:
          "I can help write a general field trip reflection without naming students, showing faces, or sharing exact schedules. Use placeholders or ask permission before including identifying details.",
        prompt: "Which choice protects privacy best?",
        topic: "Other people's data",
        correctAnswer: "general-reflection",
        options: [
          {
            id: "classmates",
            label:
              "Upload classmate photos and ask AI to write captions with names.",
            feedback:
              "This shares other people's images and names, which needs permission and may not be appropriate.",
          },
          {
            id: "general-reflection",
            label:
              "Ask for a general reflection using no student names, faces, exact times, or location details.",
            feedback:
              "This keeps the writing useful while reducing identifying information.",
          },
          {
            id: "schedule",
            label:
              "Include the exact bus schedule so families know the timeline.",
            feedback:
              "Exact schedules can be sensitive and usually do not belong in an AI prompt or public post.",
          },
        ],
        concept:
          "Privacy includes other people's names, images, schedules, and locations, not just your own information.",
      },
      {
        scenario:
          "You want AI to help respond to a friend's private message about a family problem.",
        aiResponse:
          "Paste the full conversation, including names and family details, so I can understand the situation.",
        betterResponse:
          "Summarize the situation without names or identifying details, then ask for a kind response that respects privacy.",
        prompt: "Which choice protects your friend's privacy?",
        topic: "Friends and family privacy",
        correctAnswer: "summarize",
        options: [
          {
            id: "paste-all",
            label:
              "Paste the full chat with names so AI has every detail.",
            feedback:
              "That shares another person's private message and identifying details without consent.",
          },
          {
            id: "summarize",
            label:
              "Summarize the issue without names, screenshots, or identifying family details.",
            feedback:
              "Correct. This lets AI help with tone while protecting someone else's privacy.",
          },
          {
            id: "screenshots",
            label:
              "Upload screenshots so AI can read the exact wording.",
            feedback:
              "Screenshots often contain names, photos, timestamps, and private details.",
          },
        ],
        concept:
          "Private messages and family details belong to other people too. Summarize safely and remove identifiers.",
      },
      {
        scenario:
          "You want AI to write a caption for a photo after practice.",
        aiResponse:
          "Tag everyone, mention your school, practice time, and where the team meets.",
        betterResponse:
          "Write a fun caption without names, exact location, school, or routine details unless everyone has agreed to share them.",
        prompt: "Which choice is safest for a social media post?",
        topic: "Social media privacy",
        correctAnswer: "safe-caption",
        options: [
          {
            id: "tag-routine",
            label:
              "Include names, school, practice time, and meeting location.",
            feedback:
              "That can reveal routines, identities, and locations for multiple people.",
          },
          {
            id: "safe-caption",
            label:
              "Ask for a fun caption without names, exact location, school, or routine details.",
            feedback:
              "Correct. It keeps the post useful without exposing private information.",
          },
          {
            id: "faces",
            label:
              "Upload the photo and let AI identify who is in it.",
            feedback:
              "Identifying people in images can create privacy and consent problems.",
          },
        ],
        concept:
          "Social posts can expose routines, locations, and other people's identities.",
      },
    ],
  },
  biasLens: {
    instructions:
      "Choose the fairest and most evidence-based AI response.",
    successTitle: "Fair Choice!",
    retryTitle: "Check the Bias",
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        scenario:
          "An AI is asked to recommend one student for a robotics team. It says the student who sounds most confident should be picked.",
        aiResponse:
          "Pick the most confident student. Confident people usually make the best leaders.",
        betterResponse:
          "Use the same criteria for every student, such as interest, teamwork, effort, relevant experience, and willingness to learn.",
        prompt: "What is the fairest next step?",
        topic: "Consistent criteria",
        correctAnswer: "criteria",
        options: [
          {
            id: "confidence",
            label:
              "Choose the most confident student because confidence means they will lead well.",
            feedback:
              "Confidence can matter, but using it alone may reward style over skill and miss quieter students.",
          },
          {
            id: "criteria",
            label:
              "Compare all students using the same criteria, like interest, teamwork, effort, and relevant experience.",
            feedback:
              "This is fairer because everyone is judged by the same clear standards.",
          },
          {
            id: "fast",
            label:
              "Pick quickly so the AI does not overthink the decision.",
            feedback:
              "Fast decisions can hide unfair assumptions instead of checking them.",
          },
        ],
        concept:
          "Fairer decisions use consistent criteria instead of relying on first impressions or confidence alone.",
      },
      {
        scenario:
          "A user asks AI to describe a nurse, and the AI only uses she/her pronouns and assumes the nurse is caring but not technical.",
        aiResponse:
          "She is naturally caring and gentle, which is why she is a good nurse.",
        betterResponse:
          "A nurse can be any gender and uses both care and technical skill to support patients, follow procedures, and solve problems.",
        prompt: "What response handles bias best?",
        topic: "Stereotypes in wording",
        correctAnswer: "neutral",
        options: [
          {
            id: "agree",
            label:
              "Keep the description because most people already picture nurses that way.",
            feedback:
              "Common assumptions can still be stereotypes, and repeating them makes the output less fair.",
          },
          {
            id: "neutral",
            label:
              "Use neutral language and describe nursing as both caring and technically skilled.",
            feedback:
              "This avoids gender assumptions and gives a more complete picture of the role.",
          },
          {
            id: "opposite",
            label:
              "Always make the nurse male so the answer balances things out.",
            feedback:
              "Flipping a stereotype every time is still a shortcut. Neutral, flexible wording is stronger.",
          },
        ],
        concept:
          "Bias can show up in pronouns, traits, roles, and what skills the AI chooses to emphasize.",
      },
      {
        scenario:
          "An AI summarizes feedback about a school lunch menu using only comments from one friend group.",
        aiResponse:
          "Everyone thinks the lunch menu is fine because this friend group said they like it.",
        betterResponse:
          "This summary only reflects one group. Gather feedback from students with different schedules, tastes, and dietary needs.",
        prompt: "What should happen before trusting the summary?",
        topic: "Representative input",
        correctAnswer: "more-voices",
        options: [
          {
            id: "more-voices",
            label:
              "Collect feedback from more students with different needs, schedules, tastes, and dietary restrictions.",
            feedback:
              "This checks whether the summary represents more than one narrow group.",
          },
          {
            id: "popular-group",
            label:
              "Trust the friend group because they are popular and probably know what people think.",
            feedback:
              "Popularity is not the same as representation.",
          },
          {
            id: "ignore",
            label:
              "Ignore feedback and ask AI to invent a better menu instead.",
            feedback:
              "Inventing without evidence can miss real needs and make the result less fair.",
          },
        ],
        concept:
          "Fair summaries need representative input, especially from people affected by the decision.",
      },
      {
        scenario:
          "AI ranks job applicants and gives extra points to people from one school because past employees from that school did well.",
        aiResponse:
          "Applicants from that school should rank higher because people from there have worked out before.",
        betterResponse:
          "Judge applicants by role-relevant skills and evidence. Be careful that school name does not become a shortcut for opportunity or background.",
        prompt: "What is the concern?",
        topic: "Proxy bias",
        correctAnswer: "proxy",
        options: [
          {
            id: "proxy",
            label:
              "The school name might act like a shortcut that favors some groups and overlooks individual ability.",
            feedback:
              "Exactly. A detail can become a proxy for privilege, access, or background instead of actual skill.",
          },
          {
            id: "tradition",
            label:
              "It is fair because the company has always liked that school.",
            feedback:
              "Tradition can repeat old patterns, including unfair ones.",
          },
          {
            id: "remove-all",
            label:
              "Remove all qualifications so every applicant looks the same.",
            feedback:
              "The goal is not to erase useful evidence. It is to use evidence that is relevant and fair.",
          },
        ],
        concept:
          "Bias can come from proxy signals: details that seem neutral but unfairly stand in for background or opportunity.",
      },
      {
        scenario:
          "A city asks AI where to add new public Wi-Fi. The AI recommends only busy shopping areas because they have the most online reviews.",
        aiResponse:
          "Put Wi-Fi in the shopping areas with the most reviews. Those places clearly matter most.",
        betterResponse:
          "Use need-based evidence too, like areas with limited internet access, schools, libraries, and community centers.",
        prompt: "Which improvement makes the recommendation fairer?",
        topic: "Missing data",
        correctAnswer: "needs",
        options: [
          {
            id: "reviews",
            label:
              "Use only online reviews because places with more reviews clearly matter more.",
            feedback:
              "Review data can overrepresent people and places that are already more connected.",
          },
          {
            id: "needs",
            label:
              "Include need-based signals, like areas with limited internet access, schools, libraries, and community centers.",
            feedback:
              "This looks at who needs the resource, not only who already appears in the data.",
          },
          {
            id: "downtown",
            label:
              "Put everything downtown because it is easiest to explain.",
            feedback:
              "Easy explanations can still leave out communities that need support.",
          },
        ],
        concept:
          "Fair AI use asks who is missing from the data and who is affected by the recommendation.",
      },
      {
        scenario:
          "AI is asked to suggest students for an advanced reading group and recommends only students who already speak up often in class.",
        aiResponse:
          "Choose the students who talk the most during discussions because they are clearly the strongest readers.",
        betterResponse:
          "Use multiple fair signals, such as reading assessments, written work, student interest, teacher observations, and whether quieter students have had equal chances to participate.",
        prompt: "What is the bias risk?",
        topic: "Visibility shortcut",
        correctAnswer: "visibility",
        options: [
          {
            id: "visibility",
            label:
              "Speaking often may be a visibility shortcut, not proof of reading ability.",
            feedback:
              "Correct. The AI may be rewarding who is most visible instead of who meets the actual criteria.",
          },
          {
            id: "volume",
            label:
              "Students who speak the most should always get harder work.",
            feedback:
              "That assumes confidence or talk time equals ability, which can be unfair.",
          },
          {
            id: "random",
            label:
              "The only fair choice is to choose students randomly.",
            feedback:
              "Random choice can be useful sometimes, but here the better move is using relevant, consistent evidence.",
          },
        ],
        concept:
          "Bias can appear when AI uses visibility, confidence, or participation as a shortcut for ability.",
      },
      {
        scenario:
          "AI screens resumes and gives lower scores to applicants with employment gaps.",
        aiResponse:
          "Applicants with gaps are less reliable, so rank them lower.",
        betterResponse:
          "Do not assume the reason for a gap. Evaluate role-relevant skills, experience, and evidence consistently for every applicant.",
        prompt: "What is the bias problem?",
        topic: "Employment-gap bias",
        correctAnswer: "gap-assumption",
        options: [
          {
            id: "gap-assumption",
            label:
              "It assumes employment gaps mean someone is less reliable.",
            feedback:
              "Correct. A gap can have many causes and should not become an automatic penalty.",
          },
          {
            id: "strict-screening",
            label:
              "It is only being strict, which is always fair.",
            feedback:
              "Strict rules can still be unfair if the rule is based on an unsupported assumption.",
          },
          {
            id: "no-problem",
            label:
              "There is no problem because resumes are work documents.",
            feedback:
              "Hiring decisions can strongly affect people, so biased shortcuts matter here.",
          },
        ],
        concept:
          "Gaps can reflect caregiving, health, school, layoffs, or many other reasons. AI should not turn them into automatic negatives.",
      },
      {
        scenario:
          "AI recommends a coding club only to students who already own expensive laptops.",
        aiResponse:
          "Students with better laptops are probably more serious about coding.",
        betterResponse:
          "Use interest, access needs, effort, and learning goals instead of assuming equipment equals ability.",
        prompt: "What is the fairest improvement?",
        topic: "Resource bias",
        correctAnswer: "resource-shortcut",
        options: [
          {
            id: "laptop-quality",
            label:
              "Use laptop quality because better equipment proves stronger interest.",
            feedback:
              "Equipment can reflect access to money or resources, not talent or motivation.",
          },
          {
            id: "resource-shortcut",
            label:
              "Use interest, effort, learning goals, and access needs instead of equipment.",
            feedback:
              "Correct. This avoids turning resources into a shortcut for ability.",
          },
          {
            id: "exclude-beginners",
            label:
              "Exclude beginners because clubs should only accept students who are already ready.",
            feedback:
              "That can block the learners who would benefit most from the opportunity.",
          },
        ],
        concept:
          "Resources can reflect access, not talent or motivation.",
      },
    ],
  },
  claimCheck: {
    instructions:
      "Decide whether the AI's response gives enough source detail to trust the claim or whether you should verify first.",
    successTitle: "Good Claim Check!",
    retryTitle: "Check The Claim",
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        scenario:
          "Someone pastes this claim into AI: NASA says the Moon's gravity is about one-sixth of Earth's gravity.",
        aiResponse:
          "Yes, according to NASA's Moon Fact Sheet from NASA Goddard Space Flight Center, updated January 11, 2024, the Moon's surface gravity is about one-sixth of Earth's.",
        betterResponse:
          "This is a good response pattern: it names the source title, organization, update date, and what the source actually supports.",
        prompt: "What should you do with this AI response?",
        topic: "Good source pattern",
        correctAnswer: "trust-it",
        options: [
          {
            id: "trust-it",
            label: "Trust It",
            feedback:
              "Correct. It gives a named source, organization, date, and a clear summary of what the source supports.",
          },
          {
            id: "verify-first",
            label: "Verify First",
            feedback:
              "You should still be willing to click through later, but this response gives enough source detail to be cautiously trusted.",
          },
        ],
        concept:
          "A trustworthy AI response makes verification easier by naming the source, organization, date, and supported claim.",
      },
      {
        scenario:
          "Someone pastes this claim into AI: A new federal law bans homework in every public school starting next year.",
        aiResponse:
          "Yes, this is true. A lot of students are talking about it online, and schools have been moving away from homework.",
        betterResponse:
          "I should not confirm this without evidence. A stronger response would ask for the exact law name, date, jurisdiction, and an official source such as Congress.gov, a state legislature page, or a trusted news report explaining whether it passed or was only proposed.",
        prompt: "What should you do with this AI response?",
        topic: "Original source check",
        correctAnswer: "verify-first",
        options: [
          {
            id: "trust-it",
            label: "Trust It",
            feedback:
              "Popularity is not evidence. This response gives no official source, law name, date, or location.",
          },
          {
            id: "verify-first",
            label: "Verify First",
            feedback:
              "Correct. Legal claims need exact details and an official or trusted source.",
          },
        ],
        concept:
          "A claim about laws or government action needs the original source, date, place, and exact status.",
      },
      {
        scenario:
          "Someone pastes this claim into AI: The CDC says adults should get at least 150 minutes of moderate-intensity physical activity each week.",
        aiResponse:
          "Yes, here is a CDC source: Adult Activity: An Overview, published by the Centers for Disease Control and Prevention. It says adults need at least 150 minutes a week of moderate-intensity aerobic activity, plus muscle-strengthening activity on 2 days.",
        betterResponse:
          "This is a good response pattern because it names the organization, page title, and what the source supports. For health topics, you should still check the official page directly before acting.",
        prompt: "What should you do with this AI response?",
        topic: "Health source details",
        correctAnswer: "trust-it",
        options: [
          {
            id: "trust-it",
            label: "Trust It",
            feedback:
              "Correct. It gives a credible organization, source title, and a specific summary of what the source supports.",
          },
          {
            id: "verify-first",
            label: "Verify First",
            feedback:
              "Direct checking is still smart for health guidance, but the AI response itself follows a strong source pattern.",
          },
        ],
        concept:
          "For health claims, strong AI responses should name credible organizations and summarize the exact guidance they support.",
      },
      {
        scenario:
          "Someone pastes this claim into AI: A chart says 92% of people support a new policy.",
        aiResponse:
          "The chart looks professional, so the statistic is likely accurate.",
        betterResponse:
          "A professional-looking chart is not enough. I would look for who conducted the survey, sample size, date, question wording, funding source, and a link to the original data.",
        prompt: "What should you do with this AI response?",
        topic: "Chart source details",
        correctAnswer: "verify-first",
        options: [
          {
            id: "trust-it",
            label: "Trust It",
            feedback:
              "Design can make weak data look convincing. This response gives no source, method, date, or sample size.",
          },
          {
            id: "verify-first",
            label: "Verify First",
            feedback:
              "Correct. Data claims need source and method details.",
          },
        ],
        concept:
          "Charts and statistics need source, date, method, and context before they deserve trust.",
      },
      {
        scenario:
          "Someone pastes this claim into AI: The National Weather Service says a severe thunderstorm watch means conditions are possible, while a warning means the storm is happening or imminent.",
        aiResponse:
          "Yes, according to National Weather Service weather safety guidance, a watch means conditions are possible, while a warning means hazardous weather is occurring or imminent in the warned area.",
        betterResponse:
          "This response gives a credible source organization and accurately explains what the source supports. It would be even stronger with the exact NWS page title and link.",
        prompt: "What should you do with this AI response?",
        topic: "Public safety source",
        correctAnswer: "trust-it",
        options: [
          {
            id: "trust-it",
            label: "Trust It",
            feedback:
              "Correct. It names an appropriate official source and summarizes the supported distinction clearly.",
          },
          {
            id: "verify-first",
            label: "Verify First",
            feedback:
              "It could include a direct page title or link, but this is still a strong enough source pattern to cautiously trust.",
          },
        ],
        concept:
          "For public safety claims, official organizations and clear source-backed definitions matter.",
      },
      {
        scenario:
          "Someone pastes this claim into AI: A famous scientist said, 'Curiosity is more important than knowledge.'",
        aiResponse:
          "It sounds like something they would say, so the quote is probably real.",
        betterResponse:
          "I should not judge by style alone. I would look for the quote in a primary source, verified interview, book, speech transcript, or reputable quote archive with a citation.",
        prompt: "What should you do with this AI response?",
        topic: "Fake expert quotes",
        correctAnswer: "verify-first",
        options: [
          {
            id: "trust-it",
            label: "Trust It",
            feedback:
              "A quote sounding believable is not enough. Famous people are often misquoted online.",
          },
          {
            id: "verify-first",
            label: "Verify First",
            feedback:
              "Correct. The AI judged by style instead of using a traceable source.",
          },
        ],
        concept:
          "Quotes need traceable sources. Style alone cannot prove someone said something.",
      },
    ],
  },
  scamShield: {
    instructions:
      "Spot red flags in suspicious messages and choose the safest next step.",
    successTitle: "Good Scam Check!",
    retryTitle: "Find The Red Flag",
    scoring: {
      correctScore: 40,
      retryCorrectScore: 25,
      incorrectScore: 10,
    },
    rounds: [
      {
        scenario:
          "A text says: Your package is delayed. Pay $1.38 in fees at delivery-update-fast.com or it will be returned today.",
        aiResponse:
          "The fee is small, so it is probably fine to click and pay.",
        betterResponse:
          "Do not click the link from the text. Check tracking through the official delivery app or website, and look for red flags like urgency, odd domains, and unexpected payment requests.",
        prompt: "What is the safest next step?",
        topic: "Suspicious links",
        correctAnswer: "official-channel",
        options: [
          {
            id: "pay-small-fee",
            label: "Pay because the fee is small.",
            feedback:
              "Small fees are often used to get card details or account information.",
          },
          {
            id: "official-channel",
            label:
              "Avoid the link and check the delivery through the official app or site.",
            feedback:
              "Correct. Verify through a trusted channel you open yourself.",
          },
          {
            id: "reply",
            label: "Reply and ask if the message is real.",
            feedback:
              "Replying can confirm your number is active and does not verify the sender.",
          },
        ],
        concept:
          "Suspicious links and unexpected fees should be checked through official channels, not the message itself.",
      },
      {
        scenario:
          "An email says: Your bank account is locked. Reply with your username, password, and security code to restore access.",
        aiResponse:
          "If the email uses your bank's logo, reply with the information so they can unlock it.",
        betterResponse:
          "Never send passwords or security codes by email. Open the bank's official app or website yourself, or call the number on your card to verify the issue.",
        prompt: "What is the biggest red flag?",
        topic: "Credential requests",
        correctAnswer: "password-code",
        options: [
          {
            id: "logo",
            label: "The email uses a bank logo.",
            feedback:
              "Logos can be copied. A logo does not prove the message is real.",
          },
          {
            id: "password-code",
            label: "It asks for a password and security code.",
            feedback:
              "Correct. Legitimate services should not ask you to send passwords or security codes by email.",
          },
          {
            id: "locked",
            label: "The account might be locked.",
            feedback:
              "Account warnings can be real, but you should verify through official channels.",
          },
        ],
        concept:
          "Requests for passwords, codes, or banking details are major scam warnings.",
      },
      {
        scenario:
          "Someone messages: I accidentally sent a login code to your phone. Can you send it back to me?",
        aiResponse:
          "If they seem polite, send the code back so they can log in.",
        betterResponse:
          "Do not share the code. Login codes prove account access. The sender may be trying to get into your account, even if the message sounds friendly.",
        prompt: "Which choice protects the user?",
        topic: "Verification codes",
        correctAnswer: "never-share-code",
        options: [
          {
            id: "never-share-code",
            label: "Do not share the code with anyone.",
            feedback:
              "Correct. Verification codes are like temporary keys to an account.",
          },
          {
            id: "ask-name",
            label: "Ask the person for their name first.",
            feedback:
              "A name does not make it safe. The code should not be shared.",
          },
          {
            id: "send-code",
            label: "Send the code if they sound honest.",
            feedback:
              "Scam messages often sound friendly or urgent. Never share login codes.",
          },
        ],
        concept:
          "Verification codes should never be shared. They can give someone access to your account.",
      },
      {
        scenario:
          "A message from someone claiming to be your manager says: I am in a meeting. Buy gift cards now and send me the codes.",
        aiResponse:
          "This sounds urgent, so follow the request quickly.",
        betterResponse:
          "Pause and verify through a separate trusted channel, like calling the manager or checking an official work chat. Gift card codes and urgency are common scam signals.",
        prompt: "What should the user do first?",
        topic: "Urgency and gift cards",
        correctAnswer: "verify-separately",
        options: [
          {
            id: "buy-now",
            label: "Buy the cards before asking questions.",
            feedback:
              "Urgency is part of the pressure tactic. Gift card codes are hard to recover.",
          },
          {
            id: "verify-separately",
            label:
              "Verify through a separate trusted channel before doing anything.",
            feedback:
              "Correct. Do not use the suspicious message itself as proof.",
          },
          {
            id: "send-one",
            label: "Send one gift card code to test if it is real.",
            feedback:
              "Sending even one code can lose money and still does not verify the sender.",
          },
        ],
        concept:
          "Urgent gift-card requests are a common scam pattern. Verify separately before acting.",
      },
      {
        scenario:
          "A marketplace buyer offers to overpay, then asks you to refund the extra money through a different payment app.",
        aiResponse:
          "Overpayment means they are serious. Accept it and refund the difference.",
        betterResponse:
          "Be careful. Overpayment and off-platform refunds are common scam patterns. Use the marketplace's official payment system and avoid sending money back through a separate app.",
        prompt: "What is the risk?",
        topic: "Marketplace overpayment",
        correctAnswer: "refund-scam",
        options: [
          {
            id: "refund-scam",
            label:
              "The original payment may fail or be reversed after the refund is sent.",
            feedback:
              "Correct. This can leave the seller out the refunded money.",
          },
          {
            id: "generous-buyer",
            label: "The buyer is probably being generous.",
            feedback:
              "Unexpected overpayment is a red flag, not a normal buying pattern.",
          },
          {
            id: "move-fast",
            label: "The seller should move fast to keep the buyer happy.",
            feedback:
              "Pressure to move fast makes scams more effective.",
          },
        ],
        concept:
          "Marketplace scams often use overpayment, pressure, and off-platform refunds.",
      },
    ],
  },
};

export default questionChoiceContent;
