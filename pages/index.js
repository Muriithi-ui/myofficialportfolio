import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail
} from 'react-icons/ai';
import Image from 'next/image';
import devbig from '../public/dev-big-wave.jpg';
import bigj1 from '../public/bigj1.jpg';
import bigj2 from '../public/bigj2.jpg';
import bigj3 from '../public/bigj3.jpg';
import bigj4 from '../public/bigj4.jpg';
import bigj5 from '../public/bigj5.jpg';
import bigj6 from '../public/bigj6.jpg';
import bigj7 from '../public/bigj7.jpg';
import bigj8 from '../public/bigj8.jpg';
import devfest2 from '../public/devfest2.jpg';
import Link from 'next/link';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web3 from '../public/web3.jpg';
import web4 from '../public/web4.jpg';
import web5 from '../public/web5.jpg';
import web6 from '../public/web6.jpg';
import cert1 from '../public/cert1.jpg';
import cert2 from '../public/cert2.jpg';
import cert3 from '../public/cert3.jpg';
import cert4 from '../public/cert4.jpg';
import { useState } from 'react';
export default function Home () {
  const[darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>John Muriithi Portfolio</title>
        <meta name='description' content='Generated by create next app'/>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='px-10 text-black bg-white md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen '>
          <nav className='flex justify-between py-10 mb-6'>
            <h1 className='text-xl font-burtons dark:text-white'>developedbyJohnMuriithi@BigJKe</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='text-2xl cursor-pointer dark:text-white ' />
              </li>
              <li><a className='px-4 py-2 ml-8 text-xl text-white rounded-md bg-gradient-to-r from-cyan-500 to-teal-500'href='https://www.canva.com/design/DAFhpNRoRr8/view'>Resume</a></li>
            </ul>
          </nav>
          <div className='p-10 text-center'>
            <h2 className='py-2 text-6xl font-medium text-teal-600 md:text-6xl' >JOHN MURIITHI</h2>
            <h3 className='mt-10 mb-10 text-3xl text-black md:text-4xl dark:text-white'>Front-End React Developer and UI Designer</h3>
            <p className='py-5 text-2xl leading-8 text-gray-800 md:text-3xl dark:text-white'>Hey there! I am John Muriithi, a self taught
            web and software developer who is passionate about learning new technologies and improving my skills. I am currently
            focusing on learning React JS and I am open to contributions, internships as well as job opportunities that will allow
            me to further my development career. I am committed to staying up-to-date with the latest technologies and best practices, and to collaborating
            closely with clients and colleagues to ensure that every project is delivered on time and on budget. With my strong desire to grow as a developer,
            I am committed to delivering quality work and finding creative solutions to challenging problems. I believe that technology has the power to transform
            society for the better, and I am dedicated to using my skills to make a positive impact on the world, one line of code at a time!</p>
          </div>
          <div className='flex justify-center gap-16 mb-10 text-6xl text-gray-600 dark:text-white'>
            <Link href={'https://twitter.com/BigJKe'}><AiFillTwitterCircle className='cursor-pointer' /></Link>
            <Link href={'https://www.linkedin.com/in/john-muriithi-7b350524b/'}><AiFillLinkedin className='cursor-pointer' /></Link>
            <Link href={'https://github.com/Muriithi-ui'}><AiFillGithub className='cursor-pointer' /></Link>
            <Link href={'mailto:johnmuriithi339@gmail.com'}><AiFillMail className='cursor-pointer' /></Link>
          </div>
        <div className='mx-auto mt-10 mb-10'>
          <div className='justify-center max-w-md py-px mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl dark:bg-gray-900 '>
            <div className='md:flex'>
              <div className='md:shrink-0'>
            <Image className='object-cover w-full h-48 md:h-full md:w-48' src={devbig} alt='' />
          </div>
          <div className='p-8'>
            <div className='text-sm font-semibold tracking-wide text-teal-600 uppercase dark:text-teal-600 '>John Muriithi</div>
            <p class="block mt-1 text-lg leading-tight font-medium text-black dark:text-white ">My Mantra</p>
            <p class="mt-2 text-gray-800 dark:text-white ">Effecting a fundamental change in life requires an effort that few people have the patience and perseverance for - The Rational Male</p>
                </div>
              </div>
            </div>
        </div>
        <div className='mx-auto mt-10 mb-10'>
          <div className='justify-center max-w-md py-px mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl dark:bg-gray-900'>
            <div className='md:flex'>
              <div className='md:shrink-0'>
            <Image className='object-cover w-full h-48 md:h-full md:w-48' src={bigj1}  alt='' />
          </div>
          <div className='p-8'>
            <div className='text-sm font-semibold tracking-wide text-teal-600 uppercase dark:text-teal-600'>John Muriithi</div>
            <p class="block mt-1 text-lg leading-tight font-medium text-black dark:text-white">My Mission</p>
            <p class="mt-2 text-gray-800 dark:text-white">To create innovative and user friendly software solutions that solve real world problems and improve lives.</p>
                </div>
              </div>
            </div>
          <div className='mx-auto mt-10 mb-10'>
          <div className='justify-center max-w-md py-px mx-auto overflow-hidden bg-white shadow-md rounded-xl md:max-w-2xl dark:bg-gray-900'>
            <div className='md:flex'>
              <div className='md:shrink-0'>
            <Image className='object-cover w-full h-48 md:h-full md:w-48' src={bigj2}  alt='' />
          </div>
          <div className='p-8'>
            <div className='text-sm font-semibold tracking-wide text-teal-600 uppercase dark:text-teal-600 '>John Muriithi</div>
            <p class="block mt-1 text-lg leading-tight font-medium text-black dark:text-white ">My Vision</p>
            <p class="mt-2 text-gray-800 dark:text-white ">To become a leading expert in the in the field of web and software development, known for creating innovative, effective and user friendly solutions that transform industries and society in general</p>
                </div>
              </div>
            </div>
        </div>
        </div>
        </section>
        <section>
          <div>
            <h3 className='mt-5 mb-5 text-3xl text-center text-black dark:text-white '>Services I offer</h3>
            <p className='py-2 text-2xl leading-8 text-center text-gray-800 dark:text-white'>
              As a <span className='text-teal-600'> front-end React developer </span> and <span className='text-teal-600'> UI designer</span>, I offer a wide range of services that can help bring your website or web application to life. I specialize in creating
              engaging and visually appealing user interfaces that are both intuitive and functional. My skills include designing and developing fully responsive web pages, intergrating APIs,
              creating custom animations and interactive elements, and also optimizing web performance. Whether you are looking to build a new website from scratch or improve an existing 
              one, I can help you achieve your goals and deliver a user experience that will not only be satisfying to you but also leave a lasting impression. 
            </p>
          </div>
          <div className='gap-10 lg:flex'>
            <div className='flex-1 p-10 my-10 text-center shadow-lg rounded-xl dark:bg-gray-900 '>
            <div className='flex justify-center'> <Image className='mx-16' src={design} alt=''  width={100} height={100} />
              <Image className='mx-16' src={design} alt='' width={100} height={100} /> </div>
              <h3 className='pt-8 pb-2 text-lg font-medium dark:text-white '>Beautiful Designs</h3>
              <p className='py-2 dark:text-white '>Let us work together in creating engaging and visually appealing user interfaces that are both intuitive and functional.</p>
              <h4 className='py-4 text-teal-600 dark:text-teal-600' >Design tools I use</h4>
              <p className='py-1 text-gray-800 dark:text-white '>Photoshop</p>
              <p className='py-1 text-gray-800 dark:text-white '>Adobe Illustrator</p>
              <p className='py-1 text-gray-800 dark:text-white '>Figma</p>
              <p className='py-1 text-gray-800 dark:text-white '>Canva</p>
            </div>
            <div className='flex-1 p-10 my-10 text-center shadow-lg rounded-xl dark:bg-gray-900'>
            <div className='flex justify-center'> <Image className='mx-16' src={consulting} alt='' width={100} height={100} />
              <Image className='mx-16' src={consulting} alt='' width={100} height={100} /> </div>
              <h3 className='pt-8 pb-2 text-lg font-medium dark:text-white '>Consultation</h3>
              <p className='py-2 dark:text-white '>I offer customized solutions and strategies to help my clients achieve their business goals through collaboration and critical analysis
              in order to identify areas for improvement and provide actionable recommendations.</p>
              <h4 className='py-4 text-teal-600 dark:text-teal-600 '>The criteria I use</h4>
              <p className='py-1 text-gray-800 dark:text-white '>Client focused approach</p>
              <p className='py-1 text-gray-800 dark:text-white '>Top notch project management skills</p>
              <p className='py-1 text-gray-800 dark:text-white '>Effective communication skills</p>
              <p className='py-1 text-gray-800 dark:text-white '>Indepth industry knowledge</p>
            </div>
            <div className='flex-1 p-10 my-10 text-center shadow-lg rounded-xl dark:bg-gray-900'>
             <div className='flex justify-center'> <Image className='mx-16' src={code} alt='' width={100} height={100} />
              <Image className='mx-16' src={code} alt='' width={100} height={100} /> </div>
              <h3 className='pt-8 pb-2 text-lg font-medium dark:text-white '>Develop your dream design</h3>
              <p className='py-2 dark:text-white'>Turn your vision into a reality! Let us work together in transforming your idea into a beatifully crafted design that not only meets your requirements but also exceeds your expectations.</p>
              <h4 className='py-4 text-teal-600 dark:text-teal-600 '>Development tools I use</h4>
              <p className='py-1 text-gray-800 dark:text-white '>React/Next JS</p>
              <p className='py-1 text-gray-800 dark:text-white '>Tailwind CSS</p>
              <p className='py-1 text-gray-800 dark:text-white '>Rapid API</p>
              <p className='py-1 text-gray-800 dark:text-white '>Vite JS</p>
              <p className='py-1 text-gray-800 dark:text-white '>GSAP Animations</p>
              <p className='py-1 text-gray-800 dark:text-white '>React Icons</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='py-2 mt-5 mb-5 text-3xl text-center text-black dark:text-white'>Certificates</h3>
            <p className='py-2 text-2xl leading-8 text-center text-gray-800 dark:text-white'>Below are the <span className='text-teal-600'> certificates </span> I have acquired in my self-learning journey</p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap' >
          <div className='flex-1 basis-1/3'><Image className='object-cover rounded-lg' width={'100%'} height={'100%'} src={cert1} alt='' /></div>
          <div className='flex-1 basis-1/3'><Image className='object-cover rounded-lg' width={'100%'} height={'100%'} src={cert2} alt='' /></div>
          <div className='flex-1 basis-1/3'><Image className='object-cover rounded-lg' width={'100%'} height={'100%'} src={cert3} alt='' /></div>
          <div className='flex-1 basis-1/3'><Image className='object-cover rounded-lg' width={'100%'} height={'100%'} src={cert4} alt='' /></div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='mt-5 mb-5 text-3xl text-center text-black dark:text-white'>Portfolio</h3>
              <p className='py-2 text-2xl leading-8 text-center text-gray-800 dark:text-white'>
              As a <span className='text-teal-600'> front-end React developer </span> and <span className='text-teal-600'> UI designer</span>, I offer a wide range of services that can help bring your website or web application to life. I specialize in creating
              engaging and visually appealing user interfaces that are both intuitive and functional. My skills include designing and developing responsive web pages, intergrating APIs,
              creating custom animations and interactive elements, and also optimizing web performance. Whether you are looking to build a new website from scratch or improve an existing 
              one, I can help you achieve your goals and deliver a user experience that will not only be satisfying to you but also leave a lasting impression. 
              </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='flex-1 basis-1/3'><Image className='object-cover rounded-lg' width={'100%'} height={'100%'} src={web3} alt='' /></div>
            <div className='flex-1 basis-1/3'><Image className='object-cover rounded-lg' width={'100%'} height={'100%'} src={web4}  alt='' /></div>
            <div className='flex-1 basis-1/3'><Image className='object-cover rounded-lg' width={'100%'} height={'100%'} src={web5} alt='' /></div>
            <div className='flex-1 basis-1/3'><Image className='object-cover rounded-lg' width={'100%'} height={'100%'} src={web6} alt='' /></div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='py-2 mt-5 mb-5 text-3xl text-center text-black dark:text-white'>Photo dump</h3>
            <p className='py-2 text-2xl leading-8 text-center text-gray-800 dark:text-white'>Hack the City, A hackathon I participated in, in the ninth edition of the Africities Summit held in Kisumu, Kenya courtesy of Lakehub in patnership with 01 Talent,
            Jokkolabs Global and United Cities and Local Governments(UCLG)</p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap' >
          <div className='flex-1 basis-1/3'><Image className='object-cover rounded-lg' width={'100%'} height={'100%'} src={bigj3} alt='' /></div>
          <div className='flex-1 basis-1/3'><Image className='object-cover rounded-lg' width={'100%'} height={'100%'} src={bigj4}  alt='bigj' /></div>
          <div className='flex-1 basis-1/3'><Image className='object-cover rounded-lg' width={'100%'} height={'100%'} src={bigj5}  alt='' /></div>
          <div className='flex-1 basis-1/3'><Image className='object-cover rounded-lg' width={'100%'} height={'100%'} src={bigj6} alt='' /></div>
          <div className='flex-1 basis-1/3'><Image className='object-cover rounded-lg' width={'100%'} height={'100%'} src={bigj7} alt='' /></div>
          <div className='flex-1 basis-1/3'><Image className='object-cover rounded-lg' width={'100%'} height={'100%'} src={bigj8} alt='' /></div>
          <p className='py-2 text-2xl leading-8 text-center text-gray-800 dark:text-white'>GDG DevFest Nairobi 2022, held at the United States International University of Africa in Nairobi, Kenya</p>
          <div className='flex-1 basis-1/3'><Image className='object-cover rounded-lg' width={'100%'} height={'100%'} src={devfest2} alt='' /></div>
          <p className='py-2 text-2xl leading-8 text-center text-gray-800 dark:text-white'>I believe that technology has the power to transform society for the better, and I am dedicated to using my skills to make a positive impact on the world - <span className='text-teal-600'>John Muriithi</span></p>
          </div>
        </section>
      </main>
    </div>
  )
}