// Add a little interactivity
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = "0 6px 20px rgba(0,0,0,0.2)";
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = "0 4px 15px rgba(0,0,0,0.1)";
  });
});

// Example: Alert for future feature
document.querySelectorAll('.lesson-list li')?.forEach(lesson => {
  lesson.addEventListener('click', () => {
    alert("Lesson coming soon: " + lesson.innerText);
  });
});
