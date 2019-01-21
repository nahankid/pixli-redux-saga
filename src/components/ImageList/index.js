import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import styled from "styled-components";

import ImageCard from "../ImageCard";
import { selectImages } from "./selectors";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 0 10px;
  grid-auto-rows: 10px;
`;

class ImageList extends Component {
  renderContent = () => {
    const { loading, error, images } = this.props.imageList;

    if (loading) {
      return (
        <div className="ui active inverted dimmer">
          <div className="ui text loader" />
        </div>
      );
    }

    if (error) {
      return (
        <div>
          {error.map(e => (
            <p key={e} style={{ color: "red" }}>
              {e}
            </p>
          ))}
        </div>
      );
    }

    if (images && images.length) {
      return images.map(image => <ImageCard key={image.id} image={image} />);
    }

    return <div />;
  };

  render() {
    return <Wrapper>{this.renderContent()}</Wrapper>;
  }
}

const mapStateToProps = createStructuredSelector({
  imageList: selectImages()
});

export default connect(mapStateToProps)(ImageList);
