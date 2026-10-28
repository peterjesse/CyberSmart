
/* ==================================
   1. CyberSmart Phishing Quiz
================================== */

const quizForm = document.getElementById("quiz-form");
const quizResult = document.getElementById("quiz-result");

let quizCompleted = false;

quizForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (quizCompleted) {
        quizResult.textContent =
            "Quiz completed! Refresh the page to try again.";
        return;
    }

    const answer1 = document.querySelector(
        'input[name="answer"]:checked'
    );

    const answer2 = document.querySelector(
        'input[name="answer2"]:checked'
    );

    if (!answer1 || !answer2) {
        quizResult.textContent =
            "Please answer both questions before submitting.";
        return;
    }

    let score = 0;

    if (answer1.value === "b") {
        score++;
    }

    if (answer2.value === "c") {
        score++;
    }

    quizCompleted = true;

    const percentage = Math.round((score / 2) * 100);

    let message = "Review the phishing tips and try again after refreshing.";

    if (score === 2) {
        message = "Excellent! You recognized both online threats.";
    } else if (score === 1) {
        message = "Good effort! Review the phishing tips and keep learning.";
    }

     quizResult.textContent =
        "Your CyberSmart Result: " + score + "/2 (" +

        percentage + "%). " + message;
    document.querySelectorAll(
        'input[name="answer"], input[name="answer2"]'
    ).forEach(function (option) {
        option.disabled = true;
    });

    quizForm.querySelector(
        'button[type="submit"]'
    ).disabled = true;
});


/* ==================================
   2. CyberSmart Daily Tips
================================== */

const dailyTips = [
    "Use a unique password for every important account.",
    "Never share your one-time password (OTP) with anyone.",
    "Enable multi-factor authentication wherever possible.",
    "Check suspicious links before opening them.",
    "Keep your operating system and applications updated.",
    "Back up important files regularly.",
    "Verify urgent payment requests through a trusted channel."
];

let tipIndex = 0;

const tipButton = document.getElementById("tip-button");
const tipText = document.getElementById("daily-tip-text");

tipButton.addEventListener("click", function () {
    tipIndex = (tipIndex + 1) % dailyTips.length;
    tipText.textContent = dailyTips[tipIndex];
});


/* ==================================
   3. Password Strength Checker
================================== */

const passwordInput = document.getElementById("password-input");
const checkPasswordButton =
    document.getElementById("check-password-button");
const passwordResult = document.getElementById("password-result");

checkPasswordButton.addEventListener("click", function () {
    const password = passwordInput.value;
    let score = 0;

    if (password.length === 0) {
        passwordResult.textContent =
            "Please enter a sample password.";
        return;
    }

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (score <= 2) {
        passwordResult.textContent =
            "Weak password. Try a longer, more varied password.";
    } else if (score <= 4) {
        passwordResult.textContent =
            "Medium password. Consider improving its length and variety.";
    } else {
        passwordResult.textContent =
            "Strong by these basic checks. Use a long, unique password.";
    }
});


/* ==================================
   4. Show or Hide Sample Password
================================== */

const togglePasswordButton =
    document.getElementById("toggle-password-button");

togglePasswordButton.addEventListener("click", function () {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePasswordButton.textContent = "Hide Password";
    } else {
        passwordInput.type = "password";
        togglePasswordButton.textContent = "Show Password";
    }
});


/* ==================================
   5. Password Safety Checklist
================================== */

const securityChecks =
    document.querySelectorAll(".security-check");

const checklistResult =
    document.getElementById("checklist-result");

function updateChecklist() {
    let completed = 0;

    securityChecks.forEach(function (checkbox) {
        if (checkbox.checked) {
            completed++;
        }
    });

    checklistResult.textContent =
        "Completed: " + completed + " out of " +
        securityChecks.length + " habits.";

    if (completed === securityChecks.length) {
        checklistResult.textContent +=
            " Excellent! You reviewed all five habits.";
    }
}

securityChecks.forEach(function (checkbox) {
    checkbox.addEventListener("change", updateChecklist);
});

