export default class Product {
  constructor(id, title, pictures, price, thumbnail, attributes){
      this.id = id;
      this.title = title;
      this.price = price;
      this.pictures = pictures;
      this.thumbnail = thumbnail;
      this.main_image = (pictures && pictures.length > 0 ? pictures[0].url : this.thumbnail)
      this.attributes = (attributes ? attributes : [])
  }

}