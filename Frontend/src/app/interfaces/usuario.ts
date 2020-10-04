/**
 * @author Matías Hermosilla
 */
export interface Usuario {
    id?: string;
    username: string;
    password: string;
    address?: string;
    nickName?: string;
    givenName?: string;
    locale?: string;
    familyName?: string;
    middleName?: string;
    phone?: string;
    picture?: string;
    website?: string;
    authorities?: string[];
    accountNonExpired?: boolean;
    accountNonLocked?: boolean;
    credentialsNonExpired?: boolean;
    enabled?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
}
