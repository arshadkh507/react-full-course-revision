import { useState } from "react";
import AddNewFriend from "./components/AddNewFriend";
import InputBillData from "./components/InputBillData";
import ListOfFriends from "./components/ListOfFriends";
import Button from "./components/Button";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [friendsData, setFriendsData] = useState(initialFriends);

  const [showAddFriend, setShowAddFriend] = useState(false);

  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend(!showAddFriend);
  }

  function handleAddNewFriend(friend) {
    setFriendsData((friendsData) => [...friendsData, friend]);
    setShowAddFriend(false);
  }

  function handleSelectedFriend(id) {
    if (id === selectedFriend?.id) return setSelectedFriend(null);
    const friend = friendsData.filter((friend) => friend.id === id);
    setSelectedFriend(friend[0]);
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriendsData((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <ListOfFriends
          friendsData={friendsData}
          isFriendSelected={selectedFriend}
          onFriendSelect={handleSelectedFriend}
        />
        {showAddFriend && <AddNewFriend addFriend={handleAddNewFriend} />}
        <Button onClick={handleShowAddFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <InputBillData
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
};

export default App;
