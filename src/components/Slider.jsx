import ImageSlider from './ImageSlider';

const Slider = () => {
  const images = [
    'https://images.unsplash.com/photo-1554941426-e9604e34bc94?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    'https://images.unsplash.com/photo-1524680319993-fe837ad4bf2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    'https://plus.unsplash.com/premium_photo-1685026487201-bbe853364736?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
  ];

  return <ImageSlider images={images} />;
};

export default Slider;
