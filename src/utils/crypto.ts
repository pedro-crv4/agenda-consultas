import { hash } from "bcrypt";

export const hashValue = async (value, salts = 10) => {
    const hashed = await hash(value, salts);

    return hashed;
}