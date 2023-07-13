/* eslint-disable react/prop-types */
import { useState } from "react";

const ItemForm = ({ addItem }) => {
  const [itemName, setItemName] = useState("");
  const [itemQty, setItemQty] = useState(1);

  const formSubmit = (e) => {
    e.preventDefault();
    if (!itemName) {
      return;
    }

    const newItem = { id: Date.now(), itemName, itemQty, packed: false };
    addItem(newItem);
    setItemName("");
    setItemQty(1);
  };

  return (
    <>
      <div className="card">
        <div className="card-header text-center">
          <h3>What do you need for your trip?</h3>
        </div>
        <div className="card-body">
          <form onSubmit={formSubmit}>
            <div className="row">
              <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
                <div className="form-group">
                  <label htmlFor="item-name" className="mb-1">
                    <b>Item Name</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={itemName}
                    onChange={(e) => {
                      setItemName(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
                <div className="form-group">
                  <label htmlFor="item-qty" className="mb-1">
                    <b>Item Quantity</b>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={itemQty}
                    onChange={(e) => {
                      setItemQty(e.target.value);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-end">
                <div className="form-group">
                  <button type="submit" className="btn btn-outline-success">
                    Add Item
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ItemForm;
