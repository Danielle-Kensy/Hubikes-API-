export class CustomError extends Error {
    statusCode: number;
    constructor(statusCode: number, message: string) {
        super(message)
        this.statusCode = statusCode;
    }
}

export class MissingParameters extends CustomError {
    constructor() {
        super(400, "Faltando paramêtros favor consultar a documentação.")
    }
}

export class MissingId extends CustomError {
    constructor() {
        super(400, "Favor informe o ID.")
    }
}

export class MissingColor extends CustomError {
    constructor() {
        super(400, "Favor informe a cor desejada.")
    }
}

export class MissingPrice extends CustomError {
    constructor() {
        super(400, "Favor informe o preço desejado.")
    }
}

export class NotFound extends CustomError {
    constructor() {
        super(404, "Nenhuma Bike Encontrada.")
    }
}

export class Unauthorized extends CustomError {
    constructor() {
        super(401, "Usuário não autorizado")
    }
}

export class MissingLoginParameters extends CustomError {
    constructor() {
        super(400, 'Preencha os campos email e password')
    }
}

export class InvalidPassword extends CustomError {
    constructor() {
        super(400, 'Senha inválida.')
    }
}

export class UserNotFound extends CustomError {
    constructor() {
        super(404, 'Usuário não encontrado.')
    }
}
