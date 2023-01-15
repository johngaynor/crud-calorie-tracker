import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  MDBTable,
  MDBTableHead,
  MDBBadge,
  MDBBtn,
  MDBTableBody,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import firebase from "../../../../utilities/firebase";
import styles from "./ingredient.css";

function Ingredient({ ingredient }) {
  const deleteIngredient = () => {
    console.log("deleted ingredient");
    const ingredientRef = firebase
      .database()
      .ref("add-ingredient")
      .child(ingredient.id);

    ingredientRef.remove();
  };

  return (
    <tr id="food-display" className="ingredient-display">
      <td>
        <div className="mx-auto" id="food-meal-name-display">
          <p className="fw-bold mb-1" id="food-name-display">
            {ingredient.name}
          </p>
          <div className="my-2 d-md-none ingredient-serving-box">
            <p>Serving Size:</p>
            <p className="serving-box-text">
              {ingredient.size}{" "}
              <span className="text-muted">{ingredient.unit}</span>
            </p>
          </div>
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={deleteIngredient}
            className="ingredient-list-btns mt-2 d-xl-none"
          />
        </div>
      </td>
      <td className="d-none d-md-table-cell">
        <p className="fw-normal mb-1" id="food-servings-display">
          {ingredient.size} {""}
          <span className="text-muted">{ingredient.unit}</span>
        </p>
      </td>
      <td className="d-lg-table-cell d-none">
        <MDBRow className="calc-macros mb-3">
          <MDBCol>
            <p className="w-100 my-0">Cal</p>
            <span className="cal mx-auto">{ingredient.cal}</span>
          </MDBCol>
        </MDBRow>
      </td>

      <td>
        <MDBRow className="calc-macros d-flex justify-content-center mb-3">
          <MDBRow className="d-lg-none mb-2">
            <p className="w-100 my-0">Cal</p>
            <span className="cal mx-auto">{ingredient.cal}</span>
          </MDBRow>
          <MDBCol className="col-xl-2 col-3 d-flex flex-column align-items-center">
            <p className="w-100 my-0 mx-1">P</p>
            <span className="protein">{ingredient.protein}</span>
          </MDBCol>
          <MDBCol className="col-xl-2 col-3 d-flex flex-column align-items-center mx-xl-1 mx-2">
            <p className="w-100 my-0 mx-1">C</p>
            <span className="carbs">{ingredient.carbs}</span>
          </MDBCol>
          <MDBCol className="col-xl-2 col-3 d-flex flex-column align-items-center">
            <p className="w-100 my-0 mx-1">F</p>
            <span className="fat">{ingredient.fat}</span>
          </MDBCol>
        </MDBRow>
      </td>
      <td id="food-log-btns" className="d-none d-xl-table-cell">
        <div>
          <FontAwesomeIcon
            icon={faTrashCan}
            onClick={deleteIngredient}
            className="ingredient-list-btns mt-2 d-none d-md-inline-block"
          />
        </div>
      </td>
    </tr>
  );
}

export default Ingredient;
