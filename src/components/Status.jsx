/* eslint-disable react/prop-types */
const Status = ({ itemLists }) => {
  const totalItems = itemLists.length;
  if (totalItems === 0) {
    return (
      <>
        <h4>Start adding some items to your packing list</h4>
      </>
    );
  }
  const totalPackedItems = itemLists.filter((item) => item.packed).length;
  const percentageOfPackedItems = Math.round(
    (totalPackedItems / totalItems) * 100
  );

  if (percentageOfPackedItems === 100) {
    return (
      <>
        <h4>You got everything! Ready to go ✈️</h4>
      </>
    );
  } else {
    return (
      <>
        <h4>💼 You have {totalItems} items on your list</h4>
        <hr />
        <h4>
          You already packed {totalPackedItems} ({percentageOfPackedItems}%)
        </h4>
      </>
    );
  }
};

export default Status;
