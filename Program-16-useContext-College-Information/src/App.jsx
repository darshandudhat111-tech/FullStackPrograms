import { createContext } from "react";
import College from "./components/College";

export const CollegeContext = createContext();

function App() {
    const collegeInfo = {
        username: "Darshan",
        email: "darshan@gmail.com",
        collegeName: "J G University",
        department: "Computer Applications",
        city: "Ahmedabad",
        state: "Gujarat"
    };

    return (
        <>
            <CollegeContext.Provider value={collegeInfo}>
                <College />
            </CollegeContext.Provider>
        </>
    );
}

export default App;