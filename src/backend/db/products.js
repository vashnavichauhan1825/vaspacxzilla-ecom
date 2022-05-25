import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQf0rgYemTB60UMrvM2q-sUgprbDh2AAdIYL5YxI_MP9mHYqTK3NHhWCQden1iiLSKpEtb2ksc_xnpUuxROM_QqSArdGwB2w_Tvnk2Br7bFnoCflEHQFaFO3PE&usqp=CAE',
    alt:'space mug',
    title:'Space Mug',
    price:'$89',
    discountPrice:'$43',
    discount:"50% off",
    badge:"false",
    category:'Glasses'
  },
  {
    _id: uuid(),
    image:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTmW7-iDsD1S_hhAkzRIYnwk6y1an_pVzzvIeGTpPLsTFGzv_1-_A7u5FPutuiMO7iLbz7Cc4v23Q7vPqk-9Kif8cUZZix3KO8S33_VdV4b&usqp=CAE',
    alt:'space mug',
    title:'Space Mug',
    price:'$89',
    discountPrice:'$43',
    discount:"50% off",
    badge:"true",
    category:'Glasses'
  },
  {
    _id: uuid(),
    image:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRPhVWc55XEArgnxNTpQ5yKr3yoyWCPoJeJ7qnmjGPfpHlEcSobbJu379kSYMIwGQClCHob4Ep4A79DQAy3xMgoxUogZFXqPMCaXD_EmJZiolzIrFZRob6h&usqp=CAE',
    alt:'space mug',
    title:'Space Mug',
    price:'$89',
    discountPrice:'$43',
    discount:"50% off",
    badge:"true",
    category:'Glasses'
  },
  {
    _id: uuid(),
    image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSuDI522PKMDiz6oNwzvlJFQjESU-VItUTYQ1r-e4ZIOXl1UzFgMnZo_pGhDAt0zjUSDOFfycMG3XX-EkDo169W8Ag5lVHlSdqXm7M9NJE&usqp=CAE',
    alt:'space mug',
    title:'Space Mug',
    price:'$89',
    discountPrice:'$43',
    discount:"50% off",
    badge:"false",
    category:'Glasses'
  },
  {
    _id: uuid(),
    image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRpPNJVSJHEVQL68XrzT6K7JifeJqqGsg-kFj-eIFrYVoazpu5EjZ909NrdfD_klXCMttdtFgoaJzWUSC4NzH2XYdGVQQkwf659_u9CY6M_&usqp=CAE',
    alt:'space mug',
    title:'Space Mug',
    price:'$89',
    discountPrice:'$43',
    discount:"50% off",
    badge:"tfalse",
    category:'books'
  },
  {
    _id: uuid(),
    image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQGQoPfu42tQJjTN5GM9kGgadQN-uifB5UO4piH7ytmvA-DhxzFAQc2WwKETPkzW_bJ40BOaJmZj1FNwN21V1ibI2K-c8SzDSGpKH3TwvmNBK-7tYy5ggup_Q&usqp=CAE',
    alt:'space mug',
    title:'Space Mug',
    price:'$89',
    discountPrice:'$43',
    discount:"50% off",
    badge:"true",
    category:'books'
  },
  {
    _id: uuid(),
    image:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTvcgXmDwbzegkGfZS9gOgqs5ld1o7O8HigwszpGzi68gaUCz-gioUh1UjpfOtt3DG2blOX_au-BSy8lG-1QdMDRL4bcO6A0l0yKUxsM_k&usqp=CAE',
    alt:'space mug',
    title:'Space Mug',
    price:'$89',
    discountPrice:'$43',
    discount:"50% off",
    badge:"true",
    category:'Glasses'
  },
  {
    _id: uuid(),
    image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ8AuTS7jMoDo9kI_doRdgsavC69EurUrDU98_r1s6cS5hro8UoQtvo2XHvdwaNLeAqTcqtCrkyFAfSmzfWznYUhOpSDB5IhhSu0suoknJKMOX2veUtqXZQ&usqp=CAE',
    alt:'space mug',
    title:'Space Mug',
    price:'$89',
    discountPrice:'$43',
    discount:"50% off",
    badge:"true",
    category:'Glasses'
  },
  {
    _id: uuid(),
    image:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTwJgaYNomRRRz-Nivo4yIGEL5GlP_w7k50loIYm9OMyMD5Gf-38Z54XF8pofZvIIzr99OyD1mZL0U9FzeYldk3TNbWH_mUTgbtQShJFFc&usqp=CAE',
    alt:'space mug',
    title:'Space Mug',
    price:'$89',
    discountPrice:'$43',
    discount:"50% off",
    badge:"false",
    category:'Glasses'
  },
  {
    _id: uuid(),
    image:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTE_ZsqsmT16ojYhox0n3R03c8O9N9D2R8faDOonoX1F-AZ5PlLG4pk9vrNzXqrFhFSmzPzIiu4HgmiAJ1SxZc-JjH5zxCGEg_3ZDy8Q5dJ4wQY8Ysz79Wv&usqp=CAE',
    alt:'space mug',
    title:'Space Mug',
    price:'$89',
    discountPrice:'$43',
    discount:"50% off",
    badge:"false",
    category:'Glasses'
  },
  {
    _id: uuid(),
    image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQnPcpr5kKuMqykeMcyR2RAvfaZ5QjiU7GshzsL9P70GKBdCgxdaSCAbY7RMzDOa4DWo59H1mQqvJbfIFoPNltoxGk9dkbDhGHoUBcCJWIM5a-J-WgtF5UiqA&usqp=CAE',
    alt:'space mug',
    title:'Space Mug',
    price:'$89',
    discountPrice:'$43',
    discount:"50% off",
    badge:"false",
    category:'Glasses'
  },
  {
    _id: uuid(),
    image:'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTGoigqN0n7ErSrvsP8VgZ1jGzfY8zDKqJGDUqDO3afosIntE8k4HhGbfckQgcfbu7W6fHaT03S7V_FaE36IFJXketuCndnS9hmRtMx73i0hhscSmCrAnb4&usqp=CAE',
    alt:'space mug',
    title:'Space Mug',
    price:'$89',
    discountPrice:'$43',
    discount:"50% off",
    badge:"true",
    category:'Glasses'
  },
  {
    _id: uuid(),
    image:'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRsLyconMjvIrO9cgBL3TU5U0lT_mMzl8F4Xlm8Jhg36uDnk8M3KvxeeaUTlpdt-t4mEaSBr1M_wcr4PfZZP5BA-FjQ7EwF5bwaGPtFdFvcgQF5exSZEIi6&usqp=CAE',
    alt:'space mug',
    title:'Space Mug',
    price:'$89',
    discountPrice:'$43',
    discount:"50% off",
    badge:"false",
    category:'Glasses'
  },
  {
    _id: uuid(),
    image:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRtqdaZs2rE5XUnFsa7Yqhw4rmGfj-xiGqw0aYHYg2bzruD1iiKZOUV-xahC-DiThMykC-K0rJ9lZ2G-ku2t4UUVzc1kxwEbF_5UYLU2ugj&usqp=CAE',
    alt:'space mug',
    title:'Space Mug',
    price:'$89',
    discountPrice:'$43',
    discount:"50% off",
    badge:"true",
    category:'Glasses'
  },
  {
    _id: uuid(),
    image:'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTbZD9GmdKz9iZKV-zOzeUUSK5A0jsWaFQrMYHQ5bhaYRv7HAwcq4P2FZlCtJHVaI0ydn-ZQrdr8FLjJu4Yg7ADFejkMTF8eMgSXql2p7MMA4OltOLagaSFZg&usqp=CAE',
    alt:'space mug',
    title:'Space Mug',
    price:'$89',
    discountPrice:'$43',
    discount:"50% off",
    badge:"true",
    category:'Glasses'
  },
];
