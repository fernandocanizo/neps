create extension pgcrypto;

create table if not exists role (
	id serial primary key,
	role varchar(20) not null
);

insert into role (role) values (
	'user'
);

create table if not exists appuser (
	id serial primary key,
	first_name varchar(255),
	last_name varchar(255),
	email text not null unique,
	password text not null,
	fk_role varchar(20) not null default 'user'
);

