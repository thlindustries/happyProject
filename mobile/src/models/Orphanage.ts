export default interface {
  id: string;
  name: string;
  latitude: string;
  longitude: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  images: [
    { id: string, url: string }
  ]
}
