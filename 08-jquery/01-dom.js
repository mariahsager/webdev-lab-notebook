// Exercise #1:
// When the user clicks the 'copy' button, copy the user input to the output area

$(function () {
  $('#copy').on('click', function (e) {
    const val = $('#userInput1').val();
    $('#output1').text(val);
  });

  $('#userInput2').on('input', function (e) {
    $('#output2').text($(this).val());
  });
});

// so clean!