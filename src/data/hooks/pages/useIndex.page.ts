import { useMemo, useState } from 'react';
import { UserShortInterface } from 'data/@types/UserInterface';
import { ValidationService } from 'data/services/ValidationService';
import { ApiService } from 'data/services/ApiService';

export default function useIndex() {
  const [cep, setCep] = useState('');
  const validCep = useMemo(() => {
    return ValidationService.cep(cep);
  }, [cep]);
  const [error, setError] = useState('');
  const [searchDone, setSearchDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dayLaborers, setDayLaborers] = useState([] as UserShortInterface[]);
  const [remainingDaily, setRemainingDaily] = useState(0);

  async function seekProfessionals(cep: string) {
    setSearchDone(false);
    setLoading(true);
    setError('');

    try {
      const { data } = await ApiService.get<{
        diaristas: UserShortInterface[],
        quantidade_diaristas: number
      }>(`/api/diaristas-cidade?cep=${cep.replace(/\D/g, '')}`);

      setDayLaborers(data.diaristas);
      setRemainingDaily(data.quantidade_diaristas);
      setSearchDone(true);
      setLoading(false);
    } catch (error) {
      setError('CEP nao encontrado');
      setLoading(false);
    }
    
  }


  return {
    cep,
    setCep,
    validCep,
    seekProfessionals,
    error,
    dayLaborers,
    searchDone,
    loading,
    remainingDaily,
  }
}