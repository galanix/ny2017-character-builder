import { Component, OnInit } from '@angular/core';


declare let $ :any;

@Component({
	selector: 'app-image-builder',
	templateUrl: './image-builder.component.html',
	styleUrls: ['./image-builder.component.css']
})
export class ImageBuilderComponent implements OnInit {

	constructor() { }

	ngOnInit() {
		this.loadImages();
		this.renderLogoAndUserName();
		// $("html").css("background-color", "green");
	}

	loadImages(): void {
		$.getJSON("http://localhost:4200/assets/images.json", function(data: any) {
			console.log("data:", data);
		});
	}

	renderLogoAndUserName(): void {
		$.getJSON("https://galanix.github.io/notes-manager/assets/pass.json", function(result: any) {
			console.log("result:", result);
		});
	}

}
