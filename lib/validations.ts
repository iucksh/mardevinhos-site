import { z } from 'zod';

export const appointmentSchema = z.object({
    nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
    email: z.string().email('Email inválido'),
    telefone: z.string().min(10, 'Telefone deve ter pelo menos 10 dígitos'),
    empresa: z.string().min(2, 'Nome da empresa é obrigatório'),
    tipo: z.string().min(1, 'Tipo de estabelecimento é obrigatório'),
    observacoes: z.string().optional(),
});

export const contactSchema = z.object({
    nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
    email: z.string().email('Email inválido'),
    telefone: z.string().optional(),
    empresa: z.string().optional(),
    tipo: z.string().min(1, 'Tipo de estabelecimento é obrigatório'),
    mensagem: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres'),
});

export const newsletterSchema = z.object({
    email: z.string().email('Email inválido'),
    name: z.string().optional(),
});

export const quoteSchema = z.object({
    nome: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
    email: z.string().email('Email inválido'),
    telefone: z.string().optional(),
    empresa: z.string().min(2, 'Nome da empresa é obrigatório'),
    tipo: z.string().min(1, 'Tipo de estabelecimento é obrigatório'),
    descricao: z.string().min(10, 'Descrição deve ter pelo menos 10 caracteres'),
    orcamento: z.string().optional(),
});