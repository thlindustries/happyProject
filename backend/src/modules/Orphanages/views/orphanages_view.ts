import Orphanage from '@modules/Orphanages/infra/typeorm/entities/Orphanage';
import imagesView from '@modules/Orphanages/views/images_view';

export default {
  render(orphanage: Orphanage) {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: imagesView.renderMany(orphanage.images),
    };
  },

  renderMany(orphanges: Orphanage[]) {
    return orphanges.map(orphanage => this.render(orphanage));
  },
};
