export class Aduana {
    private _aduCod: number;
    private _aduNombre: string;
    private _aduPais: string;
    private _aduEstado: string;

    constructor(
        cod     : number,
        nombre  : string,
        pais    : string,
        estado  : string
    ) {
        this._aduCod     = cod
        this._aduNombre  = nombre
        this._aduPais    = pais
        this._aduEstado  = estado
    }

    get aduCod() {
        return this._aduCod;
    }
    set aduCod(value) {
        this._aduCod = value;
    }

    get aduNombre() {
        return this._aduNombre;
    }
    set aduNombre(value) {
        this._aduNombre = value;
    }

    get aduPais () {
        return this._aduPais ;
    }
    set aduPais (value) {
        this._aduPais = value;
    }

    get aduEstado () {
        return this._aduEstado ;
    }
    set aduEstado (value) {
        this._aduEstado = value;
    }

}
