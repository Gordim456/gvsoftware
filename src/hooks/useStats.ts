
import { useState, useEffect } from 'react';

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  animated?: boolean;
}

export const useStats = () => {
  const [stats, setStats] = useState<StatItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula carregamento de dados
    const loadStats = async () => {
      try {
        // Dados das estatísticas
        const statsData: StatItem[] = [
          {
            id: '1',
            label: 'Projetos Concluídos',
            value: 150,
            suffix: '+',
            animated: true
          },
          {
            id: '2', 
            label: 'Clientes Satisfeitos',
            value: 98,
            suffix: '%',
            animated: true
          },
          {
            id: '3',
            label: 'Anos de Experiência',
            value: 8,
            suffix: '+',
            animated: true
          },
          {
            id: '4',
            label: 'Tecnologias Dominadas',
            value: 25,
            suffix: '+',
            animated: true
          }
        ];

        // Simula delay de carregamento
        await new Promise(resolve => setTimeout(resolve, 500));
        
        setStats(statsData);
        setIsLoading(false);
      } catch (error) {
        console.error('Erro ao carregar estatísticas:', error);
        setIsLoading(false);
      }
    };

    loadStats();
  }, []);

  return { stats, isLoading };
};
