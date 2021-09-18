import React from "react";
import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";

import "./styles.css";

function App() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (image, addUpdateIndex) => {
    // data for submit
    console.log(image, addUpdateIndex);
    setImages(image);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button onClick={onImageUpload} >
              Click or Drop here
            </button>
            &nbsp;
         
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
