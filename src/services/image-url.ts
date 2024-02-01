import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImageUrl = (
  url: string,
  width: number = 600,
  height: number = 400
) => {
  if (!url) return noImage;

  const target = "media/";
  const index = url?.indexOf(target) + target.length;
  const croppedUrl = url?.slice(0, index);
  const restOfUrl = url?.slice(index);

  return croppedUrl + "crop/" + width + "/" + height + "/" + restOfUrl;
};

export default getCroppedImageUrl;
