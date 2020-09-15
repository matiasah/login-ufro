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

import cl.ufro.auth.model.OAuth2Client;
import cl.ufro.auth.repository.OAuth2ClientRepository;

/**
 *
 * @author Matías Hermosilla
 */
@RequestMapping("oauth2-clients")
@RestController
public class OAuth2ClientController {
    
    @Autowired
    private OAuth2ClientRepository oauth2ClientRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private ObjectMapper objectMapper;

    @GetMapping
    public Iterable<OAuth2Client> index() {
        return this.oauth2ClientRepository.findAll();
    }

    @GetMapping("{id}")
    public OAuth2Client get(@PathVariable("id") OAuth2Client user) {
        return user;
    }

    @PostMapping
    public OAuth2Client store(@RequestBody OAuth2Client oauth2Client) {
        // If the user sends a password
        if (oauth2Client.getClientSecret() != null) {
            // Encrypt password
            oauth2Client.setClientSecret(this.passwordEncoder.encode(oauth2Client.getClientSecret()));
        }

        return this.oauth2ClientRepository.save(oauth2Client);
    }

    @PatchMapping("{id}")
    public OAuth2Client update(@PathVariable("id") OAuth2Client oauth2Client, HttpServletRequest request) throws IOException {
        // Update the user with the changed attributes
        this.objectMapper.readerForUpdating(oauth2Client).readValue(request.getReader());

        // Store and return
        return this.oauth2ClientRepository.save(oauth2Client);
    }

    @DeleteMapping("{id}")
    public void delete(@PathVariable("id") String id) {
        this.oauth2ClientRepository.deleteById(id);
    }

    @GetMapping("me")
    public Object me() {
        return SecurityContextHolder.getContext().getAuthentication();
    }

}
