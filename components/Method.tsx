const steps = [
  {
    tag: "Your story",
    title: "Your counsellor will listen",
    body: "Your counsellor will listen to your story to understand your specific drinking habits and personal circumstances — no judgement.",
  },
  {
    tag: "The truth",
    title: "The truth about alcohol",
    body: "Together you'll explore the myths and false beliefs that cause drinkers to consume alcohol — and dismantle them one by one.",
  },
  {
    tag: "Beliefs",
    title: "Belief change",
    body: "As the session progresses you will replace the desire to drink with a genuine, lasting understanding of the detrimental effect of alcohol.",
  },
  {
    tag: "Conclusion",
    title: "Confident non-drinker",
    body: "By the end of the session you will feel free of the desire to drink, and the confidence to live without alcohol.",
  },
];

export default function Method() {
  return (
    <section className="section section-alt">
      <div className="section-inner">
        <p className="eyebrow">The method</p>
        <h2>Change your beliefs. Find a new freedom.</h2>
        <div className="steps">
          {steps.map((s) => (
            <div className="step" key={s.tag}>
              <span className="step-tag">{s.tag}</span>
              <div className="step-body">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
