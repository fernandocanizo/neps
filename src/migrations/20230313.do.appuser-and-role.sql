create extension pgcrypto;

create table if not exists role (
	id serial primary key,
	name varchar(20) not null unique
);

insert into role (name) values
	('user'),
	('admin')
;

create table if not exists appuser (
	id serial primary key,
	first_name varchar(255),
	last_name varchar(255),
	email text not null unique,
	password text not null,
	fk_role varchar(20) not null default 'user',

	foreign key (fk_role) references role(name)
		on delete restrict
		on update cascade
);

