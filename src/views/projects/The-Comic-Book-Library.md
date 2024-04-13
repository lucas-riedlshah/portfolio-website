<route lang="yaml">
meta:
  title: The Comic Book Library
  year: 2021
  tags: [python, flask, sql]
  coverImage: /assets/TheComicBookLibrary_CoverImage.png
</route>

Created in my second year of university, this project uses Python with Flask and SQLAlchemy to present a dataset of comic books.  
It is quite a simple application and definitely has room for improvement, but given that it was created as an assignment for a university course, I have no plans to take it any further.

You can directly access the website [here](https://lucasrs.pythonanywhere.com/).  
[View on GitHub](https://github.com/lucas-riedlshah/compsci235-assignment2)

<iframe
  frameborder="0"
  src="https://lucasrs.pythonanywhere.com/"
  title="The Comic Book Library - Home Page"
  style="
    justify-self: center;
    width: 100%;
    height: 80vh;
    box-shadow: 0 0 50px rgba(var(--color-surface-shadow), 0.1);
    border: 1pt solid rgba(var(--color-surface-shadow), 0.1);
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
  "
>
  <a href="https://lucasrs.pythonanywhere.com/">The Comic Book Library</a>
</iframe>

## Book Details

You can view details about each book by selecting it which will take you to a separate page to show said details. On this page you can also leave a review and rate the book out of 5. You must first register an account and log in before you may post a review.

<iframe
  frameborder="0"
  src="https://lucasrs.pythonanywhere.com/book?id=2687401"
  title="The Comic Book Library - Book Page"
  style="
    justify-self: center;
    width: 100%;
    height: 80vh;
    box-shadow: 0 0 50px rgba(var(--color-surface-shadow), 0.1);
    border: 1pt solid rgba(var(--color-surface-shadow), 0.1);
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
  "
>
  <a href="https://lucasrs.pythonanywhere.com/book?id=2687401">The Comic Book Library - Book Page</a>
</iframe>

## Catalogue

The "Books" page contains the whole catalogue of books and can be filtered by year, author and publisher.

<iframe
  frameborder="0"
  src="https://lucasrs.pythonanywhere.com/books?year=2006&author=&publisher=Marvel"
  title="The Comic Book Library - Books Catalogue Page"
  style="
    justify-self: center;
    width: 100%;
    height: 80vh;
    box-shadow: 0 0 50px rgba(var(--color-surface-shadow), 0.1);
    border: 1pt solid rgba(var(--color-surface-shadow), 0.1);
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
  "
>
  <a href="https://lucasrs.pythonanywhere.com/books?year=2006&author=&publisher=Marvel">The Comic Book Library - Books Catalogue Page</a>
</iframe>

## Search

<iframe
  frameborder="0"
  src="https://lucasrs.pythonanywhere.com/search?q=the"
  title="The Comic Book Library - Search Page"
  style="
    justify-self: center;
    width: 100%;
    height: 80vh;
    box-shadow: 0 0 50px rgba(var(--color-surface-shadow), 0.1);
    border: 1pt solid rgba(var(--color-surface-shadow), 0.1);
    border-radius: 0.5rem;
    margin-bottom: 1.5rem;
  "
>
  <a href="https://lucasrs.pythonanywhere.com/search?q=the">The Comic Book Library - Search Page</a>
</iframe>