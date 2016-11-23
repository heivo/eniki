package ch.heidelba.eniki.data.account;

import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@EqualsAndHashCode(of = "id")
public class Account {

	@Id
	@GeneratedValue
	private Long id;

	private String username;

	private String password;

}