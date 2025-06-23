import React, { useState } from "react";
import Cart from "./Cart";
import AddCart from "./AddCart";
import UpdateCart from "./UpdateCart";

const Products = () => {
  const [search, setSearch] = useState("");
  const [editItem, setEditItem] = useState(null);

  const openEditModal = (item) => {
  setEditItem(item);
};

const closeEditModal = () => {
  setEditItem(null);
};

  const updateProduct = (updatedItem) => {
    setProduct(
      product.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  const deleteProduct = (id) => {
    setProduct(product.filter((item) => item.id !== id));
  };
  const addNewProduct = (newItem) => {
    setProduct([...product, newItem]);
  };
  const [product, setProduct] = useState([
    {
      id: 1,
      name: "product-1",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/foto.jpg",
    },
    {
      id: 2,
      name: "product-2",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/foto.jpg",
    },
    {
      id: 3,
      name: "product-3",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/foto.jpg",
    },
    {
      id: 4,
      name: "product-4",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/foto.jpg",
    },
    {
      id: 5,
      name: "narsa",
      price: 1200,
      sale: 13,
      quantity: 30,
      img: "./src/assets/foto.jpg",
    },
  ]);

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-md-2">
          <AddCart newCard={addNewProduct} />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-3">
        {product.filter((item) => {
          if (search.length === 0) {
            return item;
          } else if (item.name.includes(search)) {
            return item;
          }
        }).length > 0 ? (
          product
            .filter((item) => {
              if (search.length === 0) {
                return item;
              } else if (item.name.includes(search)) {
                return item;
              }
            })
            .map((item) => (
              <div className="col-md-4" key={item.id}>
                <Cart
                  item={item}
                  onDelete={deleteProduct}
                  onUpdate={openEditModal}
                />
              </div>
            ))
        ) : (
          <h1>Not Found</h1>
        )}
      </div>
      {editItem && (
        <UpdateCart
          item={editItem}
          onSave={updateProduct}
          onClose={closeEditModal}
        />
      )}
    </div>
  );
};

export default Products;
