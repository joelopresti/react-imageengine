import React, { Component } from "react";

import ImageEngine, { Picture, Source } from "react-imageengine";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="header">React ImageEngine Examples</h1>
        <div className="wrapper">
        <div className="col">
            <h2>Original</h2>
            <img src="https://imageengine.io/images/adventure-american-bison-bison.jpg" width="500px"               htmlAttributes={{
                alt: "ImageEngine image",
                className: "my-class",
                width: "500px"
              }}/>
          </div>
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
              width={"auto,500"}
              sizes={"50vw"}
              htmlAttributes={{
                alt: "ImageEngine image",
                className: "my-class",

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
          <div className="col">
            <h2>Picture Example</h2>
            <Picture>
              <Source 
              srcSet="/images/adventure-american-bison-bison.jpg" 
              crop={"500,500,2500,1500"}
              media="(max-width: 639px)"  
              htmlAttributes={{
                alt: "ImageEngine image",
                className: "my-class"
              }} />
              <Source 
              srcSet="/images/adventure-american-bison-bison.jpg" 
              width={"300"}
              height={"300"}
              fitMethod={"cropbox"}
              media="(min-width: 640px) and (max-width: 1023px)"  
              htmlAttributes={{
                alt: "ImageEngine image",
                className: "my-class"
              }} />
              <Source 
              srcSet="/images/adventure-american-bison-bison.jpg" 
              width={"auto_500"}
              media="(min-width: 1024px)" 
              htmlAttributes={{
                alt: "ImageEngine image",
                className: "my-class"
              }} />
              <ImageEngine
              src="/images/adventure-american-bison-bison.jpg"
              htmlAttributes={{
                alt: "ImageEngine image",
                className: "my-class",
                width: "500px"
              }}
            />
            </Picture>
          </div>
        </div>
      </div>
    );
  }
}
