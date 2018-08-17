CREATE TABLE public.manager (
 id serial,
 login_name text DEFAULT '' NOT NULL,
 login_password text DEFAULT '' NOT NULL,
 last_login_time timestamp(0) WITHOUT TIME ZONE,
 last_login_ip text DEFAULT '',
 login_count integer DEFAULT 0,
 is_enable integer DEFAULT 1,
 add_time timestamp(0) WITHOUT TIME ZONE DEFAULT now() NOT NULL,
  CONSTRAINT manager_pkey PRIMARY KEY(id)
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


CREATE INDEX manager_login_name_idx ON public.manager USING btree(login_name);
CREATE INDEX manager_last_login_time_idx ON public.manager USING btree(last_login_time);
CREATE INDEX manager_is_enable_idx ON public.manager USING btree(is_enable);

insert into manager ("login_name", "login_password", "last_login_time", "last_login_ip", "login_count", "is_enable", "add_time") VALUES('admin', 'e10adc3949ba59abbe56e057f20f883e', '2018-7-30 12:21:50', '192.168.1.250', '1', '0', '2017-5-21 21:10:50')

select * from manager
 
update manager set "login_password" = 'E10ADC3949BA59ABBE56E057F20F883E' where "login_name" = 'admin'
update manager set "is_enable" = '1' where "login_name" = 'admin'
