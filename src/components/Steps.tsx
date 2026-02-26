export default function Steps() {
  const steps = [
    {
      number: "1",
      title: "Copy the Video URL",
      description:
        "Go to Tnaflix, find the video you want, and copy the URL from your browser's address bar.",
    },
    {
      number: "2",
      title: "Paste & Extract",
      description:
        "Paste the URL into the input field above and click the \"Extract & Download\" button.",
    },
    {
      number: "3",
      title: "Choose & Download",
      description:
        "Select your preferred format and quality, then click Download to save the video.",
    },
  ];

  return (
    <section className="border-t border-border bg-surface py-16">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-2xl font-bold md:text-3xl">
          How to Download Tnaflix Videos
        </h2>
        <p className="mt-2 text-center text-muted">
          Three simple steps to save any Tnaflix video.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col items-center rounded-xl border border-border bg-background p-6 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                {step.number}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
