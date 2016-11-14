package ch.heidelba.eniki.data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final EntryRepository entryRepository;

	@Autowired
	public DatabaseLoader(EntryRepository entryRepository) {
		this.entryRepository = entryRepository;
	}

	@Override
	public void run(String... strings) throws Exception {
		Entry entry = new Entry();
		entry.setTitle("test");
		entry.setUserName("test");
		entry.setPassword("asdf123");
		entryRepository.save(entry);
	}
}