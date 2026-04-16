const scenarios = [
  {
    sender: "support@paypaI.com",
    subject: "Immediate Action Required: Your account will be limited today",
    greeting: "Hello customer,",
    suspiciousBody:
      "We noticed unusual billing activity and you must verify your account within 30 minutes or your access will be suspended.",
    details:
      "Please review the information below and confirm your identity so we can restore normal service. Failure to act may result in permanent restrictions on your account.",
    linkText: "Review your account now: http://paypal-verification-center.security-checkup.net",
    signoff: "Thank you for your cooperation, Billing Support Team",
    explanations: {
      sender:
        "The sender uses a capital 'I' in place of a lowercase 'l', which is a common spoofing trick.",
      subject:
        "The subject pushes panic with an immediate deadline, a common tactic used to force rushed clicks.",
      body:
        "The message uses urgency language and a threat of account suspension to pressure you into acting fast.",
      link:
        "The link points to a suspicious domain that imitates a trusted brand instead of using the real company website."
    }
  },
  {
    sender: "security@micr0soft-support.com",
    subject: "Urgent security alert: Password reset needed before midnight",
    greeting: "Dear user,",
    suspiciousBody:
      "Your mailbox has been flagged, and you need to update your password now to avoid deactivation of your email.",
    details:
      "We apologize for inconveniences caused. If you ignore this notice, all pending messages can be deleted from server records.",
    linkText: "Keep mailbox active: https://microsoft-password-helpdesk.co/reset",
    signoff: "Sincerely, Mail Protection Desk",
    explanations: {
      sender:
        "The sender swaps in a zero and uses an unrelated support domain, which does not match the real service.",
      subject:
        "The wording creates pressure with a hard deadline, which is designed to shut down careful review.",
      body:
        "Threatening deactivation is a classic social engineering move to make the reader react emotionally.",
      link:
        "The URL uses a lookalike support domain rather than an official Microsoft-owned domain."
    }
  },
  {
    sender: "alerts@amaz0n-billing.net",
    subject: "Final warning: Confirm payment details to prevent cancellation",
    greeting: "Hi there,",
    suspiciousBody:
      "Your recent payment did not process correctly and you need to confirm your card details immediately for avoid order cancellation.",
    details:
      "We have put your Prime membership on temporary hold. Please complete the form today so your benefits can continue without interruption.",
    linkText: "Update billing information: https://amazon-account-center-billing.net/secure",
    signoff: "Regards, Account Services",
    explanations: {
      sender:
        "The sender uses a zero in the brand name and a non-official billing domain, both strong phishing indicators.",
      subject:
        "A final warning is meant to manufacture urgency and push the reader into clicking before thinking.",
      body:
        "The body combines immediate pressure with awkward grammar, which is common in many phishing campaigns.",
      link:
        "The link is not on an official Amazon domain and tries to look legitimate by stuffing brand words into the URL."
    }
  }
];

const state = {
  selectedIndicators: new Set(),
  scenarioIndex: 0
};

// These are the four phishing cues the exercise scores on every round.
const correctIndicators = ["sender", "subject", "body", "link"];

const senderToggle = document.querySelector("#sender-toggle");
const subjectToggle = document.querySelector("#subject-toggle");
const greetingToggle = document.querySelector("#greeting-toggle");
const bodyToggle = document.querySelector("#body-toggle");
const detailsToggle = document.querySelector("#details-toggle");
const linkToggle = document.querySelector("#link-toggle");
const signoffToggle = document.querySelector("#signoff-toggle");
const selectionStatus = document.querySelector("#selection-status");
const feedbackPanel = document.querySelector("#feedback-panel");
const scorePill = document.querySelector("#score-pill");
const feedbackSummary = document.querySelector("#feedback-summary");
const feedbackResults = document.querySelector("#feedback-results");
const checkAnswerButton = document.querySelector("#check-answer");
const nextEmailButton = document.querySelector("#next-email");

function updateSelectionStatus() {
  const count = state.selectedIndicators.size;
  selectionStatus.textContent =
    count === 0 ? "No selections yet." : `${count} suspicious ${count === 1 ? "element" : "elements"} selected.`;
}

function syncSelectedStyles() {
  document.querySelectorAll("[data-indicator-id]").forEach((element) => {
    const indicatorId = element.getAttribute("data-indicator-id");
    element.classList.toggle("selected", state.selectedIndicators.has(indicatorId));
    element.setAttribute(
      "aria-pressed",
      state.selectedIndicators.has(indicatorId) ? "true" : "false"
    );
  });
}

function resetRound() {
  state.selectedIndicators.clear();
  syncSelectedStyles();
  updateSelectionStatus();
  feedbackPanel.hidden = true;
  feedbackResults.innerHTML = "";
  feedbackSummary.textContent = "";
  scorePill.textContent = "";
}

function renderScenario() {
  const scenario = scenarios[state.scenarioIndex];

  senderToggle.textContent = scenario.sender;
  subjectToggle.textContent = scenario.subject;
  greetingToggle.textContent = scenario.greeting;
  bodyToggle.textContent = scenario.suspiciousBody;
  detailsToggle.textContent = scenario.details;
  linkToggle.textContent = scenario.linkText;
  signoffToggle.textContent = scenario.signoff;
}

// Clicking any tracked email element toggles its selection in local state.
function toggleIndicator(indicatorId) {
  if (state.selectedIndicators.has(indicatorId)) {
    state.selectedIndicators.delete(indicatorId);
  } else {
    state.selectedIndicators.add(indicatorId);
  }

  syncSelectedStyles();
  updateSelectionStatus();
}

// Build a readable feedback list so the UI can explain both hits and misses.
function buildFeedbackRow(type, title, description) {
  const item = document.createElement("li");
  item.className = type === "hit" ? "result-hit" : "result-miss";

  const heading = document.createElement("strong");
  heading.textContent = title;

  const body = document.createElement("span");
  body.textContent = description;

  item.append(heading, body);
  return item;
}

// Score the round against the four expected phishing indicators for the active scenario.
function scoreSelections() {
  const scenario = scenarios[state.scenarioIndex];
  const hits = correctIndicators.filter((indicator) => state.selectedIndicators.has(indicator));
  const misses = correctIndicators.filter((indicator) => !state.selectedIndicators.has(indicator));
  const falsePositives = [...state.selectedIndicators].filter(
    (indicator) => !correctIndicators.includes(indicator)
  );

  feedbackResults.innerHTML = "";

  hits.forEach((indicator) => {
    feedbackResults.append(
      buildFeedbackRow(
        "hit",
        `Correct: ${indicatorLabel(indicator)}`,
        scenario.explanations[indicator]
      )
    );
  });

  misses.forEach((indicator) => {
    feedbackResults.append(
      buildFeedbackRow(
        "miss",
        `Missed: ${indicatorLabel(indicator)}`,
        scenario.explanations[indicator]
      )
    );
  });

  if (falsePositives.length > 0) {
    falsePositives.forEach((indicator) => {
      feedbackResults.append(
        buildFeedbackRow(
          "miss",
          `Not a scored indicator: ${indicatorLabel(indicator)}`,
          "This selection is not one of the four core phishing cues tracked in this exercise."
        )
      );
    });
  }

  scorePill.textContent = `You got ${hits.length}/${correctIndicators.length} correct`;
  feedbackSummary.textContent =
    misses.length === 0
      ? "You identified every phishing indicator in this email."
      : `You found ${hits.length} indicator${hits.length === 1 ? "" : "s"} and missed ${misses.length}.`;
  feedbackPanel.hidden = false;
}

function indicatorLabel(indicator) {
  switch (indicator) {
    case "sender":
      return "Sender email";
    case "subject":
      return "Urgent subject";
    case "body":
      return "Urgency in the email body";
    case "link":
      return "Suspicious link";
    default:
      return indicator;
  }
}

// Swap to a different canned scenario without needing any backend or persistence layer.
function loadNextScenario() {
  if (scenarios.length === 1) {
    resetRound();
    renderScenario();
    return;
  }

  let nextIndex = state.scenarioIndex;
  while (nextIndex === state.scenarioIndex) {
    nextIndex = Math.floor(Math.random() * scenarios.length);
  }

  state.scenarioIndex = nextIndex;
  resetRound();
  renderScenario();
}

document.querySelectorAll("[data-indicator-id]").forEach((element) => {
  element.addEventListener("click", () => {
    const indicatorId = element.getAttribute("data-indicator-id");
    toggleIndicator(indicatorId);
  });
});

checkAnswerButton.addEventListener("click", scoreSelections);
nextEmailButton.addEventListener("click", loadNextScenario);

renderScenario();
resetRound();
