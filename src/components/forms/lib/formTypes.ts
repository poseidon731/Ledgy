export type RequesterType = 'company' | 'investor';

export type LeadFormType = 'demoRequest' | 'newsletter';

export type FormValues = {
  requesterType: RequesterType;
  email: string;
  size: string;
  partner?: string;
};

export type ParsedFormValues = {
  isCompany: boolean;
  email: string;
  size: number;
  value: number;
  lead_form_source: LeadFormType;
  partner?: string;
};
