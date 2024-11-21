import { useState } from "react";
import AnotherBox from "../components/AnotherBox";
import Box from "../components/Box";

function App() {

    const [val, setVal] = useState<string>("");

    return (
        <div>

            <AnotherBox label={"Search"} value={val} setter={setVal} />

            <hr />

            <Box
                children={<>Our Childs</>}
                heading={"Hello World"}
                count={22}
                func1={(a: string) => {
                    console.log(a)
                }}
            />

            <hr />

            <Box
                heading={"Hello World"}
                // count={22} This time default parameter value
                func1={(a: string) => {
                    console.log(a)
                }}
            >
                {<p>This is another child</p>}
            </Box>

        </div>
    )
}

export default App