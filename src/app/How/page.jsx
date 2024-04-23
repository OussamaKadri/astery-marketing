'use client';
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import CTA from '../components/CTA';
import emailjs from '@emailjs/browser';
import { useRef , useState  } from 'react';

function page() {

  const FormRef = useRef(null);
  const [send , Setsend] = useState(false);


  // send function 



  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_aym94ss', 'template_gn0vmss', FormRef.current, {
        publicKey: 'Xp5RYw49Whi7bcouW',
      })
      .then(
        () => {
          Setsend(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };




  return (
    <section className='bg-black w-[100vw] h-[560vh] overflow-hidden lg:h-[360vh] flex flex-col items-center md:h-[360vh]   '>
{/* photos and the who we are */}
<div className=' w-full h-[13vh] text-center text-white text-[35px] g bg-black pt-8 ' >من نحن ؟ </div>
<motion.div className=' h-[250vh] lg:h-[50vh md:h-[30vh] w-full bg-black flex items-center justify-evenly flex-col lg:flex-row md:flex-row md:py-10 sm:h-[200vh] '>
<img src="/Artboard 1.jpg" alt="" className=' lg:w-[18%] w-[80%] md:w-[18%] ' />
<img src="/Artboard 2.png" alt=""className=' lg:w-[18%] w-[80%] md:w-[18%] ' />
<img src="/Artboard 3.jpg" alt="" className=' lg:w-[18%] w-[80%]  md:w-[18%]  '/>
<img src="/Artboard 4.png" alt="" className=' lg:w-[18%] w-[80%]  md:w-[18%] '/>
<img src="/Artboard 5.png" alt="" className=' lg:w-[18%]  w-[80%]  md:w-[18%] '  />
</motion.div>
<hr></hr>

<div className=' w-full flex flex-col items-center pb-5 '>
<div className=' w-[50%] text-center pt-10 text-white IBM  '>

 
 
 تعتبر  من أفضل وكالات التسويق الالكتروني في الشرق الأوسط مهمتها الأولى والأخيرة هي مساعدتك في تحقيق أهدافك وذلك عبر تصميم إستراتيجيات تسويقية خاصة بإستغلال مختلف الوسائل الفعالة .

<ul className=' flex mt-4 items-center flex-wrap justify-center '>
<li>Paid Ads</li>
<li>Web Devlepment</li>
<li>Content Marketing</li>
<li>Social Media Marketing</li>
<li>Marketing Plan </li>
<li>Video editing</li>
<li>Designe</li>





</ul>

</div>

</div>

<hr />

{/* woork prosses  */}
 <div className=' py-5 px-6 '>
<div className=' text-center g text-[#1F53FF] text-[35px] w-full   '> طريقة العمل</div>
<ul className=' w-full pt-11 flex flex-col gap-8 '>

<li>
    <h1 className=' text-white text-center text-[25px] font-bold IBM '>       أولا - الإجابة على الأسئلة        </h1>
    <p className=' text-white text-center '> "Google - Form "بعد تواصلك معنا سيتم إرسال   مجموعة من الأسئلة يتوجب الإجابة عليها لتحديد موعد الإجتماع و الأخذ ببعض المعلومات</p>


</li>


<li>
<h1 className=' text-white text-center text-[25px] font-bold IBM '>  ثانيا - عقد إجتماع  </h1>
<p className=' text-white text-center '> بعد تواصلك معنا سيتم عقد إجتماع على أحد هذه المنصات </p>
<ul className=' w-full flex justify-evenly pt-5 pb-16 flex-wrap  '>
  <li><Link href="/" className=' text-white font-semibold hover:underline ' >Google Mettes</Link></li>
  <li><Link href="/" className=' text-white font-semibold hover:underline ' >Skype</Link></li>
  <li><Link href="/"className=' text-white font-semibold hover:underline '  >Zoom </Link></li>
  <li><Link href="/" className=' text-white font-semibold hover:underline ' >Whatsapp</Link></li>
  <li><Link href="/" className=' text-white font-semibold hover:underline '  > Messenger</Link></li>
</ul>
<p className=' text-white text-center mb-1 IBM ' > : سيتم في هذا الإجتماع تحديد ما يلي - </p>
<p className=' text-white text-center mb-1 IBM '> فهم نوع الشركة او الخدمة او المنتج  -</p>
<p className=' text-white text-center mb-1 IBM ' > تحديد الفئة المستهدفة  - </p>
<p className=' text-white text-center mb-1 IBM ' > تحديد المشاكل  - </p>
<p className=' text-white text-center mb-1 IBM ' > تحديد الأهداف - </p>
<p  className=' text-white text-center mb-1 IBM ' >تحديد السعر و المدة  - </p>


</li>






<li>
<h1 className=' text-white font-bold IBM text-[25px] text-center  '>  ثالثا - التوقيع على العقد  </h1>
<p className=' text-white text-center IBM  mt-2 '> عد عقد الاجتماع سيتم إرسال عقد لحضرتك يحتوي على جميع الشروط و المستحقات الضمانات  </p>

</li>



<li>
<h1 className=' text-white font-bold IBM text-[25px] text-center  ' > رابعا </h1>
<p className=' text-white text-center IBM  mt-2 ' > بعد التوقيع سيتوجب عليك دفع الدفعة الاولى من سعر العقد و عند الدفع يشرع فريق العمل في دراسة السوق و الجمهور المستهدف و تصميم إستراتيجيات تسويقية مناسبة و فعالة لجمهورك الخاص و تنفيذ المتطلبات اذا نقصت كموقع الكتروني او هوية تجارية رقمية ومن ذلك وهذا لضمان نجاح الاستراتيجية التسويقية. </p>
</li>






 <li className=' px-2 py-2 border-red-500 border-2  '>
<h1 className='  text-red-400  text-center text-[25px] font-bold IBM  '> ملاحظة</h1>
<p className=' text-white text-center IBM  mt-2 ' >  وتكون بالتقسيط على مدة العقد PayPal طريقة الدفع تكون عن طريق منصة    </p> 

</li> 

</ul>
{/* CTA  */}
<section className=' flex  flex-col items-center justify-around gap-8 lg:flex-row  md:flex-row '>

<form  className='  w-[90%] lg:w-[65%] lg:mt-12 md:mt-12   '  autoComplete='off' ref={FormRef} onSubmit={sendEmail} >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Get It Know 
            
            
              </p><div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                الإسم الكامل
                </label>
                <input placeholder="الإسم الكامل" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"  type="text"  name='Name'   />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                البريد الإلكتروني
                </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder="البريد الإلكتروني"  type="email"  name='email'   />
              </div>
              <div className=' flex gap-3'>

              

                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder=" رقم الهاتف"  type="number" name='phone'/>            

            
                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder=" نوع الشركة "  type="text" name='buisniss'/>            
                 </div>
                 <div>

                <label className="block mb-2 text-sm font-medium text-gray-900">
                الرسالة أو نوع الخدمة 
                </label>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder=" الرسالة أو نوع الخدمة "  type="text" name='message'/>            
                 </div>
    
  { send ? 
  <motion.div className=' text-green-600 IBM text-[17px] ' animate={{ x : 0 }} initial={{x:-200}} transition={{ duration:1}}  > Sucsses ! </motion.div> 
  : 
  <div></div>
  }


              <button className="w-full bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  focus:ring-blue-800 text-white" type="submit">
                Send
              </button>
            
          </div>
        </div>
      </div>
      
      </form>




      {/* ////////////////////////////////////////////////////////////////// */}




      <section className='lg:w-[30%] lg:h-[80%]  '> 



<div className=' w-full h-[25%] border-b-2 border-white flex items-center justify-between px-4 '>
    <Link href="/"><img src="/whatsapp.png" alt="whatsappa png" className=' w-4 lg:w-9 ' /></Link>
    <Link href="/" className=' IBM text-[#1f53ffea] hover:underline '>Whatsapp</Link>
</div>



<div className=' w-full h-[25%] border-b-2 border-white flex items-center justify-between px-4 '>
    <Link href="/"><img src="/instagram.png" alt="" className=' w-4 lg:w-9 ' /></Link> 
    <Link href="/" className=' IBM text-[#1f53ffea]  hover:underline'>Instagram</Link>
</div>



<div className=' w-full h-[25%] border-b-2 border-white flex items-center justify-between px-4 '>
    <Link href="/"><img src="/twitter.png" alt="" className=' w-4 lg:w-9 ' /></Link>
    <Link href="/" className=' IBM text-[#1f53ffea]  hover:underline'>Twitter</Link>
</div>



<div className=' w-full h-[25%] border-b-2 border-white flex items-center justify-between px-4 '>
    <Link href="/"><img src="/snapchat.png" alt="" className=' w-4 lg:w-9 ' /></Link>
    <Link href="/" className=' IBM text-[#1f53ffea]  hover:underline '>Snapchat</Link>
</div>





</section>





</section>


 </div>







    </section>
  )
}

export default page