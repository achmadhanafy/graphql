import React, { useState } from "react";
import { isEmpty } from "../../../../util/function";

function CompAddBook({ authors, onSubmitAuthor, onSubmitBook }) {
  const [addBookForm, setAddBookForm] = useState({
    name: "",
    genre: "",
    authorId: "",
  });

  const [addAuthorForm, setAddAuthorForm] = useState({
    name: "",
    age: "",
  });

  const [isCreateAuthor, setIsCreateAuthor] = useState(false);
  const [selectForm, setSelectForm] = useState("");

  const onChangeBookForm = (name, value) => {
    setAddBookForm({
      ...addBookForm,
      [name]: value,
    });
  };

  const onChangeAuthorForm = (name, value) => {
    setAddAuthorForm({
      ...addAuthorForm,
      [name]: value,
    });
  };

  const onChangeSelect = (e) => {
    if (e.target.value === "createAuthor") {
      setIsCreateAuthor(true);
      setAddBookForm({
        ...addBookForm,
        authorId: "",
      });
      return setSelectForm(e.target.value);
    }

    if (e.target.value === "select") {
      setIsCreateAuthor(false);
      setAddBookForm({
        ...addBookForm,
        authorId: "",
      });
      return setSelectForm(e.target.value);
    }

    setSelectForm(e.target.value);
    return setAddBookForm({
      ...addBookForm,
      authorId: e.target.value,
    });
  };

  function CreateBookForm() {
    return (
      <div style={{ width: "100%" }}>
        <h3>Create Book</h3>
        <div className="field">
          <label>Book name:</label>
          <input
            value={addBookForm?.name}
            type="text"
            onChange={(e) => {
              onChangeBookForm("name", e.target.value);
            }}
          />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input
            value={addBookForm?.genre}
            type="text"
            onChange={(e) => {
              onChangeBookForm("genre", e.target.value);
            }}
          />
        </div>
        <div></div>
        <div className="field">
          <label>Author:</label>
          <select value={selectForm} onChange={(e) => onChangeSelect(e)}>
            <option value="select">Select author</option>
            <option value="createAuthor">+ Create author</option>
            {authors?.map((element, i) => (
              <option key={i} value={element?.id}>
                {element?.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  function CreateAuthorForm() {
    return (
      <div style={{ width: "100%" }}>
        <h3>Create Author</h3>
        <div className="field">
          <label>Name:</label>
          <input
            value={addAuthorForm?.name}
            type="text"
            onChange={(e) => {
              onChangeAuthorForm("name", e.target.value);
            }}
          />
        </div>
        <div className="field">
          <label>Age:</label>
          <input
            value={addAuthorForm?.age}
            type="text"
            onChange={(e) => {
              onChangeAuthorForm("age", e.target.value);
            }}
          />
        </div>
        <div className="field">
          <label>Author:</label>
          <select value={selectForm} onChange={(e) => onChangeSelect(e)}>
            <option value="select">Select author</option>
            <option value="createAuthor">+ Create author</option>
          </select>
        </div>
      </div>
    );
  }


  return (
    <div>
      <form
        id="add-book"
        onSubmit={(e) => {
          e.preventDefault();
          if (
            isCreateAuthor &&
            !isEmpty(addAuthorForm?.name) &&
            !isEmpty(addAuthorForm?.age)
          ) {
            onSubmitAuthor(addAuthorForm?.name, addAuthorForm?.age);
            return setAddAuthorForm({
              name: "",
              age: "",
            });
          }

          if (
            !isEmpty(addBookForm?.name) &&
            !isEmpty(addBookForm?.genre) &&
            !isEmpty(addBookForm?.authorId)
          ) {
            onSubmitBook(
              addBookForm?.name,
              addBookForm?.genre,
              addBookForm?.authorId
            );
            return setAddBookForm({
              name: "",
              genre: "",
              authorId: "",
            });
          }

          return alert("Form cant be null");
        }}
      >
        {isCreateAuthor ? CreateAuthorForm() : CreateBookForm()}
        <button>+</button>
      </form>
    </div>
  );
}

export default CompAddBook;
