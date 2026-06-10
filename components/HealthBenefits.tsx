const benefits = [
  "Blood pressure and pulse rate start to return to normal",
  "Chances of heart attack decrease",
  "Circulation improves, making exercise easier",
  "Energy levels increase overall",
  "Coughing, sinus problems, tiredness and shortness of breath decrease",
  "Excessive risk of heart disease is halved",
  "Risk of stroke decreases",
  "Lung, throat and mouth cancer risk decreases",
  "Chances of seeing your children and grandchildren grow up increases",
];

export default function HealthBenefits() {
  return (
    <section className="section">
      <div className="inner">
        <p className="section-label">Your body thanks you immediately</p>
        <h2>Health Benefits of Stopping</h2>
        <p>
          There is no use sugar coating it — smoking kills. It shortens your life on
          average by 10–13 years and many years of poor health. Smoking is the primary
          cause of preventable illness and premature death, accounting for approximately
          100,000 deaths per year. Smoking kills more people each year in the UK than
          obesity, alcohol, road traffic accidents, illegal drugs and HIV{" "}
          <strong>combined</strong>.
        </p>
        <div className="callout">
          <p>
            The US Surgeon General&apos;s 2010 report concluded that &ldquo;there is no
            risk-free level of exposure to tobacco smoke, and there is no safe tobacco
            product.&rdquo;
          </p>
        </div>
        <div className="benefits-cols">
          {benefits.map((b) => (
            <div className="benefit-item" key={b}>{b}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
