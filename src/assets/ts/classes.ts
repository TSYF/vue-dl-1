class Persona {
    _nombre;
    _apellido;
    _run;
    _nacimiento;
    _edad;

    constructor(nombre, apellido, run, nacimiento, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.run = run;
        const nacimientoArr = nacimiento;
        this.nacimiento = new Date(nacimientoArr[0], nacimientoArr[1]-1, nacimientoArr[2]).toDateString(); /* `${nacimientoArr[0]}/${nacimientoArr[1]}/${nacimientoArr[2]}`; */
        this.edad = edad;
    }

    /* Nombre */
    get nombre() {
        return this._nombre;
    }
    set nombre(val) {
        this._nombre = val;
    }

    /* Apellido */
    get apellido() {
        return this._apellido;
    }
    set apellido(val) {
        this._apellido = val;
    }

    /* RUN */
    get run() {
        return this._run;
    }
    set run(val) {
        this._run = val;
    }

    /* Nacimiento */
    get nacimiento() {
        return this._nacimiento;
    }
    set nacimiento(val) {
        this._nacimiento = val;
    }

    /* Edad */
    get edad() {
        return this._edad;
    }
    set edad(val) {
        this._edad = val;
    }
}

export { Persona };