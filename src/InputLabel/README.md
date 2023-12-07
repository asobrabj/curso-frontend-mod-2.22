## Propriedades do Componente InputLabel

O componente `InputLabel` aceita as seguintes propriedades:

### Propriedades Gerais

- **fs**
  - *Tipo:* "xsmall" | "small" | "medium" | "larger" | string
  - *Descrição:* Define o tamanho da fonte do label e do input.

- **fStyle**
  - *Tipo:* "normal" | "italic"
  - *Descrição:* Define o estilo da fonte do label e do input.

- **fw**
  - *Tipo:* "medium" | "larger"
  - *Descrição:* Define a espessura da fonte do label e do input.

- **fFamily**
  - *Tipo:* string
  - *Descrição:* Define a família da fonte do label e do input.

### Propriedades de Alinhamento e Transformação de Texto

- **tAlign**
  - *Tipo:* "start" | "end" | "justify" | "center"
  - *Descrição:* Define o alinhamento do texto do label.

- **tTransform**
  - *Tipo:* "none" | "capitalize" | "uppercase" | "lowercase"
  - *Descrição:* Define a transformação do texto do label.

### Propriedades de Cor e Fundo

- **color**
  - *Tipo:* string
  - *Descrição:* Define a cor do texto do label.

- **bgColor**
  - *Tipo:* string
  - *Descrição:* Define a cor de fundo do label.

### Propriedades de Espaçamento

- **pd, pdTop, pdRight, pdBottom, pdLeft**
  - *Tipo:* "xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"
  - *Descrição:* Define o preenchimento (padding) do label e do input.

- **mg, mgTop, mgRight, mgBottom, mgLeft**
  - *Tipo:* "xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"
  - *Descrição:* Define a margem do label e do input.

### Propriedades Adicionais

- **width, height**
  - *Tipo:* string
  - *Descrição:* Define a largura e altura do input.

- **placeholder**
  - *Tipo:* string
  - *Descrição:* Define o texto de espaço reservado do input.

- **bdColor**
  - *Tipo:* string
  - *Descrição:* Define a cor da borda do input.

- **type**
  - *Tipo:* "text" | "tel" | "password" | "email" | "time" | "date" | "radio" | "checkbox" | "file" | "hidden" | "number"
  - *Descrição:* Define o tipo do input.

- **required**
  - *Tipo:* boolean
  - *Descrição:* Indica se o input é obrigatório.

- **label**
  - *Tipo:* string
  - *Descrição:* Texto do label.

- **id**
  - *Tipo:* string
  - *Descrição:* ID único associado ao input.

### Classes Predefinidas para Estilos Específicos

- **&.primary**
  - *Descrição:* Aplica um estilo primário ao input e ao label, com borda arredondada.

- **&.secondary**
  - *Descrição:* Aplica um estilo secundário ao input e ao label, com borda arredondada e borda inferior sem arredondamento.

- **&.error**
  - *Descrição:* Aplica um estilo de erro ao input, com borda vermelha e cor de texto vermelha. O estilo da borda é intensificado quando o input está em foco.
