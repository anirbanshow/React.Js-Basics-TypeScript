import { ReactNode } from "react";

type PropsType = {
    heading: string;
    count?: number;
    func1: (param: string) => void;
    children: ReactNode
}

const Box = ({ heading, count = 201, func1, children }: PropsType) => {

    func1("Alpha");

    return (
        <div>
            <h1>{heading}</h1>
            {count && <p>{count}</p>}
            {children}
        </div>
    )
}

export default Box;