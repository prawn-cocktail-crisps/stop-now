export default function FinancialBenefits() {
  return (
    <section className="section" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <div className="inner">
        <p className="section-label">The financial case</p>
        <h2>Financial Benefits</h2>
        <p>
          For someone who smokes 20 a day, they will save in the region of £3,600 per
          year by becoming a non-smoker and as the price rises in nearly every budget,
          they will save year on year.
        </p>
        <p>
          Stop now and it&apos;s like having a massive pay rise each year — how often do
          you get a £3,600 a year pay rise?
        </p>
        <div className="finance-card">
          <div className="big-number">£45,000+</div>
          <div className="big-label">saved over 25 years for a 40-year-old smoking 10 a day</div>
          <p>
            It is estimated that the average age of death for a smoker is 65. A 40-year-old
            smoking 10 a day at £10 a packet would save over £45,000 over the next 25 years
            — and add years onto their life to enjoy it. Could you find a better use for
            that amount of money?
          </p>
        </div>
      </div>
    </section>
  );
}
