// Language data
const languageData = {
  french: {
    title: "French",
    flagClass: "french-flag",
    words: [
      { original: "Bonjour", pronunciation: "bohn-zhoor", translation: "Hello / Good day" },
      { original: "Merci", pronunciation: "mehr-see", translation: "Thank you" },
      { original: "Oui / Non", pronunciation: "wee / nohn", translation: "Yes / No" },
      { original: "S'il vous plaît", pronunciation: "seel voo play", translation: "Please" },
      { original: "Comment ça va?", pronunciation: "koh-mahn sah vah", translation: "How are you?" },
      { original: "Je m'appelle...", pronunciation: "zhuh mah-pell", translation: "My name is..." },
      { original: "Au revoir", pronunciation: "oh ruh-vwahr", translation: "Goodbye" }
    ]
  },
  german: {
    title: "German",
    flagClass: "german-flag",
    words: [
      { original: "Hallo", pronunciation: "hah-loh", translation: "Hello" },
      { original: "Danke", pronunciation: "dahn-keh", translation: "Thank you" },
      { original: "Ja / Nein", pronunciation: "yah / nine", translation: "Yes / No" },
      { original: "Bitte", pronunciation: "bit-teh", translation: "Please / You're welcome" },
      { original: "Wie geht's?", pronunciation: "vee gayts", translation: "How are you?" },
      { original: "Ich heiße...", pronunciation: "ish high-seh", translation: "My name is..." },
      { original: "Auf Wiedersehen", pronunciation: "owf vee-der-zayn", translation: "Goodbye" }
    ]
  },
  japanese: {
    title: "Japanese",
    flagClass: "japanese-flag",
    words: [
      { original: "こんにちは", pronunciation: "kon-nichi-wa", translation: "Hello" },
      { original: "ありがとう", pronunciation: "a-ri-ga-tou", translation: "Thank you" },
      { original: "はい / いいえ", pronunciation: "hai / iie", translation: "Yes / No" },
      { original: "お願いします", pronunciation: "o-ne-gai-shi-mas", translation: "Please" },
      { original: "お元気ですか?", pronunciation: "o-gen-ki-des-ka", translation: "How are you?" },
      { original: "私の名前は...", pronunciation: "wa-ta-shi no na-ma-e wa", translation: "My name is..." },
      { original: "さようなら", pronunciation: "sa-yo-na-ra", translation: "Goodbye" }
    ]
  },
  spanish: {
    title: "Spanish",
    flagClass: "spanish-flag",
    words: [
      { original: "Hola", pronunciation: "oh-lah", translation: "Hello" },
      { original: "Gracias", pronunciation: "grah-see-ahs", translation: "Thank you" },
      { original: "Sí / No", pronunciation: "see / noh", translation: "Yes / No" },
      { original: "Por favor", pronunciation: "por fah-vor", translation: "Please" },
      { original: "¿Cómo estás?", pronunciation: "koh-moh es-tahs", translation: "How are you?" },
      { original: "Me llamo...", pronunciation: "meh yah-moh", translation: "My name is..." },
      { original: "Adiós", pronunciation: "ah-dee-ohs", translation: "Goodbye" }
    ]
  }
};

// Show language modal with basic words
function showLanguage(lang) {
  const data = languageData[lang];
  if (!data) return;
  
  const modal = document.getElementById('languageModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalFlag = document.getElementById('modalFlag');
  const wordList = document.getElementById('wordList');
  
  // Set modal content
  modalTitle.textContent = data.title;
  modalFlag.className = 'flag ' + data.flagClass;
  
  // Clear previous words
  wordList.innerHTML = '';
  
  // Add words to the list
  data.words.forEach(word => {
    const wordCard = document.createElement('div');
    wordCard.className = 'word-card';
    wordCard.innerHTML = `
      <div class="word-original">${word.original}</div>
      <div class="word-pronunciation">${word.pronunciation}</div>
      <div class="word-translation">${word.translation}</div>
    `;
    wordList.appendChild(wordCard);
  });
  
  // Show modal
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
  const modal = document.getElementById('languageModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}

// Close modal when clicking outside content
document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('languageModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeModal();
      }
    });
  }
  
  // Form submission (placeholder function)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    });
  }
});