import ImageSlider from './ImageSlider';

const Slider = () => {
  const images = [
    'https://assets.medpagetoday.net/media/images/88xxx/88525.jpg',
    'https://cdn.shopify.com/s/files/1/0603/2542/9445/articles/football-3828278_1920.jpg?v=1637539140'
  ];

  return <ImageSlider images={images} />;
};

export default Slider;
