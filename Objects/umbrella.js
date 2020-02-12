/* 
Directions:
Using the umbrella example from the previous video, see if you can follow the example open() method and create the close() method. It's alright if you have trouble at first! We'll go into more detail later in this lesson.

var umbrella = { 
  color: "pink",
  isOpen: false,
  open: function() { 
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "Julia opens the umbrella!";
    }
   }
};
*/

var umbrella = { 
    color: "pink",
    isOpen: false,
    open: function() { 
      if (umbrella.isOpen === true) {
        return "The umbrella is already opened!";
      } else {
        umbrella.isOpen = true;
        return "Julia opens the umbrella!";
      }
     },
     isClosed: true,
    close: function() {
        if (umbrella.isClosed === true) {
            return "The umbrella is already opened!";
          } else {
            umbrella.isClosed = true;
            return "Julia opens the umbrella!";
          }
    }
  };