// Typing Effect
const roles = ["Web Developer", "Data Analyst", "UI/UX Enthusiast"];
let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;

function typeEffect() {
  const typingEl = document.querySelector(".typing");
  if (!typingEl) return;

  if (isDeleting) {
    currentRole = roles[i].substring(0, j--);
  } else {
    currentRole = roles[i].substring(0, j++);
  }

  typingEl.textContent = currentRole;

  if (!isDeleting && j === roles[i].length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1500); // Pause before deleting
    return;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
    setTimeout(typeEffect, 500); // Pause before typing next
    return;
  }

  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Resume Download Function
function downloadResume(file) {
  const a = document.createElement("a");
  a.href = file;
  a.download = file.split("/").pop();
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Auto-update footer year
document.getElementById("year").textContent = new Date().getFullYear();
