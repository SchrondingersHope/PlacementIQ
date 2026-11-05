import { shadow } from "pdfjs-dist";

const preplan = [
  {
    "task": "Master Bayes' Theorem Applications",
    "topic": "Probability",
    "status": "done",
    "summ": "Core concepts of conditional probability, total probability theorem, and applying Bayes' theorem to reverse probability problems.",
    "linkExp": [
      "https://example.com/explainer/bayes-theorem-visualized",
      "https://example.com/explainer/total-probability"
    ],
    "linkPra": [
      "https://example.com/practice/gate-pyqs-bayes"
    ],
    "recReason": "High-yield topic. Historically carries 2-3 marks in GATE DA and CSE exams.",
    "estimatedMinutes": 120,
    "tester": {
      "ques": "Given P(A) = 0.5, P(B|A) = 0.8, and P(B) = 0.5. What is the value of P(A|B)?",
      "ops": [
        "0.4",
        "0.5",
        "0.8",
        "1.0"
      ],
      "correct": 2
    },
    "todoDate": "2026-10-20T00:00:00.000Z",
    "doneDate": "2026-10-21T14:30:00.000Z"
  },
  {
    "task": "Solve Markov Chain State Transitions",
    "topic": "Stochastic Processes",
    "status": "ongoing",
    "summ": "Setting up transition matrices, identifying absorbing states, and calculating steady-state probabilities.",
    "linkExp": [
      "https://example.com/explainer/markov-chains-basics"
    ],
    "linkPra": [
      "https://example.com/practice/markov-matrices"
    ],
    "recReason": "Prerequisite for understanding reinforcement learning algorithms later in the curriculum.",
    "estimatedMinutes": 90,
    "tester": {
      "ques": "In a transition probability matrix (TPM) of a discrete-time Markov chain, what must the sum of the elements in any single row equal?",
      "ops": [
        "0",
        "1",
        "Infinity",
        "Depends on the initial state vector"
      ],
      "correct": 1
    },
    "todoDate": "2026-10-26T00:00:00.000Z",
    "doneDate": null
  },
  {
    "task": "Review Linear Algebra: PA = LU Decomposition",
    "topic": "Linear Algebra",
    "status": "tobedone",
    "summ": "Step-by-step factorization of a square matrix into Lower and Upper triangular matrices with pivoting.",
    "linkExp": [
      "https://example.com/explainer/lu-decomposition"
    ],
    "linkPra": [
      "https://example.com/practice/lu-factorization-calculator"
    ],
    "recReason": "Required fundamental operation for solving systems of linear equations efficiently in Data Science.",
    "estimatedMinutes": 60,
    "tester": {
      "ques": "In the PA = LU decomposition, what does the matrix 'P' represent?",
      "ops": [
        "Positive definite matrix",
        "Permutation matrix tracking row exchanges",
        "Projection matrix",
        "Pseudo-inverse matrix"
      ],
      "correct": 1
    },
    "todoDate": "2026-10-28T00:00:00.000Z",
    "doneDate": null
  }
]

const style = {
    borderRadius: "1rem",
    padding: "1rem",
    textAlign: "center",
}

const sty1 = {...style,
    backgroundColor: "rgba(200,200,200,0.9)",
}

const sty2 = {...style,
    backgroundColor: "rgba(150, 224, 104, 0.9)",
}

export default function Prep(){
    return(
        <div>
            <div className='heading'>Prep Page!!</div>
            <div className="showcase">
                {preplan.map((v,i)=>(
                    <div className="atomicprep" key={i} style={v.status==="done"? sty2 : sty1}>
                        | {i+1} | {v.task} |<div/>
                        <strong>{v.topic}</strong>
                    </div>
                ))}
            </div>
        </div>
    );
}