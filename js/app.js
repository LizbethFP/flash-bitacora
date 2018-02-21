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

  /* ESTRUCTURA MODAL PARA MENSAJES */
  $('#message-modal').on('click', () => {
    $('#message-modal').addClass('waves-effect waves-light modal-trigger');

    const modalContent = `<div class="modal-content"><div class="row">
     <div class="col l4 ">
       <input type="text" name=" value=" placeholder="Title" class="input-title" autofocus>
     </div>
     <textarea name="text" id="text" class="text-area-height" placeholder="¿Qué estas pensando?" type="text"></textarea>
     <hr></div></div>
     <div class="modal-footer">
       <a id="btn-public" href="#!" class="modal-action modal-close waves-effect waves-green btn-flat teal darken-1 white-text">
       <i class="material-icons right ">send</i>Public</a>
     </div>`;

    $('.modal-container').html(modalContent);

    $('#btn-public').on('click', messages);
    $('#btn-public').on('click', hideImage);
  });

  // función para el button del modal
  function hideImage() {
    $('.poster').addClass('col l6');
  }
  
  /* AGREGAR MENSAJES */
  function messages() {
    const messsageEstructure = `<div class="style-div col l5">
 <div class="title"><h5 class="center">${$('.input-title').val()}</h5></div>
 <div class="styleLetter"><p class="styleLetterP">${$('#text').val()}</p></div>
 <div class="right-align"><span class="styleLetter">${time()}</span></div>
 </div>`;
    $('#publications').prepend(messsageEstructure);
    $('.input-title').val(' ');
    $('#text').val(' ');
  }

  $('#btn-public').on('click', messages);

  /* AGREGAR IMÁGENES */
  $('#img-modal').on('click', () => {
    $('#img-modal').addClass('waves-effect waves-light modal-trigger');

  })

});

