import { Component } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  protected uiDivisionObject: any = {};
  protected nativeWindow: any;

  constructor(private modalService: NgbModal) {
    var divisions = this.getHttpData();
    this.createDivision(divisions);
  }

  /*
   When Showing the existing form, already stored components is being retrieved from Database.
   For now, we are using static data.
   */
  getHttpData() {
    return {
      HEADER: [],
      BODY: [
        {
          label: "First Name",
          type: "TEXT",
          value: "",
          position: 1
        },
        {
          label: "Last Name",
          type: "TEXT",
          value: "",
          position: 2
        },
        {
          label: "Gender",
          type: "RADIO",
          options: {1: "Male", 2: "Female"},
          value: "",
          position: 3
        },
        {
          label: "Favourite Game",
          type: "CHECKBOX",
          options: {1: "Cricket", 2: "Basket Ball", 3: "Base Ball", 4: "Foot Ball"},
          values: "",
          position: 4
        }
      ],
      FOOTER: []
    };
  }

  /*
   To Create Division Object from the data which is retreived from Database.
   */
  createDivision(divisions: any) {
    for(let name in divisions) {

      let index = DivisionType[name];
      let components = divisions[name];
      let division: Division;

      if (DivisionType.HEADER ==  index) {
        this.uiDivisionObject["HEADER"] = this.common(components, division, index);
      } else if(DivisionType.BODY ==  index) {
        this.uiDivisionObject["BODY"] = this.common(components, division, index);;
      } else if(DivisionType.FOOTER ==  index) {
        this.uiDivisionObject["FOOTER"] = this.common(components, division, index);;
      }
    }
  }

  common(components, division, index) {
    let cmsComponent: Array<CMSComponent>;
    cmsComponent = new Array();
    for (let component in components){
      cmsComponent.push(ComponentFactory.generateComponent(components[component]));
    }
    return new Division(index, cmsComponent);
  }

  log(data) {
    console.log(data);
  }

  addText() {
    const activeModal = this.modalService.open(DefaultModal, {size: 'lg'});
    activeModal.componentInstance.modalHeader = 'Text Component';
    activeModal.componentInstance.uiDivisionObject = this.uiDivisionObject;
    activeModal.componentInstance.componentType = "TEXT";
  }

  addRadio() {
    const activeModal = this.modalService.open(DefaultModal, {size: 'lg'});
    activeModal.componentInstance.modalHeader = 'Radio Component';
    activeModal.componentInstance.uiDivisionObject = this.uiDivisionObject;
    activeModal.componentInstance.componentType = "RADIO";
  }

  addCheckBox() {
    const activeModal = this.modalService.open(DefaultModal, {size: 'lg'});
    activeModal.componentInstance.modalHeader = 'Checkbox Component';
    activeModal.componentInstance.uiDivisionObject = this.uiDivisionObject;
    activeModal.componentInstance.componentType = "CHECKBOX";
  }

  publish() {
    console.log(window);
    window.open("#/pages/dashboard");
  }

  save() {
    console.log('save');
  }

  data() {
    return this.uiDivisionObject;
  }

  ngOnInit() {
  }
}

/*
 Types of Components
 */
export enum ComponentType {
  TEXT = 1,
  CHECKBOX = 2,
  RADIO = 3
}

export enum DivisionType {
  HEADER = 1,
  BODY = 2,
  FOOTER = 3

}
