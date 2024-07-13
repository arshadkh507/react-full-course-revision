import SinglePerson from "./SinglePerson";

function ListOfFriends({ friendsData, onFriendSelect, isFriendSelected }) {
  return (
    <ul>
      {friendsData.map((item) => {
        return (
          <SinglePerson
            friend={item}
            key={item.id}
            onFriendSelect={onFriendSelect}
            isFriendSelected={isFriendSelected}
          />
        );
      })}
    </ul>
  );
}

export default ListOfFriends;
