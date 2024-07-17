import { useState } from "react";

export default function Player({ initialName, symbol }) {
    const [isEditing, setIsEditing] = useState()
    const [playerName, setPlayerName] = useState(initialName)

    function handleOnEditClick() {
        setIsEditing((prevState) => !prevState);
    }
    function handleChange(event) {
        setPlayerName(event.target.value)
    }

    let editableName = <span className="player-name">{playerName}</span>;

    if(isEditing) {
        editableName = <input type="text" required onChange={handleChange} value={playerName}></input>
    }

  return (
    <li>
      <span className="player">
        {editableName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleOnEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
