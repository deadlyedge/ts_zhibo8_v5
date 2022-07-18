const customStyles = {
  // container: (provided, state) => ({
  //   ...provided,
  //   // width: "550px",
  //   margin: "auto",
  // }),
  control: (provided, state) => ({
    ...provided,
    border: state.isFocused
      ? "3px solid rgb(59 130 246)"
      : "3px solid rgb(248, 113, 113)",
    background: state.isFocused ? "white" : "transparent",
    cursor: "pointer",
    transform: state.isFocused ? "scale(1.05)" : "scale(1)",
    transition: "transform 0.5s, border-color 0.5s, background-color 0.2s",
    ":hover": {
      border: "3px solid rgb(59, 130, 246)",
      background: "rgba(255,255,255,0.5)",
      transform: "scale(1.1)",
    },
    ":active": {
      transform: "scale(1.05)",
      background: "#cde",
    },
  }),
  menu: (provided) => ({
    ...provided,
    background: "rgba(255,255,255,0.9)",
  }),
  option: (provided) => ({ ...provided, cursor: "pointer" }),
  placeholder: (provided) => ({ ...provided, color: "#555" }),
  indicatorSeparator: (provided) => ({
    ...provided,
    background: "#555",
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: "#777",
    ":hover": { color: "rgb(248, 113, 113)" },
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "#777",
    ":hover": { color: "rgb(59 130 246)" },
  }),
}

export default customStyles
