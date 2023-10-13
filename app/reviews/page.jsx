import Link from "next/link";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";

export const metadata = {
  title: "Reviews",
};

export default async function Reviews() {
  const reviews = await getReviews();
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review) => (
          <li
            key={review.slug}
            className="bg-white border w-80 shadow hover:shadow-xl rounded"
          >
            <Link href={`/reviews/${review.slug}`}>
              <img
                src={review.image}
                alt=""
                width="320"
                height="180"
                className="mb-2 rounded-t"
              />
              <h2 className="text-center py-1 font-orbitron">{review.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
