export class Contacto {
    name = "";
    number = 0;
    email = "";
    conected = false;

    constructor(name, number, email, conected) {
        this.name = name;
        this.number = number;
        this.email = email;
        this.conected = conected;
    }
}

export default Contacto;
