import React from "react";
import Popup from "reactjs-popup";
import { HiddenEasterEgg } from "react-hidden-easter-egg";
import { HackText } from "react-hacker-text-effect";
import "reactjs-popup/dist/index.css";


export default function Nin() {
  const [show, setShow] = React.useState(false);
  const [showPop, setShowPop] = React.useState(false);
  const [showExplode, setShowExplode] = React.useState(false);

  return (
    <div className="easter">
      
      <HiddenEasterEgg
        code={["h", "a", "c", "k"]}
        resetEggMs={10000}
        cb={() => setShow(true)}
        key="test-1"
      />
      <Popup open={show} closeOnDocumentClick onClose={() => setShow(false)}>
        <div>
          <HackText word="SOCORRO" textSize="28px" />
        </div>
      </Popup>
    </div>
  );
}
