--
-- PostgreSQL database dump
--

-- Dumped from database version 14.17 (Debian 14.17-1.pgdg120+1)
-- Dumped by pg_dump version 14.17 (Debian 14.17-1.pgdg120+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: alembic_version; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public.alembic_version (
    version_num character varying(32) NOT NULL
);


ALTER TABLE public.alembic_version OWNER TO neondb_owner;

--
-- Name: tasks; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public.tasks (
    id integer NOT NULL,
    title character varying NOT NULL,
    description character varying,
    status character varying,
    due_date timestamp without time zone,
    user_id integer
);


ALTER TABLE public.tasks OWNER TO neondb_owner;

--
-- Name: tasks_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public.tasks_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tasks_id_seq OWNER TO neondb_owner;

--
-- Name: tasks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public.tasks_id_seq OWNED BY public.tasks.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: myuser
--

CREATE TABLE public.users (
    id integer NOT NULL,
    email character varying NOT NULL,
    hashed_password character varying NOT NULL,
    created_at timestamp without time zone
);


ALTER TABLE public.users OWNER TO neondb_owner;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: myuser
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO neondb_owner;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: myuser
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: tasks id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.tasks ALTER COLUMN id SET DEFAULT nextval('public.tasks_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: alembic_version; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public.alembic_version (version_num) FROM stdin;
f4aa9d0597be
\.


--
-- Data for Name: tasks; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public.tasks (id, title, description, status, due_date, user_id) FROM stdin;
135	dsd	ds	pending	0002-02-22 00:00:00	35
127	fd	df	pending	2025-06-07 00:00:00	35
126	fdd	df	pending	2025-06-07 00:00:00	35
114	gf	f	pending	2025-06-06 00:00:00	35
145	gf	gfg	pending	0524-04-05 00:00:00	35
113	rdg	gdf	pending	2025-06-05 00:00:00	35
146	gdrg	dg	pending	2025-06-21 00:00:00	35
116	ssss	dd	pending	2025-06-12 00:00:00	35
117	dddr	ake your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.	pending	2025-06-21 00:00:00	35
118	d	ake your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.	pending	2025-06-13 00:00:00	35
119	hhgtgh	 4,069,426 views  Aug 28, 2020 Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.	pending	2025-06-13 00:00:00	35
147	fcd	d	pending	2025-06-06 00:00:00	35
139	cfdfd	gfd45	pending	0004-05-04 00:00:00	35
128	d	sdsd	pending	2025-06-06 00:00:00	35
129	d	ds	pending	0474-05-04 00:00:00	35
140	rer	re	pending	0034-03-04 00:00:00	35
141	e	erfd	pending	2025-06-13 00:00:00	35
136	fdff	f	pending	2025-06-07 00:00:00	35
130	s	s	pending	0006-04-06 00:00:00	35
131	d	fd	pending	0005-05-06 00:00:00	35
98	fsf	sf	done	2025-06-13 00:00:00	35
132	d	d	done	0004-04-04 00:00:00	35
80	dsd	swd	done	2025-05-02 00:00:00	24
81	bomi	123	done	2025-05-03 00:00:00	27
149	ded	ede	pending	2025-06-14 00:00:00	35
150	dded	de	pending	2025-06-14 00:00:00	35
83	uty	rty	done	2025-04-29 00:00:00	28
84	s	s	done	2025-05-24 00:00:00	32
169	dewed	wededwed	pending	2025-06-13 00:00:00	35
171	fefef	fef	pending	2025-06-06 00:00:00	35
175	lijiopijpo	fferf	pending	2025-06-13 00:00:00	35
89	Read 10 pages of a book	Focus: non-fiction or self development	pending	2025-06-24 00:00:00	34
88	Pay electricity bill	Via mobile banking before due date	done	2025-05-23 00:00:00	34
87	Fix dark mode text alignment issue.	Resolve the misalignment bug affecting placeholder text in dark mode for task input fields.	pending	2025-05-17 00:00:00	34
176	csc	sd	pending	2025-06-05 00:00:00	35
177	dwd	dwd	pending	2025-06-13 00:00:00	35
178	dwd	dwd	pending	2025-06-13 00:00:00	35
182	gg	dfg	pending	2025-06-13 00:00:00	35
183	gfd	g	pending	2025-06-06 00:00:00	35
184	hjl	gg	pending	2025-06-13 00:00:00	35
185	ff	f	pending	2025-06-13 00:00:00	35
124	ds	dsfedf	pending	2025-06-12 00:00:00	35
93	dssd	ds	done	2025-06-06 00:00:00	35
94	dws	dew	pending	2025-06-12 00:00:00	35
95	dw	wd	pending	2025-06-06 00:00:00	35
96	ded	edwd	pending	2025-06-06 00:00:00	35
97	dd	dd	pending	2025-06-13 00:00:00	35
151	jyruy	jhTake yourTake your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more. Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.	pending	2025-06-13 00:00:00	35
152	ds	dTake your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.	pending	2025-07-04 00:00:00	35
153	dsd	Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.	pending	0214-04-05 00:00:00	35
154	gdfgdf	ggfdgTake your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.	pending	2025-06-14 00:00:00	35
168	frfer	frfrfrfdfecedcvregvgefffrfdfrfrfrfrfgkopfugfujgopfugofrfrfrrfrfrcccsdgvvefdfvfvfvvdfcvpfugopfujgopfvpofjvpofjvffed	pending	2025-06-14 00:00:00	35
170	fefw	effwef	pending	2025-06-18 00:00:00	35
172	gtrg	rtgrt	pending	2025-06-05 00:00:00	35
179	dsd	ds	pending	2025-06-13 00:00:00	35
155	dss	dflex flex-col md:flex-rowflex flex-col md:flex-rowflex flex-col md:flex-rowflex flex-col md:flex-rowflex flex-col md:flex-rowflex flex-col md:flex-rowflex flex-col md:flex-rowflex flex-col md:flex-rowflex flex-col md:flex-rowflex flex-col md:flex-rowflex flex-col md:flex-rowflex flex-col md:flex-rowflex flex-col md:flex-rowflex flex-col md:flex-row	pending	2025-06-05 00:00:00	35
181	dsd	sad	pending	2025-06-07 00:00:00	35
197	dsd	dsds	pending	2025-06-14 00:00:00	35
198	dsd	sd	pending	2025-06-06 00:00:00	35
199	hj	h	pending	0254-05-24 00:00:00	35
200	fgdf	gfg	pending	2025-06-13 00:00:00	35
194	gtg	grg	pending	2025-06-17 00:00:00	35
210	rer	re	pending	2025-06-07 00:00:00	35
204	fd	fdf	done	2025-06-24 00:00:00	35
205	gfg	fgfdg	done	2025-06-04 00:00:00	35
206	gf	f	pending	2025-06-14 00:00:00	35
201	yty	yty	done	2025-06-14 00:00:00	35
202	dsd	s	pending	2025-06-07 00:00:00	35
207	fdf	fdffefedsfdsfdfl;jl;frjfgggopdjgpdosfgjodsgjfsdpofgjsdopfjdsopfjdslfjdslfjsl;fj;sldfjkl;g	pending	2025-06-14 00:00:00	35
209	f	fffffrefgregfTake your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.	pending	2025-06-12 00:00:00	35
211	rer	rer	pending	2025-06-06 00:00:00	35
215	jghj	hgjgj	pending	2025-06-06 00:00:00	35
203	sd	ds	done	2025-06-14 00:00:00	35
214	fdf	fd	pending	6546-04-05 00:00:00	35
216	gfg	gfg	pending	2025-06-20 00:00:00	35
217	d	dsd	pending	2025-06-14 00:00:00	35
218	df	dfdf	pending	2025-06-12 00:00:00	35
220	sa	as	pending	2025-06-13 00:00:00	35
219	h	hgfh	pending	2025-06-21 00:00:00	35
221	dsd	sds	pending	2025-06-07 00:00:00	35
225	gfg	gdg	pending	2025-06-07 00:00:00	35
228	rth	thhth	pending	2025-06-07 00:00:00	35
247	ghrty	hfg	pending	2025-06-21 00:00:00	36
157	hhth	Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.	done	2025-06-21 00:00:00	35
159	s	eTake your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as thre	pending	2025-06-20 00:00:00	35
160	dwdw	ddw	pending	2025-06-21 00:00:00	35
161	dw	ddw	pending	2025-06-20 00:00:00	35
162	dwd	dwd	pending	2025-06-05 00:00:00	35
163	dwdwd	wd	pending	2025-06-12 00:00:00	35
164	dwdw	ddedeTake your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as thredwd	pending	2025-06-07 00:00:00	35
158	ewew	eTake your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.	pending	2025-06-27 00:00:00	35
165	dwded	edsdsf	pending	2025-06-21 00:00:00	35
167	dewde	dd	pending	2025-06-07 00:00:00	35
222	ddwedwedewjjghjhgjhgjhgjhgjfghjfgjfjhfjhgdnfgnfghjjnfhjfhjfhjhfjfhewdewdewdewdwedewewweewweweewf	frf	pending	2025-06-21 00:00:00	35
224	5t	tr	pending	2025-06-06 00:00:00	35
242	d	adsasd	pending	2025-06-14 00:00:00	35
223	y7ryTake your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.	ytryTake your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.	pending	2025-06-14 00:00:00	35
227	mh	mj	pending	2025-06-14 00:00:00	35
230	fdgdfgdfgdfgdfgfdgdfgdfgdfgdfgfdgdfgdfgdfgdfgfdgdfgdfgdfgdfgfdgdfgdfgdfgdfgfdgdfgdfgdfgdfg	fdgdfgdfgdfgdfgfdgdfgdfgdfgdfgfdgdfgdfgdfgdfgfdgdfgdfgdfgdfg	pending	2025-06-14 00:00:00	35
237	dwTake your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.	dwTake your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.	pending	2025-06-13 00:00:00	35
239	jhfjf	jhgfgh	done	2025-06-12 00:00:00	35
241	ddd	d	pending	2025-06-12 00:00:00	35
245	ded	dedsde	pending	2025-06-13 00:00:00	35
226	Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.	utyuyjyytTake your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.hjtyjtyjryjryj	pending	2025-06-07 00:00:00	35
229	trhth	ht	pending	2025-06-13 00:00:00	35
231	dsdTake your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.	sdsTake your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.	pending	2025-06-21 00:00:00	35
233	yty	Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.rtuyruru	pending	2025-06-14 00:00:00	35
236	das	d	pending	2025-06-07 00:00:00	35
238	hfg	hhfgh	pending	2025-06-05 00:00:00	35
244	grgrg	gdrg	pending	2025-06-07 00:00:00	35
232	Take ddyour Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.dd	Take your Python skills to the next level with this intermediate Python course. First, you will get a review of basic concepts such as lists, strings, and dictionaries, but with an emphasis on some lesser known capabilities. Then, you will learn more advanced topics such as threading, multiprocessing, context managers, generators, and more.	pending	2025-06-26 00:00:00	35
240	fe	fsf	pending	2025-06-07 00:00:00	35
243	sas	sas	pending	2025-06-16 00:00:00	35
246	fesfhjfgghgfhfghgfdsaafdadfasdadasdhhgddfgdfgdfgdfgdfgdrfgdfgdfgdf	gfhdthdtghfghdthdthdhdhdhd	pending	2025-06-13 00:00:00	35
248	gfh	hgfhf	pending	2025-06-19 00:00:00	36
249	es	fdf	pending	2025-06-07 00:00:00	35
250	gfg	frgfg	pending	2025-06-12 00:00:00	35
251	ded	ds	pending	2025-06-14 00:00:00	35
252	dwd	ww	pending	2025-06-06 00:00:00	35
253	hthf	fh	pending	2025-06-14 00:00:00	35
254	tty6ry	gdrgdftgrdgdfgdgttyrtyrtyryrtyrtyettyfghtryhrt	pending	2025-06-19 00:00:00	35
256	trtr	grgrgdfg	pending	2025-06-14 00:00:00	35
257	fdsfdsf	sfdsfdfdsfsdfdf	pending	2025-06-19 00:00:00	35
258	fdf	sfs	pending	2025-06-07 00:00:00	35
259	fdsfsd	fdsfdsfsdfsdf	pending	2025-06-20 00:00:00	35
260	dwdw	dwd	pending	2025-06-05 00:00:00	35
262	dssd	dasda;lop	pending	2025-06-27 00:00:00	35
263	hrthrthrt	hrthrt	pending	2025-06-11 00:00:00	35
264	ds	dsd	pending	2025-06-20 00:00:00	35
265	ss	sddsd	pending	2025-06-27 00:00:00	35
266	trt	r	pending	2025-06-19 00:00:00	35
300	s	dsdi	pending	2025-06-20 00:00:00	35
302	rerw	rewr	pending	2025-07-04 00:00:00	35
303	rwe	rwer	pending	2025-06-20 00:00:00	35
304	dd	dsd	pending	2025-07-05 00:00:00	35
305	fe	fef	pending	2025-06-19 00:00:00	35
306	fdf	sfdf	pending	2025-06-12 00:00:00	35
307	fdfsdf	fd	pending	2025-06-20 00:00:00	35
308	fdsf	fdf	pending	2025-07-05 00:00:00	35
309	test	test	pending	2025-06-24 00:00:00	40
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: myuser
--

COPY public.users (id, email, hashed_password, created_at) FROM stdin;
24	2@gmail.com	$2b$12$/aKwMmAc8UFVnXU5rI6cwOnrm6kJi/kj1Z6UHPTOwswNQ406C1tRi	2025-05-19 14:02:41.895524
25	3@gmail.com	$2b$12$lySnJNfSFqit12a0AdvCguXrr3BkJMGTVpCLhlVbISmU91osKET0u	2025-05-19 15:36:10.625331
26	1@gmail.com	$2b$12$nMkMMkx4RNpnRChZeHiL1e8AcPdVzbCd2ozWMbXWwRwW90DQhKXoi	2025-05-19 15:53:52.33972
27	23@gmail.com	$2b$12$.hXrPxNJB.UOjMKB4bP1gO2DjZIxAxSUYOT1HpQSWOIkB/dIpbENS	2025-05-19 16:41:02.90656
28	111@g.com	$2b$12$eBjGfQqrDnT6lDwE5xWR2uA4UvyQ3sRVhnMIvtyp0Bq/CZg9HsomK	2025-05-19 16:45:52.933523
32	bomi@gmail.com	$2b$12$00Wq/3vM1OjYJ9vHEADNdOAay8HvGlPmnWpWtZFPAcfyz40JmQ8BO	2025-05-20 08:51:20.24156
33	33@g.com	$2b$12$s5jRlwq4rllekYUkUxC/x.3QabCDWuRHzNB8CSUksjIYOw7MyLj/O	2025-05-20 09:26:51.320717
34	1234@gmail.com	$2b$12$iL3pVJ9IzXSoejwpuVTX1uCe.fM50WOQoHdP0a/4g0mVA8SY8M78O	2025-06-03 16:50:02.080245
35	Thebowiiz2543@gmail.com	$2b$12$TmiqoETNy474xE0z/6oUzOVlEzXPLO.tPWBzj9VU893pgjlHY2yey	2025-06-21 17:39:33.287286
36	Thebowiiz@gmail.com	$2b$12$QF2edlMg8xfgS8zqAsXxUOiRsVqXj4ilLHS7tFJJdqRlqUbCW2cm.	2025-06-23 08:00:14.575828
37	1Thebowiiz@gmail.com	$2b$12$t9kl7RL4Fvci6tzadc4vtuZiFzu90YfvgvpUpk/w/V3yT1tDlzo56	2025-06-23 09:46:36.322495
38	2Thebowiiz2543@gmail.com	$2b$12$gfuVyw6wdsJgIB59aXCFeeOMy53IN3sJufFWIS1Jpq1Rr9pL/Fy1.	2025-06-23 09:46:47.425538
39	3Thebowiiz2543@gmail.com	$2b$12$7vnRPsFXFYWJLw7amuGQKeB9NdB6x2vyCHXhI9dPcB9bFv4Th2UOO	2025-06-23 09:46:56.75048
40	4@gmail.com	$2b$12$pDa26vkhmTSNsQhC/DyoluIWSt5Gwz1WgXfSGIiVM7qLzOnOyNxuq	2025-06-24 14:33:37.620407
41	5@gmail.com	$2b$12$nyqd1y.JAB2oqjerK1HN1eeSz1iInHeqE3alUXtCjIg4RYfrk6fse	2025-06-24 14:34:41.05835
\.


--
-- Name: tasks_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public.tasks_id_seq', 309, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: myuser
--

SELECT pg_catalog.setval('public.users_id_seq', 41, true);


--
-- Name: alembic_version alembic_version_pkc; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.alembic_version
    ADD CONSTRAINT alembic_version_pkc PRIMARY KEY (version_num);


--
-- Name: tasks tasks_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT tasks_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: ix_tasks_id; Type: INDEX; Schema: public; Owner: myuser
--

CREATE INDEX ix_tasks_id ON public.tasks USING btree (id);


--
-- Name: ix_users_email; Type: INDEX; Schema: public; Owner: myuser
--

CREATE UNIQUE INDEX ix_users_email ON public.users USING btree (email);


--
-- Name: ix_users_id; Type: INDEX; Schema: public; Owner: myuser
--

CREATE INDEX ix_users_id ON public.users USING btree (id);


--
-- Name: tasks tasks_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: myuser
--

ALTER TABLE ONLY public.tasks
    ADD CONSTRAINT tasks_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

