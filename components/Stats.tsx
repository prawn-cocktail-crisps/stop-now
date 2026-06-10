const stats = [
  { value: "100,000", label: "UK deaths per year caused by smoking" },
  { value: "273", label: "Deaths every single day" },
  { value: "86%", label: "Of lung cancer deaths linked to smoking" },
  { value: "10–13", label: "Years cut from the average smoker's life" },
];

export default function Stats() {
  return (
    <div className="stats">
      <div className="stats-grid">
        {stats.map((s) => (
          <div key={s.value}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
