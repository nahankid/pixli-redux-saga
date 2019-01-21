import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  img {
    width: 100%;
  }
`;

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = event => {
    this.setState({
      spans: Math.ceil(this.imageRef.current.clientHeight / 10)
    });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <Wrapper style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img alt={description} src={urls.regular} ref={this.imageRef} />
      </Wrapper>
    );
  }
}

export default ImageCard;
