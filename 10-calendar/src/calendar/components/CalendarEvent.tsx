

export const CalendarEvent = ({ event }: any) => {

    const { title, user }: any = event;


    return (
        <>
            <strong> {title}</strong>
            <span> - {user.name} </span>
        </>
    )
}
