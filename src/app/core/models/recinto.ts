import { Aduana } from "./aduana";

export class Recinto {
    private _recCod: string;
    private _nombre: string;
    private _nombrea: string;
    private _estado: string;
    private _tipo: string;
    private _aduana: Aduana;

    constructor(
        cod     : string,
        nombre  : string,
        nombrea : string,
        estado  : string,
        tipo    : string,
        aduana  : Aduana
    ) {
        this._recCod  = cod;
        this._nombre  = nombre;
        this._nombrea = nombrea;
        this._estado  = estado;
        this._tipo    = tipo;
        this._aduana  = aduana;
    }

    get recCod() {
        return this._recCod;
    }
    set recCod(value) {
        this._recCod = value;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(value) {
        this._nombre = value;
    }

    get nombrea() {
        return this._nombrea;
    }
    set nombrea(value) {
        this._nombrea = value;
    }

    get estado() {
        return this._estado;
    }
    set estado(value) {
        this._estado = value;
    }

    get tipo() {
        return this._tipo;
    }
    set tipo(value) {
        this._tipo = value;
    }

    get aduana() {
        return this._aduana;
    }
    set aduana(value) {
        this._aduana = value;
    }
    
}
