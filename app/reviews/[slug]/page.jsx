import Image from "next/image";
import { notFound } from "next/navigation";
import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { getReview, getSlugs } from "@/lib/reviews";

// control what happens when a dynamic segment is visited
// that was not generated with generateStaticParams
// defaults to true
// export const dynamicParams = true;

// export const dynamic = "force-dynamic"
// export const dynamic = "force-dynamic";

// generateStaticParams - tells next to build static html for dynamic routes on server
export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

// get metadata with some code/logic instead of hardcoding it
export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);
  if (!review) {
    notFound();
  }
  return { title: review.title };
}

export default async function ReviewPage({ params: { slug } }) {
  const review = await getReview(slug);
  if (!review) {
    notFound();
  }

  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="font-semibold pb-3">{review.subtitle}</p>
      <div className="flex items-baseline gap-3">
        <p className="italic pb-2">{review.date}</p>
        <ShareLinkButton />
      </div>
      <Image
        src={review.image}
        alt=""
        width="640"
        height="360"
        className="mb-2"
        priority
      />
      <article
        className="prose prose-slate max-w-screen-sm"
        dangerouslySetInnerHTML={{ __html: review.body }}
      />
    </>
  );
}
