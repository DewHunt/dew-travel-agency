/* eslint-disable react/prop-types */
import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemListsTable = ({ itemInfo, deleteItem, selectItem }) => {
  return (
    <>
      <tr>
        <td className="text-center">
          <input
            type="checkbox"
            className="form-check-input"
            value="something"
            checked={itemInfo.packed}
            onChange={() => selectItem(itemInfo.id)}
          />
        </td>
        <td className={itemInfo.packed ? "text-bg-success" : ""}>
          {itemInfo.itemName}
        </td>
        <td
          className={`text-center ${itemInfo.packed ? "text-bg-success" : ""}`}>
          {itemInfo.itemQty}
        </td>
        <td className="text-center">
          <button
            className="btn btn-danger btn-sm"
            onClick={() => deleteItem(itemInfo.id)}>
            <FontAwesomeIcon icon={faMultiply} />
          </button>
        </td>
      </tr>
    </>
  );
};

export default ItemListsTable;
