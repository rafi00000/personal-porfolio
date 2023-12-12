import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {

  const [text] = useTypewriter({
    words: ["MERN Stack developer", "Front end developer"],
    loop: 0,
    delaySpeed: 100,
    deleteSpeed: 50,
    typeSpeed: 200,
  });
  return (
    <div className="flex justify-around items-center min-h-screen">
      <div className="space-y-5">
        <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-red-600 to-pink-600 drop-shadow">
          Hello I am <br /> Rafiul Islam
        </h1>
        <h2 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-red-600 to-pink-600 text-2xl">
          {text}
          <Cursor cursorColor="red" />
        </h2>
        <a href="https://drive.google.com/uc?id=1Mw5FFSFB8XKgklnRPuIjkXBpNL5Gaafg&export=download" className="btn border-red-500 bg-white hover:bg-red-600 hover:text-white"> 
          Download CV
        </a>
      </div>

      <div>
        <img
          src="https://i.ibb.co/fHRYps4/my-pic.jpg"
          alt=""
          className="rounded-full border-8 w-96"
        />
      </div>
    </div>
  );
};

export default Banner;
