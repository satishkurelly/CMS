import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {ComponentFactory} from "../factory/ComponentFactory";

@Component({
  selector: 'add-service-modal',
  styleUrls: [('./default-modal.component.scss')],
  templateUrl: './default-modal.component.html'
})

export class DefaultModal implements OnInit {

  modalHeader: string;
  modalContent: string = `Select Division`;
  uiDivisionObject: any;
  divisionName: string = "";
  componentType: string = "";

  constructor(private activeModal: NgbActiveModal) {
  }

  ngOnInit() {}

  create() {
    if(this.componentType == "TEXT") {
      this.uiDivisionObject[this.divisionName].components.push(ComponentFactory.generateComponent({
        label: "Untitled Text",
        type: "TEXT",
        value: "",
        position: this.uiDivisionObject[this.divisionName].components.length+1
      }));
    } else if(this.componentType == "RADIO") {
      this.uiDivisionObject[this.divisionName].components.push(ComponentFactory.generateComponent({
        label: "Untitled Radio",
        type: "RADIO",
        options: {1: "Option1", 2: "Option2"},
        value: "",
        position: this.uiDivisionObject[this.divisionName].components.length+1
      }));
    } else if(this.componentType == "CHECKBOX") {
      this.uiDivisionObject[this.divisionName].components.push(ComponentFactory.generateComponent({
        label: "Untitled Checkbox",
        type: "CHECKBOX",
        options: {1: "Option1", 2: "Option2", 3: "Option3", 4: "Option4"},
        values: "",
        position: this.uiDivisionObject[this.divisionName].components.length+1
      }));
    }
    console.log(this.uiDivisionObject);
    this.activeModal.close();
  }

  closeModal() {
    this.activeModal.close();
  }
}
