const TodaysDate = () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-EN", {
        weekday: "long",
        month: "long",
        day: "numeric"
    });

    return (
        <p>{formattedDate}</p>
    )
}

export default TodaysDate