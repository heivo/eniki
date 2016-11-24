package ch.heidelba.eniki.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.boot.autoconfigure.security.oauth2.resource.PrincipalExtractor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.oauth2.common.DefaultOAuth2AccessToken;
import org.springframework.security.oauth2.common.OAuth2AccessToken;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.security.oauth2.provider.token.TokenEnhancer;
import org.springframework.security.oauth2.provider.token.TokenStore;
import org.springframework.security.oauth2.provider.token.store.InMemoryTokenStore;

import java.util.HashMap;
import java.util.Map;

@Configuration
@EnableAuthorizationServer
public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {

	private final AuthenticationManager authenticationManager;

	private final UserDetailsService userDetailsService;

	@Autowired
	public AuthorizationServerConfig(@Qualifier("authenticationManagerBean") AuthenticationManager
											 authenticationManager, UserDetailsService userDetailsService) {
		this.authenticationManager = authenticationManager;
		this.userDetailsService = userDetailsService;
	}

	@Override
	public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
		clients.inMemory()
				.withClient("browser")
				.autoApprove(true)
				.scopes("default")
				.authorizedGrantTypes("password", "refresh_token")
				.accessTokenValiditySeconds(120)
				.refreshTokenValiditySeconds(600);
	}

	@Override
	public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
		endpoints
				.tokenStore(tokenStore())
				.authenticationManager(authenticationManager)
				.userDetailsService(userDetailsService)
				.tokenEnhancer(tokenEnhancer());
	}


	@Bean
	public TokenEnhancer tokenEnhancer() {
		return (accessToken, authentication) -> {
			User user = (User) authentication.getPrincipal();
			Map<String, Object> additionalInfo = new HashMap<>();
			additionalInfo.put("username", user.getUsername());
			((DefaultOAuth2AccessToken) accessToken).setAdditionalInformation(additionalInfo);
			return accessToken;
		};
	}

	@Bean
	public TokenStore tokenStore() {
		return new InMemoryTokenStore();
	}

}