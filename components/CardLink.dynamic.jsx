export default function CardLink({ href, title }) {
    return (
      <div>
        <a href={href} className="card link">
          <h2>{title} &rarr;</h2>
        </a>
      </div>
    );
  }