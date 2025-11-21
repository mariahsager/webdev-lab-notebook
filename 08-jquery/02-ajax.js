const url = 'https://anapioficeandfire.com/api/books/';

$(function () {
  const $app = $('#books');
  $app.css('padding-left', 0);
  const $loading = $('#loading');

  const addBookToDOM = (item) => {
    console.log(item);
    const $el = $('<div>').css({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '20px',
    });

    const $title = $('<h4>').text(item.name);
    const $author = $('<p>').text(`by ${item.authors && item.authors[0] ? item.authors[0] : 'Unknown'}`);
    const $published = $('<p>').text(item.released ? item.released.substr(0, 4) : 'Unknown');
    const $pages = $('<p>').text(`${item.numberOfPages} pages`);

    $el.append($title, $author, $published, $pages);
    $app.append($el);
  };

  $.ajax({
    url: url,
    method: 'GET',
    dataType: 'json',
  })
    .done(function (data) {
      $.each(data, function (i, item) {
        addBookToDOM(item);
      });
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.error('Request failed:', textStatus, errorThrown);
      $('<p>')
        .text('An error occurred. Please try again.')
        .css('color', 'red')
        .appendTo($app);
    })
    .always(function () {
      $loading.remove();
    });
});
