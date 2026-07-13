export default function CRTOverlay() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
      <div className="crt-lines" />
    </div>
  );
}