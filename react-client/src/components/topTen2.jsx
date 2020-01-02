import React from "react";

// Build out the view for the top ten HackerNews stories here.
// Each story should have a title, author, and score.
// You may wish to refactor the existing component structure - that's fine.
class TopTen2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //console.log(this.props.item);
    return (
      <div>
        <table>
          <tbody>
            {/* <tr>
              <td>Switch – New Video Game System [video]</td>
              <td>ocdtrekkie</td>
              <td>536</td>
            </tr> */}
            <tr>
              <td>{this.props.item.name}</td>
              <td>{this.props.item.karma}</td>
              <td>{this.props.item.about}</td>
            </tr>
            {/* <tr>
              <td>Video Games Are Changing the Way Soccer Is Played</td>
              <td>mhb</td>
              <td>100</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    );
  }
}
export default TopTen2;
