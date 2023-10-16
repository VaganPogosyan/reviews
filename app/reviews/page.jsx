import Link from "next/link";
import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";
import Image from "next/image";
import PaginationBar from "@/components/PaginationBar";
import SearchBox from "@/components/SearchBox";

// regenerate page periodically
// export const revalidate = 10; // seconds

export const metadata = {
  title: "Reviews",
};

const PAGE_SIZE = 6;

export default async function Reviews({ searchParams }) {
  const page = parsePageParam(searchParams.page);
  const { reviews, pageCount } = await getReviews(PAGE_SIZE, page);
  // console.log(reviews.map(({ slug, title }) => ({ slug, title })));

  return (
    <>
      <Heading>Reviews</Heading>
      <div className="flex justify-between items-center">
        <PaginationBar href="/reviews" page={page} pageCount={pageCount} />
        <SearchBox />
      </div>
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

function parsePageParam(paramValue) {
  if (paramValue) {
    const page = parseInt(paramValue);
    if (isFinite(page) && page > 0) {
      return page;
    }
  }
  return 1;
}
