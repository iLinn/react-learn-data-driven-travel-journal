import './Main.css';
import Card from '../card/Card';
import { TRAVEL_DATA } from '../../data/travel-data.const';

function MainContent() {
  const cardsElements = TRAVEL_DATA.map((travelData) => (
    <Card
      key={travelData.id}
      props={{
        ...travelData,
        mapLink: travelData.map_link,
      }}
    />
  ));

  return (
    <main>
      {cardsElements}
    </main>
  );
}

export default MainContent;