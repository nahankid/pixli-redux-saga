import React from "react";
import Amplify, { Auth } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react";

import SearchBar from "../SearchBar";
import ImageList from "../ImageList";

import aws_exports from "../../aws-exports";

Amplify.configure(aws_exports);

class App extends React.Component {
  getUser = () => {
    Auth.currentAuthenticatedUser({
      bypassCache: false // Optional, By default is false. If set to true, this call will send a request to Cognito to get the latest user data
    })
      .then(user => console.log(user))
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar />
        <ImageList />
        <input type="button" value="Get User" onClick={this.getUser} />
      </div>
    );
  }
}

export default withAuthenticator(App, true);
