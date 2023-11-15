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
import { getDairy } from "../../redux/services/api-reguest";

export default function SummaryForDay() {
  const date = new Date();
  // const { notHealthy } = useSelector(calcSelectors.getUserData);
  const { user } = useSelector(calcSelectors.getUserData);
  const reduxDate = useSelector(getDate);
  const dispatch = useDispatch();
  // const summary = useSelector(getSummary);

  const [Healthy, setNotHealthy] = useState([]);
  const [SSummary, setSummary] = useState([]);
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);

  const getSummaryInfo = async (reduxDate) => {
    try {
      const nDate = reduxDate;
      const body = { date: `${nDate}` };
      const findDay = await getDairy(body);
      if (!findDay.addedProducts) {
        console.log("no ñero");
      } else {
        // setNotHealthy(findDay);
        setSummary(findDay.daySummary);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (isLoggedIn && reduxDate) {
        getSummaryInfo(reduxDate);
      }
    }, 50);
  }, [reduxDate, isLoggedIn]);
  
  useEffect(() => {
    setTimeout(() => {
      if (isLoggedIn && user.notAllowedProducts && reduxDate) {
        setNotHealthy(user.notAllowedProducts);
      }
    }, 500);
  }, [user, reduxDate, isLoggedIn]);

  console.log(SSummary);

  const noneNumb = "000";

  return (
    <>
      <div className="right-sidebar">
        <div className="box-sidebar">
          <div className="summary-sidebar">
            <h4 className="title-sidebar">Summary {reduxDate}</h4>
            <ul>
              <li>
                Remain {SSummary > 1 ? Math.round(SSummary.left) : "000"} kcal
              </li>
              <li>
                Consumed {SSummary > 1? Math.round(SSummary.consumed) : "000"} kcal
              </li>
              <li>
                Dialy rate {SSummary > 1? Math.round(SSummary.dailyRate) : "000"}{" "}
              </li>
              <li>
                n% than normal{" "}
                {SSummary < 1 ? Math.round(SSummary.percentOfDailyRate) : "000"} %
              </li>
            </ul>
          </div>
          <div className="food-sidebar">
            <h4 className="title-sidebar">Food not recommended</h4>
            <ul>
              {Healthy.length > 1 ? (
                Healthy.map((products, key) => (
                  <li key={key} className="itemModal">
                    • {products}
                  </li>
                ))
              ) : (
                <>
                  <li className="itemModal">• 000</li>
                  <li className="itemModal">• 000</li>
                  <li className="itemModal">• 000</li>
                  <li className="itemModal">• 000</li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
