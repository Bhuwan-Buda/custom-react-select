import { useState } from "react";
import "./App.css";
import SelectField from "./Components/Select";
import { simpleData } from "./dummyData";

function App() {
  const [value, setValue] = useState(null);
  const handleChange = (selected) => {
    setValue(selected);
  }
  return (
    <div className="App">
      <h3>Select tag </h3>
      <SelectField
        name="fruit"
        label="Fruits"
        multi={true}
        value={value}
        options={simpleData}
        onChange={(selected) => handleChange(selected)}
        getOptionLabel={(option) => `${option?.label}`}
        getOptionValue={(option) => option.id}
      />
    </div>
  );
}

export default App;
