import { useMemo, useState } from "react";

function UseMemoDemo() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(10);

    const expensiveCalculation = useMemo(() => {
        let result = 0;

        for (let i = 0; i < number * 1000000; i++) {
            result += i;
        }

        return result;
    }, [number]);

    return (
        <div>
            <h1>useMemo Example</h1>

            <h2>Count: {count}</h2>

            <button onClick={() => setCount(count + 1)}>
                Increment Count
            </button>

            <h2>Number: {number}</h2>

            <button onClick={() => setNumber(number + 1)}>
                Change Number
            </button>

            <h3>Calculated Result: {expensiveCalculation}</h3>
        </div>
    );
}

export default UseMemoDemo;