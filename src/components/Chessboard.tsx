import "./Chessboard.css";
import Tile from "./Tile/Tile";
import BlackPawnImg from "../assets/Images/pawn_b.png";
import WhitePawnImg from "../assets/Images/pawn_w.png";
import BlackrookImg from "../assets/Images/rook_b.png";
import WhiterookImg from "../assets/Images/rook_w.png";
import BlackbishopImg from "../assets/Images/bishop_b.png";
import WhitebishopImg from "../assets/Images/bishop_w.png";
import BlackknightImg from "../assets/Images/knight_b.png";
import WhiteknightImg from "../assets/Images/knight_w.png";
import WhitekingImg from "../assets/Images/king_w.png";
import BlackkingImg from "../assets/Images/king_b.png";
import WhitequeenImg from "../assets/Images/queen_w.png";
import BlackqueenImg from "../assets/Images/queen_b.png";

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

interface Piece {
  image: string;
  x: number;
  y: number;
}
const pieces: Piece[] = [];

for (let i = 0; i < 8; i++) {
  pieces?.push({ image: `assets/Images/pawn_b.png`, x: i, y: 6 });
}

for (let i = 0; i < 8; i++) {
  pieces?.push({ image: `assets/Images/pawn_w.png`, x: i, y: 1 });
}

for (let i = 0; i < 2; i++) {
  const type = i === 0 ? 'b':'w'
  const y = i === 0 ? 7:0
  pieces?.push({ image: `assets/Images/rook_${type}.png`, x: 0, y });
  pieces?.push({ image: `assets/Images/rook_${type}.png`, x: 7, y });
  pieces?.push({ image: `assets/Images/bishop_${type}.png`, x: 2, y });
  pieces?.push({ image: `assets/Images/bishop_${type}.png`, x: 5, y });
  pieces?.push({ image: `assets/Images/knight_${type}.png`, x: 1, y });
  pieces?.push({ image: `assets/Images/knight_${type}.png`, x: 6, y });
  pieces?.push({ image: `assets/Images/king_${type}.png`, x: 3, y });
  pieces?.push({ image: `assets/Images/queen_${type}.png`, x: 4, y });
}


// pieces?.push({ image: WhitebishopImg, x: 5, y: 0 });
// pieces?.push({ image: WhitebishopImg, x: 2, y: 0 });
// pieces?.push({ image: WhiterookImg, x: 7, y: 0 });
// pieces?.push({ image: WhiterookImg, x: 0, y: 0 });
// pieces?.push({ image: WhiteknightImg, x: 1, y: 0 });
// pieces?.push({ image: WhiteknightImg, x: 6, y: 0 });
// pieces?.push({ image: WhitekingImg, x: 4, y: 0 });
// pieces?.push({ image: WhitequeenImg, x: 3, y: 0 });


const Chessboard = () => {
  let board: Array<JSX.Element> = [];

  for (let j = verticalAxis.length - 1; j >= 0; j--) {
    for (let i = 0; i < horizontalAxis.length; i++) {
      const number = j + i + 2;
      let image = undefined;

      pieces?.forEach((p) => {
        if (p.x === i && p.y === j) {
          image = p.image;
        }
      });
      board.push(<Tile number={number} image={image} key={Math.random()} />);
    }
  }
  return <div id="chessboard">{board}</div>;
};

export default Chessboard;
