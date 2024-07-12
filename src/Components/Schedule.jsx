import React from 'react'
import "./Css/Schedule.css"

function Schedule() {
  return (
    <div>
       <h1 className='text-center mt-5'>TIME TABLE</h1>
        <table className='text-black rounded-sm'>
            <tr>
                <th>Day/Period</th>
                <th>9:30-10:20</th>
                <th>10:20-11:10</th>
                <th>11:10-12:00</th>
                <th>12:00-12:40</th>
                <th>12:40-1:30</th>
                <th>1:30-2:20</th>
                <th>2:20-3:10</th>
                <th>3:10-4:00</th>
            </tr>
            <tr>
                <td class="highlight"><b>Monday</b></td>
                <td>Eng</td>
                <td>Mat</td>
                <td>Che</td>
                <td rowspan="6" class="special"><b>LUNCH</b></td>
                <td colspan="3" class="special">LAB</td>
                <td>Phy</td>
            </tr>
            <tr>
                <td class="highlight"><b>Tuesday</b></td>
                <td colspan="3" class="special">LAB</td>
                <td>Eng</td>
                <td>Che</td>
                <td>Mat</td>
                <td class="special">SPORTS</td>
            </tr>
            <tr>
                <td class="highlight"><b>Wednesday</b></td>
                <td>Mat</td>
                <td>Phy</td>
                <td>Eng</td>
                <td>Che</td>
                <td colspan="3">LIBRARY</td>
            </tr>
            <tr>
                <td class="highlight"><b>Thursday</b></td>
                <td>Phy</td>
                <td>Eng</td>
                <td>Che</td>
                <td colspan="3" class="special">LAB</td>
                <td>Mat</td>
            </tr>
            <tr>
                <td class="highlight"><b>Friday</b></td>
                <td colspan="3" class="special">LAB</td>
                <td>Mat</td>
                <td>Che</td>
                <td>Eng</td>
                <td>Phy</td>
            </tr>
            <tr>
                <td class="highlight"><b>Saturday</b></td>
                <td>Eng</td>
                <td>Che</td>
                <td>Mat</td>
                <td colspan="3">SEMINAR</td>
                <td class="special">SPORTS</td>
            </tr>
        </table>
    </div>
  )
}

export default Schedule
