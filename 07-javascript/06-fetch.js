const url = 'https://anapioficeandfire.com/api/books/';

const app = document.querySelector('#books');

const fetchData = (url) => {
  app.style.display = 'flex';
  app.style.flexDirection = 'column';
  app.style.alignItems = 'center';
  app.style.gap = '1rem';

  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`Network error: ${res.status}`);
      return res.json();
    })
    .then((books) => {
      const loader = document.getElementById('loading');
      if (loader) loader.remove();

      books.forEach((book) => {
        const { name, authors = [], released, numberOfPages } = book;

        const bookElement = document.createElement('div');
        bookElement.className = 'book card w-75 p-3';

        const title = document.createElement('h3');
        title.textContent = name;

        const author = document.createElement('p');
        author.textContent = `Author(s): ${authors.join(', ')}`;

        const year = document.createElement('p');
        const yearVal = released ? new Date(released).getFullYear() : 'Unknown';
        year.textContent = `Publication year: ${yearVal}`;

        const pages = document.createElement('p');
        pages.textContent = `Pages: ${numberOfPages}`;

        bookElement.appendChild(title);
        bookElement.appendChild(author);
        bookElement.appendChild(year);
        bookElement.appendChild(pages);

        app.appendChild(bookElement);
      });
    })
    .catch((err) => {
      const loader = document.getElementById('loading');
      if (loader) loader.remove();
      const errElement = document.createElement('p');
      errElement.textContent = `Error loading books: ${err.message}`;
      app.appendChild(errElement);
    });
};

fetchData(url);
