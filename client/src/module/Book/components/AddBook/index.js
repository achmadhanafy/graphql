import React from "react";

function CompAddBook() {
  return (
    <div>
      <form id="add-book" onSubmit={()=>{}}>
        <div className="field">
          <label>Book name:</label>
          <input
            type="text"
            onChange={(e) =>{} }
          />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input
            type="text"
            onChange={(e) =>{} }
          />
        </div>
        <div className="field">
          <label>Author:</label>
          <select onChange={(e) =>{}}>
            <option>Select author</option>
            {}
          </select>
        </div>
        <button>+</button>
      </form>
    </div>
  );
}

export default CompAddBook;
