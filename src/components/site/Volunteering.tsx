import { volunteering } from "@/data/site";
import Logo from "./Logo";
import SectionHeader from "./SectionHeader";

export default function Volunteering() {
  const groups = (["Judge", "Mentor"] as const).map((role) => ({
    role,
    items: volunteering.filter((v) => v.role === role),
  }));

  return (
    <section id="volunteering" className="container py-20 sm:py-28">
      <SectionHeader
        index="04"
        kicker="Giving back"
        title="Volunteering"
        aside="Judging and mentoring at student hackathons, where the job is explaining hard things to people who don't share your context."
      />
      <div className="grid gap-12 lg:grid-cols-2">
        {groups.map((g) => (
          <div key={g.role}>
            <p className="eyebrow mb-5">{g.role === "Judge" ? "Judge" : "Mentor"}</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {g.items.map((v) => (
                <div key={v.event} className="card-lift flex flex-col gap-4 rounded-2xl border bg-card p-5">
                  <div className="flex items-center gap-3">
                    <Logo src={v.logo} name={v.event} className="h-12 w-12" />
                    <div>
                      <h3 className="font-display text-2xl leading-none">{v.event}</h3>
                      <p className="mt-1 font-mono text-[10.5px] uppercase tracking-[0.12em] text-muted-foreground">
                        {v.role} · {v.year}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{v.detail}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
