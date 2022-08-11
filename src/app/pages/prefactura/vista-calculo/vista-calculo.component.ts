import { Component, Input, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { PreFacturaDTO } from "src/app/core/dtos/DTO";

@Component({
  selector: "app-vista-calculo",
  templateUrl: "./vista-calculo.component.html",
  styleUrls: ["./vista-calculo.component.css"],
})
export class VistaCalculoComponent implements OnInit {

  @Input() preFacturaInput: BehaviorSubject<PreFacturaDTO | null>;

  total!: number;

  constructor() {
    this.preFacturaInput = new BehaviorSubject<PreFacturaDTO | null>(null)
  }

  ngOnInit(): void {
    this.preFacturaInput.subscribe(v => {
      if(v != null) {
        this.total = v.total;
      }
    });
  }

}
