package cl.ufro.auth.service;

import java.util.Optional;

import org.springframework.data.domain.AuditorAware;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import cl.ufro.auth.model.Usuario;

/**
 * @author Matías Hermosilla
 */
public class AuditorAwareImpl implements AuditorAware<Usuario> {

    @Override
    public Optional<Usuario> getCurrentAuditor() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

        if (authentication == null || !authentication.isAuthenticated()) {
            return Optional.empty();
        }

        Object principal = authentication.getPrincipal();

        if (principal instanceof Usuario) {
            return Optional.of((Usuario) principal);
        }

        return Optional.ofNullable(null);
    }
    
}
