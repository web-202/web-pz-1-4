document.addEventListener("DOMContentLoaded", function () {
    
    var elementsWithClasses = document.querySelectorAll("[class]");

    
    elementsWithClasses.forEach(function (element) {
      var currentClasses = element.className.split(" ");

     
      var newClasses = currentClasses.map(function (className) {
        return "dykyi-" + className;
      });

      
      element.className = newClasses.join(" ");
    });
  });