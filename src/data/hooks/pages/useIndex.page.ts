import { useMemo, useState } from 'react';
import { UserShortInterface } from 'data/@types/UserInterface';
import { ValidationService } from 'data/services/ValidationService';

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


  return {
    cep,
    setCep,
    validCep,
  }
}