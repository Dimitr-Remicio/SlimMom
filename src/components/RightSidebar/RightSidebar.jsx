import React from "react";
import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { getSummary, getDate, getNotRecFood } from '../../redux/dairy/dairySelector';
import { getDaily } from '../../redux/dairy/dairySelector';
import "./RightSidebar.css"; // Asegúrate de importar tus estilos CSS



export default function SummaryForDay() {
  const date = new Date();
  const reduxDate = useSelector(getDate);
  const dailyRate = useSelector(getDaily);
  const summary = useSelector(getSummary);
  const notRecFoodArr = useSelector(getNotRecFood);

  return (
    <>
      <div className="right-sidebar">
        <div className="box-sidebar">
          <div className="summary-sidebar">
            <h4 className="title-sidebar">Summary {reduxDate === '' ? format(date, 'dd/MM/yyyy') : format(new Date(reduxDate), 'dd/MM/yyyy')}</h4>
            <ul>
              <li>Remain {summary.left ? Math.round(summary.left) : '000'} kcal</li>
              <li>Consumed {summary.consumed ? Math.round(summary.consumed) : '000'} kcal</li>
              <li>Dialy rate {dailyRate ? Math.round(dailyRate) : '000'} kcal</li>
              <li>n% than normal {summary.nOfNorm ? Math.round(summary.nOfNorm) : '000'} %</li>
            </ul>
          </div>
          <div className="food-sidebar">
            <h4 className="title-sidebar">Food not recommended</h4>
            <ul>
              <ul>
                <li>{
          notRecFoodArr.length === 0
            ? 'Your diet will be shown here'
            :
            notRecFoodArr.map(product=>product.title.ua).join(', ').toLowerCase() }</li>
                
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

