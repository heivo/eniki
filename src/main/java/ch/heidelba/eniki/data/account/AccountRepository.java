package ch.heidelba.eniki.data.account;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = false)
public interface AccountRepository extends CrudRepository<Account, Long> {

	Account findByUsername(String username);

}