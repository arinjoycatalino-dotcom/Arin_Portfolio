const shapes = {
  pulse: (
    <div className="visual-dashboard">
      <div className="visual-sidebar"><i /><i /><i /><i /></div>
      <div className="visual-main">
        <div className="visual-topline" />
        <div className="visual-bars"><i /><i /><i /><i /><i /></div>
        <div className="visual-stats"><i /><i /></div>
      </div>
    </div>
  ),
  orbit: (
    <div className="visual-orbit">
      <span className="orbit-ring ring-one" />
      <span className="orbit-ring ring-two" />
      <span className="orbit-planet" />
      <span className="orbit-dot dot-one" />
      <span className="orbit-dot dot-two" />
    </div>
  ),
  canvas: (
    <div className="visual-canvas">
      <div className="canvas-card card-a"><span>01</span></div>
      <div className="canvas-card card-b"><span>02</span></div>
      <div className="canvas-card card-c"><span>03</span></div>
    </div>
  )
};

export default function ProjectVisual({ type, label }) {
  return (
    <div className={`project-visual visual-${type}`} role="img" aria-label={label}>
      <span className="visual-noise" />
      {shapes[type]}
    </div>
  );
}
