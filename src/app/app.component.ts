import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  host: { class: "component-container fh" },
})
export class AppComponent {
  title = "portfolio";

  ngOnInit() {
    const cursorCircle = document.getElementById("cursor-circle");

    window.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const elementMouseIsOver = document.elementFromPoint(mouseX, mouseY);

      if (elementMouseIsOver) {
        const backgroundColor = window.getComputedStyle(
          elementMouseIsOver,
          null
        ).backgroundColor;
        // Assuming the element has a solid background color
        const invertedColor = this.invertColor(backgroundColor);
        cursorCircle!.style.backgroundColor = invertedColor;
      }

      cursorCircle!.style.left = mouseX + "px";
      cursorCircle!.style.top = mouseY + "px";
      cursorCircle!.style.display = "block";
    });
  }
  
  private invertColor(rgb: string): string {
    // First we need to parse the rgb string into its components
    const rgbValues = rgb.match(/\d+/g);

    if (!rgbValues || rgbValues.length < 3) {
      // If the rgb string is not valid, we return a default color
      return "#FFFFFF"; // default to white
    }

    // Parse the RGB values from the string to numbers
    let r = parseInt(rgbValues[0], 10);
    let g = parseInt(rgbValues[1], 10);
    let b = parseInt(rgbValues[2], 10);

    // Invert each component by subtracting it from 255
    r = 255 - r;
    g = 255 - g;
    b = 255 - b;

    // Convert the inverted RGB values back to a hex string
    const invertedHex = this.rgbToHex(r, g, b);

    return invertedHex;
  }

  private componentToHex(c: number): string {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  private rgbToHex(r: number, g: number, b: number): string {
    return (
      "#" +
      this.componentToHex(r) +
      this.componentToHex(g) +
      this.componentToHex(b)
    );
  }
}
