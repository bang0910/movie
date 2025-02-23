import IconRating from "../../../../assets/rating.png";
import IconRatingHalf from "../../../../assets/rating-half.png";
import ImgTemp from "../../../../assets/temp-1.jpeg";
import Button from "../../../../assets/play-button.png";
const Banner = () => {
  return (
    <div className="w-full h-[600px] bg-banner bg-center bg-no-repeat bg-cover relative">
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-30" />
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-7 relative z-20">
        <div className="flex flex-col space-y-5 items-baseline w-[50%]">
          <p className="text-white text-md rounded-sm bg-gradient-to-r from-red-600 to-red-300 py-2 px-3">
            TV Show
          </p>
          <div className="flex flex-col space-y-4">
            <h2 className="text-white text-[40px]"> Nghe nói em thích tôi</h2>
            <div className="flex items-center space-x-3">
              <img src={IconRating} alt="1" className="w-8 h-8" />
              <img src={IconRating} alt="1" className="w-8 h-8" />
              <img src={IconRating} alt="1" className="w-8 h-8" />
              <img src={IconRating} alt="1" className="w-8 h-8" />
              <img src={IconRatingHalf} alt="2" className="w-8 h-8" />
            </div>
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
              accusamus natus? Iste minus eius ut labore. Quae est facilis
              eveniet, dolore enim a sed cumque! Necessitatibus velit fugiat
              blanditiis expedita!
            </p>
            <div className="flex items-center space-x-4">
              <button className="p-3 text-white rounded-lg bg-black font-bold text-lg">
                Chi Tiết
              </button>
              <button className="p-3 text-white rounded-lg bg-red-500 font-bold text-lg">
                Xem Phim
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex justify-center items-center">
          <div className="w-[300px] h-[500px] relative group cursor-pointer">
            <img src={ImgTemp} alt="3" className="w-full h-full object-cover" />
            <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img src={Button} alt="button" className="w-[60px] h-[60px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
