import React from "react";

function SearchOptions({datalist}) {
    return (
        <>
            {
                datalist.map(order => (
                      <option key={order} value={order.replace(' ', '').toLowerCase()}>
                        {order}
                      </option>
                    ))
            }
        </>
  );
}

export default SearchOptions;
