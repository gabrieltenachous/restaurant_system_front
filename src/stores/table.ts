// src/stores/table.ts
import { defineStore } from "pinia";
import { Table } from "@/interfaces/table";
import { tables as tablesData } from "@/data/tables";

export const useTableStore = defineStore("tableStore", {
    state: () => ({
        tables: tablesData as Table[],
    }),
    getters: {
        getTables(state): Table[] {
            return state.tables;
        },
        getTableById: (state) => (id: number): Table | undefined => {
            return state.tables.find(table => table.id === id);
        },
    },
    actions: {
        // Adicione ações relacionadas a mesas se necessário
    },
});
