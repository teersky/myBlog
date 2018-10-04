CREATE TABLE public."naviList"
(
    id integer NOT NULL,
    "powerLeval" integer NOT NULL,
    title character(48) COLLATE pg_catalog."default" NOT NULL,
    "linkTo" character(48) COLLATE pg_catalog."default" NOT NULL,
    icons character(48) COLLATE pg_catalog."default",
    "father_Link" character(48) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "naviList_pkey" PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."naviList"
    OWNER to postgres;