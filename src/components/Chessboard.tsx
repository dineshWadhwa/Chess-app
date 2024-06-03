import "./Chessboard.css";
import Tile from "./Tile/Tile";

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
  const type = i === 0 ? "b" : "w";
  const y = i === 0 ? 7 : 0;
  pieces?.push({ image: `assets/Images/rook_${type}.png`, x: 0, y });
  pieces?.push({ image: `assets/Images/rook_${type}.png`, x: 7, y });
  pieces?.push({ image: `assets/Images/bishop_${type}.png`, x: 2, y });
  pieces?.push({ image: `assets/Images/bishop_${type}.png`, x: 5, y });
  pieces?.push({ image: `assets/Images/knight_${type}.png`, x: 1, y });
  pieces?.push({ image: `assets/Images/knight_${type}.png`, x: 6, y });
  pieces?.push({ image: `assets/Images/king_${type}.png`, x: 3, y });
  pieces?.push({ image: `assets/Images/queen_${type}.png`, x: 4, y });
}

let activePiece: HTMLElement | null = null;

let grabPiece = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  let element = e.target as HTMLElement;
  if (element.classList.contains("chess-piece")) {
    const x = e.clientX - 50;
    const y = e.clientY - 50;

    element.style.position = "absolute";
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;

    activePiece = element;
  }
};

let movePiece = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  if (activePiece) {
    const x = e.clientX - 50;
    const y = e.clientY - 50;

    activePiece.style.position = "absolute";
    activePiece.style.left = `${x}px`;
    activePiece.style.top = `${y}px`;
  }
};

let dropPiece = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  if (activePiece) {
    activePiece = null;
  }
};

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
  return (
    <div
      onMouseDown={(e) => grabPiece(e)}
      onMouseMove={(e) => movePiece(e)}
      onMouseUp={(e) => dropPiece(e)}
      id="chessboard"
    >
      {board}
    </div>
  );
};

export default Chessboard;
