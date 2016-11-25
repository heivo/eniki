package ch.heidelba.eniki.data.entry;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@lombok.EqualsAndHashCode(of = "id")
public class Entry {

	@Id
	@GeneratedValue
	private Long id;

	private String title;

	private String username;

	@JsonIgnore
	private String password;

	private String url;

	private String notes;

}
