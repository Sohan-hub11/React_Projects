const CurrentTime = () => {
    return (
        <p>
            This is the Current Time: {time.tolocaleDateString()} - {time.tolocaleTimeString()};
        </p>
    );
}

export default CurrentTime;