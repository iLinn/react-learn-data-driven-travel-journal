export interface CardProps {
  id?: number;
  img: {
    src: string;
    alt: string;
  };
  place: string;
  mapLink: string;
  title: string;
  dates: string;
  description: string;
};