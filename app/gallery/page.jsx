export const metadata = { title: "Gallery" };

const moments = [
  { className: "gallery-one", type: "gradient", caption: "Color study", number: "01" },
  { className: "gallery-two", type: "type", caption: "Type & rhythm", number: "02" },
  { className: "gallery-three", type: "code", caption: "Late-night builds", number: "03" },
  { className: "gallery-four", type: "shapes", caption: "Shape language", number: "04" },
  { className: "gallery-five", type: "poster", caption: "Poster exploration", number: "05" },
  { className: "gallery-six", type: "lines", caption: "Order in motion", number: "06" }
];

function GalleryArtwork({ type }) {
  if (type === "type") return <div className="art-type"><span>Aa</span><small>FORM / FUNCTION</small></div>;
  if (type === "code") return <div className="art-code"><i /><i /><i /><pre>{`const idea = {\n  curious: true,\n  status: "building"\n};`}</pre></div>;
  if (type === "shapes") return <div className="art-shapes"><i /><i /><i /><i /></div>;
  if (type === "poster") return <div className="art-poster"><span>MAKE</span><span>IT</span><span>MATTER.</span></div>;
  if (type === "lines") return <div className="art-lines">{Array.from({ length: 8 }, (_, index) => <i key={index} />)}</div>;
  return <div className="art-gradient"><i /><i /><i /></div>;
}

export default function GalleryPage() {
  return (
    <section className="page-section section-pad gallery-page">
      <div className="page-intro gallery-intro">
        <p className="eyebrow plain"><span>03</span> Gallery</p>
        <h1>My <em>Gallery</em></h1>
        <p className="page-lede">A small collection of designs and visual experiments I created while practicing.</p>
      </div>

      <div className="gallery-grid">
        {moments.map((moment) => (
          <figure className={`gallery-item ${moment.className}`} key={moment.number}>
            <div className="gallery-art"><GalleryArtwork type={moment.type} /></div>
            <figcaption><span>{moment.caption}</span><span>{moment.number} / 06</span></figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
