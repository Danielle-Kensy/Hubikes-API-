export class CustomError extends Error {
    constructor(statusCode: number, message: string) {
        super(message)
    }
}

export class MissingParameters extends CustomError{
    constructor(){
        super(400, "Faltando paramêtros favor consultar a documentação.")
    }
}

export class MissingId extends CustomError{
    constructor(){
        super(400, "Favor informe o ID.")
    }
}

export class MissingColor extends CustomError{
    constructor(){
        super(400, "Favor informe a cor desejada.")
    }
}

export class MissingPrice extends CustomError{
    constructor(){
        super(400, "Favor informe o preço desejado.")
    }
}

export class NotFound extends CustomError{
    constructor(){
        super(404, "Nenhuma Bike Encontrada.")
    }
}
