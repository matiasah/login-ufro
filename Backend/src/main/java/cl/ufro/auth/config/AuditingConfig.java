package cl.ufro.auth.config;

import java.time.ZonedDateTime;
import java.util.Optional;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.EnableMongoAuditing;
import org.springframework.context.annotation.Bean;
import org.springframework.data.auditing.DateTimeProvider;
import org.springframework.data.domain.AuditorAware;
import cl.ufro.auth.model.Usuario;
import cl.ufro.auth.service.AuditorAwareImpl;

@Configuration
@EnableMongoAuditing(dateTimeProviderRef = "dateTimeProvider")
public class AuditingConfig {

    @Bean
    public AuditorAware<Usuario> auditorAware() {
        return new AuditorAwareImpl();
    }

    @Bean
    public DateTimeProvider dateTimeProvider() {
        return () -> Optional.of(ZonedDateTime.now());
    }

}