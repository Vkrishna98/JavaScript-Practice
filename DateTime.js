// Create a new Date object for the current date and time
const now = new Date();

console.log("Current Date and Time:", now);
console.log("-------------------------");
console.log("Day of the Month:", now.getDate());
console.log("Day of the Week (0-6):", now.getDay());
console.log("Full Year:", now.getFullYear());
console.log("Hours (0-23):", now.getHours());
console.log("Milliseconds (0-999):", now.getMilliseconds());
console.log("Minutes (0-59):", now.getMinutes());
console.log("Month (0-11):", now.getMonth());
console.log("Seconds (0-59):", now.getSeconds());
console.log("Time in milliseconds since Jan 1, 1970:", now.getTime());
console.log("Time Zone Offset (minutes from UTC):", now.getTimezoneOffset());

// UTC Methods
console.log("UTC Day of the Month:", now.getUTCDate());
console.log("UTC Full Year:", now.getUTCFullYear());
console.log("UTC Hours:", now.getUTCHours());
console.log("UTC Milliseconds:", now.getUTCMilliseconds());
console.log("UTC Minutes:", now.getUTCMinutes());
console.log("UTC Month:", now.getUTCMonth());
console.log("UTC Seconds:", now.getUTCSeconds());

// Mutator Methods
now.setDate(15);
console.log("Set Day of the Month to 15:", now);

now.setFullYear(2025);
console.log("Set Full Year to 2025:", now);

now.setHours(10);
console.log("Set Hours to 10:", now);

now.setMilliseconds(500);
console.log("Set Milliseconds to 500:", now);

now.setMinutes(45);
console.log("Set Minutes to 45:", now);

now.setMonth(5); // June (0-based)
console.log("Set Month to June:", now);

now.setSeconds(30);
console.log("Set Seconds to 30:", now);

now.setTime(1000000000000); // Set time to a specific timestamp
console.log("Set Time to specific timestamp:", now);

// Other Methods
console.log("Date String:", now.toDateString());
console.log("ISO String:", now.toISOString());
console.log("JSON String:", now.toJSON());
console.log("Locale Date String:", now.toLocaleDateString());
console.log("Locale String:", now.toLocaleString());
console.log("Locale Time String:", now.toLocaleTimeString());
console.log("String Representation:", now.toString());
console.log("Time String:", now.toTimeString());
console.log("UTC String:", now.toUTCString());
console.log("Primitive Value:", now.valueOf());
