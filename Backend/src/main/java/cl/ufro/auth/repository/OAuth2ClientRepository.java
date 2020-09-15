package cl.ufro.auth.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import cl.ufro.auth.model.OAuth2Client;

public interface OAuth2ClientRepository extends MongoRepository<OAuth2Client, String> {

    public Optional<OAuth2Client> findByClientId(String clientId);
    
}
