interface UserFeedback {
    rating: number;
    comment: string;
}

interface SupportSession {
    id: string;
    startedAt: number;
    endedAt: number;
    feedback: UserFeedback;
}

export function getSessionDuration(session: SupportSession): number {
    return session.endedAt - session.startedAt;
}

const session: SupportSession = {
    id: "101",
    startedAt: 100,
    endedAt: 1000,
    feedback: {
        rating: 5,
        comment: "Excellent Support"
    }
};

console.log(getSessionDuration(session));