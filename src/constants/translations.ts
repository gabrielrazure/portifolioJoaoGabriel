import type { Translations } from '../types';

export const translations: Record<'pt' | 'en', Translations> = {
    pt: {
          nav: {
                  home: 'Início',
                  about: 'Sobre',
                  experience: 'Automações',
                  contact: 'Contato',
                  whatsapp: 'WhatsApp',
          },
          hero: {
                  badge: 'Developer and Expert n8n, Python & AI',
                  title: 'Escalando negócios com ',
                  titleAccent: 'automação.',
                  subtitle:
                            'Desenvolvo fluxos inteligentes no n8n para eliminar processos manuais e conectar suas ferramentas favoritas.',
                  cta: 'Ver Soluções',
          },
          about: {
                  badge: 'Perfil Profissional',
                  description1:
                            'Desenvolvedor e Expert em n8n focado na criação de soluções inteligentes e automações de alto nível. Especialista em transformar processos complexos em fluxos eficientes utilizando Python e Inteligência Artificial.',
                  description2:
                            'Com experiência em empresas como Saúde Bliss, LG - Lugar de gente e Veridian, desenvolvo agentes autônomos, arquiteturas RAG e pipelines de dados escaláveis para otimização de processos e eficiência operacional.',
                  location: 'Localização',
                  email: 'E-mail',
                  country: 'Brasil',
          },
          experience: {
                  badge: 'Soluções',
                  title: 'Automações & Fluxos',
                  topics: [
                    {
                                title: 'AI Developer',
                                company: 'Saúde Bliss',
                                period: 'Set 2025 - Fev 2026',
                                description:
                                              'Automação da emissão de planos de saúde com agentes de IA, integrando coleta e validação de dados. Desenvolvimento de workflows no n8n para otimizar a jornada do cliente entre Produto, Operações e Dados.',
                                tags: ['IA', 'n8n', 'Data Analysis', 'Slack'],
                    },
                    {
                                title: 'Data Analyst',
                                company: 'Veridian',
                                period: 'Jan 2025 - Jul 2025',
                                description:
                                              'Desenvolvimento de Agentes de IA com foco em RAG, Supabase e ChatBots. Estruturação de arquiteturas de agentes autônomos e fluxos complexos para o setor jurídico e tomada de decisão.',
                                tags: ['RAG', 'Supabase', 'Python', 'LLMs', 'NLP'],
                    },
                          ],
          },
          cta: {
                  title: 'Tem um processo manual?',
                  subtitle: 'Eu transformo ele em um fluxo automático no n8n.',
                  button: 'Falar sobre projeto',
          },
    },
    en: {
          nav: {
                  home: 'Home',
                  about: 'About',
                  experience: 'Automations',
                  contact: 'Contact',
                  whatsapp: 'WhatsApp',
          },
          hero: {
                  badge: 'Developer and Expert n8n, Python & AI',
                  title: 'Scaling businesses with ',
                  titleAccent: 'automation.',
                  subtitle:
                            'I develop intelligent workflows in n8n to eliminate manual processes and connect your favorite tools.',
                  cta: 'See Solutions',
          },
          about: {
                  badge: 'Professional Profile',
                  description1:
                            'Developer and n8n Expert focused on creating intelligent solutions and high-level automations. Specialist in transforming complex processes into efficient flows using Python and Artificial Intelligence.',
                  description2:
                            'With experience in companies like Saúde Bliss, LG - Lugar de gente, and Veridian, I develop autonomous agents, RAG architectures, and scalable data pipelines for process optimization and operational efficiency.',
                  location: 'Location',
                  email: 'Email',
                  country: 'Brazil',
          },
          experience: {
                  badge: 'Solutions',
                  title: 'Automations & Flows',
                  topics: [
                    {
                                title: 'AI Developer',
                                company: 'Saúde Bliss',
                                period: 'Sep 2025 - Feb 2026',
                                description:
                                              'Automation of health insurance issuance with AI agents, integrating data collection and validation. Development of n8n workflows to optimize the customer journey across Product, Operations, and Data.',
                                tags: ['AI', 'n8n', 'Data Analysis', 'Slack'],
                    },
                    {
                                title: 'Data Analyst',
                                company: 'Veridian',
                                period: 'Jan 2025 - Jul 2025',
                                description:
                                              'Development of AI Agents focused on RAG, Supabase, and ChatBots. Structuring autonomous agent architectures and complex flows for the legal sector and decision-making.',
                                tags: ['RAG', 'Supabase', 'Python', 'LLMs', 'NLP'],
                    },
                          ],
          },
          cta: {
                  title: 'Have a manual process?',
                  subtitle: 'I transform it into an automatic flow in n8n.',
                  button: 'Talk about project',
          },
    },
};
