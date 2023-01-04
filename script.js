// Password must be 6+ characters
// Password cannot include space

const password = prompt("Please enter a new password");
if (password.length >= 6) {
    if (password.indexOf(' ') === -1) {
        console.log('Valid Password');
    } else {
        console.log('Password cannot contain spaces!');
    }
} else {
    console.log('Password too short! Must be 6+ characters');
}

// Password cannot include space
// if (password.indexOf(' ') === -1) {
//     console.log('Good job! No space!');
// } else {
//     console.log('Password cannot contain spaces!');
// }

