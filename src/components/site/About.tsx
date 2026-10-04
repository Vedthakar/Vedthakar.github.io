import { profile, skills } from "@/data/site";
import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <section id="about" className="border-t bg-card/60">
      <div className="container py-20 sm:py-28">
        <SectionHeader index="05" kicker="About" title="Hi, I'm Ved." />
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <figure className="overflow-hidden rounded-2xl border">
            <img
              src="/media/ved.jpg"
              alt="Ved Thakar speaking at a podium"
              className="aspect-square w-full object-cover grayscale transition-[filter] duration-700 hover:grayscale-0"
              loading="lazy"
            />
          </figure>

          <div className="space-y-8">
            <div className="space-y-5 text-lg leading-relaxed">
              <p>
                I study Computer Science and Economics at the University of Toronto, and I spend most of my time where
                product and machine learning meet: figuring out what a customer is actually trying to do, then building the
                system that does it.
              </p>
              <p className="text-muted-foreground">
                That has looked like a travel app that got acquired, an LLM analytics product three firms run on, a
                container platform written from scratch, and sitting across from a buyer to scope the architecture that
                closed a $750K deal. I like owning ambiguous problems end to end, and I treat model output as a draft I'm
                responsible for, not an answer to accept.
              </p>
              <p className="text-muted-foreground">
                Outside of code: the gym, MMA, cooking, startups, and more hackathons than is probably healthy.
              </p>
            </div>

            <div className="grid gap-6 border-t pt-8 sm:grid-cols-2">
              {skills.map((s) => (
                <div key={s.group}>
                  <p className="eyebrow mb-3">{s.group}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {s.items.map((i) => (
                      <span key={i} className="rounded-md border bg-background px-2 py-0.5 text-[13px]">
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 border-t pt-8">
              <a href={`mailto:${profile.email}`} className="rounded-full bg-foreground px-5 py-2.5 text-sm text-background transition-opacity hover:opacity-85">
                {profile.email}
              </a>
              <a href={profile.resume} target="_blank" rel="noreferrer" className="rounded-full border px-5 py-2.5 text-sm transition-colors hover:border-foreground">
                Download résumé
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
