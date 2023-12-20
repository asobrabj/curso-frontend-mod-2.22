## Propriedades do Componente Heading

O componente `Heading` aceita as seguintes propriedades:

### Propriedades Gerais

- **children**
  - *Tipo:* React.ReactNode
  - *Descrição:* O conteúdo do elemento de título.

- **as**
  - *Tipo:* "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  - *Descrição:* Define o tipo de elemento de título a ser renderizado.

### Propriedades de Estilo de Texto

- **fs**
  - *Tipo:* "xsmall" | "small" | "medium" | "larger" | string
  - *Descrição:* Define o tamanho da fonte do elemento de título.

- **fStyle**
  - *Tipo:* "normal" | "italic"
  - *Descrição:* Define o estilo da fonte do elemento de título.

- **fw**
  - *Tipo:* "medium" | "larger"
  - *Descrição:* Define a espessura da fonte do elemento de título.

- **fFamily**
  - *Tipo:* string
  - *Descrição:* Define a família da fonte do elemento de título.

### Propriedades de Alinhamento e Transformação de Texto

- **tAlign**
  - *Tipo:* "start" | "end" | "justify" | "center"
  - *Descrição:* Define o alinhamento do texto no elemento de título.

- **tTransform**
  - *Tipo:* "none" | "capitalize" | "uppercase" | "lowercase"
  - *Descrição:* Define a transformação do texto no elemento de título.

### Propriedades de Cor e Fundo

- **color**
  - *Tipo:* string
  - *Descrição:* Define a cor do texto no elemento de título.

- **bgColor**
  - *Tipo:* string
  - *Descrição:* Define a cor de fundo do elemento de título.

### Propriedades de Espaçamento

- **pd, pdTop, pdRight, pdBottom, pdLeft**
  - *Tipo:* "xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"
  - *Descrição:* Define o preenchimento (padding) do elemento de título.

- **mg, mgTop, mgRight, mgBottom, mgLeft**
  - *Tipo:* "xsmall" | "small" | "medium" | "larger" | "xlarger" | "none"
  - *Descrição:* Define a margem do elemento de título.

### Classes Predefinidas para Estilos Específicos

- **&.success**
  - *Descrição:* Aplica um estilo de sucesso ao elemento de título, com a cor verde.

- **&.info**
  - *Descrição:* Aplica um estilo de informação ao elemento de título, com a cor azul.

- **&.error**
  - *Descrição:* Aplica um estilo de erro ao elemento de título, com a cor vermelha.

- **&.alert**
  - *Descrição:* Aplica um estilo de alerta ao elemento de título, com a cor amarela.
