package cl.ufro.auth.model;

import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonSetter;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.userdetails.UserDetails;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;

@EqualsAndHashCode(of = "id")
@Data
@Document
public class Usuario implements UserDetails {
    
    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Id
    private String id;
    
    @Indexed
    private String username;
    
    @Setter(onMethod_ = @JsonSetter)
    @Getter(onMethod_ = @JsonIgnore)
    private String password;

    private String address;

    private String nickname;

    private String givenName;

    private String locale;

    private String familyName;

    private String middleName;

    private String phone;

    private String picture;

    private String website;
    
    private Set<Authority> authorities = new HashSet<>();
    
    private boolean accountNonExpired = true;
    private boolean accountNonLocked = true;
    private boolean credentialsNonExpired = true;
    private boolean enabled = true;
    
    @CreatedDate
    private ZonedDateTime createdAt;
    
    @LastModifiedDate
    private ZonedDateTime updatedAt;

}
