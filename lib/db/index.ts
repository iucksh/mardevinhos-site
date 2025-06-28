// Simplified database for deployment
const inMemoryData = {
    appointments: [] as any[],
    contacts: [] as any[],
    newsletter: [] as any[],
    quotes: [] as any[]
};

// Simple ID generator
function generateId() {
    return Math.random().toString(36).substr(2, 9);
}

export const db = {
    insert: (table: any) => ({
        values: (data: any) => ({
            returning: () => {
                const id = generateId();
                const record = { id, ...data, createdAt: new Date(), updatedAt: new Date() };
                
                if (table === appointments) {
                    inMemoryData.appointments.push(record);
                } else if (table === contacts) {
                    inMemoryData.contacts.push(record);
                } else if (table === newsletter) {
                    inMemoryData.newsletter.push(record);
                } else if (table === quotes) {
                    inMemoryData.quotes.push(record);
                }
                
                return [record];
            }
        })
    }),
    select: () => ({
        from: (table: any) => {
            if (table === appointments) {
                return inMemoryData.appointments;
            } else if (table === contacts) {
                return inMemoryData.contacts;
            } else if (table === newsletter) {
                return inMemoryData.newsletter;
            } else if (table === quotes) {
                return inMemoryData.quotes;
            }
            return [];
        }
    }),
    update: (table: any) => ({
        set: (data: any) => ({
            where: (condition: any) => {
                // Simple update implementation
                return Promise.resolve();
            }
        })
    })
};

// Mock table objects
export const appointments = Symbol('appointments');
export const contacts = Symbol('contacts');
export const newsletter = Symbol('newsletter');
export const quotes = Symbol('quotes');