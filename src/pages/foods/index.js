import React, { useState, useEffect } from "react";
import { MDBContainer } from "mdb-react-ui-kit";

import firebase from "../../utilities/firebase";
import FoodList from "./foodList";

function Foods() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const categoryListRef = firebase.database().ref("foods");
    categoryListRef.on("value", (snapshot) => {
      const categories = snapshot.val();
      const categoryList = [];
      for (let categoryName in categories) {
        categoryList.push({ categoryName, ...categories[categoryName] });
      }
      const categoryNames = [];
      categoryList.forEach(function (category) {
        categoryNames.push(category.categoryName);
      });
      setCategoryList(categoryNames);
    });
  }, []);

  return (
    <MDBContainer fluid className="px-md-5">
      <h3 className="p-3 text-start">Your Foods</h3>

      {categoryList
        ? categoryList.map((category, index) => (
            <FoodList category={category} key={index} />
          ))
        : null}
    </MDBContainer>
  );
}

export default Foods;