package cl.ufro.auth.config;

import java.time.format.DateTimeFormatter;

import org.springframework.context.annotation.Configuration;
import org.springframework.format.FormatterRegistry;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import org.springframework.format.datetime.DateFormatter;
import org.springframework.format.datetime.DateFormatterRegistrar;
import org.springframework.format.datetime.standard.DateTimeFormatterRegistrar;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author Matías Hermosilla
 */
@Configuration
public class DateTimeConfig implements WebMvcConfigurer {
    
    @Override
    public void addFormatters(FormatterRegistry registry) {
        DateFormatter javaUtilDateFormatter = new DateFormatter();
        javaUtilDateFormatter.setIso(ISO.DATE_TIME);

        DateTimeFormatter jsr310Formatter = DateTimeFormatter.ISO_DATE_TIME;

        DateFormatterRegistrar javaUtilDate = new DateFormatterRegistrar();
        javaUtilDate.setFormatter(javaUtilDateFormatter);
        javaUtilDate.registerFormatters(registry);

        DateTimeFormatterRegistrar jsr310 = new DateTimeFormatterRegistrar();
        jsr310.setDateTimeFormatter(jsr310Formatter);
        jsr310.setDateFormatter(jsr310Formatter);
        jsr310.setTimeFormatter(jsr310Formatter);
        jsr310.registerFormatters(registry);
    }
    
}
