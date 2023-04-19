import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {

    const createEmoji = () => {
        let interval = 5;
        let emoji = "☕️";
        let result = "";

        if (minutes >= 30) {
            interval = 10;
            emoji = "🍱";
        }
        for (let i = 0; i < minutes; i += interval) {
            result += emoji;
        }
        return result;
    }

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <small>
                •{createEmoji()} {minutes} min read
            </small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;