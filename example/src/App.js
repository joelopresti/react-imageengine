import React, { Component } from "react";

import ImageEngine from "react-imageengine";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="header">React ImageEngine Examples</h1>
        <div className="wrapper">
        <div className="col">
            <h2>Auto Example</h2>
            <ImageEngine
              src="/images/adventure-american-bison-bison.jpg"
              htmlAttributes={{
                alt: "ImageEngine image",
                className: "my-class",
                width: "500px"
              }}
            />
          </div>
          <div className="col">
            <h2>Width Auto Example</h2>
            <ImageEngine
              src="/images/adventure-american-bison-bison.jpg"
              width={"auto"}
              htmlAttributes={{
                alt: "ImageEngine image",
                className: "my-class",
                sizes: "50vw"
              }}
            />
          </div>
          <div className="col">
            <h2>Width Directive Example</h2>
            <ImageEngine
              src="/images/adventure-american-bison-bison.jpg"
              width={"500"}
              htmlAttributes={{
                alt: "ImageEngine image",
                className: "my-class"
              }}
            />
          </div>
          <div className="col">
            <h2>Compression Example</h2>
            <ImageEngine
              src="/images/adventure-american-bison-bison.jpg"
              compression={"50"}
              htmlAttributes={{
                alt: "ImageEngine image",
                className: "my-class",
                width: '500px'
              }}
            />
          </div>
          <div className="col">
            <h2>Cropbox Example</h2>
            <ImageEngine
              src="/images/adventure-american-bison-bison.jpg"
              width={"300"}
              height={"300"}
              fitMethod={"cropbox"}
              htmlAttributes={{
                alt: "ImageEngine image",
                className: "my-class"
              }}
            />
          </div>
          <div className="col">
            <h2>Crop Example</h2>
            <ImageEngine
              src="/images/adventure-american-bison-bison.jpg"
              crop={"500,500,2500,1500"}
              htmlAttributes={{
                alt: "ImageEngine image",
                className: "my-class"
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
