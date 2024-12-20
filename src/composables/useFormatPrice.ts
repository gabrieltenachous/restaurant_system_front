// src/composables/useFormatPrice.ts
export const useFormatPrice = () => {
    /**
     * Formata um número para o formato de moeda brasileira (R$ valor,00).
     *
     * @param {number} value - O valor a ser formatado.
     * @returns {string} - O valor formatado como moeda.
     */
    const formatPrice = (value: number): string => {
      return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
    };
  
    return { formatPrice };
  };
  