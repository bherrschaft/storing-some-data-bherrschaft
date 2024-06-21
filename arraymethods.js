// An array of user objects, each with an id, first name, last name, number of logins, and whether they are a premium member.
const users = [
    {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false},
    {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true},
    {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false},
    {id: 6972, firstName: 'Jamilla', lastName: 'Johnson', logins: 5, isPremiumMember: true},
    {id: 3998, firstName: 'Jose', lastName: 'Rivera', logins: 16, isPremiumMember: false},
    {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true},
    {id: 6929, firstName: 'Igor', lastName: 'Silenski', logins: 23, isPremiumMember: false},
    {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
];

// Finding the user whose first name is 'Jose'.
const userJose = users.find(user => user.firstName === 'Jose');
// Logging the user object for 'Jose' to the console.
console.log(userJose);

// Filtering out users who are premium members.
const premiumMembers = users.filter(user => user.isPremiumMember);
// Logging the array of premium members to the console.
console.log(premiumMembers);

// Mapping the array of users to an array of their last names.
const userLastNames = users.map(user => user.lastName);
// Logging the array of last names to the console.
console.log(userLastNames);

// Filtering out users who have logged in more than 10 times and mapping them to a string with their first and last names.
const activeUsers = users
    .filter(user => user.logins > 10)
    .map(user => `${user.firstName} ${user.lastName}`);
// Logging the array of active users' names to the console.
console.log(activeUsers);

// Reducing the array of users to the total number of logins.
const totalLogins = users.reduce((sum, user) => sum + user.logins, 0);
// Logging the total number of logins to the console.
console.log(totalLogins);
