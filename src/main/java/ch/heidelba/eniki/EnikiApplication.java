package ch.heidelba.eniki;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@EnableWebMvc
@SpringBootApplication
public class EnikiApplication implements ApplicationListener<ContextRefreshedEvent> {

	private static final Logger LOG = LoggerFactory.getLogger(EnikiApplication.class);

	@Value("${spring.profiles.active:}")
	protected String springProfilesActive;

	@Override
	public void onApplicationEvent(ContextRefreshedEvent event) {
		LOG.info("=======================================");
		LOG.info("App running with active profiles: {}", springProfilesActive);
		LOG.info("=======================================");
	}

	public static void main(String[] args) {
		SpringApplication.run(EnikiApplication.class, args);
	}
}
