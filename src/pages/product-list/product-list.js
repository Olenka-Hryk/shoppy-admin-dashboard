import { Component } from "../../core";
import html from "bundle-text:./product-list.html";

export class ProductListComponent extends Component {
  render() {
    this.innerHTML = html;
  }

  static create() {
    return Component.create("product-list");
  }
}

Component.define("product-list", ProductListComponent);