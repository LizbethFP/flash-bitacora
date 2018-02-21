// función para modal de materialize
(function begin() {
  $('.modal').modal();

})();

$(document).ready(function() {
  // función para la hora
  const time = () => {
    let newDate = new Date();
    let time = newDate.getHours() + ':' + newDate.getMinutes();
    let timeAbsolute = '';
 
    if (newDate.getHours() <= 12) {
      timeAbsolute = time + ' AM';
    } else {
      timeAbsolute = time + ' PM';
    }
    return timeAbsolute;
  };

});

