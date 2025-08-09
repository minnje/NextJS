import Link from "next/link";
import {
     Key,
     ReactElement,
     JSXElementConstructor,
     ReactNode,
     ReactPortal,
} from "react";

export const metadata = {
     title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
     // await new Promise((resolve) => setTimeout(resolve, 1000));
     const response = await fetch(API_URL);
     const json = await response.json();
     return json;
}

export default async function HomePage() {
     const movies = await getMovies();
     return (
          <div>
               {movies.map(
                    (movie: {
                         id: Key;
                         title:
                              | string
                              | number
                              | bigint
                              | boolean
                              | ReactElement<
                                     unknown,
                                     string | JSXElementConstructor<any>
                                >
                              | Iterable<ReactNode>
                              | ReactPortal
                              | Promise<
                                     | string
                                     | number
                                     | bigint
                                     | boolean
                                     | ReactPortal
                                     | ReactElement<
                                            unknown,
                                            string | JSXElementConstructor<any>
                                       >
                                     | Iterable<ReactNode>
                                >;
                    }) => (
                         <li key={movie.id}>
                              <Link href={`/movies/${movie.id}`}>
                                   {movie.title}
                              </Link>
                         </li>
                    )
               )}
          </div>
     );
}
