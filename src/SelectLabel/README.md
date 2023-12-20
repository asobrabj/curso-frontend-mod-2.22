## Propriedades do Componente SelectLabel

O componente `SelectLabel` aceita as seguintes propriedades:

### Propriedades Gerais

- **listOptions**
  - *Tipo:* Array de strings
  - *Descrição:* Lista de opções disponíveis no menu suspenso.

### Propriedades de Estilo

- **fs**
  - *Tipo:* "xsmall" | "small" | "medium" | "larger" | string
  - *Descrição:* Define o tamanho da fonte do componente.

- **fStyle**
  - *Tipo:* "normal" | "italic"
  - *Descrição:* Define o estilo da fonte do componente.

- **fw**
  - *Tipo:* "medium" | "larger"
  - *Descrição:* Define a espessura da fonte do componente.

- **fFamily**
  - *Tipo:* string
  - *Descrição:* Define a família da fonte do componente.

### Propriedades de Alinhamento e Transformação de Texto

- **tAlign**
  - *Tipo:* "start" | "end" | "justify" | "center"
  - *Descrição:* Define o alinhamento do texto do componente.

- **tTransform**
  - *Tipo:* "none" | "capitalize" | "uppercase" | "lowercase"
  - *Descrição:* Define a transformação do texto do componente.

### Propriedades de Cor e Fundo

- **color**
  - *Tipo:* string
  - *Descrição:* Define a cor do texto do componente.

- **bgColor**
  - *Tipo:* string
  - *Descrição:* Define a cor de fundo do componente.

### Propriedades de Espaçamento

- **pd, pdTop, pdRight, pdBottom, pdLeft**
  - *Tipo:* "xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"
  - *Descrição:* Define o preenchimento (padding) do componente.

- **mg, mgTop, mgRight, mgBottom, mgLeft**
  - *Tipo:* "xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"
  - *Descrição:* Define a margem do componente.

- **width, height**
  - *Tipo:* string
  - *Descrição:* Define a largura e a altura do componente.

- **className**
  - *Tipo:* string
  - *Descrição:* Define a classe do componente.

- **placeholder**
  - *Tipo:* string
  - *Descrição:* Define o texto de placeholder do componente.

- **bdColor**
  - *Tipo:* string
  - *Descrição:* Define a cor da borda do componente.

### Estados Internos

- **visible**
  - *Tipo:* boolean
  - *Descrição:* Controla a visibilidade do menu suspenso.

- **selectedValue**
  - *Tipo:* string
  - *Descrição:* Armazena o valor selecionado no menu suspenso.

### Funções de Controle

- **changeVisible**
  - *Descrição:* Altera a visibilidade do menu suspenso.

- **handleOptionClick(value: string)**
  - *Descrição:* Manipula o clique em uma opção no menu suspenso.

### Elementos Filhos

- **Label**
  - *Tipo:* Componente de rótulo estilizado.
  - *Descrição:* Rótulo associado ao componente `SelectLabel`.

```jsx
<SelectLabel
  listOptions={['Option 1', 'Option 2']}
  className="primary"
  required={true}
  label="Select an Option"
  id="selectId"
/>
