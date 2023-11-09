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
  const [Sumarry, setSumarry] = useState([]);

  useEffect(() => {
    if (notHealthy && notHealthy.products) {
      setNotHealthy(notHealthy.products);
    }
    if (summary && summary) {
      setSumarry(summary);
    }
  }, [notHealthy, summary]);

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
                Remain {Sumarry.left ? Math.round(Sumarry.left) : "000"} kcal
              </li>
              <li>
                Consumed{" "}
                {Sumarry.consumed ? Math.round(Sumarry.consumed) : "000"} kcal
              </li>
              <li>
                Dialy rate {Sumarry.dailyRate? Math.round(Sumarry.dailyRate) : "000"} kcal
              </li>
              <li>
                n% than normal{" "}
                {Sumarry.percentOfDailyRate ? Math.round(Sumarry.percentOfDailyRate) : "0"} %
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
