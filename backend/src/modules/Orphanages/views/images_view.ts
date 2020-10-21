import Image from '@modules/Orphanages/infra/typeorm/entities/Images';

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `${process.env.APP_API_URL_LOCAL_IP}/files/${image.path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  },
};
