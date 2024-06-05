import { useState } from "react";
import data from "./data";


function Accordian() {
  const [selected, setSelected] = useState(null);
  const [multipleSelection, setMultipleSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrId) {
    setSelected(getCurrId === selected ? null : getCurrId);
    console.log(selected);
  }

  function handleMultipleSelection(getCurrId) {
    let copyMultiple = [...multiple];
    const indexExistence = copyMultiple.indexOf(getCurrId);

    if (indexExistence == -1) {
      copyMultiple.push(getCurrId);
    } else {
      copyMultiple.splice(indexExistence, 1);
    }
    setMultiple(copyMultiple);
  }

  return (
    <>
      <div className="wrapper">
        <button
          className="bg-indigo-500 text-white px-4 py-2 rounded-xl"
          onClick={() => setMultipleSelection(!multipleSelection) 
                     }
        >
          Enable Multiple Selection
        </button>

        <div className="accordian border-2 mt-10 ">
          <div className="title">
            {data && data.length > 0 ? (
              data.map((dataItem) => (
                <div className="item">
                  <div
                    className="title"
                    onClick={
                      multipleSelection
                        ? () => handleMultipleSelection(dataItem.id)
                        : () => handleSingleSelection(dataItem.id)
                    }
                  >
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                  </div>
                  {selected === dataItem.id ||
                  multiple.indexOf(dataItem.id) !== -1 ? (
                    <div>{dataItem.answer}</div>
                  ) : null}
                </div>
              ))
            ) : (
              <div>No Data Found</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordian;
