const actions = {
    case1: () => {
      // Ação para o caso 1
      console.log('Executando ação para o caso 1');
    },
    case2: () => {
      // Ação para o caso 2
      console.log('Executando ação para o caso 2');
    },
    // Adicione mais casos conforme necessário
  };
  
  // Exemplo de uso:
  const input = 'case1'; // Aqui você teria sua entrada dinâmica
  if (actions[input]) {
    actions[input]();
  } else {
    console.log('Nenhuma ação encontrada para o caso:', input);
  }
  