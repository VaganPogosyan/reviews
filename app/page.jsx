import Heading from "@/components/Heading";
import Link from "next/link";
import { getReviews } from "@/lib/reviews";
import Image from "next/image";

// regenerate page periodically
// export const revalidate = 30; // seconds

export default async function HomePage() {
  const { reviews } = await getReviews(3);
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games reviews for you</p>
      <ul className="flex flex-col gap-3">
        {reviews.map((review, index) => (
          <li
            key={review.slug}
            className="bg-white border shadow hover:shadow-xl w-80 sm:w-full rounded"
          >
            <Link
              href={`/reviews/${review.slug}`}
              className="flex flex-col sm:flex-row"
            >
              <Image
                src={review.image}
                alt=""
                width="320"
                height="180"
                className="rounded-t sm:rounded-l sm:rounded-r-none"
                priority={index === 0}
              />
              <div className="px-2 py-1 text-center sm:text-left">
                <h2 className="font-orbitron">{review.title}</h2>
                <p className="hidden sm:block pt-2">{review.subtitle}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
