import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [isEditing, setIsEditing] = useState();
  const [playerName, setPlayerName] = useState(initialName);

  function handleOnEditClick() {
    setIsEditing((editText) => !editText);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
    onChangeName(event.target.value);
  }

  let editableName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editableName = (
      <input type="text" required onChange={handleChange} value={playerName} />
    );
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {editableName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleOnEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
