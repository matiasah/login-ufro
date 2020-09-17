package cl.ufro.auth.model;

import java.time.ZonedDateTime;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.provider.ClientDetails;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * @author Matías Hermosilla
 */
@EqualsAndHashCode(of = "id")
@Data
@Document
public class OAuth2Client implements ClientDetails {

    /**
     *
     */
    private static final long serialVersionUID = 1L;
    private static final Set<String> GRANT_TYPES = Set.of("password", "refresh_token");

    @Id
    private Long id;

    private String clientId;
    private String clientSecret;

    @CreatedDate
    private ZonedDateTime createdAt;
    
    @LastModifiedDate
    private ZonedDateTime updatedAt;

    @Override
    public String getClientId() {
        return this.clientId;
    }

    @Override
    public Set<String> getResourceIds() {
        return new HashSet<>();
    }

    @Override
    public boolean isSecretRequired() {
        return true;
    }

    @Override
    public String getClientSecret() {
        return this.clientSecret;
    }

    @Override
    public boolean isScoped() {
        return true;
    }

    @Override
    public Set<String> getScope() {
        return Set.of("read", "write", "trust");
    }

    @Override
    public Set<String> getAuthorizedGrantTypes() {
        return GRANT_TYPES;
    }

    @Override
    public Set<String> getRegisteredRedirectUri() {
        return new HashSet<>();
    }

    @Override
    public Collection<GrantedAuthority> getAuthorities() {
        return new HashSet<>();
    }

    @Override
    public Integer getAccessTokenValiditySeconds() {
        return 3600 * 24;
    }

    @Override
    public Integer getRefreshTokenValiditySeconds() {
        return 3600 * 24 * 7;
    }

    @Override
    public boolean isAutoApprove(String string) {
        return false;
    }

    @Override
    public Map<String, Object> getAdditionalInformation() {
        return new HashMap<>();
    }

}