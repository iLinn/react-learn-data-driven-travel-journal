import { CardProps } from '../interface/CardProps';

interface TravelData extends Omit<CardProps, 'mapLink'> {
  map_link: string;
}

export const TRAVEL_DATA: TravelData[] = [
  {
    id: 1,
    img: {
      src:'https://scrimba.com/links/travel-journal-japan-image-url',
      alt:'mount fuji'
    },
    place: 'Japan',
    map_link: 'https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu',
    title: 'Mount Fuji',
    dates: '12 Jan, 2024 - 24 Jan, 2024',
    description: 'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.',
  },
  {
    id: 2,
    img: {
      src: 'https://scrimba.com/links/travel-journal-australia-image-url',
      alt: 'Sydney Opera House'
    },
    place: 'Australia',
    map_link: 'https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.213108,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae3e4e2a1b1d:0x2a0b4b0b1b0b1b0b!8m2!3d-33.8567844!4d151.2152967!16zL20vMGNrczA?entry=ttu',
    title: 'Sydney Opera House',
    dates: '27 May, 2024 - 8 Jun, 2024',
    description: 'The Sydney Opera House is a multi-venue performing arts centre in Sydney. It is one of the 20th century\'s most famous and distinctive buildings.'
  },
  {
    id: 3,
    img: {
      src: 'https://scrimba.com/links/travel-journal-norway-image-url',
      alt: 'Geirangerfjord'
    },
    place: 'Norway',
    map_link: 'https://www.google.com/maps/place/Geirangerfjord/@62.104911,7.005004,12z/data=!3m1!4b1!4m6!3m5!1s0x4610efb7f0f0f0f0:0x2a0b4b0b1b0b1b0b!8m2!3d62.104911!4d7.205004!16zL20vMGNrczA?entry=ttu',
    title: 'Geirangerfjord',
    dates: '01 Oct, 2024 - 18 Oct, 2024',
    description: 'The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is a 15-kilometre (9.3 mi) long branch off of the Sunnylvsfjorden, which is a branch off of the Storfjorden.'
  },
];