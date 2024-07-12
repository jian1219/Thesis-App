import React from 'react'

import Schedule from '../../Components/Schedule'

function Room() {
  return (
    <div className='px-5'>

      <div className='room-grid'>
        <div className='room-nav'>
          <h2 className='text-center mt-4'>ROOMS</h2>

          <div className='text-center mt-10 grid px-2 gap-1'>
            <button className='roomButton'>ROOM 1</button>
            <button className='roomButton'>ROOM 2</button>
            <button className='roomButton'>ROOM 3</button>
            <button className='roomButton'>ROOM 4</button>
            <button className='roomButton'>ROOM 5</button>
            <button className='roomButton'>ROOM 6</button>
          </div>
        </div>

        <div className='room-content mx-6'>  
          <h1 className='text-xl mt-4 '>Room Information</h1>

          <div>
            <h1>Room 1</h1>
            <h2>Adviser: Julia Shovey</h2>
            <h2>Description: dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset shee</h2>
          </div>
          <div>
            <Schedule />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Room
