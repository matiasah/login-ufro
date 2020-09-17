package cl.ufro.auth.config;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.core.convert.MongoCustomConversions;

import cl.ufro.auth.converter.ZonedDateTimeReadConverter;
import cl.ufro.auth.converter.ZonedDateTimeWriteConverter;

@Configuration
public class MongoConfig {

    @Bean
    public MongoCustomConversions customConversions(){
        return new MongoCustomConversions(
            Arrays.asList(
                new ZonedDateTimeReadConverter(),
                new ZonedDateTimeWriteConverter()
            )
        );
    }

}