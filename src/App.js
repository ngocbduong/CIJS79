import HomeWork from "./Components/BTVN2/Header";
import HomeWorkBody from "./Components/BTVN2/Body";
import HomeWorkF from "./Components/BTVN2/Footer";

function SplitFrame(props) {
  return (
    <div>
      <div>
      {props.header}
      </div>
      <div>
        {props.body}
      </div>
      <div>
        {props.footer}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitFrame
    header={<HomeWork/>}
    body={<HomeWorkBody/>}
    footer={<HomeWorkF/>}
    />
  )
}

export default App;
