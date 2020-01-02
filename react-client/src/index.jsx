import React from "react";
import ReactDOM from "react-dom";
import TopTen from "./components/topTen.jsx";
import TopTen2 from "./components/topTen2.jsx";
import seedData from "../../seed_data";
import $ from "jquery";
class App1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], isloading: true };
  }
  componentDidMount() {
    fetch("http://localhost:8000/api/story")
      .then(resp => resp.json())
      .then(data => {
        this.setState({ data: data, isloading: false });
        console.log(data);
      });
  }
  render() {
    const { data, isloading } = this.state;
    if (isloading) {
      return <p>loading...</p>;
    } else
      return (
        <div>
          <h1> Top Ten Stories </h1>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Score</th>
              </tr>
            </thead>
          </table>
          {this.state.data.map(item => (
            <TopTen item={item}></TopTen>
          ))}
        </div>
      );
  }
}
//const App = (props) => <TopTen />;
$("#stories").on("click", () =>
  ReactDOM.render(<App1 />, document.getElementById("app"))
);

class App2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], isloading: true };
  }
  componentDidMount() {
    fetch("http://localhost:8000/api/author")
      .then(resp => resp.json())
      .then(data => {
        this.setState({ data: data, isloading: false });
        console.log(data);
      });
  }
  render() {
    const { data, isloading } = this.state;
    if (isloading) {
      return <p>loading...</p>;
    } else
      return (
        <div>
          <h1> Top Ten Authors </h1>
          <table>
            <thead>
              <tr>
                <th>name</th>
                <th>karma</th>
                <th>about</th>
              </tr>
            </thead>
          </table>
          {this.state.data.map(item => (
            <TopTen2 item={item}></TopTen2>
          ))}
        </div>
      );
  }
}
$("#authors").on("click", () =>
  ReactDOM.render(<App2 />, document.getElementById("app"))
);
