import Link from "next/link";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";
import Image from "next/image";

// regenerate page periodically
// export const revalidate = 10; // seconds

export const metadata = {
  title: "Reviews",
};

export default async function Reviews() {
  const reviews = await getReviews(6);
  // console.log(reviews);
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review, index) => (
          <li
            key={review.slug}
            className="bg-white border w-80 shadow hover:shadow-xl rounded"
          >
            <Link href={`/reviews/${review.slug}`}>
              <Image
                priority={index === 0}
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
