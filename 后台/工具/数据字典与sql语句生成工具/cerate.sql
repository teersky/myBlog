CREATE TABLE public.manager (
 id serial NOT NULL,
 login_name text DEFAULT '' NOT NULL,
 login_password text DEFAULT '' NOT NULL,
 last_login_time timestamp(0) WITHOUT TIME ZONE,
 last_login_ip text DEFAULT '',
 login_count integer DEFAULT 0,
 is_enable integer DEFAULT 1,
 add_time timestamp(0) WITHOUT TIME ZONE,
CREATE TABLE public.articalTable (
 reserive_1 text DEFAULT '',
 reserive_2 text DEFAULT '',
 reserive_3 text DEFAULT '',
  CONSTRAINT articalTable_pkey PRIMARY KEY(id)
)
WITH(oids = false);

COMMENT ON TABLE public.manager IS '管理员管理表'; 
COMMENT ON COLUMN public.manager.id IS '主键Id'; 

COMMENT ON COLUMN public.manager.login_name IS '登陆账号'; 

COMMENT ON COLUMN public.manager.login_password IS '登陆密码'; 

COMMENT ON COLUMN public.manager.last_login_time IS '最后登陆时间'; 

COMMENT ON COLUMN public.manager.last_login_ip IS '最后登陆IP'; 

COMMENT ON COLUMN public.manager.login_count IS '登陆次数'; 

COMMENT ON COLUMN public.manager.is_enable IS '账号是否启用，1=true(启用)，0=false（禁用）'; 

COMMENT ON COLUMN public.manager.add_time IS '注册时间'; 

COMMENT ON COLUMN public.articalTable.reserive_1 IS '保留字1'; 

COMMENT ON COLUMN public.articalTable.reserive_2 IS '保留字2'; 

COMMENT ON COLUMN public.articalTable.reserive_3 IS '保留字3'; 



CREATE TABLE public.cityInfomation (
 code text DEFAULT '' NOT NULL,
 parentCode text DEFAULT '',
 level text DEFAULT '',
 name text DEFAULT '',
 latitude text DEFAULT '',
 longitude text DEFAULT '',
CREATE TABLE public.articalTable (
 reserive_1 text DEFAULT '',
 reserive_2 text DEFAULT '',
 reserive_3 text DEFAULT '',
  CONSTRAINT articalTable_pkey PRIMARY KEY(code)
)
WITH(oids = false);

COMMENT ON TABLE public.cityInfomation IS '城市信息表'; 
COMMENT ON COLUMN public.cityInfomation.code IS '主键城市编号'; 

COMMENT ON COLUMN public.cityInfomation.parentCode IS '父级城市编号'; 

COMMENT ON COLUMN public.cityInfomation.level IS '城市等级'; 

COMMENT ON COLUMN public.cityInfomation.name IS '城市名称'; 

COMMENT ON COLUMN public.cityInfomation.latitude IS '纬度'; 

COMMENT ON COLUMN public.cityInfomation.longitude IS '经度'; 

COMMENT ON COLUMN public.articalTable.reserive_1 IS '保留字1'; 

COMMENT ON COLUMN public.articalTable.reserive_2 IS '保留字2'; 

COMMENT ON COLUMN public.articalTable.reserive_3 IS '保留字3'; 



CREATE TABLE public.visitRecode (
 dataTime integer DEFAULT 0 NOT NULL,
 visitIP text DEFAULT '',
 code integer,
 ip_inner text DEFAULT '',
 valueIndex integer,
CREATE TABLE public.articalTable (
 reserive_1 text DEFAULT '',
 reserive_2 text DEFAULT '',
 reserive_3 text DEFAULT '',
  CONSTRAINT articalTable_pkey PRIMARY KEY(dataTime)
)
WITH(oids = false);

COMMENT ON TABLE public.visitRecode IS '城市信息表'; 
COMMENT ON COLUMN public.visitRecode.dataTime IS '访问时间（主键）'; 

COMMENT ON COLUMN public.visitRecode.visitIP IS '访问外网IP'; 

COMMENT ON COLUMN public.visitRecode.code IS '访问地编号'; 

COMMENT ON COLUMN public.visitRecode.ip_inner IS '访问内网IP'; 

COMMENT ON COLUMN public.visitRecode.valueIndex IS '访问次数'; 

COMMENT ON COLUMN public.articalTable.reserive_1 IS '保留字1'; 

COMMENT ON COLUMN public.articalTable.reserive_2 IS '保留字2'; 

COMMENT ON COLUMN public.articalTable.reserive_3 IS '保留字3'; 



CREATE TABLE public.articalTable (
 id integer DEFAULT 0 NOT NULL,
 artical_name text DEFAULT '',
 artical_type text DEFAULT '',
 likesNum integer,
 answerNum integer,
 readNum integer,
 artical text DEFAULT '',
 reserive_1 text DEFAULT '',
 reserive_2 text DEFAULT '',
 reserive_3 text DEFAULT '',
  CONSTRAINT articalTable_pkey PRIMARY KEY(id)
)
WITH(oids = false);

COMMENT ON TABLE public.articalTable IS '城市信息表'; 
COMMENT ON COLUMN public.articalTable.id IS '文章提交时间（主键）'; 

COMMENT ON COLUMN public.articalTable.artical_name IS '文章名称'; 

COMMENT ON COLUMN public.articalTable.artical_type IS '文章类型'; 

COMMENT ON COLUMN public.articalTable.likesNum IS '点赞量'; 

COMMENT ON COLUMN public.articalTable.answerNum IS '回复量'; 

COMMENT ON COLUMN public.articalTable.readNum IS '阅读量'; 

COMMENT ON COLUMN public.articalTable.artical IS '文章'; 

COMMENT ON COLUMN public.articalTable.reserive_1 IS '保留字1'; 

COMMENT ON COLUMN public.articalTable.reserive_2 IS '保留字2'; 

COMMENT ON COLUMN public.articalTable.reserive_3 IS '保留字3'; 



