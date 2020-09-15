package cl.ufro.auth.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import cl.ufro.auth.model.Usuario;
import cl.ufro.auth.repository.UsuarioRepository;

/**
 * @author Matías Hermosilla
 */
@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String nombre) throws UsernameNotFoundException {
        // Buscar usuario
        Optional<Usuario> optUsuario = this.usuarioRepository.findByUsername(nombre);

        // Si usuario existe
        if (optUsuario.isPresent()) {

            // Retornar objeto usuario
            return optUsuario.get();
        }

        // Arrojar excepción
        throw new UsernameNotFoundException(nombre);
    }

}
