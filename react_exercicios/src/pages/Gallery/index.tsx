import { ImageGallery } from "../../components/ImageGallery";
import { HelloWorld } from "../../components/HelloWorld";
import { TodayDateDisplay } from "../../components/TodayDateDisplay";

export function Gallery() {
  return(
    <>
      <TodayDateDisplay />
      <HelloWorld />
      <ImageGallery />
    </>
  )
}