import { FormEvent, useState } from 'react';
import Button from './Button';
import Form from './Form';
import InputLabel from './InputLabel';
import SelectLabel from './SelectLabel';
import TextAreaLabel from './TextAreaLabel';
import * as S from './styles';

export default function App() {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    endereco: '',
    telefone: '',
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { title, value } = e.target;

    setFormData({
      ...formData,
      [title]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleButton = () => {
    const { endereco, nome, sobrenome, telefone } = formData;
    if (endereco && nome && sobrenome && telefone)
      setMessage('Formulario enviado com sucesso');
  };

  return (
    <S.Container className="teste">
      {message && <S.Message role="message">{message}</S.Message>}
      <Form
        title="Formulario"
        className="grid-block"
        onSubmit={(e) => handleSubmit(e)}
      >
        <InputLabel
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e)
          }
          value={formData.nome}
          label="Nome"
          id="nome"
          required
          className="input"
          width="270"
        />
        <InputLabel
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e)
          }
          value={formData.sobrenome}
          label="Sobrenome"
          id="sobrenome"
          required
          className="input"
          width="270"
        />
        <InputLabel
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e)
          }
          value={formData.endereco}
          label="Endereço"
          id="endereco"
          required
          className="input"
          width="270"
        />
        <InputLabel
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e)
          }
          value={formData.telefone}
          label="Telefone"
          id="telefone"
          required
          className="input"
          width="270"
        />
        <SelectLabel
          className="select"
          id="options"
          required={false}
          label="Options"
          listOptions={['teste 1', 'teste 2', 'teste 3', 'teste 4', 'teste 5']}
          width="580"
        />
        <TextAreaLabel
          id="menssagem"
          label="Menssagem"
          required={false}
          className="text-area"
          width="580"
        />
        <Button className="info-ligth" pd="small" onClick={handleButton}>
          Enviar
        </Button>
      </Form>
    </S.Container>
  );
}
