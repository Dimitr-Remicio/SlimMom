import { useSelector, useDispatch } from 'react-redux';
import { FiX } from 'react-icons/fi';
import { getEatProducts, getDate } from '../../redux/dairy/dairySelector';
import { removeProduct } from '../../redux/dairy/dairyOperations';

export default function DiaryProductList() {
  const dispatch = useDispatch();

  const deleteProduct = (date, id) => {
    dispatch(removeProduct({ dataFormat: date, id: id }));
  };
  const date = useSelector(getDate);
  const products = useSelector(getEatProducts);

  const notify = id =>
    toast(
      <>
        <h1>Are you sure you want to delete it?</h1>
        <button
          type="button"
          onClick={() => {
            toast.dismiss();
            deleteProduct(date, id);
          }}
        >
          So
        </button>

        <button
          type="button"
          onClick={() => {
            toast.dismiss();
          }}
        >
          Ні
        </button>
      </>,
  
    );

  return (
    <>
      <div className="control">
        {products.length === 0 ? (
          <p className="info">
            Here will be the list of foods that are consumed during the day.{' '}
          </p>
        ) : (
          <table className="table">
            <tbody>
              {products.map(row => {
                return (
                  <tr key={row.id}>
                    <td className="td-name">{row.title.ua}</td>
                    <td className="td-weight">{row.weight} гр</td>
                    <td className="td-calories">
                      {Math.round(row.calories)} kcal
                    </td>
                    <td>
                      <button
                        background={'transparent'}
                        width="28px"
                        height="28px"
                        onClick={() => {
                          notify(row.id);
                        }}
                      >
                        <FiX
                          width="14"
                          height="14"
                        />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
