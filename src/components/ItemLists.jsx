/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { faMultiply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ItemListsTable from "./ItemListsTable";

const ItemLists = ({
  itemLists,
  deleteItem,
  deleteAllItem,
  selectItem,
  selectAllItem,
}) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") {
    sortedItems = itemLists;
  }

  if (sortBy === "name") {
    sortedItems = itemLists
      .slice()
      .sort((a, b) => a.itemName.localeCompare(b.itemName));
  }

  if (sortBy === "packed") {
    sortedItems = itemLists
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <>
      <div className="card">
        <div className="card-header text-center">
          <h3>Item Lists</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12 text-center">
              <h5>Search By: </h5>
            </div>
            <div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-10">
              <select
                className="form-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}>
                <option value="input">Input Order</option>
                <option value="name">Item Name</option>
                <option value="packed">Packed Status</option>
              </select>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-start">
              <div className="table-responsive">
                <table className="table table-bordered table-hover table-striped">
                  <thead>
                    <tr>
                      <th width="50px" className="text-center">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          value="all"
                          onChange={(e) => selectAllItem(e)}
                        />
                      </th>
                      <th className="text-center">Name</th>
                      <th width="100px" className="text-center">
                        Quantity
                      </th>
                      <th width="70px" className="text-center">
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={deleteAllItem}>
                          <FontAwesomeIcon icon={faMultiply} />
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {sortedItems.map((item) => (
                      <ItemListsTable
                        itemInfo={item}
                        deleteItem={deleteItem}
                        selectItem={selectItem}
                        key={item.id}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemLists;
