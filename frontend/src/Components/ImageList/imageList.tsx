import { CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import ImageBox from "../ImageBox/imageBox";
import { backendURL } from "../../Constants/backendConfig";

interface ImageResponse {
  fileName: string;
  contentType: string;
  imageDescription: string;
  createdOn: string;
  creatorName: string;
  imageContent: string;
}

const defaultImages: ImageResponse[] = [];

export default function ImageList() {
  const [images, setImages]: [
    ImageResponse[],
    (images: ImageResponse[]) => void
  ] = useState(defaultImages);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(backendURL + "/public", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(""),
    })
      .then((response) => response.json())
      .then((response) => {
        setImages(response);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (<CircularProgress style={{ margin: 25 }} />) : (<div />)}
      {images.map((image, index) => (
        <div key={index}>
          <ImageBox
            src={`data:${image.contentType};base64,${image.imageContent}`}
            description={image.imageDescription}
            createdOn={image.createdOn}
            creator={image.creatorName}
          />
          {/* <img id="img" src={`data:${image.contentType};base64,${image.imageContent}`} alt="" /> */}
        </div>
      ))}
    </div>
  );
}
