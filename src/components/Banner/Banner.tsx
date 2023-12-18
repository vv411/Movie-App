import { Link } from "react-router-dom";

type BannerProps = {
    colour: "black" | "brown",
    showHomeButton: boolean
    text: string
}

const Banner : React.FC<BannerProps> = ({ colour, showHomeButton, text }) => {
    return (
        <div className={`flex h-16 md:h-24 text-white text-2xl md:text-4xl text-left ${colour === 'black' ? 'bg-[#212121]' : 'bg-[#746A64]'}`}>
            {showHomeButton &&
                <span className="my-auto mx-4">
                    <Link id="HomeButton" to={"/"}>
                        <img src="/arrow_left.svg" width="50" height="50"></img>
                    </Link>
                </span>
            }
            <span className="my-auto mx-8 leading-6 font-bold font-roboto">{text}</span>
        </div> 
    );
  };
  
  export default Banner;