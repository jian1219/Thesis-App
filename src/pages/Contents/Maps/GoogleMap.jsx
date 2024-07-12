import React from 'react'

function GoogleMap() {
  return (
    <div className='text-center'>
      <h1 className='mb-5 text-xl'>Location on Agusan National High School</h1>
      <div className='px-3'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1970.6513071800907!2d125.54206942280325!3d8.944237299010423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3301c047dc1fe4c1%3A0x2207cec4a6644f6b!2sAgusan%20National%20High%20School!5e0!3m2!1sen!2sph!4v1719209537173!5m2!1sen!2sph" 
          width="800" 
          height="550" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}

export default GoogleMap
