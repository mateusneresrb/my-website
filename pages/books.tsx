import { Image } from "_client/image";
import { BOOKS } from "content/books";
import { FC } from "react";

type BooksProps = {};

export const Books: FC<BooksProps> = (props) => {
  return (
    <>
      <section className="relative mx-auto flex max-w-6xl px-4 py-16 md:px-8">
        <div className="grid w-full grid-cols-3 gap-8">
          {BOOKS.map((book) => (
            <article
              key={book.name}
              className="items-center rounded-lg bg-gray-100/50 p-4 spacing-4"
            >
              <figure className="aspect-[0.666] max-w-[140px] overflow-hidden">
                <Image
                  src={book.image}
                  maxWidth={360}
                  width={360}
                  height={549}
                  alt={book.name}
                  className="-m-0.5 h-[calc(100%+0.25rem)] w-[calc(100%+0.25rem)] max-w-none object-cover object-center"
                />
              </figure>
              <h2 className="text-center text-lg font-semibold tracking-tight text-gray-900">
                {book.name}
              </h2>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Books;
