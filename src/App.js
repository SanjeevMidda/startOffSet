import { useEffect, useState } from "react";
import "./index.css";

function App() {
  const [offset, setOffSet] = useState({
    one: 340,
    two: 2500,
    three: 4220,
  });

  console.log(offset);
  // useEffect(() => {
  //   setInterval(
  //     () =>
  //       setOffSet({
  //         one: offset.one + 30,
  //         two: offset.two + 30,
  //         three: offset.three + 30,
  //       }),
  //     1000
  //   );
  // });
  return (
    <div className="App">
      <div className="arrows">
        <svg
          width="287"
          height="206"
          viewBox="0 0 487 206"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="#leftArrow"
          onClick={() =>
            setOffSet({
              one: offset.one - 30,
              two: offset.two - 30,
              three: offset.three - 30,
            })
          }
        >
          <line
            x1="486.003"
            y1="105.316"
            x2="5.98318"
            y2="102.802"
            stroke="black"
            stroke-width="10"
          />
          <line
            x1="141.57"
            y1="201.051"
            x2="3.17493"
            y2="102.325"
            stroke="black"
            stroke-width="10"
          />
          <line
            x1="150.326"
            y1="4.6064"
            x2="8.91518"
            y2="98.9622"
            stroke="black"
            stroke-width="10"
          />
        </svg>

        <svg
          width="487"
          height="206"
          viewBox="0 0 487 206"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="#rightArrow"
          onClick={() =>
            setOffSet({
              one: offset.one + 60,
              two: offset.two + 60,
              three: offset.three + 60,
            })
          }
        >
          <line
            x1="0.947919"
            y1="106"
            x2="480.948"
            y2="101"
            stroke="black"
            stroke-width="10"
          />
          <line
            x1="343.84"
            y1="4.8846"
            x2="483.763"
            y2="101.432"
            stroke="black"
            stroke-width="10"
          />
          <line
            x1="338.16"
            y1="201.443"
            x2="478.076"
            y2="104.886"
            stroke="black"
            stroke-width="10"
          />
        </svg>
      </div>
      <div className="lineContainer">
        <svg
          viewBox="0 0 3937 468"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 466.01C1 466.01 251 1.00977 821 1.00977C1391 1.00977 1326 466.01 1326 466.01C1326 466.01 1496 1.00977 1956 1.00977C2416 1.00977 2581 466.01 2581 466.01C2581 466.01 2821 1.00977 3296 1.00977C3771 1.00977 3936 466.01 3936 466.01"
            // stroke="black"
            id="line"
          />

          <text>
            <textPath fill="black" href="#line" startOffset={`${offset.one}px`}>
              Hello
            </textPath>
            <textPath fill="black" href="#line" startOffset={`${offset.two}px`}>
              1
            </textPath>
            <textPath
              fill="black"
              href="#line"
              startOffset={`${offset.three}px`}
            >
              2
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}

export default App;
