/*
NASA's countdown to launch includes checkpoints where NASA engineers complete certain technical tasks. During the final minute, NASA has 6 tasks to complete:

Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)
NOTE: "T-50 seconds" read as "T-minus 50 seconds".

Directions:
Write a while loop that counts down from 60 seconds and:

If there's a task being completed, it prints out the task
If there is no task being completed, it prints out the time as T-x seconds
Use the task and time descriptions described above.
*/

let countdownTimer = 60;

while (countdownTimer >= 0) {
    //decrement the counter
    countdownTimer--;

    if (countdownTimer === 50) {
        console.log("Orbiter transfers from ground to internal power (T-50 seconds)");
    } else if (countdownTimer === 31) {
        console.log("Ground launch sequencer is go for auto sequence start (T-31 seconds)");
    } else if (countdownTimer === 16) {
        console.log("Ground launch sequencer is go for auto sequence start (T-31 seconds)");
    } else if (countdownTimer === 10) {
        console.log("Activate main engine hydrogen burnoff system (T-10 seconds)");
    } else if (countdownTimer === 6) {
        console.log("Main engine start (T-6 seconds)");
    } else if (countdownTimer === 0) {
        console.log("Solid rocket booster ignition and liftoff! (T-0 seconds)");
    }

    if (countdownTimer === 2) {
        console.log("Hello");
    }
}