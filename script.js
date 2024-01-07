document.addEventListener('DOMContentLoaded', function () {
    var followDiv = document.getElementById('followDiv');
    var followCursor = document.getElementById('followCursor');
    var delay = 40;
    
    document.addEventListener('mousemove', function (eventA) {
      setTimeout(function () {
        var followDivX = eventA.clientX;
        var followDivY = eventA.clientY;
  
        followDiv.style.left = followDivX + 'px';
        followDiv.style.top = followDivY + 'px';
      }, delay);
    });

    document.addEventListener('mousemove', function(eventB){
      var followCursorX = eventB.clientX;
      var followCursorY = eventB.clientY;

      followCursor.style.left = followCursorX + 'px';
      followCursor.style.top = followCursorY + 'px';
    });
});