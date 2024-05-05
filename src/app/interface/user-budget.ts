export interface UserBudget {
  correo: string;
    date: number;
    nombre: string;
    pageOption?: {
        pages: number;
        language: number;
    };
    service: {
        seo: boolean;
        ads: boolean;
        web: boolean;
    };
    telefono: number;
    total: number;
}
