// Initialize variables
let currentChapter = 0;
const contentDiv = document.getElementById("content");
const chapterTitleElement = document.getElementById("chapter-title");
const chapterContentElement = document.getElementById("chapter-content");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Function to load and display the current chapter
function loadChapter(chapterNumber) {
    fetch(`chapter${chapterNumber}.txt`)
        .then((response) => response.text())
        .then((data) => {
            chapterTitleElement.textContent = `Chapter ${chapterNumber}`;
            chapterContentElement.textContent = data;
        })
        .catch((error) => {
            console.error(`Error loading chapter${chapterNumber}.txt:`, error);
        });
}

// Initial display
loadChapter(1);

// Event listeners for navigation
prevButton.addEventListener("click", () => {
    if (currentChapter > 1) {
        currentChapter--;
        loadChapter(currentChapter);
    }
});

nextButton.addEventListener("click", () => {
    if (currentChapter < TOTAL_CHAPTERS) {
        currentChapter++;
        loadChapter(currentChapter);
    }
});

// Define the total number of chapters (manually update this as you add more chapters)
const TOTAL_CHAPTERS = 2;
