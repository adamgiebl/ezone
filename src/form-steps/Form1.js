import React, { useRef, useEffect } from "react";
import CheckboxTab from "../components/CheckboxTab";
import TagLine from "../components/TagLine";
import FormLabel from "../components/FormLabel";
import { games, categories } from "../constants";

const text = {
  heading: "What game do you play?",
  subHeading: "You can select multiple.",
};

const getImage = (name) => {
  try {
    return require(`../images/games/${name
      .toLowerCase()
      .replaceAll(":", "")
      .replaceAll(" ", "-")}.png`).default;
  } catch {
    return null;
  }
};

const Form1 = ({ setStep, setProgress, previous, next }) => {
  const checkboxContainer = useRef([]);

  useEffect(() => {
    setProgress(previous);
  }, []);

  const submitHandler = () => {
    const activeCheckboxes = checkboxContainer.current.querySelectorAll(
      "input:checked"
    );
    console.log(activeCheckboxes);

    if (activeCheckboxes.length > 0) {
      setStep(2);
    } else {
      console.log("error");
    }
  };

  const clickHandler = () => {
    const activeCheckboxes = checkboxContainer.current.querySelectorAll(
      "input:checked"
    );
    if (activeCheckboxes.length > 0) {
      setProgress(next);
    } else {
      setProgress(previous);
    }
  };

  return (
    <section className="form form1">
      <FormLabel text={"YOUR ESPORT"} number={"01."} />
      <div className="content">
        <TagLine heading={text.heading} subHeading={text.subHeading} />
        <div className="games" ref={checkboxContainer}>
          {categories.map((category) => (
            <div className="game-category" key={`key-${category.id}`}>
              <h3 title={category.full}>{category.name}</h3>
              {games.map((game) => {
                if (game.category === category.id) {
                  return (
                    <CheckboxTab
                      onClick={clickHandler}
                      name={game.name}
                      text={game.name}
                      imageSrc={getImage(game.name)}
                      key={`key-${game.name}`}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="buttons">
        <button className="button button--link" onClick={() => setStep(0)}>
          Go back
        </button>
        <button className="button" onClick={submitHandler}>
          Continue
        </button>
      </div>
    </section>
  );
};

export default React.memo(Form1);
