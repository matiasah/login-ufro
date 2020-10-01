export class User {
    id?: string;
    username?: string;
    address?: string;
    nickname?: string;
    givenName?: string;
    locale?: string = "es";
    familyName?: string;
    middleName?: string;
    phone?: string;
    picture?: string;
    website?: string;
    enabled?: boolean;
    createdAt?: string;
    authorities?: string[];
    password?: string;
    // name: string;
    // email: string;
    // type: number;
}
