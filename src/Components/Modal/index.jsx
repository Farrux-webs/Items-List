import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./style.scss"

const Index = (props)=>{





    return (
      <>
        <div className="modalWindow d-none">
          <div className="modalCard">
            <h2 className="modalTitle text-warning">EDIT DATA</h2>
            <i class="bi bi-x-lg closeModal" onClick={props.hideModal}></i>
            <input
              type="text"
              className="form-control modalInputs"
              placeholder="Edit Category"
            />
            <input
              type="number"
              className="form-control modalInputs"
              placeholder="Edit Price"
            />
            <input
              type="date"
              className="form-control modalInputs"
              placeholder="Edit Date"
            />
            <button
              className="btn btn-primary w-100"
            >
              Save Data
            </button>
          </div>
        </div>
      </>
    );
}
export default Index