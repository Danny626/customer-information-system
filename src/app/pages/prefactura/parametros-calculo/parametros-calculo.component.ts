import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { NGXLogger } from "ngx-logger";
import { Subject } from "rxjs";
import { ParamBusquedaDTO, PreFacturaDTO } from "src/app/core/dtos/DTO";
import { Recinto } from "src/app/core/models/recinto";
import {
  RecintoService,
  SpinnerService,
  NotificationService,
  AuthenticationService,
  PreFacturaService
} from "src/app/core/services/services";

interface Gestion {
  valor: number;
}

@Component({
  selector: "app-parametros-calculo",
  templateUrl: "./parametros-calculo.component.html",
  styleUrls: ["./parametros-calculo.component.css"],
})
export class ParametrosCalculoComponent implements OnInit {

  @Output() preFacturaEvent = new EventEmitter<PreFacturaDTO>();

  form!: FormGroup;
  hideCurrentPassword: boolean;
  hideNewPassword: boolean;
  currentPassword!: string;
  newPassword!: string;
  newPasswordConfirm!: string;
  disableSubmit!: boolean;

  recintos: Recinto[] = [];
  gestiones: Gestion[] = [];
  gestion!: number;
  recinto!: string;
  nroRegistro!: string;
  docEmbarque!: string;
  optionals!: boolean;

  constructor(
    private authService: AuthenticationService,
    private logger: NGXLogger,
    private spinnerService: SpinnerService,
    private notificationService: NotificationService,
    private recintoService: RecintoService,
    private preFacturaService: PreFacturaService
  ) {
    this.hideCurrentPassword = true;
    this.hideNewPassword = true;
  }

  ngOnInit() {
    this.form = new FormGroup({
      gestion: new FormControl("", Validators.required),
      recinto: new FormControl("", Validators.required),
      nroRegistro: new FormControl(""),
      docEmbarque: new FormControl(""),
    });

    this.spinnerService.visibility.subscribe((value) => {
      this.disableSubmit = value;
    });

    this.listarRecintos();
    this.listarGestiones();

    this.form.get('gestion')?.valueChanges
      .subscribe(val => this.gestion = val);
    this.form.get('recinto')?.valueChanges
      .subscribe(val => this.recinto = val);
    this.form.get('nroRegistro')?.valueChanges
      .subscribe(val => this.nroRegistro = val);
    this.form.get('docEmbarque')?.valueChanges
      .subscribe(val => this.docEmbarque = val);
  }

  listarGestiones() {
    let gestionActual: number = new Date().getFullYear();
    this.gestiones = [
      { valor: gestionActual - 2 },
      { valor: gestionActual - 1 },
      { valor: gestionActual },
      { valor: gestionActual + 1 },
      { valor: gestionActual + 2 },
    ];
  }

  isValidForm() {
    /* if ( this.form.valid && (this.nroRegistro != null || this.docEmbarque != null && (this.nroRegistro != "" || this.docEmbarque != ""))) { */
    if ( this.form.valid && (this.nroRegistro != "" || this.docEmbarque != "")) {
      return true;
    } else {
      return false;
    }
  }

  listarRecintos() {
    this.recintoService
      .listarRecintos()
      .subscribe((recintos) => (this.recintos = recintos));
  }

  cargarPreFactura() {
    const paramBusqueda: ParamBusquedaDTO = {
      codRecinto: this.recinto,
      docEmbarque: this.docEmbarque,
      gestion: this.gestion,
      nroRegistro: this.nroRegistro
    };

    this.preFacturaService.calculoFactura(paramBusqueda)
      .subscribe((value: PreFacturaDTO|any) => {
        this.preFacturaEvent.emit(value);
      });
  }

  limpiarPreFactura() {
    console.log('limpiar')
  }

  changePassword() {
    if (this.newPassword !== this.newPasswordConfirm) {
      this.notificationService.openSnackBar("New passwords do not match.");
      return;
    }

    const email = this.authService.getCurrentUser().email;

    this.authService
      .changePassword(email, this.currentPassword, this.newPassword)
      .subscribe(
        (data) => {
          this.logger.info(`User ${email} changed password.`);
          this.form.reset();
          this.notificationService.openSnackBar(
            "Your password has been changed."
          );
        },
        (error) => {
          this.notificationService.openSnackBar(error.error);
        }
      );
  }
}
