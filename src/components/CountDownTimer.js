import { useEffect, useState } from "react";

const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return (
        <div>
            {Object.keys(timeLeft).length ? (
                <div>
                    <span>{timeLeft.days}d </span>
                    <span>{timeLeft.hours}h </span>
                    <span>{timeLeft.minutes}m </span>
                    <span>{timeLeft.seconds}s</span>
                </div>
            ) : (
                <span>Time's up!</span>
            )}
        </div>
    );
};

export default function CdTimer() {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontWeight: "bold", color: "#d71616ff" }}>
            <h1>Countdown</h1>
            <CountdownTimer targetDate="2026-05-26T23:59:59" />
        </div>
    );
}