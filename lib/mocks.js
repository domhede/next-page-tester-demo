module.exports = {
  User: () => ({
    ipAddress: () => '172.220.20.32',
    email: 'artvandalay@jmail.com',
    firstName: 'Art',
    lastName: 'Vandalay',
    fullName: 'Art Vandalay',
    phoneNumber: '0414555555',
    organisation: () => ({
      name: 'Acme Inc',
      address: '400 High Street, Kew',
      email: 'hepennypacker@acmemail.com',
    }),
  }),
};
