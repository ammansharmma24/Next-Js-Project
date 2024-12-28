import React from 'react'

const Footer = () => {
  return (
    <footer className='flex mx-10 my-10 bg-black gap-5'>
        <div className='flex-1'>
            <h1 className='font-extrabold mb-4'>About Us</h1>
            <p className='w-[22vw]'>Empowering future tech leaders with comprehensive, hands-on programming courses taught by industry experts. Join us to elevate your coding skills.</p>
        </div>
        <div className='flex-1'>
            <h1 className='font-extrabold mb-4'>Quick Links</h1>
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Courses</h3>
            <h3>Contact</h3>
        </div>
        <div className='flex-1'>
            <h1 className='font-extrabold mb-4'>Follow Us</h1>
            <h3>Facebook</h3>
            <h3>Instagram</h3>
            <h3>Twitter</h3>
        </div>
        <div>
            <h1 className='font-extrabold mb-4'>Contact Us</h1>
            <p>Email- code@gmail.com</p>
            <p>Phone- xxx-xxx-xxx-x</p>
        </div>
    </footer>
  )
}

export default Footer
