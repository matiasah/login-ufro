package cl.ufro.auth.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

/**
 *
 * @author Matías Hermosilla
 */
@Configuration
@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Override
    protected AuthenticationManager authenticationManager() throws Exception {
        return this.authenticationManager;
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeRequests()
                .antMatchers("oauth/token")
                .authenticated()
                .antMatchers("oauth/authorize")
                .authenticated()
            .anyRequest()
                .permitAll()
                .and()
            .formLogin()
                .permitAll()
                .loginPage("/login")
                .failureUrl("/login?error=true")
                .and()
            .logout()
                .permitAll();
    }

}
