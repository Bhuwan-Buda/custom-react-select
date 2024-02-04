import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import SelectField from "./Components/Select";
import { treeViewData } from "./dummyData";

function App() {
  const [value, setValue] = useState(null);
  console.log(value, "value");
  const handleChange = (selected) => {
    setValue(selected);
  };
  return (
    <div className="App w-100">
      <div className="d-flex flex-column w-25 m-auto justify-content-center align-items-center mt-4">
        <SelectField
          name="fruit"
          label="Fruits"
          value={value}
          options={treeViewData}
          className="w-100"
          onChange={(selected) => handleChange(selected)}
          getOptionLabel={(option) => `${option?.label}`}
          getOptionValue={(option) => option.id}
          setValue={setValue}
        />
      </div>
    </div>
  );
}

export default App;
