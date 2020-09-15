package cl.ufro.auth.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import cl.ufro.auth.model.Usuario;

public interface UsuarioRepository extends MongoRepository<Usuario, String> {
    
    public Optional<Usuario> findByUsername(String username);

}
