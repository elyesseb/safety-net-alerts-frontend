import { Address } from "./address";
import { MedicalRecord } from "./medical-record";

export class Users {
    id!: number;
    firstname!: string;
    lastname!: string;
    birthdate!: Date;
    phone!: string;
    email!: string;
    password!: string;
    address!: Address;
    medicalRecord!: MedicalRecord;
}
