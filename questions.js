// Questions data for Mentor Merlin quiz
//
// This file contains the 30 multiple‑choice questions from the Final Assessment
// document provided by Mentor Merlin.  Each question has a unique id, the
// question text, an array of possible answers, the index of the correct
// answer within that array, and a brief explanation identifying the correct
// choice.

const questions = [
  {
    id: 1,
    type: 'mcq',
    question: 'What is the minimum passing score for the Writing section in a single OET sitting for NMC eligibility?',
    options: ['Grade A', 'Grade B', 'Grade C+', 'Grade C'],
    correctIndex: 2,
    explanation: 'The minimum passing score for the Writing section is Grade C+, as this meets the NMC eligibility criteria.'
  },
  {
    id: 2,
    type: 'mcq',
    question: 'What is the opening time and session starting time at the Northampton Centre?',
    options: ['8:30 AM & 9:00 AM', '9:00 AM & 9:30 AM', '9:30 AM & 10:00 AM', '10:00 AM & 10:30 AM'],
    correctIndex: 1,
    explanation: 'At the Northampton Centre the doors open at 9:00 AM and the session starts at 9:30 AM.'
  },
  {
    id: 3,
    type: 'mcq',
    question: 'What happens if a candidate fails the CBT three times?',
    options: ['They can rebook immediately', 'They must attend a training session', 'They must restart the NMC process and wait up to 6 months', 'They can only rebook after 1 month'],
    correctIndex: 2,
    explanation: 'Failing the CBT three times requires candidates to restart the NMC process and wait up to six months before rebooking.'
  },
  {
    id: 4,
    type: 'mcq',
    question: 'Which band level is associated with Registered Nurses in the NHS?',
    options: ['Band 2', 'Band 3', 'Band 4', 'Band 5'],
    correctIndex: 3,
    explanation: 'Registered nurses in the NHS are employed at Band 5 on the Agenda for Change pay scale.'
  },
  {
    id: 5,
    type: 'mcq',
    question: 'Which pathway allows combining two OET scores within 12 months for NMC approval?',
    options: ['My Practice', 'IELTS Clubbing', 'OET Clubbing', 'My Training'],
    correctIndex: 2,
    explanation: 'OET Clubbing allows candidates to combine two OET scores taken within 12 months to meet NMC requirements.'
  },
  {
    id: 6,
    type: 'mcq',
    question: 'How many scenario-based stations are part of the OSCE exam?',
    options: ['1', '2', '3', '4'],
    correctIndex: 1,
    explanation: 'The OSCE exam includes two scenario‑based stations, in addition to the APIE and skills stations.'
  },
  {
    id: 7,
    type: 'mcq',
    question: 'What is the minimum accepted IELTS score for the Listening, Reading, and Speaking sections when clubbing results?',
    options: ['6.0', '6.5', '7.0', '7.5'],
    correctIndex: 1,
    explanation: 'When clubbing IELTS results, the Listening, Reading and Speaking sections must each be at least 6.5.'
  },
  {
    id: 8,
    type: 'mcq',
    question: 'How many days of online preparation does the Mental Health OSCE plan offer?',
    options: ['5', '7', '10', '15'],
    correctIndex: 2,
    explanation: 'The Mental Health OSCE plan provides ten days of online preparation.'
  },
  {
    id: 9,
    type: 'mcq',
    question: 'What is the fee for the Mentor Merlin’s “OSCE with Induction – Package A”?',
    options: ['£397', '£504', '£600', '£794'],
    correctIndex: 1,
    explanation: 'Package A of the OSCE with Induction programme costs £504.'
  },
  {
    id: 10,
    type: 'mcq',
    question: 'What is included on Day 6 of the Mentor Merlin onsite OSCE training?',
    options: ['Skill Practice', 'APIE and Scenario Practice', '4 Hour Result Booster', 'Mock OSCE Exam'],
    correctIndex: 2,
    explanation: 'Day 6 of onsite OSCE training features a 4‑hour Result Booster session.'
  },
  {
    id: 11,
    type: 'mcq',
    question: 'Which OSCE preparation programme includes a First Attempt Pass Guarantee?',
    options: ['CPD OSCE', 'MGS', 'VC OSCE', 'Mental Health OSCE'],
    correctIndex: 2,
    explanation: 'The VC OSCE programme comes with a first‑attempt pass guarantee for candidates.'
  },
  {
    id: 12,
    type: 'mcq',
    question: 'What is the delivery timeline for Merlin Books of OET after confirmation?',
    options: ['5 working days', '7 working days', '10 working days', '15 working days'],
    correctIndex: 3,
    explanation: 'Once confirmed, Merlin Books of OET are dispatched within 15 working days.'
  },
  {
    id: 13,
    type: 'mcq',
    question: 'What happens if an OSCE candidate fails 8 stations?',
    options: ['Partial resit', 'Rebook 3 failed stations', 'Full resit required', 'Appeal the result'],
    correctIndex: 2,
    explanation: 'Failing eight stations means a full resit of the OSCE exam is required.'
  },
  {
    id: 14,
    type: 'mcq',
    question: 'What is the first step in Mentor Merlin’s VC OSCE pathway?',
    options: ['Apply for a UK Visitor Visa', 'Start OSCE Training', 'Placement Assistance', 'NMC Application'],
    correctIndex: 3,
    explanation: 'The VC OSCE pathway begins with submitting your NMC application.'
  },
  {
    id: 15,
    type: 'mcq',
    question: 'What is the cost of the Ultimate CBT Crack Course?',
    options: ['£49.79', '£59.79', '£89.79', '£99.79'],
    correctIndex: 2,
    explanation: 'The Ultimate CBT Crack Course is priced at £89.79.'
  },
  {
    id: 16,
    type: 'mcq',
    question: 'How many lessons are provided per module in the OET Premium course?',
    options: ['15', '18', '21', '25'],
    correctIndex: 2,
    explanation: 'Each module of the OET Premium course includes 21 lessons.'
  },
  {
    id: 17,
    type: 'mcq',
    question: 'Which of the following is NOT a clinical skill listed for OSCE?',
    options: ['Blood glucose monitoring', 'ECG recording', 'Oxygen therapy', 'Peak expiratory flow rate'],
    correctIndex: 1,
    explanation: 'ECG recording is not one of the specified clinical skills for the OSCE.'
  },
  {
    id: 18,
    type: 'mcq',
    question: 'What document is required if a candidate has stayed in the UK for more than 3 months?',
    options: ['PCC', 'IELTS Certificate', 'DBS', 'Proof of Address'],
    correctIndex: 2,
    explanation: 'A Disclosure and Barring Service (DBS) check is needed when a candidate has stayed in the UK for over three months.'
  },
  {
    id: 19,
    type: 'mcq',
    question: 'What is the closing time of the Northampton Centre?',
    options: ['Around 5:00 PM', 'Around 5:30 PM', 'Around 6:30 PM', 'Around 7:00 PM'],
    correctIndex: 2,
    explanation: 'The Northampton Centre closes at around 6:30 PM.'
  },
  {
    id: 20,
    type: 'mcq',
    question: 'What is the grammar class timing for the Mentor Merlin’s OET 7‑day grammar module?',
    options: ['10 AM and 4 PM', '9 AM and 6 PM UK time', '11 AM and 7 PM', '8 AM and 5 PM UK time'],
    correctIndex: 1,
    explanation: 'Grammar classes run twice daily at 9 AM and 6 PM UK time.'
  },
  {
    id: 21,
    type: 'mcq',
    question: 'How many APIE stations are included in the OSCE exam?',
    options: ['2', '4', '6', '8'],
    correctIndex: 1,
    explanation: 'Four stations in the OSCE focus on the Assessment, Planning, Implementation and Evaluation (APIE) framework.'
  },
  {
    id: 22,
    type: 'mcq',
    question: 'What is the most effective way to handle a skeptical lead, according to Mentor Merlin inspired sales approach?',
    options: ['Offer emotional reassurances', 'Use exaggerated claims to create excitement', 'Validate concerns and provide credible evidence', 'Ignore objections and push forward'],
    correctIndex: 2,
    explanation: 'Validating concerns and supporting them with credible evidence is the recommended way to address a skeptical lead.'
  },
  {
    id: 23,
    type: 'mcq',
    question: 'Which of the following is a key technique in observing lead behaviour during chats and calls?',
    options: ['Analysing the typing speed and emoji use', 'Reading body language and micro‑expressions', 'Identifying tone, hesitation, and word choice', 'Ignoring the chat history and focusing only on current messages'],
    correctIndex: 2,
    explanation: 'Identifying tone, hesitation and word choice helps in understanding a lead’s level of interest.'
  },
  {
    id: 24,
    type: 'mcq',
    question: 'When a lead is anxious about making a decision, which of the following is a recommended approach?',
    options: ['Overwhelm them with all product features', 'Offer a trial or free demo and emphasise step‑by‑step guidance', 'Avoid answering too many of their concerns', 'Tell them to decide quickly or lose the offer'],
    correctIndex: 1,
    explanation: 'Providing a trial or free demo and guiding them step by step eases anxiety and builds trust.'
  },
  {
    id: 25,
    type: 'mcq',
    question: 'According to Mentor Merlin’s OET sales process, when is a candidate eligible for a free course extension?',
    options: ['If they fail the OET exam', 'If they request within 10 days', 'If tutor delays, exam is booked, or tutor requests it', 'If they complete the first phase only'],
    correctIndex: 2,
    explanation: 'A free extension is granted when a tutor delays, an exam has been booked or if the tutor recommends it.'
  },
  {
    id: 26,
    type: 'mcq',
    question: 'Which platform was established in 2021 for providing on‑site OSCE training in the UK?',
    options: ['Mentor Merlin UAE', 'Cyril Roy Consultancy Pvt. Ltd.', 'Mentor Merlin UK Ltd.', 'Merlin Global Academy'],
    correctIndex: 2,
    explanation: 'Mentor Merlin UK Ltd. was established in 2021 to offer on‑site OSCE training in the UK.'
  },
  {
    id: 27,
    type: 'mcq',
    question: 'Which centres provide accommodation services?',
    options: ['London only', 'Northampton only', 'Northampton & Leeds', 'London & Leeds'],
    correctIndex: 2,
    explanation: 'Accommodation services are available at both Northampton and Leeds centres.'
  },
  {
    id: 28,
    type: 'mcq',
    question: 'How are OET grammar classes structured at Mentor Merlin?',
    options: ['1‑on‑1 weekend classes only', 'Self‑paced with optional quizzes', 'Group sessions, 7‑day rotation with AM/PM options', 'YouTube‑based modules only'],
    correctIndex: 2,
    explanation: 'Grammar classes are delivered in group sessions on a seven‑day rotation with both morning and evening options.'
  },
  {
    id: 29,
    type: 'mcq',
    question: 'In a month, how many online batches do we have for Adult OSCE?',
    options: ['2', '3', '4', '5'],
    correctIndex: 1,
    explanation: 'Mentor Merlin runs three online batches of the Adult OSCE programme each month.'
  },
  {
    id: 30,
    type: 'mcq',
    question: 'What is one of the key indicators of a disengaged or indifferent lead?',
    options: ['High number of questions', 'Leaning forward and smiling', 'Minimal responses and flat tone', 'Asking about onboarding steps'],
    correctIndex: 2,
    explanation: 'Minimal responses and a flat tone often signal that a lead is disengaged or indifferent.'
  }
];