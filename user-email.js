let emailApp = {
    name: 'EmailApp',
    mailboxes: [
        {
            name: 'inbox',
            emails: [
                {
                    from: 'john@example.com',
                    to: 'you@example.com',
                    subject: 'Meeting Schedule',
                    body: 'Please confirm the meeting schedule.',
                    date: '2024-06-10',
                    status: 'unread'
                },
                {
                    from: 'jane@example.com',
                    to: 'you@example.com',
                    subject: 'Project Update',
                    body: 'The project is on track.',
                    date: '2024-06-09',
                    status: 'read'
                }
            ]
        },
        {
            name: 'junk',
            emails: []
        },
        {
            name: 'sent',
            emails: [
                {
                    from: 'you@example.com',
                    to: 'alice@example.com',
                    subject: 'Re: Meeting Schedule',
                    body: 'I have confirmed the meeting schedule.',
                    date: '2024-06-10',
                    status: 'sent'
                }
            ]
        },
        {
            name: 'drafts',
            emails: []
        },
        {
            name: 'trash',
            emails: []
        }
    ],
    contacts: [
        { name: 'John Doe', email: 'john@example.com' },
        { name: 'Jane Smith', email: 'jane@example.com' }
    ]
};
let mailboxNames = emailApp.mailboxes.map(mailbox => mailbox.name);
console.log(mailboxNames);
let allEmails = [];
emailApp.mailboxes.forEach(mailbox => {
    allEmails = allEmails.concat(mailbox.emails);
});
console.log(allEmails);
let secondEmailBody = emailApp.mailboxes.find(mailbox => mailbox.name === 'inbox').emails[1].body;
console.log(secondEmailBody);
let draftsMailbox = emailApp.mailboxes.find(mailbox => mailbox.name === 'drafts');
if (draftsMailbox.emails.length > 0) {
    let emailToSend = draftsMailbox.emails.shift();
    emailToSend.status = 'sent';
    emailApp.mailboxes.find(mailbox => mailbox.name === 'sent').emails.push(emailToSend);
}
let newDraftEmail = {
    from: 'you@example.com',
    to: 'bob@example.com',
    subject: 'Draft Email',
    body: 'This is a draft email.',
    date: '2024-06-11',
    status: 'draft'
};

emailApp.mailboxes.find(mailbox => mailbox.name === 'drafts').emails.push(newDraftEmail);
