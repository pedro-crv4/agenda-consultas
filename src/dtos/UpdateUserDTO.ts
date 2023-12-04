import { UserType } from '../entities/User';

export class UpdateUserDTO {
    readonly name: string;
    readonly email: string;
    readonly password: string;
    readonly date_of_birth: string;
    readonly type: UserType;

    constructor({ name, email, password, date_of_birth, type }) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.date_of_birth = date_of_birth;
        this.type = type;
    }
}
