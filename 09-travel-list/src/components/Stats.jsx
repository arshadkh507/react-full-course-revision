export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }

  const numItems = items.length;

  const numPickedArr = items.filter((item) => item.packed);

  const percentage = Math.round((numPickedArr.length / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! Ready to go ✈"
          : `💼 You have ${numItems} items on your list, and your already picked
          ${numPickedArr.length} (${percentage}%)}`}
      </em>
    </footer>
  );
}
