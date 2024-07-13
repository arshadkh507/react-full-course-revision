import { useState } from "react";
import Button from "./Button";

function AddNewFriend({ addFriend }) {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    const friendId = Date.now().toString();

    if (!name || !imgUrl) return;

    const newFriendObject = {
      id: friendId,
      name: name,
      image: `${imgUrl}?=${friendId}`,
      balance: 0,
    };

    addFriend(newFriendObject);
    setName("");
    setImgUrl("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="name"> 👨🏿‍🤝‍👨🏻 Friend name</label>
      <input
        type="text"
        value={name}
        id="name"
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="imageUrl"> 🚇 Image URL</label>
      <input type="text" value={imgUrl} id="imageUrl" readOnly />

      <Button type="submit" className="button">
        Add
      </Button>
    </form>
  );
}

export default AddNewFriend;
