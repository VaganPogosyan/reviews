import Heading from "@/components/Heading";
import Link from "next/link";
import { getFeaturedReview } from "@/lib/reviews";

export default async function HomePage() {
  const { slug, title, image } = await getFeaturedReview();

  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p className="pb-3">Only the best indie games reviews for you</p>
      <div className="bg-white border shadow hover:shadow-xl w-80 sm:w-full rounded">
        <Link href={`/reviews/${slug}`} className="flex flex-col sm:flex-row">
          <img
            src={image}
            alt=""
            width="320"
            height="180"
            className="rounded-t sm:rounded-l sm:rounded-r-none"
          />
          <h2 className="text-center py-1 font-orbitron sm:px-2">{title}</h2>
        </Link>
      </div>
    </>
  );
}
