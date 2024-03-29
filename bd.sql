create table
  public.cart (
    id bigint generated by default as identity,
    created_at timestamp with time zone not null default now(),
    product_id bigint null,
    constraint carrito_pkey primary key (id),
    constraint public_carrito_product_id_fkey foreign key (product_id) references products (id)
  ) tablespace pg_default;

  create table
  public.contact (
    id bigint generated by default as identity,
    created_at timestamp with time zone not null default now(),
    user_chat_id bigint null,
    image character varying null,
    constraint contact_pkey primary key (id),
    constraint public_contact_user_chat_id_fkey foreign key (user_chat_id) references user_chat (id)
  ) tablespace pg_default;

  create table
  public.content (
    id bigint generated by default as identity,
    created_at timestamp with time zone not null default now(),
    message_id bigint null,
    message character varying null,
    files character varying null,
    constraint content_pkey primary key (id),
    constraint public_content_message_id_fkey foreign key (message_id) references message (id)
  ) tablespace pg_default;

  create table
  public.destinatarios (
    id bigint generated by default as identity,
    created_at timestamp with time zone not null default now(),
    "userC_id" bigint null,
    contact_id bigint null,
    message_id bigint null,
    leido boolean null,
    notificado boolean null,
    constraint destinatarios_pkey primary key (id),
    constraint public_destinatarios_contact_id_fkey foreign key (contact_id) references contact (id),
    constraint public_destinatarios_message_id_fkey foreign key (message_id) references message (id),
    constraint public_destinatarios_userC_id_fkey foreign key ("userC_id") references user_chat (id)
  ) tablespace pg_default;

  create table
  public.message (
    id bigint generated by default as identity,
    created_at timestamp with time zone not null default now(),
    author_id bigint null,
    contact_id bigint null,
    deleted boolean null,
    constraint message_pkey primary key (id),
    constraint public_message_author_id_fkey foreign key (author_id) references user_chat (id),
    constraint public_message_contact_id_fkey foreign key (contact_id) references contact (id)
  ) tablespace pg_default;

  create table
  public.miembros (
    id bigint generated by default as identity,
    created_at timestamp with time zone not null default now(),
    "userC_id" bigint null,
    contact_id bigint null,
    constraint miembros_pkey primary key (id),
    constraint public_miembros_contact_id_fkey foreign key (contact_id) references contact (id),
    constraint public_miembros_userC_id_fkey foreign key ("userC_id") references user_chat (id)
  ) tablespace pg_default;

  create table
  public.ordenes (
    id bigint generated by default as identity,
    created_at timestamp with time zone not null default now(),
    user_id bigint null,
    costo real null,
    impuesto real null,
    total real null,
    pagado boolean null,
    cart_id bigint null,
    constraint ordenes_pkey primary key (id),
    constraint public_ordenes_cart_id_fkey foreign key (cart_id) references cart (id),
    constraint public_ordenes_user_id_fkey foreign key (user_id) references users (id)
  ) tablespace pg_default;

  create table
  public.pagos (
    id bigint generated by default as identity,
    created_at timestamp with time zone not null default now(),
    user_id bigint null,
    tipo_pago character varying null,
    cantidad double precision null,
    divisa double precision null,
    order_id bigint null,
    direccion_envio character varying null,
    constraint pagos_pkey primary key (id),
    constraint public_pagos_order_id_fkey foreign key (order_id) references ordenes (id),
    constraint public_pagos_user_id_fkey foreign key (user_id) references users (id)
  ) tablespace pg_default;

  <create table
  public.peticiones (
    id bigint generated by default as identity,
    created_at timestamp with time zone not null default now(),
    user_id bigint null,
    peticion character varying null,
    image character varying null,
    constraint peticiones_pkey primary key (id),
    constraint public_peticiones_user_id_fkey foreign key (user_id) references users (id)
  ) tablespace pg_default;

  create table
  public.products (
    id bigint generated by default as identity,
    created_at timestamp with time zone not null default now(),
    title character varying null default ''::character varying,
    description text null default ''::text,
    price real null,
    image character varying null,
    id_users bigint null,
    constraint product_pkey primary key (id),
    constraint public_products_id_users_fkey foreign key (id_users) references users (id) on update cascade
  ) tablespace pg_default;

  create table
  public.user_chat (
    id bigint generated by default as identity,
    created_at timestamp with time zone not null default now(),
    id_user bigint null,
    active boolean null,
    constraint user_chat_pkey primary key (id),
    constraint public_user_chat_id_user_fkey foreign key (id_user) references users (id)
  ) tablespace pg_default;

  create table
  public.users (
    id bigint generated by default as identity,
    created_at timestamp with time zone not null default now(),
    name text null,
    last_name text null,
    email character varying null,
    password character varying null,
    profilepic character varying null,
    session bigint generated by default as identity,
    constraint users_pkey primary key (id)
  ) tablespace pg_default;