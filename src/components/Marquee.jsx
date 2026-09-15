export default function Marquee({ items }) {
  const loop = [...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((item, i) => {
          const Icon = item.icon;
          return (
            <span className="marquee-item" key={`${item.label}-${i}`}>
              <Icon size={17} strokeWidth={2} />
              {item.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
