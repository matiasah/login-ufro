package cl.ufro.auth.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import cl.ufro.auth.model.Usuario;
import cl.ufro.auth.repository.UsuarioRepository;

/**
 *
 * @author Matías Hermosilla
 */
@RequestMapping("usuarios")
@RestController
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ObjectMapper objectMapper;

    @GetMapping
    public Iterable<Usuario> index() {
        return this.usuarioRepository.findAll();
    }

    @GetMapping("{id}")
    public Usuario get(@PathVariable("id") Usuario user) {
        return user;
    }

    @PostMapping
    public Usuario store(@RequestBody Usuario usuario) {
        // If the user sends a password
        if (usuario.getPassword() != null) {
            // Encrypt password
            usuario.setPassword(this.passwordEncoder.encode(usuario.getPassword()));
        }

        return this.usuarioRepository.save(usuario);
    }

    @PatchMapping("{id}")
    public Usuario update(@PathVariable("id") Usuario usuario, HttpServletRequest request) throws IOException {
        // Get last password
        String password = usuario.getPassword();

        // Update the user with the changed attributes
        this.objectMapper.readerForUpdating(usuario).readValue(request.getReader());

        // If secret changes
        if (!password.equals(usuario.getPassword())) {
            // Encrypt password
            usuario.setClientSecret(this.passwordEncoder.encode(usuario.getPassword()));
        }

        // Store and return
        return this.usuarioRepository.save(usuario);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") String id) {
        this.usuarioRepository.deleteById(id);
    }

    @GetMapping("me")
    public Object me() {
        return SecurityContextHolder.getContext().getAuthentication();
    }

}
