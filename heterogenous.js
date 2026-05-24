export function interpolateComment(id, comment, comments) {
    // ?
    for (let i = 0; i < comments.length; i++) {
        if (comments[i] === id) {
            comments[i] = comment;
        }
    }
    return comments;
}
console.log(interpolateComment(2, "This is a comment", [
    "First comment",
    2,
    "Third comment",
]));
// Output: ["First comment", "This is a comment", "Third comment"]
