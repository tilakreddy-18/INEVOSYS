export function getSessionDuration(session) {
    return session.endedAt - session.startedAt;
}
const session = {
    id: "101",
    startedAt: 100,
    endedAt: 1000,
    feedback: {
        rating: 5,
        comment: "Excellent Support"
    }
};
console.log(getSessionDuration(session));
