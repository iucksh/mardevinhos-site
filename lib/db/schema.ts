import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { createId } from '@paralleldrive/cuid2';

export const appointments = sqliteTable('appointments', {
    id: text('id').primaryKey().$defaultFn(() => createId()),
    name: text('name').notNull(),
    email: text('email').notNull(),
    phone: text('phone').notNull(),
    company: text('company').notNull(),
    type: text('type').notNull(),
    date: text('date').notNull(),
    time: text('time').notNull(),
    observations: text('observations'),
    status: text('status', { enum: ['PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED'] }).notNull().default('PENDING'),
    createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

export const contacts = sqliteTable('contacts', {
    id: text('id').primaryKey().$defaultFn(() => createId()),
    name: text('name').notNull(),
    email: text('email').notNull(),
    phone: text('phone'),
    company: text('company'),
    type: text('type').notNull(),
    message: text('message').notNull(),
    status: text('status', { enum: ['NEW', 'IN_PROGRESS', 'RESOLVED'] }).notNull().default('NEW'),
    createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

export const newsletter = sqliteTable('newsletter', {
    id: text('id').primaryKey().$defaultFn(() => createId()),
    email: text('email').notNull().unique(),
    name: text('name'),
    active: integer('active', { mode: 'boolean' }).notNull().default(true),
    createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

export const quotes = sqliteTable('quotes', {
    id: text('id').primaryKey().$defaultFn(() => createId()),
    name: text('name').notNull(),
    email: text('email').notNull(),
    phone: text('phone'),
    company: text('company').notNull(),
    type: text('type').notNull(),
    description: text('description').notNull(),
    budget: text('budget'),
    status: text('status', { enum: ['PENDING', 'SENT', 'ACCEPTED', 'REJECTED'] }).notNull().default('PENDING'),
    createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
    updatedAt: integer('updated_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

export type Appointment = typeof appointments.$inferSelect;
export type NewAppointment = typeof appointments.$inferInsert;

export type Contact = typeof contacts.$inferSelect;
export type NewContact = typeof contacts.$inferInsert;

export type Newsletter = typeof newsletter.$inferSelect;
export type NewNewsletter = typeof newsletter.$inferInsert;

export type Quote = typeof quotes.$inferSelect;
export type NewQuote = typeof quotes.$inferInsert;