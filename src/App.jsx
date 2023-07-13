import { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./App.css";
import ItemForm from "./components/ItemForm";
import ItemLists from "./components/ItemLists";
import Status from "./components/Status";
import Header from "./components/header";

function App() {
  const MySwal = withReactContent(Swal);
  const [itemLists, setItems] = useState([]);

  const addItemToLists = (item) => {
    setItems((itemLists) => [...itemLists, item]);
  };

  const selectItem = (id) => {
    setItems((itemLists) =>
      itemLists.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const selectAllItem = (e) => {
    console.log("e: ", e);
    const isChecked = e.target.checked;
    setItems((itemLists) =>
      itemLists.map((item) => ({ ...item, packed: isChecked }))
    );
  };

  const deleteItem = (id) => {
    setItems((itemLists) => itemLists.filter((item) => item.id !== id));
  };

  const deleteAllItem = () => {
    MySwal.fire({
      title: <p>Are you sure you want to delete all items?</p>,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log("result: ", result);
      if (result.isConfirmed) {
        setItems([]);
        MySwal.fire("Deleted!", "Your all items has been deleted.", "success");
      } else {
        MySwal.fire("Cancelled", "Your all items is safe :)", "error");
      }
    });
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <ItemForm addItem={addItemToLists} />
        <div className="row mt-3">
          <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-8 col-12">
            <ItemLists
              itemLists={itemLists}
              deleteItem={deleteItem}
              deleteAllItem={deleteAllItem}
              selectItem={selectItem}
              selectAllItem={selectAllItem}
            />
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12 text-center">
            <div className="card">
              <div className="card-body">
                <Status itemLists={itemLists} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
