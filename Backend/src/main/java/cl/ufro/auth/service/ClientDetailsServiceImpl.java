package cl.ufro.auth.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.security.oauth2.provider.ClientDetails;
import org.springframework.security.oauth2.provider.ClientDetailsService;
import org.springframework.security.oauth2.provider.ClientRegistrationException;
import org.springframework.stereotype.Service;

import cl.ufro.auth.model.OAuth2Client;
import cl.ufro.auth.repository.OAuth2ClientRepository;

/**
 * @author Matías Hermosilla
 */
@Primary
@Service
public class ClientDetailsServiceImpl implements ClientDetailsService {
    
    @Autowired
    private OAuth2ClientRepository oauth2ClientRepository;

    @Override
    public ClientDetails loadClientByClientId(String clientId) throws ClientRegistrationException {
        // Buscar cliente
        Optional<OAuth2Client> optOAuth2Client = this.oauth2ClientRepository.findByClientId(clientId);
        
        // Si el cliente existe
        if (optOAuth2Client.isPresent()) {
            // Retornar cliente
            return optOAuth2Client.get();
        }
        
        // Arrojar excepcion
        throw new ClientRegistrationException(clientId);
    }
    
}
