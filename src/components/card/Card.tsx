import './Card.css';

interface CardProps {
  imgSrc: string;
  imgAlt: string;
  place: string;
  mapLink: string;
  title: string;
  date: string;
  description: string;
};

export default function Card(props: CardProps) {
  const { imgSrc, imgAlt, place, mapLink, title, date, description } = props;
  return (
    <article className="card flex-row gap-1 mb-1">
      <div className="card-image-container">
        <img className="card-image" src={imgSrc} alt={imgAlt} />
      </div>
      <div className="card-content">
        <span className="marker-icon place">{place}</span>
        <a className="map-link" 
            target="_blank"
            href={mapLink}>View on Google Maps</a>

        <h2>{title}</h2>
        <h4>{date}</h4>
        <p>{description}</p>
      </div>
    </article>
  );
}