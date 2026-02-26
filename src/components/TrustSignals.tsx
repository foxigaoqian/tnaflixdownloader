export default function TrustSignals() {
  const stats = [
    { value: "50,000+", label: "Successful Downloads" },
    { value: "4.8", label: "User Rating", suffix: "/ 5" },
    { value: "100%", label: "Free to Use" },
    { value: "24/7", label: "Available Anytime" },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center rounded-xl border border-border bg-surface p-6 text-center"
            >
              <span className="text-2xl font-bold text-primary md:text-3xl">
                {stat.value}
                {stat.suffix && (
                  <span className="text-base font-normal text-muted">
                    {" "}{stat.suffix}
                  </span>
                )}
              </span>
              <span className="mt-2 text-sm text-muted">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
