import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getReview, getSlugs } from "@/lib/reviews";

// generateStaticParams - tells next to build static html for dynamic routes on server
export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

// get metadata with some code/logic instead of hardcoding it
export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);
  return { title: review.title };
}

export default async function ReviewPage({ params: { slug } }) {
  const review = await getReview(slug);

  return (
    <>
      <Heading>{review.title}</Heading>
      <div className="flex items-baseline gap-3">
        <p className="italic pb-2">{review.date}</p>
        <ShareLinkButton />
      </div>
      <img
        src={review.image}
        alt=""
        width="640"
        height="360"
        className="mb-2"
      />
      <article
        className="prose prose-slate max-w-screen-sm"
        dangerouslySetInnerHTML={{ __html: review.body }}
      />
    </>
  );
}
