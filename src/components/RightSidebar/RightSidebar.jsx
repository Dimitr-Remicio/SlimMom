import React, { useEffect } from "react";
import { format } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import {
  getSummary,
  getDate,
  getNotRecFood,
  getDaily,
} from "../../redux/dairy/dairySelector";
// import { getDaily } from "../../redux/dairy/dairySelector";
import "./RightSidebar.css"; // Asegúrate de importar tus estilos CSS
import calcSelectors from "../../redux/calculatorSlice/calculatorSelectors";
import { useState } from "react";
import authSelector from "../../redux/auth/selectors";

export default function SummaryForDay() {
  const date = new Date();
  const { notHealthy } = useSelector(calcSelectors.getUserData);
  const { user } = useSelector(calcSelectors.getUserData);
  const { summary } = useSelector(calcSelectors.getUserData);
  const reduxDate = useSelector(getDate);
  const dailyRate = useSelector(getDaily);
  const dispatch = useDispatch();
  // const summary = useSelector(getSummary);

  const [Healthy, setNotHealthy] = useState([]);
  const [SSummary, setSummary] = useState([]);
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

  useEffect(() => {
    setTimeout(() => {
      if (isLoggedIn && summary) {
        setSummary(summary);
      }
    }, 50);
  }, [summary, isLoggedIn]);

  useEffect(() => {
    setTimeout(() => {
      if (isLoggedIn && user.notAllowedProducts) {
        setNotHealthy(user.notAllowedProducts);
      }
    }, 50);
  }, [user, isLoggedIn]);

  console.log(user);

  return (
    <>
      <div className="right-sidebar">
        <div className="box-sidebar">
          <div className="summary-sidebar">
            <h4 className="title-sidebar">
              Summary{" "}
              {reduxDate === ""
                ? format(date, "dd/MM/yyyy")
                : format(new Date(reduxDate), "dd/MM/yyyy")}
            </h4>
            <ul>
              <li>
                Remain {SSummary ? Math.round(SSummary.left) : "000"} kcal
              </li>
              <li>
                Consumed {SSummary ? Math.round(SSummary.consumed) : "000"} kcal
                Consumed{" "}
              </li>
              <li>
                Dialy rate {SSummary ? Math.round(SSummary.dailyRate) : "000"}{" "}
                kcal
              </li>
              <li>
                n% than normal{" "}
                {SSummary ? Math.round(SSummary.percentOfDailyRate) : "0"} %
              </li>
            </ul>
          </div>
          <div className="food-sidebar">
            <h4 className="title-sidebar">Food not recommended</h4>
            <ul>
              {Healthy.map((products, key) => (
                <li key={key} className="itemModal">
                  • {products}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
