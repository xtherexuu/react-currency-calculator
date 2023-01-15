import React, { useEffect, useState } from "react";
import "./style.css";

const CurrentDate = () => {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalID);
        };
    }, []);

    return (
        <div className="dateContainer">
            <p className="date">
                Dziś jest{" "}
                {date.toLocaleString("pl", {
                    weekday: "long",
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                })}
                r. {date.toLocaleTimeString()}
            </p>
        </div>
    );
};

export default CurrentDate;
