import { CheckmarkOutline, CloseOutline } from "react-ionicons";
import { ColumnData } from "../types";

export const data: ColumnData = {
    Name: {
        values: [
            "Ana Silva",
            "Bruno Oliveira",
            "Carlos Pereira",
            "Diana Souza",
            "Eduardo Martins",
            "Fernanda Costa",
            "Gabriel Almeida",
            "Helena Rocha",
            "Igor Ramos",
            "Juliana Mendes",
            "Karen Azevedo",
            "Lucas Santana",
            "Mariana Ferreira",
            "Nicolas Duarte",
            "Olivia Barbosa"
          ],
          classNames: (value: string | boolean | number) =>
             value === "Jane Smith" || value === "Helena Rocha"
                ? "text-green-400 font-medium"
                : "text-white",         
    },
    Age: {
        values: [22, 34, 28, 19, 45, 31, 27, 23, 38, 41, 29, 25, 33, 40, 36],
    },
    Email: {
        values: [
            "ana.silva@example.com",
            "bruno.oliveira@example.com",
            "carlos.pereira@example.com",
            "diana.souza@example.com",
            "eduardo.martins@example.com",
            "fernanda.costa@example.com",
            "gabriel.almeida@example.com",
            "helena.rocha@example.com",
            "igor.ramos@example.com",
            "juliana.mendes@example.com",
            "karen.azevedo@example.com",
            "lucas.santana@example.com",
            "mariana.ferreira@example.com",
            "nicolas.duarte@example.com",
            "olivia.barbosa@example.com"
          ],
          classNames:(value: string | boolean | number) =>
             typeof value === "string" && value.includes("ana")
                ? "text-green-400 font-medium"
                : "text-white",    
    },
    Role: {
        values: [
            "Analista de Marketing",
            "Desenvolvedor Front-End",
            "Desenvolvedor Back-End",
            "Gerente de Projetos",
            "Designer UX/UI",
            "Coordenador de Vendas",
            "Especialista em Dados",
            "Consultor de Negócios",
            "Analista de Recursos Humanos",
            "Técnico de Suporte",
            "Assistente Administrativo",
            "Gerente Financeiro",
            "Diretor de Operações",
            "Engenheiro de Software",
            "Analista de Qualidade"
          ],          
    },
    Salary: {
        values: [3500, 4500, 5000, 7000, 4000, 3200, 8000, 6000, 3000, 2500, 2800, 9000, 15000, 7500, 4000],
        renderValue: (value: string | number | boolean) => {
            if (typeof value === "number") {
                return (
                    <div className={`font-medium ${value > 5000 ? "text-green-400" : "text-red-400"}`}>
                        ${value.toLocaleString()}
                    </div>
                );
            }
        },
    },
    Active: {
        values: [true, false, true, true, false, false, true, false, true, true, false, false, true, false, true],
        renderBoolean: (value: boolean) =>
            value ? (
                <CheckmarkOutline
                    cssClasses={"!text-green-400"}
                    width="30px"
                    height="30px"
                />
            ) : (
                <CloseOutline
                    cssClasses={"!text-red-400"}
                    width="30px"
                    height="30px"
                />
            )

    }
};