import { Component } from "@angular/core";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  providers: [Camera],
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  constructor(private camera: Camera, private domSanitizer: DomSanitizer) {}
  images = [];
  base: any;

  nameFix(filename) {
    return filename.replace(/file:\/\//g, "");
  }

  getPic() {
    const options: CameraOptions = {
      quality: 100,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then(
      imageData => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        let base64Image = "data:image/jpeg;base64," + imageData;
        this.images.push(base64Image);
      },
      err => {
        // Handle error
      }
    );
  }
}
