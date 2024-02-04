import React, { useEffect, useState } from "react";

const RenderChildren = ({ childrens, options, setValue, count = "" }) => {
  console.log(setValue, "setValue");
  let depth = count !== "" ? count + 1 : 1;

  const [grandChildrens, setGrandChildrens] = useState([]);
  const [liTopoffset, setLiTopOffset] = useState("");

  const handleMouseEnter = (children, event) => {
    const newChildrens = options.filter(
      (location, i) => location?.parent === children.id
    );
    if (newChildrens?.length > 0) {
      setLiTopOffset(event.target.offsetTop);
      setGrandChildrens(newChildrens);
    } else {
      setLiTopOffset("");
      setGrandChildrens([]);
    }
  };

  useEffect(() => {
    const selectedNewElement = document.querySelector(`.child-${depth + 1}`);
    if (selectedNewElement !== null && liTopoffset !== "") {
      selectedNewElement.style.display = "block";
      selectedNewElement.style.top = liTopoffset + 20 + "px";
    }
  }, [grandChildrens]);

  return (
    <div className={"child-list-container " + "child-" + depth}>
      <div
        className={
          childrens?.length > 0 ? "inner-childrens" : "empty inner-childrens"
        }
      >
        {childrens?.length > 0 &&
          childrens?.map((children, i) => {
            return (
              <React.Fragment key={Math.random()}>
                <li
                  className="list-item"
                  onMouseEnter={(event) => {
                    handleMouseEnter(children, event);
                  }}
                  onClick={() => setValue(children)}
                >
                  |-&nbsp;{children.label}
                </li>
                {grandChildrens?.length > 0 && (
                  <RenderChildren
                    childrens={grandChildrens}
                    options={options}
                    setValue={setValue}
                    count={depth}
                  />
                )}
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default React.memo(RenderChildren);
