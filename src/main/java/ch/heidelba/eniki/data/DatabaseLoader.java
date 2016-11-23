package ch.heidelba.eniki.data;

import ch.heidelba.eniki.data.account.Account;
import ch.heidelba.eniki.data.account.AccountRepository;
import ch.heidelba.eniki.data.entry.Entry;
import ch.heidelba.eniki.data.entry.EntryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final EntryRepository entryRepository;

	private final AccountRepository accountRepository;

	private final PasswordEncoder passwordEncoder;

	@Autowired
	public DatabaseLoader(EntryRepository entryRepository, AccountRepository accountRepository, PasswordEncoder passwordEncoder) {
		this.entryRepository = entryRepository;
		this.accountRepository = accountRepository;
//		this.passwordEncoder = passwordEncoder;
		this.passwordEncoder = passwordEncoder;
	}

	@Override
	public void run(String... strings) throws Exception {
		Entry entry = new Entry();
		entry.setTitle("test");
		entry.setUsername("test");
		entry.setPassword("asdf123");
		entryRepository.save(entry);

		Account account = new Account();
		account.setUsername("ihe");
		account.setPassword(passwordEncoder.encode("test"));
		accountRepository.save(account);
	}

}