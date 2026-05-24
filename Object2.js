// don't touch below this line
export function processMail(mail) {
    return `FROM: ${mail.from}
TO: ${mail.to.join(", ")}
CC: ${mail.cc.join(",")}
SUBJECT: ${mail.urgent ? "[URGENT] " : ""}${mail.subject}
BODY: ${mail.body}`;
}
console.log(processMail({
    from: "sender@example.com",
    to: ["recipient@example.com", "another@example.com"],
    subject: "Hello, World!",
    body: "This is a test email.",
    urgent: true,
    cc: ["cc@example.com", "bcc@example.com"],
}));
