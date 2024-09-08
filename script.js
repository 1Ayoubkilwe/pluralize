// Good Luck 💪🏾
function pluralize(words) {
    let wordCount = {};
    
    
    words.forEach(word => {
      wordCount[word] = (wordCount[word] || 0) + 1;
    });
    
    
    return [...new Set(words)].map(word => wordCount[word] > 1 ? word + 's' : word);
  }
  
  
  console.log(pluralize(["cat", "dog", "cat", "mouse"])); // ["cats", "dog", "mouse"]
  console.log(pluralize(["car", "car", "car"])); // ["cars"]
  