import "./user.css";

const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.title.value, e.target.body.value);
    e.target.title.value = "";
    e.target.body.value = "";
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input
          class="inpt"
          placeholder="Title"
          name="title"
          required="required"
        />
        <input
          class="inpt"
          placeholder="Body"
          name="body"
          required="required"
        />
        <button onSubmit={handleOnSubmit}>Add</button>
        <hr />
      </form>
    </div>
  );
};

export default AddUser;
