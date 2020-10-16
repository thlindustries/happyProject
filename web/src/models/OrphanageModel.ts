export default interface Orphanage {
  about: string;
  id: string;
  images: [
    {
      id: string;
      url: string;
    },
  ];
  instructions: string;
  latitude: number;
  longitude: number;
  name: string;
  open_on_weekends: boolean;
  opening_hours: string;
}
