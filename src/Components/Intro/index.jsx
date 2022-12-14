import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./style.scss"
import Modal from "../Modal"

const Index = () =>{
     const [itemCategory, setitemCategory] = useState("");
     const [itemPrice, setPrice] = useState("");
     const [itemDate, setDate] = useState("");
     const [item, setItem] = useState([]);

     const addItem = () => {
       const newItem = {
         id: uuidv4(),
         itemCategory: itemCategory,
         itemPrice: itemPrice,
         itemDate: itemDate,
       };

       if (
         itemCategory.trim().length === 0 ||
         itemPrice.trim().length === 0 ||
         itemDate.trim().length === 0
       ) {
         alert("Please fill  each input");
       } else {
         setItem([...item, newItem]);
         setitemCategory("");
         setPrice("");
         setDate("");
       }
     };

     const DeleteTodo = (i) => {
       const NewList = item;
       NewList.splice(i, 1);
       setItem([...NewList]);
     };

   const modalWindow = document.querySelector(".modalWindow");
   function showModal() {
     modalWindow.classList.remove("d-none");
   }
   function hideModal(){
    modalWindow.classList.add("d-none")
   }
     


    return (
      <>
        <Modal hideModal={()=>{hideModal()}}/>
        <div className="container">
          <div className=" w-75 mx-auto mb-5 border shadow p-4 InputsWrapper">
            <h2 className="text-primary mb-3">ADD ITEMS</h2>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Enter Category"
              value={itemCategory}
              onChange={(e) => {
                setitemCategory(e.target.value);
              }}
            />
            <input
              type="number"
              className="form-control mb-2"
              placeholder="Enter Price"
              value={itemPrice}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
            <input
              type="date"
              min="0"
              className="form-control mb-2"
              value={itemDate}
              onChange={(e) => {
                setDate(e.target.value);
              }}
            />
            <button
              className="btn btn-primary w-100 "
              onClick={() => {
                addItem();
              }}
            >
              Add
            </button>
          </div>
          <div className="w-75 mx-auto border shadow p-4">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {item.length > 0
                  ? item.map((e, i) => {
                      return (
                        <tr key={e.id}>
                          <td>{i + 1}</td>
                          <td>{e.itemCategory}</td>
                          <td>{e.itemPrice}$</td>
                          <td>{e.itemDate}</td>
                          <td>
                            <button
                              className="btn btn-primary EditItem w-50 d-block mx-auto"
                              onClick={() => {
                                showModal()
                              }}
                            >
                              Edit
                            </button>
                          </td>
                          <td>
                            <button
                              className="btn btn-danger deleteItem d-block mx-auto"
                              data-del={i + 1}
                              onClick={() => {
                                DeleteTodo(i);
                              }}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  : "NO ITEMS YET"}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
}

export default Index