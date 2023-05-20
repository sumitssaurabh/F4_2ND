import React from 'react';

const TableRow = ({ data }) => {
  const { image,name, id,  symbol, current_price, total_volume } = data;

  return (
   <div className="table">
     <tr>
    <td>
        <img src={image} alt={name} width="30" height="30" />
      </td>
      <td>{name}</td>
      <td>{id}</td>
      
      <td>{symbol}</td>
      <td>{current_price}</td>
      <td>{total_volume}</td>
    </tr>
   </div>
  );
};

export default TableRow;