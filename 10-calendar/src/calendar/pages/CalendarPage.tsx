import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { addHours } from 'date-fns/esm';

import { Navbar } from "../components/Navbar"
import { getMessagesEs, localizer } from '../../helpers';
import { CalendarEvent } from '../components/CalendarEvent';

const events = [{
  title: 'Cumpleaños del jefe',
  notes: 'Hay que comprar el pastel',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Esteban'
  }
}]

export const CalendarPage = () => {

  const eventStyleGetter:any = (event: any, start: any, end: any, isSelected: any) => {

    const style = {
      backgroundColor:'#347CF7', 
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }

  const onDoubleClick = ( event:any ) => {

    console.log({doubleClick: event});

  }
  const onSelect = ( event:any ) => {

    console.log({click: event});

  }
  const onViewChanged = ( event:any ) => {

    console.log({viewChanged: event});

  }

  
  return (
    <>
      <Navbar />

      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
        messages={getMessagesEs()}
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChanged }
      />



    </>
  )
}
