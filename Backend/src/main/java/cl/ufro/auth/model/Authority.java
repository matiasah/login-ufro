package cl.ufro.auth.model;

import org.springframework.security.core.GrantedAuthority;

public enum Authority implements GrantedAuthority {

    ROLE_ADMIN,
    ROLE_ESTUDIANTE,
    ROLE_FUNCIONARIO;

    @Override
    public String getAuthority() {
        return this.name();
    }

}
