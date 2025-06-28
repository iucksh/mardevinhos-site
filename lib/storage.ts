import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');

// Garantir que o diretório de dados existe
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

export interface Appointment {
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
    createdAt: string;
    updatedAt: string;
}

export interface Contact {
    id: string;
    name: string;
    email: string;
    phone?: string;
    company?: string;
    type: string;
    message: string;
    status: 'NEW' | 'IN_PROGRESS' | 'RESOLVED';
    createdAt: string;
    updatedAt: string;
}

export interface Newsletter {
    id: string;
    email: string;
    name?: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface Quote {
    id: string;
    name: string;
    email: string;
    phone?: string;
    company: string;
    type: string;
    description: string;
    budget?: string;
    status: 'PENDING' | 'SENT' | 'ACCEPTED' | 'REJECTED';
    createdAt: string;
    updatedAt: string;
}

function generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function readJsonFile<T>(filename: string): T[] {
    const filePath = path.join(DATA_DIR, filename);
    try {
        if (fs.existsSync(filePath)) {
            const data = fs.readFileSync(filePath, 'utf8');
            return JSON.parse(data);
        }
        return [];
    } catch (error) {
        console.error(`Erro ao ler arquivo ${filename}:`, error);
        return [];
    }
}

function writeJsonFile<T>(filename: string, data: T[]): void {
    const filePath = path.join(DATA_DIR, filename);
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error(`Erro ao escrever arquivo ${filename}:`, error);
    }
}

// Appointments
export function createAppointment(data: Omit<Appointment, 'id' | 'createdAt' | 'updatedAt'>): Appointment {
    const appointments = readJsonFile<Appointment>('appointments.json');
    const appointment: Appointment = {
        ...data,
        id: generateId(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
    appointments.push(appointment);
    writeJsonFile('appointments.json', appointments);
    return appointment;
}

export function getAppointments(): Appointment[] {
    return readJsonFile<Appointment>('appointments.json');
}

// Contacts
export function createContact(data: Omit<Contact, 'id' | 'createdAt' | 'updatedAt'>): Contact {
    const contacts = readJsonFile<Contact>('contacts.json');
    const contact: Contact = {
        ...data,
        id: generateId(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
    contacts.push(contact);
    writeJsonFile('contacts.json', contacts);
    return contact;
}

export function getContacts(): Contact[] {
    return readJsonFile<Contact>('contacts.json');
}

// Newsletter
export function createNewsletterSubscription(data: Omit<Newsletter, 'id' | 'createdAt' | 'updatedAt'>): Newsletter {
    const newsletters = readJsonFile<Newsletter>('newsletter.json');
    
    // Verificar se email já existe
    const existing = newsletters.find(n => n.email === data.email);
    if (existing) {
        if (existing.active) {
            throw new Error('Email já cadastrado na newsletter');
        } else {
            // Reativar inscrição
            existing.active = true;
            existing.updatedAt = new Date().toISOString();
            writeJsonFile('newsletter.json', newsletters);
            return existing;
        }
    }
    
    const newsletter: Newsletter = {
        ...data,
        id: generateId(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
    newsletters.push(newsletter);
    writeJsonFile('newsletter.json', newsletters);
    return newsletter;
}

export function getNewsletterSubscriptions(): Newsletter[] {
    return readJsonFile<Newsletter>('newsletter.json');
}

// Quotes
export function createQuote(data: Omit<Quote, 'id' | 'createdAt' | 'updatedAt'>): Quote {
    const quotes = readJsonFile<Quote>('quotes.json');
    const quote: Quote = {
        ...data,
        id: generateId(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    };
    quotes.push(quote);
    writeJsonFile('quotes.json', quotes);
    return quote;
}

export function getQuotes(): Quote[] {
    return readJsonFile<Quote>('quotes.json');
}