export default function GridBG() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-[-10] select-none"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 h-full w-full"
        style={{
          backgroundImage: `
            linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
            linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
          `,
          backgroundSize: "10px 10px",
          backgroundPosition: "0 0",
        }}
      />
    </div>
  );
}