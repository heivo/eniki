package ch.heidelba.eniki.data;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Data
@Entity
@lombok.EqualsAndHashCode(of = "id")
public class Entry {

	@Id @GeneratedValue Long id;

	private String title;

	private String userName;

	private String password;

	private String url;

	private String notes;

}
