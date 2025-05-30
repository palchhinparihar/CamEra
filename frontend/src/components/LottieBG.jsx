import { Player } from "@lottiefiles/react-lottie-player";

const LottieBG = ({ animation }) => {
  return (
    <div>
      <Player
        autoplay
        loop
        src={animation}
        style={{ height: "100%", width: "100%" }}
      />
    </div>
  );
};

export default LottieBG;
