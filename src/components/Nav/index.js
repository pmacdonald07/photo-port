import { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

// "Note also the use of parentheses in the map callback to return JSX.
// When you map over an array in a JSX expression, you should return only a single JSX element—
// like how you can only return a single element from a React component."

//There's also a short-circuit expression, as shown in the following code snippet:
// <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`}>
// The preceding line of code means that currentCategory.name === category.name will get evaluated,
// and as long as it is true, then the second bit of the short circuit, navActive, will be returned.
const Nav = (props) => {
  const { categories = [], setCurrentCategory, currentCategory } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera">
            {" "}
            📸
          </span>{" "}
          Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li className="mx-2">
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && "navActive"
              }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
