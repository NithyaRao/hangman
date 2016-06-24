$(document).ready(init);
function init() {
  $('#new').click(newgame);
  $('#lettersubmit').click(letterchosen);
}

function newgame(){
  const name = $('#name').val();
  $.ajax({
    url: '/games',
    method: 'post',
    dataType: 'json',
    data: { name },
    success: function(rsp){
      console.log('rsp:', rsp);
      displaygame(rsp.length, rsp.id);
    }
  });
}

function displaygame(len, id) {
  for (let i = 0; i < len; i++) {
    $('#word').append(`<div class='letterchoice' id=l${i}> x </div>`);
  }
  $('#inletter').append(`<span><div> <input type="text" id="letter"></input>`);
  $('#lettersubmit').append(`<button type="button" class="btn btn-success">Submit</button></div>`);
  $('#hiddenid').append(`<input type="text" id="id" name="id" value= ${id} </input>`);
  $('#hiddenid').hide();
}

function letterchosen(){
  const letter = $('#letter').val();
  const id = $('#id').val();
  console.log('letter is:', id );
  $.ajax({
    url: '/games/guess',
    method: 'post',
    dataType: 'json',
    data: { id, letter },
    success: function(rsp){
      console.log('rsp:', rsp);
      displayletters(rsp.letter, rsp.indices);
    }
  });
}

function displayletters(letter, indices) {
  $.each( indices, function( i, pos ) {
    $(`#l${pos-1}`).text(letter);
  });
}
