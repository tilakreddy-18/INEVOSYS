interface Message {
    id: string;
    sender: string;
}

export interface TextMessage extends Message {
    text: string;
    carrier: string;
}

export interface EmailMessage extends Message {
    subject: string;
    body: string;
}

function getEmailDescription(email: EmailMessage): string {
    return `Email from ${email.sender}: ${email.subject}`;
}

function getTextMessageDescription(textMsg: TextMessage): string {
    return `Text from ${textMsg.sender}: ${textMsg.text}`;
}

const email: EmailMessage = {
    id: "E101",
    sender: "tilak@gmail.com",
    subject: "Meeting",
    body: "Project discussion at 10 AM"
};

const text: TextMessage = {
    id: "T101",
    sender: "9876543210",
    text: "Hello Tilak",
    carrier: "Jio"
};

console.log(getEmailDescription(email));

console.log(getTextMessageDescription(text));