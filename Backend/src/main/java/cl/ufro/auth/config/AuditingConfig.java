package cl.ufro.auth.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.EnableMongoAuditing;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.AuditorAware;
import cl.ufro.auth.model.Usuario;
import cl.ufro.auth.service.AuditorAwareImpl;

@Configuration
@EnableMongoAuditing
public class AuditingConfig {

    @Bean
    public AuditorAware<Usuario> auditorAware() {
        return new AuditorAwareImpl();
    }

}