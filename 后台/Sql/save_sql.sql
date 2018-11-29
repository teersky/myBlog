--
-- PostgreSQL database dump
--

-- Dumped from database version 10.4
-- Dumped by pg_dump version 10.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: articalTable; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."articalTable" (
    id character(16) NOT NULL,
    artical_name character(48) NOT NULL,
    artical_type character(12) NOT NULL,
    "likesNum" integer NOT NULL,
    "answerNum" integer NOT NULL,
    "readNum" integer NOT NULL,
    artical character(1024) NOT NULL,
    readnum integer
);


ALTER TABLE public."articalTable" OWNER TO postgres;

--
-- Name: cityInfomation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."cityInfomation" (
    code character(12) NOT NULL,
    "parentCode" character(12) NOT NULL,
    level character(4) NOT NULL,
    name character(48) NOT NULL,
    latitude character(48),
    longitude character(48) NOT NULL
);


ALTER TABLE public."cityInfomation" OWNER TO postgres;

--
-- Name: manager; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.manager (
    id integer NOT NULL,
    login_name text DEFAULT ''::text NOT NULL,
    login_password text DEFAULT ''::text NOT NULL,
    last_login_time timestamp(0) without time zone,
    last_login_ip text DEFAULT ''::text,
    login_count integer DEFAULT 0,
    is_enable integer DEFAULT 1,
    add_time timestamp(0) without time zone DEFAULT now() NOT NULL,
    "LoginChecked" text
);


ALTER TABLE public.manager OWNER TO postgres;

--
-- Name: TABLE manager; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON TABLE public.manager IS '管理员管理表';


--
-- Name: COLUMN manager.id; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.manager.id IS '主键Id';


--
-- Name: COLUMN manager.login_name; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.manager.login_name IS '登陆账号';


--
-- Name: COLUMN manager.login_password; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.manager.login_password IS '登陆密码';


--
-- Name: COLUMN manager.last_login_time; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.manager.last_login_time IS '最后登陆时间';


--
-- Name: COLUMN manager.last_login_ip; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.manager.last_login_ip IS '最后登陆IP';


--
-- Name: COLUMN manager.login_count; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.manager.login_count IS '登陆次数';


--
-- Name: COLUMN manager.is_enable; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.manager.is_enable IS '账号是否启用，1=true(启用)，0=false（禁用）';


--
-- Name: COLUMN manager.add_time; Type: COMMENT; Schema: public; Owner: postgres
--

COMMENT ON COLUMN public.manager.add_time IS '注册时间';


--
-- Name: manager_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.manager_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.manager_id_seq OWNER TO postgres;

--
-- Name: manager_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.manager_id_seq OWNED BY public.manager.id;


--
-- Name: navilist; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.navilist (
    id integer NOT NULL,
    "powerLeval" integer NOT NULL,
    title character(24) NOT NULL,
    "linkTo" character(24) NOT NULL,
    icons character(24),
    "father_Link" character(24) NOT NULL
);


ALTER TABLE public.navilist OWNER TO postgres;

--
-- Name: navilist_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.navilist_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.navilist_id_seq OWNER TO postgres;

--
-- Name: navilist_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.navilist_id_seq OWNED BY public.navilist.id;


--
-- Name: product_class; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product_class (
    id integer NOT NULL,
    name character(24),
    is_enable text
);


ALTER TABLE public.product_class OWNER TO postgres;

--
-- Name: product_class_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.product_class_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_class_id_seq OWNER TO postgres;

--
-- Name: product_class_id_seq1; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.product_class_id_seq1
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_class_id_seq1 OWNER TO postgres;

--
-- Name: product_class_id_seq1; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.product_class_id_seq1 OWNED BY public.product_class.id;


--
-- Name: visitRecode; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."visitRecode" (
    "dateTime" character(16) NOT NULL,
    "visitIP" character(16) NOT NULL,
    code character(12) NOT NULL,
    ip_inner character(16),
    valueindex integer,
    reserve_3 character(4)
);


ALTER TABLE public."visitRecode" OWNER TO postgres;

--
-- Name: manager id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.manager ALTER COLUMN id SET DEFAULT nextval('public.manager_id_seq'::regclass);


--
-- Name: navilist id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.navilist ALTER COLUMN id SET DEFAULT nextval('public.navilist_id_seq'::regclass);


--
-- Name: product_class id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_class ALTER COLUMN id SET DEFAULT nextval('public.product_class_id_seq1'::regclass);


--
-- Data for Name: articalTable; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."articalTable" (id, artical_name, artical_type, "likesNum", "answerNum", "readNum", artical, readnum) VALUES ('1542945618001   ', '测试文章2                                           ', '测试          ', 0, 0, 0, '# 测试文章
## 仅用于测试
> 用户不可见                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ', NULL);
INSERT INTO public."articalTable" (id, artical_name, artical_type, "likesNum", "answerNum", "readNum", artical, readnum) VALUES ('1541992186874   ', '测试文档1                                           ', 'Js          ', 123, 12, 321, '原始人发展出的图示和表意符号是如今现代字母的原型!比如楔形文字和象形文字。最早的字母，是东闪米特人（现代分类称之为闪米特北支）使用的一种早期的象形文字的组合，大约出现在公元前1700至1500年间。公元前1000年又有其它四种字母，由东闪米特人的字母发展而来，西闪米特人南支（现代分类称之为闪.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ', NULL);


--
-- Data for Name: cityInfomation; Type: TABLE DATA; Schema: public; Owner: postgres
--

--
-- Data for Name: manager; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.manager (id, login_name, login_password, last_login_time, last_login_ip, login_count, is_enable, add_time, "LoginChecked") VALUES (1, 'admin', 'E10ADC3949BA59ABBE56E057F20F883E', '2018-11-26 09:01:00', '127.0.0.1', 155, 1, '2017-05-21 21:10:50', NULL);


--
-- Data for Name: navilist; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.navilist (id, "powerLeval", title, "linkTo", icons, "father_Link") VALUES (6, 1, '用户评论                    ', 'userComments            ', 'message                 ', '-1                      ');
INSERT INTO public.navilist (id, "powerLeval", title, "linkTo", icons, "father_Link") VALUES (7, 1, '权限管理                    ', 'rightsManagement        ', 'lock                    ', '-1                      ');
INSERT INTO public.navilist (id, "powerLeval", title, "linkTo", icons, "father_Link") VALUES (1, 1, '信息展示                    ', 'msgShow                 ', 'bars                    ', '-1                      ');
INSERT INTO public.navilist (id, "powerLeval", title, "linkTo", icons, "father_Link") VALUES (3, 2, '博文编辑                    ', 'blogEditor              ', 'highligh                ', 'BlogHandle              ');
INSERT INTO public.navilist (id, "powerLeval", title, "linkTo", icons, "father_Link") VALUES (2, 1, '博文处理                    ', 'BlogHandle              ', 'book                    ', '-1                      ');
INSERT INTO public.navilist (id, "powerLeval", title, "linkTo", icons, "father_Link") VALUES (8, 3, '博文测试                    ', 'blogTest                ', 'edit                    ', 'blogEditor              ');
INSERT INTO public.navilist (id, "powerLeval", title, "linkTo", icons, "father_Link") VALUES (9, 2, '博文列表                    ', 'blogList                ', 'edit                    ', 'BlogHandle              ');


--
-- Data for Name: product_class; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.product_class (id, name, is_enable) VALUES (1, 'H                       ', '0');
INSERT INTO public.product_class (id, name, is_enable) VALUES (2, 'World                   ', '1');
INSERT INTO public.product_class (id, name, is_enable) VALUES (3, '糖果                      ', '1');
INSERT INTO public.product_class (id, name, is_enable) VALUES (4, '饼干                      ', '1');


--
-- Data for Name: visitRecode; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."visitRecode" ("dateTime", "visitIP", code, ip_inner, valueindex, reserve_3) VALUES ('1540885347      ', '117.157.103.239 ', '620102      ', '192.168.0.250   ', 7, NULL);


--
-- Name: manager_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.manager_id_seq', 1, true);


--
-- Name: navilist_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.navilist_id_seq', 9, true);


--
-- Name: product_class_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_class_id_seq', 10, true);


--
-- Name: product_class_id_seq1; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.product_class_id_seq1', 4, true);


--
-- Name: articalTable articalTable_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."articalTable"
    ADD CONSTRAINT "articalTable_pkey" PRIMARY KEY (id);


--
-- Name: cityInfomation cityInfomation_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."cityInfomation"
    ADD CONSTRAINT "cityInfomation_pkey" PRIMARY KEY (code);


--
-- Name: manager manager_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.manager
    ADD CONSTRAINT manager_pkey PRIMARY KEY (id);


--
-- Name: navilist naviList_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.navilist
    ADD CONSTRAINT "naviList_pkey" PRIMARY KEY (id);


--
-- Name: product_class product_class_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product_class
    ADD CONSTRAINT product_class_pkey PRIMARY KEY (id);


--
-- Name: visitRecode visitRecode_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."visitRecode"
    ADD CONSTRAINT "visitRecode_pkey" PRIMARY KEY ("dateTime");


--
-- Name: manager_is_enable_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX manager_is_enable_idx ON public.manager USING btree (is_enable);


--
-- Name: manager_last_login_time_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX manager_last_login_time_idx ON public.manager USING btree (last_login_time);


--
-- Name: manager_login_name_idx; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX manager_login_name_idx ON public.manager USING btree (login_name);


--
-- PostgreSQL database dump complete
--

