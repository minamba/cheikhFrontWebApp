const registration = [
    { id: 1, LastName: 'Ali', FirstName: 'Kamil', PhoneNumber: '06 12 34 56 78', Email: 'kamil.ali@example.com', Date: '07/05/2025', IsContacted: 'Non', SendedToBot: 'Oui' },
    { id: 2, LastName: 'Fatima', FirstName: 'Zahra', PhoneNumber: '06 78 90 12 34', Email: 'fatima.z@example.com', Date: '06/05/2025', IsContacted: 'Non', SendedToBot: 'Oui' },
    { id: 3, LastName: 'Yassine', FirstName: 'Ben Ali', PhoneNumber: '06 23 45 67 89', Email: 'yassine.b@example.com', Date: '05/05/2025', IsContacted: 'Non', SendedToBot: 'Oui' },
];

const payment = [
    { id: 1, LastName: 'Ali', FirstName: 'Kamil', PhoneNumber: '06 12 34 56 78', Email: 'kamil.ali@example.com', Date: '07/05/2025', Amount: '75€', PaymentMode: 'CB' },
    { id: 2, LastName: 'Fatima', FirstName: 'Zahra', PhoneNumber: '06 78 90 12 34', Email: 'fatima.z@example.com', Date: '06/05/2025', Amount: '50€', PaymentMode: 'Paypal' },
    { id: 3, LastName: 'Yassine', FirstName: 'Ben Ali', PhoneNumber: '06 23 45 67 89', Email: 'yassine.b@example.com', Date: '05/05/2025', Amount: '90€', PaymentMode: 'Google Pay' },
];

const seminaire = [
    { id: 1, LastName: 'Ali', FirstName: 'Kamil', Email: 'kamil.ali@example.com', Date: '07/05/2025', MailSent: 'Non' },
    { id: 2, LastName: 'Fatima', FirstName: 'Zahra', Email: 'fatima.z@example.com', Date: '06/05/2025', MailSent: 'Non' },
    { id: 3, LastName: 'Yassine', FirstName: 'Ben Ali', Email: 'yassine.b@example.com', Date: '05/05/2025', MailSent: 'Non' },
];

export { registration, payment, seminaire };
