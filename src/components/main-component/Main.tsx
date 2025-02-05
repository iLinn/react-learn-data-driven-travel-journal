import './Main.css';
import Card from '../card/Card';
import { TRAVEL_DATA } from '../../data/travel-data.const';

function MainContent() {
  const cardsElements = TRAVEL_DATA.map((travel) => (
    <Card
      key={travel.id}
      img={travel.img}
      place={travel.place}
      mapLink={travel.mapLink}
      title={travel.title}
      dates={travel.dates}
      description={travel.description}
    />
  ));

  return (
    <main>
      {cardsElements}
    </main>
  );
}

export default MainContent;