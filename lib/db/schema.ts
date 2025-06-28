// Simplified schema for deployment
export type Appointment = {
    id: string;
    name: string;
    email: string;
    phone: string;
    company: string;
    type: string;
    date: string;
    time: string;
    observations?: string;
    status: 'PENDING' | 'CONFIRMED' | 'CANCELLED' | 'COMPLETED';
    createdAt: Date;
    updatedAt: Date;
};

export type Contact = {
    id: string;
    name: string;
    email: string;
    phone?: string;
    company?: string;
    type: string;
    message: string;
    status: 'NEW' | 'IN_PROGRESS' | 'RESOLVED';
    createdAt: Date;
    updatedAt: Date;
};

export type Newsletter = {
    id: string;
    email: string;
    name?: string;
    active: boolean;
    createdAt: Date;
    updatedAt: Date;
};

export type Quote = {
    id: string;
    name: string;
    email: string;
    phone?: string;
    company: string;
    type: string;
    description: string;
    budget?: string;
    status: 'PENDING' | 'SENT' | 'ACCEPTED' | 'REJECTED';
    createdAt: Date;
    updatedAt: Date;
};

export type NewAppointment = Omit<Appointment, 'id' | 'createdAt' | 'updatedAt'>;
export type NewContact = Omit<Contact, 'id' | 'createdAt' | 'updatedAt'>;
export type NewNewsletter = Omit<Newsletter, 'id' | 'createdAt' | 'updatedAt'>;
export type NewQuote = Omit<Quote, 'id' | 'createdAt' | 'updatedAt'>;