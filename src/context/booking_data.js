import React, { useState } from "react"

const BookingDataContext = React.createContext()

function BookingDataProvider({children}){
    const [bookingData, setBookingData] = useState({
        destination: "",
        from: "today",
        to: "today",
        adults: 1,
        kids: 0
    })

    return <BookingDataContext.Provider value={{bookingData, setBookingData}}>{children}</BookingDataContext.Provider>
}

export { BookingDataContext, BookingDataProvider }
