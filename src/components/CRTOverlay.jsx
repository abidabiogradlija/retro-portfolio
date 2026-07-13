export default function CRTOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      <div className="crt-lines absolute inset-0" />
    </div>
  );
}