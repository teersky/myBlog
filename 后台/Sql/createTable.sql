CREATE TABLE public."artical"
(
    id integer NOT NULL,
    "name" character(48) NOT NULL,
    "type" character(12) COLLATE pg_catalog."default" NOT NULL,
    "likesNum" integer(12) COLLATE pg_catalog."default" NOT NULL,
    "answerNum" integer(12) COLLATE pg_catalog."default",
    "readNum" integer(12) COLLATE pg_catalog."default" NOT NULL,
	"artical" character(1024) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "artical_pkey" PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."artical"
    OWNER to postgres;