import React, { useEffect } from "react";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import {
  getSummary,
  getDate,
  getNotRecFood,
  getDaily
} from "../../redux/dairy/dairySelector";
// import { getDaily } from "../../redux/dairy/dairySelector";
import "./RightSidebar.css"; // Asegúrate de importar tus estilos CSS
import calcSelectors from "../../redux/calculatorSlice/calculatorSelectors";
import { useState } from "react";

export default function SummaryForDay() {
  const date = new Date();
  const { notHealthy} = useSelector(calcSelectors.getUserData);
  const { user} = useSelector(calcSelectors.getUserData);
  const { summary } = useSelector(calcSelectors.getUserData);
  const reduxDate = useSelector(getDate);
  const dailyRate = useSelector(getDaily);
  // const summary = useSelector(getSummary);

  const [Healthy, setNotHealthy] = useState([]);

  useEffect(() => {
    if (notHealthy && notHealthy.products) {
      setNotHealthy(notHealthy.products);
    }
  }, [notHealthy]);

  console.log(user)
  console.log(summary)

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
                Remain {summary ? Math.round(summary.left) : "000"} kcal
              </li>
              <li>
                Consumed{" "}
                {summary ? Math.round(summary.consumed) : "000"} kcal
              </li>
              <li>
                Dialy rate {dailyRate? Math.round(dailyRate) : "000"} kcal
              </li>
              <li>
                n% than normal{" "}
                {summary ? Math.round(summary.percentOfDailyRate) : "0"} %
              </li>
            </ul>
          </div>
          <div className="food-sidebar">
            <h4 className="title-sidebar">Food not recommended</h4>
            <ul>
              {Healthy.map((products, key) => (
                <li key={key} className="itemModal">
                  • {products.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
