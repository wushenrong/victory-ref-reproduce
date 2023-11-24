import { useRef } from "react";
import "./App.css";
import {
  VictoryChart,
  VictoryContainer,
  VictoryLine,
  VictoryLabel,
} from "victory";

function App() {
  const chartRef = useRef();

  const exportChart = () => {
    const xml = new XMLSerializer().serializeToString(
      chartRef.current.firstChild
    );
    const href = "data:image/svg+xml," + xml;
    const a = Object.assign(document.createElement("a"), {
      href,
      style: "display:none",
      download: "chart.svg",
    });

    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <>
      <VictoryChart
        containerComponent={
          <VictoryContainer
            containerRef={(ref) => {
              chartRef.current = ref;
            }}
          />
        }
      >
        <VictoryLabel text="Testing" x={10} y={20} />
        <VictoryLine />
      </VictoryChart>
      <button type="button" onClick={exportChart}>
        Export
      </button>
    </>
  );
}

export default App;
