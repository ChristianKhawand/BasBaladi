import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function ProductTable() {
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    const clientId = sessionStorage.getItem('uniqueId');
    axios.get(`http://localhost:3000/api/get-orders`, { params: { clientId: clientId } })
      .then(response => {
        setOrders(response.data);
        let totalPrice = 0;
        response.data.forEach(order => {
          totalPrice += order.productPrice * order.productQuantity;
        });
        setTotal(totalPrice.toFixed(2));
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }

  function updateQuantity(productName, productPrice, clientId, productId, inc) {
    axios.put(`http://localhost:3000/api/update-order`, null, {
      params: {
        productName: productName,
        productPrice: productPrice,
        clientId: clientId,
        productId: productId,
        inc: inc
      }
    })
    .then(() => {
      getProducts();
    })
    .catch(error => {
      console.error('Error updating quantity:', error);
    });
  }

  function handleBuyNow() {
  const clientId = sessionStorage.getItem('uniqueId');
  axios.delete(`http://localhost:3000/api/delete-order`, { params: { clientId: clientId } })
    .then(() => {
      axios.post(`http://localhost:3000/api/add-transaction`, { clientId: parseInt(clientId), total: parseFloat(total) })
        .then(() => {
          toast.success("Products successfully bought");
          setOrders([]);
          setTotal(0);
        })
        .catch(error => {
          console.error('Error adding transaction:', error);
        });
    })
    .catch(error => {
      console.error('Error deleting orders:', error);
    });
}

return (
  <center>
    <table style={{ border: '1px solid black', textAlign: 'center', borderCollapse: 'collapse', margin: 'auto' }}>
      <thead>
        <tr>
          <th style={{ padding: '8px', border: '1px solid black' }}>Product Name</th>
          <th style={{ padding: '8px', border: '1px solid black' }}>Product Price</th>
          <th style={{ padding: '8px', border: '1px solid black' }}>Product Quantity</th>
          <th style={{ padding: '8px', border: '1px solid black' }}>Product Total</th>
          <th style={{ padding: '8px', border: '1px solid black' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (
          <tr key={order.productId}>
            <td style={{ padding: '8px', border: '1px solid black' }}>{order.productName}</td>
            <td style={{ padding: '8px', border: '1px solid black' }}>{order.productPrice}</td>
            <td style={{ padding: '8px', border: '1px solid black' }}>{order.productQuantity}</td>
            <td style={{ padding: '8px', border: '1px solid black' }}>{order.productPrice * order.productQuantity}</td>
            <td style={{ padding: '8px', border: '1px solid black', textAlign: 'center' }}>
                <button 
                  style={{ 
                    padding: '8px', 
                    marginRight: '4px', 
                    borderRadius: '50%', 
                    backgroundColor: 'red', 
                    color: 'white', 
                    border: 'none', 
                    cursor: 'pointer' 
                  }} 
                  onClick={() => updateQuantity(order.productName, order.productPrice, order.clientId, order.productId, -1)}
                >
                  -
                </button>
                <button 
                  style={{ 
                    padding: '8px', 
                    borderRadius: '50%', 
                    backgroundColor: 'green', 
                    color: 'white', 
                    border: 'none', 
                    cursor: 'pointer' 
                  }} 
                  onClick={() => updateQuantity(order.productName, order.productPrice, order.clientId, order.productId, 1)}
                >
                  +
                </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <p style={{ padding:'2vmin',  alignItems: 'center' }}>
      <span style={{marginRight: '16px' }}>Total: {total}</span>
      <button 
        style={{ 
          padding: '8px', 
          borderRadius: '4px', 
          border: 'none', 
          backgroundColor: '#007bff', 
          color: 'white', 
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          fontFamily: 'Arial, sans-serif',
          fontWeight: 'bold'
        }} 
        onClick={handleBuyNow}
        onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
      >
        Buy Now
      </button>
    </p>
  </center>
);

}
