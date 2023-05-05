CREATE SCHEMA `produtos` ;

use produtos;

create table produto(
    id bigint not null auto_increment,
    nome varchar(100),
    
    primary key(id)
);