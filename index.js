function shout(string) {
    return string.toUpperCase();
  }

  function whisper(string) {
    return string.toLowerCase();
  }

  function logShout(string) {
    console.log(string.toUpperCase());
  }

  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  function sayHiToHeadphonedRoommate(string) {
    // Check if the string is all lowercase
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    }
    // Check if the string is all uppercase
    else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    }
    // Check if the string is equal to "Let's have dinner together!"
    else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
    // Add any additional conditions or logic you need
    else {
      // Add a default return statement if none of the conditions match
    }
  }