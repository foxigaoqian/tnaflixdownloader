import { REVIEWS_DATA } from "@/lib/constants";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-warning" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill={i < count ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={i < count ? 0 : 1.5}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const avgRating =
    REVIEWS_DATA.reduce((sum, r) => sum + r.rating, 0) / REVIEWS_DATA.length;

  return (
    <section className="border-t border-border bg-surface py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-2xl font-bold md:text-3xl">
          Real Users, Real Downloads
        </h2>
        <p className="mt-2 text-center text-muted">
          {avgRating.toFixed(1)} average rating from {REVIEWS_DATA.length} verified users.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.name}
              className="rounded-xl border border-border bg-background p-6"
            >
              <div className="flex items-center justify-between">
                <Stars count={review.rating} />
                <span className="rounded-full bg-surface-light px-2 py-0.5 text-xs text-muted">
                  {review.useCase}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted">&ldquo;{review.text}&rdquo;</p>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{review.name}</p>
                  <p className="text-xs text-muted">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
