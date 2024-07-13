import Button from "./Button";

function SinglePerson({ friend, onFriendSelect, isFriendSelected }) {
  const isSelected = isFriendSelected && isFriendSelected.id === friend.id;

  return (
    <li className={`${isSelected ? "selected" : ""}`}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owes {friend.name} {Math.abs(friend.balance)}€
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes You {Math.abs(friend.balance)}€
        </p>
      )}

      {friend.balance === 0 && (
        <p className="red">You and {friend.name} are even</p>
      )}

      <Button className="button" onClick={() => onFriendSelect(friend.id)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

export default SinglePerson;
