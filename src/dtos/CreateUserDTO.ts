export class CreateUserDTO {
    readonly name;
    readonly email;
    readonly password;
    readonly date_of_birth;

    constructor({ name, email, password, date_of_birth }) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.date_of_birth = date_of_birth;
    }
}
